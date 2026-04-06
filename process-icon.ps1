# PowerShell script to replace icon with transparent version
Write-Host "Ruqiyah Icon Processor" -ForegroundColor Green
Write-Host "========================" -ForegroundColor Green

$inputFile = "Designer (19).png"
$outputFile = "icon-transparent.png"
$finalFile = "icon.png"

Write-Host "Input file: $inputFile" -ForegroundColor Yellow
Write-Host "Output file: $outputFile" -ForegroundColor Yellow
Write-Host "Final file: $finalFile" -ForegroundColor Yellow
Write-Host ""

if (Test-Path $outputFile) {
    Write-Host "Found transparent icon file!" -ForegroundColor Green
    Write-Host "Replacing $finalFile with transparent version..." -ForegroundColor Green
    
    Copy-Item $outputFile $finalFile -Force
    Write-Host "✅ Success! $finalFile replaced with transparent icon" -ForegroundColor Green
    Write-Host "Your PWA will now use the transparent icon!" -ForegroundColor Green
    
    Write-Host ""
    Write-Host "Next steps:" -ForegroundColor Cyan
    Write-Host "1. git add ." -ForegroundColor Cyan
    Write-Host "2. git commit -m 'Use transparent icon'" -ForegroundColor Cyan
    Write-Host "3. git push" -ForegroundColor Cyan
} else {
    Write-Host "❌ $outputFile not found!" -ForegroundColor Red
    Write-Host "Please process $inputFile first:" -ForegroundColor Red
    Write-Host ""
    Write-Host "1. Go to: https://www.remove.bg/" -ForegroundColor Yellow
    Write-Host "2. Upload $inputFile" -ForegroundColor Yellow
    Write-Host "3. Use color: #46B214" -ForegroundColor Yellow
    Write-Host "4. Download as $outputFile" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Press any key to continue..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
