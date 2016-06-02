---
layout: post
title: ecosystems
tags:
- ecosystems
- cordova
- electron
- react native
---

The challenges I've been working on lately fall into the category of ecosystems engineering. Rather than front end or backend challenges, which are largely web technologies, devices and device specific APIs have really moved forward and become standard parts of the full-stack engineer. These technologies (and most technologies we use as Software Engineers) are built in

Prior to ziploop, I built apps with React Native and Electron. <a href="https://facebook.github.io/react-native/"> React Native </a> (per their website), enables you to build world-class application experiences on native platforms using a consistent developer experience based on JavaScript and React. React Native was brand new when I picked it up, they hadn't yet realized the bridge to Android.

Electron is another bridge technology, but allowing you to instead to build applications that leverage desktop software tools in OSX, Windows, and Linux platforms while using Web Technologies. Many great applications, such as Slack, Brave, and Nylas have been built on the platform. The electron shell was first developed when building the Atom text editor, of which I am a dedicated user. The two technologies have since been decoupled, and now you can built apps using Electron. I've got an on-going personal electron project that I'm hoping to have ready by the time I get married...

Bridge technologies promise the world, and while they are great, a lot of extra work has to go to make these technologies deliver on their promise. That extra work is something I believe is called ecosystems engineering. They are sometimes called mobile technologies/applications engineering or desktop applications engineering. I love this term, in it's generality but also because it reminds me of my previous professions. If front-end engineering appeals to the design or artistically-inclined software engineers, and back-end engineering is the calling of accountants and records keepers in us, I think ecosystems engineering appeals to the plumbers out there.

At Ziploop I work on the Cordova plugins to our hybrid web application. We use Cordova to use WebViews to make a web application look like a native mobile application and grabbing onto native APIs. I've been able to help the Cordova layer upgrade from UIWebview to WkWebView, and I'll post about that soon, but I've also been able to integrate open source plugins and learn a lot about how mobile technologies work, not to mention learn Objective C, Swift, Java, and pretty much wade through a bunch of code without really caring what language it is in. In the process of exploring the upgrade strategy, I got to try using Crosswalk, another type of bridge technology for mobile platforms. My central belief on why ecosystems engineering is needed and useful is that often frameworks are too bloated and still somehow can't serve your exact need, and therefore a cobbled together in between solution ends up being the best approach (that is, until it's later repackaged as it's own framework and released!). I'm excited to blog about more specific findings, but for now I hope this was helpful.
