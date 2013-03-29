#!/usr/bin/env sh

owd=$(pwd) &&
cd ../../src &&
zip -r ../bin/src.nw * &&
cd ../bin && 
cat node-webkit-v0.4.2-linux-x64/nw src.nw > ../dist/linux/pdf-merge && chmod +x ../dist/linux/pdf-merge &&
cd $owd
