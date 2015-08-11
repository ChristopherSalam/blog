---
layout: post
title: Open with bash
---

There are many benefits to working your computer from the terminal. I've been experimenting with opening tabs and running chains of commands from the terminal. One way to open a tab from the terminal is:

```
newtab() {
    osascript -e 'tell application "iTerm" to activate' -e 'tell application "System Events" to tell process "iTerm" to keystroke "t" using command down'
}
```

From this process you can only imagine what possibilities are out there. I have been trying to chain functions in bash, for practical purposes such starting my blog's server, the watch function, opening the site in the brower and opening the file to edit it, preferribly with one bash command. However, timing is difficult because certain commands do not allow the current window to work. To get around this I reseached starting a new tab in bash.

```
blg () {
  cd ~/Documents/ChristopherSalam.github.io
  jekyll build --watch
}
```

This command changes to the blog's directory, and then begin's jekyll's built in watch and recompile process. Without this command, I can see my blog initially but it won't update for any changes.

```
blgs () {
  jekyll server
}

blgo () {
  open "http://127.0.0.1:4000/"
  cd ~/Documents/ChristopherSalam.github.io
  sublime .
}

blg! () {
  blgo && newtab && blgs && newtab && blgo
}
```

&& allows us to chain blog commands, however, the starting of the serve and watch events makes it such that the blg! is not effective. I have to ctrl and exit to make each command work. Ultimately, chaining and running tasks through terminal seems clumsy and automating this process through gulp or grunt seems like a better option.