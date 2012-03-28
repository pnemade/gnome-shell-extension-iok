#!/bin/bash
echo "Creating tarball...."
cd ..
cp -pr gnome-shell-extension-iok /tmp
cd /tmp/gnome-shell-extension-iok
date1=`date +%Y%m%d`
echo ${date1}
rm -rf .git .gitignore
cd ..
tar -cf gnome-shell-extension-iok-${date1}.tar gnome-shell-extension-iok
gzip gnome-shell-extension-iok-${date1}.tar
sha1sum gnome-shell-extension-iok-${date1}.tar.gz > gnome-shell-extension-iok-${date1}.tar.gz.sign
rm -rf /tmp/gnome-shell-extension-iok
echo "The tarball is created in /tmp directory"

