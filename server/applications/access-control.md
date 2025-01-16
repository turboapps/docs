## Access Control

Turbo Server allows workspace administrators to control access to workspace applications according to a configurable set of access rules.

Access rules may be configured per workspace application on the workspace administration site. For more details on the workspace application administration, see the [Workspace Applications](https://hub.turbo.net/docs/server/administration/workspaces#workspace-applications).

### IP Access Rules

Workspace administrators may configure IP access rules to restrict workspace application access by user IP address. Users that access the Portal dashboard from a blacklisted IP will not be able to view the workspace application.

IP access rules can be organized using the following rule sets:

- **Disallow all except**: Only users accessing the workspace from an IP address included in the access rules can view the workspace application. Users accessing the workspace from an IP address that is not included in the access rules will not be able to view the workspace application.
- **Allow all except**: Users accessing the workspace from an IP address included in the access rules will not be able to view the workspace application. Users accessing the workspace from any other IP address can view the workspace application.
- **Custom (apply rules in order)**: Access rules are applied in the order that they are configured. Rules may be reordered at any time.

IP access rules can be configured by **IP Address** and **Country**.

#### IP Address

IP address rules can be configured as an exact IP address or address range in CIDR notation.

Exact IP addresses can be specified in either IPv4 (ex. `192.168.99.0`) or IPv6 (ex. `2001:1234::`). The access rule will apply if the user's IP is an exact match.

Address ranges must be specified in Classless Inter-Domain Routing (CIDR) notation (ex. `192.168.99.0/24` or `2001:1234::/64`). This notation specifies an IPv4 or IPv6 address and a number of significant bits separated by a slash (https://turbo.net/undefined). All IPv4 addresses can be specified using `0.0.0.0/0`, and all IPv6 addresses can be specified using `::/0`. If the access rule and user IP are not using the same address family, the access controller will attempt to map the user IP to the same address family. The access rule will apply if the user's IP falls within the address range.

#### Country

Country rules can be configured using the corresponding 2-letter country code in ISO 3166-1 alpha-2 format (ex. `US` or `AU`).

When a user accesses the workspace, the user's IP addresses is looked up using the IP address to country database. The access rule will apply if the county code lookup finds a matching country code. Administrators may supply their own lookup database following the instructions listed under **Import IP Addresses to Country Database**.

##### Import IP Addresses to Country Database

The default list of IP to country database is sourced from the [IP to Country Lite database](https://db-ip.com/db/download/ip-to-country-lite). The database is imported using a Turbo Server administator tool which takes a CSV file.

To import an up to date list of IP addresses to country, download the update database in CSV format. Open the **Turbo Server Administration Command Prompt** through the start menu, or manually using the command line `"C:\Program Files (x86)\Turbo Server\Server.exe"  /XShellEx=cmd.exe /k pushd "C:\Program Files (x86)\Turbo Server"`

Run the command `IpCountryImporter.exe import [<ip2countrylist.csv>]`. If the import fails and you wish to import the default list, run `IpCountryImporter.exe import`. For help with additional commands run `IpCountryImporter.exe help`.
