#!/bin/bash
INDEX=0
ls *.jpg | while read F
do
  #LEN=${#F}
  #INDEX=${F:1:LEN-5}
  #NEW_INDEX=$((INDEX - 1))
  echo "$F $INDEX"
  mv $F C$INDEX.jpg
  INDEX=$((INDEX+1))
done
