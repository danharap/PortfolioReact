#!/bin/bash
# This is a custom build script for Vercel

# Force skip CI checks for warnings
export CI=false

# Run the build
npm run build
