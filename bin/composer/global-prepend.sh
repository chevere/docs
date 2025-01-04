#!/usr/bin/env bash

# This script will add the auto_prepend_file configuration to a php.ini file
# to load the Composer autoloader globally.

# Find all php.ini files
ini_files=()
while IFS= read -r -d $'\0' file; do
    ini_files+=("$file")
done < <(find /etc /usr/local/etc /opt -name "php.ini" -print0 2>/dev/null)

if [ ${#ini_files[@]} -eq 0 ]; then
    echo "No php.ini files found"
    exit 1
fi

# List found php.ini files
echo "Found php.ini files:"
for i in "${!ini_files[@]}"; do
    echo "[$i] ${ini_files[$i]}"
done

# Ask user to select a file
read -p "Select the number of the php.ini to modify: " selection

if ! [[ "$selection" =~ ^[0-9]+$ ]] || [ "$selection" -ge "${#ini_files[@]}" ]; then
    echo "Invalid selection"
    exit 1
fi

selected_file="${ini_files[$selection]}"
backup_file="${selected_file}.backup"

# Create backup
cp "$selected_file" "$backup_file"
echo "Backup created at $backup_file"

# Update file
echo "Adding auto_prepend_file configuration..."
echo "" >>"$selected_file"
echo "auto_prepend_file = \${HOME}/.composer/vendor/autoload.php" >>"$selected_file"
echo "Configuration added successfully"
