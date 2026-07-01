#!/bin/bash

# Pre-commit hook for code quality checks
# Install: cp scripts/pre-commit.sh .git/hooks/pre-commit && chmod +x .git/hooks/pre-commit

echo "🔍 Running pre-commit checks..."

# Check for TypeScript errors
echo "📝 Checking TypeScript..."
npm run build -- --mode development 2>&1 | grep -q "error TS"
if [ $? -eq 0 ]; then
    echo "❌ TypeScript errors found. Please fix them before committing."
    exit 1
fi

echo "✅ TypeScript check passed"

# Check for console.log statements (except in ErrorBoundary)
echo "🔍 Checking for console.log statements..."
CONSOLE_LOGS=$(git diff --cached --name-only | grep -E '\.(ts|tsx)$' | xargs grep -n "console\.log" | grep -v "ErrorBoundary")
if [ ! -z "$CONSOLE_LOGS" ]; then
    echo "⚠️  Warning: console.log statements found:"
    echo "$CONSOLE_LOGS"
    echo "Consider removing them before committing."
    # Uncomment the next line to make this a blocking error
    # exit 1
fi

# Check for debugger statements
echo "🔍 Checking for debugger statements..."
DEBUGGERS=$(git diff --cached --name-only | grep -E '\.(ts|tsx)$' | xargs grep -n "debugger")
if [ ! -z "$DEBUGGERS" ]; then
    echo "❌ debugger statements found:"
    echo "$DEBUGGERS"
    echo "Please remove them before committing."
    exit 1
fi

# Check for TODO comments in staged files
echo "🔍 Checking for TODO comments..."
TODOS=$(git diff --cached --name-only | grep -E '\.(ts|tsx)$' | xargs grep -n "TODO")
if [ ! -z "$TODOS" ]; then
    echo "📝 TODO comments found (informational only):"
    echo "$TODOS"
fi

echo "✅ All pre-commit checks passed!"
exit 0
