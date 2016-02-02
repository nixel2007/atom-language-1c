@echo off

if not exist %USERPROFILE%\.atom\dev\packages\language-1c-bsl apm develop language-1c-bsl

cd /d %USERPROFILE%\.atom\dev\packages\language-1c-bsl

git pull

cmd /c "apm install"

atom --dev
