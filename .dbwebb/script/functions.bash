#!/usr/bin/env bash

#
# Read input from user supporting a default value for reponse.
# arg1: The message to display.
# arg2: The default value.
#
input()
{
    read -r -p "$1 [$2]: "
    echo "${REPLY:-$2}"
}
