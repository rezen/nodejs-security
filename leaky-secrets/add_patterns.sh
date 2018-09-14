#!/bin/bash

set -e

readonly config=$(git config -l | grep -F 'pattern')
readonly patterns=$(cat ./patterns.txt)

for pattern in $patterns; do
  if !(echo "$config" | grep -q -F "$pattern"); then
    git-secrets --add "$pattern"
  fi
done

exit 0