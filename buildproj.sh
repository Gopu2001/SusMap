#!/usr/bin/env bash
case "${TRGT}" in
  browser )
  ionic integrations enable cordova --quiet
  ionic cordova platform add browser --no-interactive --confirm
  ionic cordova build browser --prod --release
  cd ./www
  ln -s index.html 404.html
  ln -s favicon.ico apple-touch-icon.png
  ln -s favicon.ico apple-touch-icon-precomposed.png
  cd ./..
  cp platforms/browser/config.xml www/
  ;;
esac
