#!/bin/bash
echo "Resetting npm cache..."
npm cache clean --force
echo "Npm cache reset complete."

echo "Resetting Nx cache..."
npx nx reset
echo "Nx cache reset complete."
