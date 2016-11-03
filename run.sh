#!/bin/sh

dockerized="docker run -it --rm -v $(pwd):/data digitallyseamless/nodejs-bower-grunt"
$dockerized npm install
$dockerized bower install
$dockerized grunt serve