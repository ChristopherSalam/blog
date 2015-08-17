---
layout: post
title: Open with bash
---

There are many obvious benefits to working your computer from the terminal. I've been experimenting with opening tabs and running chains of commands from the terminal. First, let's discuss a few different ways of opening a tab on your terminal from your command line functions within your bash profile. These are written in applescript, and I'm not going to delve on the details but here are two I like and use:

```bash
newtab () {
  pwd=`pwd`
  osascript -e "tell application \"Terminal\"" \
  #osascript -e "tell application \"iTerm\"" \
  -e "tell application \"System Events\" to keystroke \"t\" using {command down}" \
  -e "do script \"cd $pwd; clear\" in front window" \
  -e "end tell"
  > /dev/null
} #in use
```
I found this on stack overflow, and have been poking around to link the author and when I find it I plan to update it here. 
I use iTerm but I included that line in comments so you can use either.
<a href="https://tomafro.net/2009/08/tip-open-new-tab-in-osx-terminal" >There are a few other ways as well, here's another I've not gotten to work.</a>

From this process you can only imagine what possibilities are out there. I have been trying to chain functions in bash, for practical purposes such starting my blog's server, the jekyll build & watch function, opening the site in the brower and opening the file to edit it, preferribly with one bash command. However, timing is difficult because certain commands do not allow the current window to work. This was my starting point.
If you try to use these commands, be sure to change blog to what your folder is called.

```bash
blg () {
  cd ~/Documents/blog
  git pull origin master
  jekyll build --watch
} #conceptual
```

This command changes to the blog's directory, update, and then begin's jekyll's built in watch and recompile process. Without this command, I can see my blog initially but it won't update for any changes. The blgs command starts the jekyll server, and the blgo command opened a window in chrome to see blog changes and opened the text file to edit it.

```bash
blgs () {
  cd ~/Documents/blog
  jekyll server
} #conceptual

blgo () {
  open "http://127.0.0.1:4000/"
  cd ~/Documents/blog
  sublime .
} #conceptual
```
My first attempt to chain all these commands was something like this...

```bash
blg! () {
  blgo && newtab && blgs && newtab && blgo
} #conceptual
```

&& allows us to chain blog commands, however, the starting of the serve and watch events makes it such that the blg! is not effective. I have to ctrl and exit to make each command work. I was near a point of giving up this exercise when I chanced onto this combination: 

 ```bash
blg () {
  cd ~/Documents/ChristopherSalam.github.io
  (jekyll server) & newtab
  (open 'http://localhost:4000') &
  (jekyll build --watch) 
} #in use
 ```
There is an error message or two in there, but in the end it accomplishes my three goals so I have left it in the bash profile.
Here are a few other commands I use for good measure.

 ```bash
blgv () {
  cd ~/Documents/blog
  open 'http://localhost:4000'
} #in use
blgw () {
  cd ~/Documents/blog
  sublime .
} #in use
blgpl () {
  cd ~/Documents/blog
  git pull origin master
} #in use
blgpu () {
  cd ~/Documents/blog
  git push origin master
} #in use
```