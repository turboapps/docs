#!/usr/bin/env bash

set -e

az login > /dev/null

tmp="$(mktemp)"
trap "echo 'exiting'; rm -f $tmp; exit 1" SIGINT

tenant='-'
location='-'
subscription_id='-'
resource_group='-'

while (( $# > 0 ))
do
    case $1 in
        --location) shift;
            location=${1:--}
        ;;
        --tenant) shift;
            tenant=${1:-}
        ;;
        --resource-group) shift;
            resource_group=${1:--}
            ;;
        --subscription) shift;
            subscription_id=${1:--}
            ;;
        *) echo "ERROR: Invalid argument: $1"
           exit 2
           ;;
    esac
    shift
done

if [ "$subscription_id" = "-" ]; then
  az account list --output table --query "[].{Id:id,Name:name}" | tail -n +3 > "$tmp"

  echo "Subscriptions:"
  cat -n "$tmp"

  max_line_num="$(cat $tmp | wc -l)"

  echo -n "Pick the subscription (1-$max_line_num): "
  read line_num

  subscription_id="$(cat $tmp | tail -n +$line_num | head -n 1 | cut -d ' ' -f 1)"
  if [ -z "$subscription_id" ]; then
      echo "Wrong choice"
      exit 1
  fi
fi

az account set -s "$subscription_id"

if [ "$resource_group" = "-" ]; then
  echo
  echo -n "Please provide the resource group name for the Turbo deployment: "
  read resource_group
fi

if [ "$tenant" = "-" ]; then
  echo
  echo -n "Please provide the tenant name: "
  read tenant
fi

if [ "$location" = "-" ]; then
  echo
  echo -n "Please provide the Azure location: "
  read location
fi

echo
echo "====================== SELECTION ========================================"
echo "Subscription:   $subscription_id"
echo "Resource Group: $resource_group"
echo "Tenant:         $tenant"
echo "Location:       $location"
echo "========================================================================="
echo

echo "The script will now create:"
echo
echo "  - a new Service Principal account (Turbo-Provisioning)"
echo "  - a new web application account (Turbo.net-Web)"
echo "  - a new native application account (Turbo.net-Native)"
echo

echo -n "Press enter to continue or Ctrl-C to stop..."
read
echo

app_id="$(az ad sp list --output table --query '[].{AppId:appId,DisplayName:displayName}' | grep 'Turbo-Provisioning' | cut -d ' ' -f 1)" || true
if [ -z "$app_id" ]; then
    echo -n "Creating the Turbo-Provisioning Service Principal account... "
    sp_password="$(openssl rand -base64 32)"
    app_id="$(az ad sp create-for-rbac --name "Turbo-Provisioning" --password "$sp_password" --role Contributor \
        --scopes "/subscriptions/$subscription_id/resourceGroups/$resource_group" \
        --output table | tail -n +3 | cut -d ' ' -f 1)"
    echo "done"
    echo "Service Principal account id:       $app_id"
    echo "Service Principal account password: $sp_password"
else
    echo "The Service Principal account already created: $app_id"
fi
echo

app_id="$(az ad app list --output table --query "[].{Id:appId,DisplayName:displayName}" | grep "Turbo.net-Web" | cut -d ' ' -f 1)" || true
if [ -z "$app_id" ]; then
    echo -n "Creating the Turbo.net-Web application account... "
    sp_password="$(openssl rand -base64 32)"

    app_id="$(az ad sp create-for-rbac --name "Turbo.net-Web" --skip-assignment --output table | tail -n +3 | cut -d ' ' -f 1)"

# 06da0dbc-49e2-44d2-8312-53f166ab848a - Microsoft.Graph -> Read Directory Data
# 311a71cc-e848-46a1-bdf8-97ff7156d8e6 - Windows Azure Active Directory -> Sign in and read user profile
cat << EOF > $tmp
[{
  "resourceAccess": [
    {
      "id": "06da0dbc-49e2-44d2-8312-53f166ab848a",
      "type": "Scope"
    }
  ],
  "resourceAppId": "00000003-0000-0000-c000-000000000000"
},
{
  "resourceAccess": [
    {
      "id": "311a71cc-e848-46a1-bdf8-97ff7156d8e6",
      "type": "Scope"
    }
  ],
  "resourceAppId": "00000002-0000-0000-c000-000000000000"
}]
EOF

    az ad app update --id "$app_id" --display-name "Turbo.net-Web" \
      --password "$sp_password" \
      --homepage "https://$tenant.start.turbo.net" \
      --identifier-uris "https://$tenant.start.turbo.net" \
      --reply-urls "https://$tenant.start.turbo.net/auth/openid/return" "https://$location.$tenant.start.turbo.net/logs/login/generic_oauth" \
      --required-resource-accesses "@$tmp"

    echo "done"
    echo "Turbo.net-Web account id:       $app_id"
    echo "Turbo.net-Web account password: $sp_password"
else
    echo "The Turbo.net-Web application account already created: $app_id"
fi
echo

web_app_id=$app_id
app_id="$(az ad app list --output table --query "[].{Id:appId,DisplayName:displayName}" | grep "Turbo.net-Native" | cut -d ' ' -f 1)" || true
if [ -z "$app_id" ]; then
    echo -n "Creating the Turbo.net-Native application account... "
    sp_password="$(openssl rand -base64 32)"

    # get the webapp permissionid
    perm_id="$(az ad app show --id $web_app_id --output json | grep "\"id\":" | head -n1)"
    # trim the leading whitespaces
    perm_id="${perm_id##* \"}"
    # trim the ending whitespaces
    perm_id="${perm_id%%\"*}"

# 06da0dbc-49e2-44d2-8312-53f166ab848a - Microsoft.Graph -> Read Directory Data
# 311a71cc-e848-46a1-bdf8-97ff7156d8e6 - Windows Azure Active Directory -> Sign in and read user profile
cat << EOF > $tmp
[{
  "resourceAccess": [
    {
      "id": "311a71cc-e848-46a1-bdf8-97ff7156d8e6",
      "type": "Scope"
    }
  ],
  "resourceAppId": "00000002-0000-0000-c000-000000000000"
},
{
  "resourceAccess": [
    {
      "id": "06da0dbc-49e2-44d2-8312-53f166ab848a",
      "type": "Scope"
    }
  ],
  "resourceAppId": "00000003-0000-0000-c000-000000000000"
},
{
  "resourceAccess": [
    {
      "id": "$perm_id",
      "type": "Scope"
    }
  ],
  "resourceAppId": "$web_app_id"
}]
EOF

    app_id="$(az ad app create --display-name "Turbo.net-Native" --password "$sp_password" \
      --native-app \
      --reply-urls "https://$tenant.start.turbo.net/auth/openid/return" \
      --available-to-other-tenants false \
      --oauth2-allow-implicit-flow false \
      --required-resource-accesses "@$tmp" --output table | tail -n +3 | cut -d ' ' -f 1)"
    
    echo "done"
    echo "Turbo.net-Native account id:       $app_id"
    echo "Turbo.net-Native account password: $sp_password"
else
    echo "The Turbo.net-Native application account already created: $app_id"
fi

rm "$tmp"
