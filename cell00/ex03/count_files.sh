count=$(( $(find . -maxdepth 1 -mindepth 1 \( -type f -o -type d \) | wc -l) ))
printf '%d\n' "$count"