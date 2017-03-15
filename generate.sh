#!/bin/bash

declare -a presets=(`find "./templates" -iname '*.js'`)

## now loop through the above array
PWD=`pwd`
for i in "${presets[@]}"
do  
   echo "generating $i..."
   name=`basename $i .js`
   # start a new file.c
   echo "/*" > "${PWD}/instruments/${name}.c"
   # append the generated waveform
   wavyd --preset "${PWD}/templates/${name}.js" >> "${PWD}/instruments/${name}.c"
done