#!/bin/bash

if [ -z "$1" ]
then
	echo "No arguments supplied"
else
	while [ -n "$1" ]
	do
		mkdir ex$1
		shift
	done
fi
