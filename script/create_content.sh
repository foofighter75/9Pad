#!/bin/bash
# ============================================================================================
# Bash Shell Script for creation of HTML content panes.
# Naming scheme for content documents: C<INDEX>.(jpg|mp4), where INDEX starts with 0
# The script creates a wrapper html document for each content document found in static_content
# using a template files for image and movie documents. 
# 
# Change those templates if you want to modify the content pages of the app!
#
# Prerequisites:
# - Content documents are named and indexed as stated above in ../static_content
# ============================================================================================
declare -r IMAGE_TEMPLATE=image_template.html
declare -r MOVIE_TEMPLATE=movie_template.html
declare -r CONTENT_PATH=../static_content

ls $CONTENT_PATH/*.jpg | sed "s/.*\///" | while read F
do
  LEN=${#F}
  INDEX=${F:1:LEN-5}
  FILE_NAME=${F:1:LEN-5}.html
  echo "$F $INDEX $FILE_NAME"
  
  cat $IMAGE_TEMPLATE | sed "s/___SRC_FILE___/$F/" > $CONTENT_PATH/$FILE_NAME  
done

ls $CONTENT_PATH/*.mp4 | sed "s/.*\///" | while read F
do
  LEN=${#F}
  INDEX=${F:1:LEN-5}
  FILE_NAME=${F:1:LEN-5}.html
  echo "$F $INDEX $FILE_NAME"
  
  cat $MOVIE_TEMPLATE | sed "s/___SRC_FILE___/$F/" > $CONTENT_PATH/$FILE_NAME  
done
