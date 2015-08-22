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

The main trick is that you have to call the newtab early in the process, the tab will not let you call any commands after you start the server, so the new tab is where you will be able to keep typing in commands.

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

blog () {
  newtab
  blgpl &
  blgv &
  blgw & 
  (jekyll build --watch) 
}

alias blg="blog"
```

notes: sublime is the shortcut word added by a CLI to open sublime text.
Most of the other commands are written as short cuts on my terminal but have been written out for clarity. 