# build-windows.ps1 (สำหรับใช้บน Windows)
Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
Write-Host "Installing dependencies..." -ForegroundColor Cyan
npm ci
Write-Host "Building Windows .exe (unsigned)..." -ForegroundColor Cyan
$env:CSC_IDENTITY_AUTO_DISCOVERY = 'false'
npx electron-builder --win nsis
Write-Host "Done. See the 'dist' folder for the installer (.exe)." -ForegroundColor Green