# Get all PNG files in the images directory (case insensitive)
$imageFiles = Get-ChildItem "src/images" -Filter "*.png" -Recurse

foreach ($file in $imageFiles) {
    $newName = $file.Name.ToLower()
    if ($file.Name -cne $newName) {
        # Use a temporary name first to avoid case-sensitivity issues on case-sensitive systems
        $tempName = [System.Guid]::NewGuid().ToString() + ".png"
        $tempPath = Join-Path $file.Directory.FullName $tempName
        
        Write-Host "Renaming $($file.Name) to $newName"
        
        # Two-step rename to handle case sensitivity properly
        Rename-Item -Path $file.FullName -NewName $tempName
        Rename-Item -Path $tempPath -NewName $newName
    }
}

Write-Host "Image renaming complete!"
