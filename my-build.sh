#!/bin/bash
PROJECT_DIR=$(pwd)
OUTPUT_PATH_APK_UNISGNED="$PROJECT_DIR/platforms/android/app/build/outputs/apk/release/app-release-unsigned.apk"
OUTPUT_PATH_FINAL_APK="$PROJECT_DIR/platforms/android/app/build/outputs/apk/release/TODOLIST.apk"
OUTPUT_DIR="$PROJECT_DIR/platforms/android/app/build/outputs/apk/release/"

if [[ $# -eq 2 ]]; then
  RELEASE_KEY_PATH=$1
  RELEASE_KEY_ALIAS=$2
  ionic cordova build --release android &&
  jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $RELEASE_KEY_PATH $OUTPUT_PATH_APK_UNISGNED $RELEASE_KEY_ALIAS &&
  rm $OUTPUT_PATH_FINAL_APK
  zipalign -v 4 $OUTPUT_PATH_APK_UNISGNED $OUTPUT_PATH_FINAL_APK &&
  xdg-open $OUTPUT_DIR
  exit 0
else
  echo "Syntax : ./my-build.sh [RELEASE_KEY_PATH] [RELEASE_KEY_ALIAS]"
fi
