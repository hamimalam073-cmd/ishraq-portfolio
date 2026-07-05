@echo off
rem Dev server launcher. Portable Node lives outside PATH on this machine.
set "PATH=C:\Users\IshraqAlam\.claude\tools\node;%PATH%"
node "%~dp0node_modules\astro\astro.js" dev --port 4321
