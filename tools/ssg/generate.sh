#!/bin/bash
######## tools/ssg/generate.sh ########
set -eux
 
rm -rf dist
 
wget -r -l inf -k -nc -nH -p -E -e robots=off -P ./dist https://hatoq.net