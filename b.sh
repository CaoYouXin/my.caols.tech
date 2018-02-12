#!/usr/bin/env bash

cd ./src
npm run build
cd ..
rm -rf ./docs/
# git checkout -- docs/CNAME
cp -r ./src/build/ ./docs/
cp ./docs/index.html ./docs/404.html
