#!/bin/bash

# MD Mechatronica - Development Server Launcher
# Usage: ./mehatronica.sh or just 'mehatronica' after setup

echo "🔧 MD Mechatronica - Starting Development Server..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Function to find available port
find_available_port() {
    local port=3000
    while lsof -Pi :$port -sTCP:LISTEN -t >/dev/null 2>&1; do
        ((port++))
    done
    echo $port
}

# Find available port
PORT=$(find_available_port)

echo "🚀 Launching server at http://localhost:$PORT"
echo "🌐 Browser will open automatically..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Start server in background with specific port
PORT=$PORT npm run dev &
SERVER_PID=$!

# Wait for server to start
sleep 4

# Open browser with correct port
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    open http://localhost:$PORT
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    xdg-open http://localhost:$PORT
else
    # Windows
    start http://localhost:$PORT
fi

echo ""
echo "✅ Browser opened at http://localhost:$PORT"
echo "✅ Press Ctrl+C to stop the server."
echo ""

# Wait for the server process
wait $SERVER_PID
