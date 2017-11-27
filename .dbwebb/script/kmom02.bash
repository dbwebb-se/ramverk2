#!/usr/bin/env bash

# Include ./functions.bash
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
source "$DIR/functions.bash" 

ACRONYM=$1

# Potatoe if needed
[ -z $2 ] || dbwebb run potatoe $ACRONYM

# Download it (what if we get it from GitHub instead?)
rm -rf me/redovisa/{*,.??*}
dbwebb init-me
dbwebb --force download redovisa $ACRONYM || exit 1

# Show details
pushd me/redovisa
[ -d .git ] || (echo "No git-repo on highest level" && ls -l && exit 1)
git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short
git remote -v
git tag

# Checkout version and set it up
TAG=$( input "Checkout tag" "" )
git checkout $TAG
npm install


# Finalize
popd

# Test it
# Sätt DBWEBB_HOST
# Öppna firefox till DBWEBB_HOST
# Checka ut rätt version/tagg
# Kolla README.md om instruktioner
# Starta servern lokalt med npm start && testa med firefox
# Stoppa servern med npm stop
# Starta server via docker-compose-up && testa med firefox
