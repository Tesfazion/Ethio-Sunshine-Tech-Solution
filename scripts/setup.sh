#!/bin/bash

# Setup script for new developers
echo "🚀 Setting up Ethio-Sunshine Tech Solution development environment..."

# Check Node.js version
echo "📦 Checking Node.js version..."
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js 18 or higher is required. Current version: $(node -v)"
    echo "Please install Node.js 18+ from https://nodejs.org/"
    exit 1
fi
echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Failed to install dependencies"
    exit 1
fi
echo "✅ Dependencies installed"

# Install pre-commit hook
echo "🔧 Installing pre-commit hook..."
if [ -f "scripts/pre-commit.sh" ]; then
    cp scripts/pre-commit.sh .git/hooks/pre-commit
    chmod +x .git/hooks/pre-commit
    echo "✅ Pre-commit hook installed"
else
    echo "⚠️  Pre-commit hook script not found, skipping..."
fi

# Test build
echo "🏗️  Testing build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Build successful"

# Print success message
echo ""
echo "🎉 Setup complete!"
echo ""
echo "Next steps:"
echo "  1. Run 'npm run dev' to start the development server"
echo "  2. Open http://localhost:5173 in your browser"
echo "  3. Read CONTRIBUTING.md for development guidelines"
echo ""
echo "Happy coding! 🚀"
