---
layout: post
title: Open with bash
tags:
- bash
- jekyll
---

There are many obvious benefits to working your computer from the terminal. I've been experimenting with opening tabs and running chains of commands from the terminal. Here's a command to do exactly this.

```bash
newtab() {
    osascript -e 'tell application "iTerm" to activate' -e 'tell application "System Events" to tell process "iTerm2" to keystroke "t" using command down'
}
```
Using '&' allows us to chain commands. From this process you can only imagine what possibilities are out there. I have been trying to chain functions in bash, for practical purposes such starting my blog's server, the jekyll build & watch function, opening the site in the brower and opening the file to edit it. If you try to use these commands, be sure to change blog to what your folder is called. 

 ```bash
blgv () {
  cd ~/Documents/blog
  open 'http://localhost:4000'
} 
blgw () {
  cd ~/Documents/blog
  sublime .
} 
blgpl () {
  cd ~/Documents/blog
  git pull origin master
} 
blgpu () {
  cd ~/Documents/blog
  git push origin master
}
blg () {
  blgpl
  (jekyll build --watch) &
  (open 'http://localhost:4000') &
  newtab & blgw 
}
```