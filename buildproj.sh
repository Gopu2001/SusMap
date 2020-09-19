#!/usr/bin/env bash
case "${TRGT}" in
  browser )
  ionic integrations enable cordova --quiet
  ionic cordova platform add browser --no-interactive --confirm
  ionic cordova build browser --prod --release
  ln -s www/index.html www/404.html
  ln -s www/favicon.ico www/apple-touch-icon.png
  ln -s www/favicon.ico www/apple-touch-icon-precomposed.png
  cp platforms/browser/config.xml www/
  ;;
esac
