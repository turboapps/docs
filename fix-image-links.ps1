# Get all markdown files recursively
$mdFiles = Get-ChildItem "src" -Filter "*.md" -Recurse
Write-Host "Found $($mdFiles.Count) markdown files"

# List of known uppercase image names that were renamed
$uppercaseImages = @(
    "ADFS-identifiers.png",
    "ADFS-turbo-config.png",
    "ADFS-urls.png",
    "Allow-Database-Ports-On-Portal.png",
    "Allow-Turbo-Server-Ports-On-App-Server-Azure.png",
    "Application-Server-Ports.png",
    "Azure-Configure-DNS-name-highlighted.png",
    "azure-shared-disk.PNG",
    "BbUltra_Create.png",
    "Bb_PrivacyConfig.png",
    "Bb_ProviderDomain.png",
    "Bb_ToolOptionMenu.png",
    "Bb_ToolPlacementURL.png",
    "Bb_ToolsDropdownMenu.png",
    "Courses-MoodleGear.png",
    "Launch-Application-Using-Run-In-Cloud.png",
    "Moodle_AdminConfig.png",
    "Moodle_InstrConfig.png",
    "officeerror.PNG",
    "Okta-1-app-integration.png",
    "Okta_11_Turbo_Server_Authentication_Method_Fields.png",
    "Okta_12_Certificate_Thumbprint.png",
    "Okta_13_Certificate_Subject_Common_Name.png",
    "Okta_14_Certificate_Import_Wizard.png",
    "Okta_14_MMC_Console.png",
    "Okta_16_Certificate_Import_Wizard_File_Import.png",
    "Okta_17_Certificate_Import_Wizard_Certificate_Store.png",
    "Okta_18_Setup_Instructions.png",
    "Okta_19_Assignments.png",
    "Okta_2_Sign-in_Method.png",
    "Okta_3_SAML_Integration_General_Settings.png",
    "Okta_4_SAML_Integration_Configure_SAML.png",
    "Okta_5_Turbo_Server_Endpoints.png",
    "Okta_6_SAML_Integration_Configure_SAML_Next_Button.png",
    "Okta_7_SAML_Integration_Feedback.png",
    "Okta_8_SAML_Signing_Certificates_and_Setup_Instructions.png",
    "Okta_9_Turbo_Server_Authentication_Method.png",
    "Portal-Domain-Servers-Page-AppRole-Installing-highlighted.png",
    "Portal-Domain-Servers-Page-Online.png",
    "Portal-Domain-Serverse-AppServer-Settings-highlighted.png",
    "Portal-Server-Ports.png",
    "SAML-cert-install-2.PNG",
    "SAML-cert-install-3.PNG",
    "SAML-cert-install-4.PNG",
    "SAML-cert-install.PNG",
    "Turbo_Network_Diagram__Basic_.png",
    "Workspace_Isolation_Example.png",
    "wvd-apps.PNG"
)

Write-Host "Checking for $($uppercaseImages.Count) known uppercase image references"

foreach ($file in $mdFiles) {
    $content = Get-Content $file.FullName -Raw
    $modified = $false
    
    foreach ($image in $uppercaseImages) {
        # Create patterns that match the full image reference
        $mdPattern = "(/images/)$([regex]::Escape($image))"
        $htmlPattern = "(src=[`"']/images/)$([regex]::Escape($image))([`"'])"
        
        if ($content -cmatch $mdPattern -or $content -cmatch $htmlPattern) {
            Write-Host "`nFound matches in: $($file.FullName)"
            Write-Host "  Replacing: $image"
            Write-Host "  With: $($image.ToLower())"
            
            # Replace in markdown format
            $content = $content -creplace $mdPattern, "`$1$($image.ToLower())"
            # Replace in HTML format
            $content = $content -creplace $htmlPattern, "`$1$($image.ToLower())`$2"
            
            $modified = $true
        }
    }
    
    # Save the file if modifications were made
    if ($modified) {
        $content | Set-Content $file.FullName -NoNewline
        Write-Host "  Saved changes to: $($file.FullName)"
    }
}

Write-Host "`nImage reference updates complete!"
