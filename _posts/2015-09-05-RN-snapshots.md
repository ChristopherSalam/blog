---
layout: post
title: RN snapshots
tags:
- react
- reactnative
- firebase
- javascript
---

We have been learning React Native and we wanted to use Firebase but hesitated initially because there was no prebuilt library for interfacing React Native with Firebase. We kept at it, and we were able to build listeners that take and triggers that send information to and from Firebase and I'm going to share them here.

I've been using firebase for small projects and I was really interested in using firebase for our project because our datastructure is very small and easy to manage. The queries needed are very limited and the JSON tree format of firebase is perfect for what we want to do.

We have no servers in our application. Currently we use React and Firebase references and listen for changes directly where is needed. Since React Native has CommonJS, iOS fetch API has no CORS restrictions, so we write server style code in our views and go directly from firebase to our views and they update when there's a change.

This is what we had initially for fetching our data.

```javascript
fetchData () {
  return(
    fetch(REQUEST_URL)
      .then((response) => response.json())
        .then((responseData) => {
          this.setState({
            traits: responseData[userID],
            loaded: true
          })
        }).done()
  )
},
render() {
  if (!this.state.loaded) {
    return this.renderLoadingView();
  }
  var traits = this.state.traits;
  return this.renderTraits(traits);
}
```

The REQUEST_URL was our firebase url of interest. Which is all fine and dandy, except that this only works when we start our application. We wanted live updating and the best way to do it is to place a listener right in a certain spot...

```javascript
render() {
  var that = this;
  if (!this.state.loaded) {
    ref.on("value", function(snapshot) {
      that.setState({
        traits: snapshot.val().pond[userID],
        loaded:true});
    });
    return this.renderLoadingView();
  }
  traits = this.state.traits;
  return this.renderTraits(traits);
}
```
"var that = this" resets the context. The database ref listens and uses that.setState to change the view and update our information. It would have been nice to have a react native firebase library to be written out for us, but thankfully we were able to use vanilla firebase and react native to address our pretty simple needs. This is probably the best way, we've had no mistriggers using this approach.

**Here's a demo!** The top file shows the iOS simulator of the app on the left and the open firebase database on the right. I'm manually adding information in the database and the update of the information triggers and causes the bottom image. The same works when the application sends information to update the database from within the app. It's pretty exciting to do all this without sending this information through a server, just listeners and firebase calls going back and forth. I'll add a post discussing those triggers soon!

<img src="beforeafter.png"/>

In an other part of the application we access firebase using a function between the (this.state.loaded) and the ('return loadingView') but that has lead to some funny errors when the database is changed (see some database misfires below). We have already fixed the error shown below and I'll post about that in a part 2.

<img src="Phones.jpg"/>

Send me an email or talk to **<a href="http://kent10ou.github.io"> Kent </a>** or **<a href="http://ceditoph.github.io/"> Casey </a>** if you are considering doing something using both of these technologies and are having trouble! I have read that firebase is working on a library so this sort of technology interface might have an even simpler connection soon. 

<!--*We set out initially to use our unique facebook ID to vote on personality characteristics of friends we had, a way of making a more curated profile than we could make individually. Unfortunately, facebook's new Graph API doesn't issue out this individual ID via the graph database, but rather sends a new facebook ID tied to sessions, every 60 days or upon logout, we will lose the ability to use this ID and we'll have to start over.* -->
