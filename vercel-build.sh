#!/bin/bash
# This is a custom build script for Vercel

# Show debugging info
echo "Current directory: $(pwd)"
echo "Files in public directory:"
ls -la public/

# Run the build with CI=false directly
npm run build:vercel

# Verify build output
echo "Files in build directory after build:"
ls -la build/
