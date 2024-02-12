#!/bin/bash

if [ -z "$1" ]
then
	echo "No arguments supplied"
elif [ -z "$2" ]
then
	echo -e "$1"
elif [ -z "$3" ]
then
	echo -e "$1\n$2"
else
	echo -e "$1\n$2\n$3"
fi
