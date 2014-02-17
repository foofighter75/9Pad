#!/bin/bash
# Bash Shell Script for creation of HTML content panes.
# Naming scheme for content documents: C<INDEX>.(jpg|mp4), where INDEX starts from 0
# The script creates a wrapper html document for each content document found in static_content

declare -r CONTENT_PATH=../static_content

ls $CONTENT_PATH/*.jpg | sed "s/.*\///" | while read F
do
  LEN=${#F}
  INDEX=${F:1:LEN-5}
  FILE_NAME=${F:1:LEN-5}.html
  echo "$F $INDEX $FILE_NAME"
  
  cat image_template.html | sed "s/___SRC_FILE___/$F/" > $CONTENT_PATH/$FILE_NAME  
done

ls $CONTENT_PATH/*.mp4 | sed "s/.*\///" | while read F
do
  LEN=${#F}
  INDEX=${F:1:LEN-5}
  FILE_NAME=${F:1:LEN-5}.html
  echo "$F $INDEX $FILE_NAME"
  
  cat movie_template.html | sed "s/___SRC_FILE___/$F/" > $CONTENT_PATH/$FILE_NAME  
done
