#!/bin/bash

# Default commit message
message=${1:-"Update code"}

# Color codes for feedback
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${BLUE}Starting git automation...${NC}"

# Add all changes
echo -e "${BLUE}Adding changes...${NC}"
git add .

# Commit changes
echo -e "${BLUE}Committing with message: \"$message\"${NC}"
git commit -m "$message"

# Push changes
echo -e "${BLUE}Pushing to remote...${NC}"
git push

echo -e "${GREEN}Process completed!${NC}"
