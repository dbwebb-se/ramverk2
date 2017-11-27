#!/usr/bin/env bash
what=$1
acronym=$2

rm -rf me
dbwebb init-me
dbwebb --force download $what $acronym
npm install
(cd me/redovisa && git remote -v)
(cd me/redovisa && git tag)
