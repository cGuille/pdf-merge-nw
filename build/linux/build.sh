#!/usr/bin/env sh

USAGE="Usage: ./build [64|32]"

if [ $(expr match  "$(pwd)" .*/pdf-merge-nw/build/linux) = "0" ]; then
    echo "This build script must be run from its own directory." >&2
    echo $USAGE
    exit 1
fi

if [ -z $1 ]; then
    echo $USAGE
elif [ $1 = "32" ]; then
    nw_folder="node-webkit-v0.4.2-linux-ia32"
elif [ $1 = "64" ]; then
    nw_folder="node-webkit-v0.4.2-linux-x64"
else
    echo $USAGE
fi

if [ -z $nw_folder ]; then
    exit 1
fi

owd=$(pwd) &&
cd ../../src &&
zip -r ../bin/src.nw * &&
cd ../bin && 
cat "$nw_folder/nw" src.nw > ../dist/linux/pdf-merge && chmod +x ../dist/linux/pdf-merge &&
cd $owd
