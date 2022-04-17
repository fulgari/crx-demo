#!/bin/bash

builddir=rollup_build/
srcdir=src/

# clean
rm -rf $builddir
mkdir $builddir

# copy main
cp $srcdir/manifest.json $builddir
# cp -r $srcdir/res $builddir

# copy settings
# mkdir $builddir/settings
# cp $srcdir/settings/index.html $builddir/settings/
cp -r $srcdir/settings $builddir

# copy lib
# cp -r libs $builddir

# compile
node node_modules/rollup/dist/bin/rollup -c $1 # $1 为传入 bash 的参数，string



