---
layout: post
title: regexp@work
tags:
- regexp
---

I love regular expressions!

This post is part 4 in a 4 part series. Read the other posts:

**[Part 1 - Try regexp](/try-regexp "Getting Started")** | **[Part 2 - O(r)](/O(r) "O dot R notation")** | **[Part 3 - regexp.js](/regexp.js "Using lookaheads to remove filetypes")** | Part 4

So I've started my first job at Ziploop, I'm doing full-stack JavaScript, primarily on the backend and much to my delight, I will be and have been working on topics that are heavily involved with Regular Expressions, so this series will continue.

I've written a bunch of RegExp gems I wanted to share here, at this point somewhat uncategorized, simply that they've come about because of this new job. Enjoy!

##Parse Email

This first function looks through a full email address, i.e.

'"Christopher Salam" <chris@chrissalam.com>'

-> to ->

'chris@chrissalam.com'

Here it is in it's full glory:

```JavaScript
function parseEmail(emailFull) {
  if (!/</.test(emailFull)) { return emailFull; }
  var name = emailFull.match(/<(\w+(?=\+|@))/)[1];
  var domainName = emailFull.match(/@(\w+)./)[1];
  var tld = emailFull.match(/\.(\w+)>/)[1];
  var email = name + '@' + domainName + '.' + tld;
  return email;
}
```

There's a lot of information, so let's 'parse' through it. Here's a link to **<a href="http://regexr.com/" target="_blank">regexr</a>**.

The major topics to discuss prior to seeing this thing work is understanding capture groups, i.e. /(stuff)/, lookarounds (to remove "+relics"), and truly understanding what qualifies for \w+, which is the special grouping for word-like-characters in RegExp. It does include numbers, which is somewhat misleading from the 'w', and it specifically excludes spaces, @, +, "", '', slashes, dashes, and other letters that may trip us up.

The first most natural guess is to use a regexp that equates to <stuff@stuff.stuff>.

<img src="email,first.png"/>

and of course, this looks good, right? Then we throw in the capture group, because the capture group will help us remove the <> around the email.

<img src="email,firstcap.png"/>

Here is how capture groups work, shown from the console. The capture group gives us back an array like object that shows us the whole object that was matched in the 0th index, and in the 1st index we have the captured match within a match: i.e.

<img src="capturegroup.png"/>

In production, I've found numerous aliases and other information can obscure the email address. Additionally, emails will still be received if you add additional information in the email (we send emails like chris+attachment@chrissalam.com) which will still travel to gmail emails, but will lead to an independent account in our app, which let's us make new profiles and test things and receive the test emails in once place.

This however fails went accounting for information sent in the name with plus signs or other terms prior to the @. A picture is worth a thousand words:

<img src="relics.png"/>

From this example, we see we need a capture group that is more detailed, and just capture the word "chris" and not "chris+relics".

We are going to need something extra special here to just get chris. Here comes a lookaround. Using the <stuff(?=unwantedstuff) template, we start with a "<", and goes until it sees a "+" or a "@".

<img src="lookarounds.png"/>

Domains names and top level domains are simpler to match, here are ways to grab both of those.

<img src="domainName.png"/>

<img src="tld.png"/>

So this breaks out regular expressions into several terms, to get chris, chrissalam, and com as three different terms, captures them, then adds them together.

Hyphenated domains names are another frustrating thing, but this works:

<img src="hyphen.png"/>

<img src="hyphensConsole.png"/>

There are other concerns not addressed in this function: Periods in the name of the email (i.e. christopher.salam@gmail.com and christophersalam@gmail.com go to the same inbox).

 Ultimately, you don't want "Chris Salam" <chris@chrissalam.com> and "Christopher Salam" <chris@chrissalam.com> to make separate accounts, so this function below uses regex to grab what I really want from this string: -> "chris@chrissalam.com"

##CID images

CID images

CID images are images tags with embedded url info where base 64 information sits waiting to be parsed back into images and they are found in emails. Part of the work we are doing at Ziploop involves reading through emails using the Gmail API, and one tool has us grab the images with a CID attribute. This particular match was particularly gnarly. Here it is:

```JavaScript
/<img[^>]*src\s*=\s*"cid[^"]*"[^>]*>/
```

"<img stuff... >" Let's skip that part.

[^>]* is a crazy beautiful regexp term that means zero or more of characters that are not '>'. Make sense, right? We are interested in anything else! src is the beginning of an area of interest, helping use find a source attribute within an img tag. /s is whitespace, and /s* means zero or more whitespaces, these are optional. After hitting an equal sign, and eventually, a "cid" tag, we are finding what we need. The information inside the cid tag is huge, it can be many many characters. We can capture this information with parantheses for conversion if we wanted, it would be very similar.

```JavaScript
/<img[^>]*src\s*=\s*"cid([^"]*)"[^>]*>/
```

Here's what it looks like in action. Very cool!

<img src="cid.png"/>

 Regular Expressions are like a mini-puzzle within the greater puzzle, it's a great opportunity to learn something new and think again about patterns. We could also argue that software engineering is basically pattern recognition, recognizing something that people need that is repetitive and building a system around capturing that pattern. Hope this was helpful!
