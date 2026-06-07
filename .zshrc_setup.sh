#!/bin/bash

# Setup script to add 'mehatronica' command globally
# Run this once: source .zshrc_setup.sh

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Add alias to .zshrc
if ! grep -q "alias mehatronica=" ~/.zshrc; then
    echo "" >> ~/.zshrc
    echo "# MD Mechatronica Development Server" >> ~/.zshrc
    echo "alias mehatronica='cd $CURRENT_DIR && ./mehatronica.sh'" >> ~/.zshrc
    echo "✅ Added 'mehatronica' command to ~/.zshrc"
    echo ""
    echo "Run this command to activate it now:"
    echo "source ~/.zshrc"
    echo ""
    echo "After that, you can type 'mehatronica' from anywhere!"
else
    echo "⚠️  'mehatronica' command already exists in ~/.zshrc"
fi
