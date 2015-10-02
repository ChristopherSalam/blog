---
layout: post
title: RN updates
tags:
- react
- reactnative
- firebase
- javascript
---

In this update, I will discuss how we used scrollview and javascript to create a populating list that voted in a nested tree for our React Native and Firebase project. We probably could have used ListView, but were able to make this quickly work and decided to stick with it. We'll go through the entire setup and talk about each of the parts. 

<img src="Friends.png"/>

The final result is this screen shown above, in our program a place you can look up your friend and vote on their qualities, with your unique facebook ID as the key and true as the value. Let's start at the very beginning of this page. We are going to leave out the tab bar and other parts of this phone and the facebook image and just focus on the listview since that's where Firebase is involved.

```javascript

'use strict';

/*========================================================||
||   Required sources                                     ||
||========================================================*/

var React = require('react-native'),
  styles = require('./styles'),
  person = require('./PersonDB'),
  Firebase = require('firebase'),
  ref = new Firebase(url),
  tallyNav = require('./tallyNav'),
  personRef;

```

We should start every bit of code with 'use strict'. 
tallyNav is another option menu with votes tallied up.
The main thing to note here is that we reference the database here with 'ref'.
personRef is nested to individuals, or leaf nodes within 'ref'.


```javascript

/*========================================================||
||   React native variables, used as inline tags          ||
||========================================================*/

var {
 View,
 ScrollView,
 Text,
 Image,
 TouchableHighlight,
 TouchableOpacity,
 Component
} = React;

```

Here we declare the components needed for React and React Native components in this section. I'll get to the bones of this after Github Universe.

<!--

/*========================================================||
||   Each list item and quality (eventually fetch)        ||
||========================================================*/

var indents = [],
  qualities = ["baller","leader","performer","teacher"...]

/*========================================================||
||   This allows each button to hit the specific quality  ||
||   Use null to remove items or true to add items        ||
||   Eventually replace "Test User" with the ID needed.   ||
||   This calls down specific images and makes the list   ||
||========================================================*/

class FeaturedNav extends Component {

  getInitialState() {
    return {
      opacity: 0.2,
    }
  }

  render() {
    window.FeaturedNav = this;
    person.shuffle(qualities);
    this.getTraits();
    return (
      <View style={styles.featNavContainer}>
        <Image source={{uri: 'http://chrissalam.com/bash/beach-4.jpg'}} style={{backgroundColor: 'transparent', height: '600'}}>
          <TouchableHighlight underlayColor='transparent'
            onPress={()=>{ console.log("See your friend's stats")
              this.props.navigator.push({
                title: 'Stats for '+ person.name,
                component: tallyNav,
                leftButtonTitle: 'Back',
                onLeftButtonPress: () => this.props.navigator.pop(),
            })
          }}>
            <Image source={{uri: 'http://graph.facebook.com/' + person.id + '/picture?type=large'}}
                 style={{marginTop: 40, marginLeft:20, width: 170, height: 170, borderRadius: 85, borderWidth:5, borderColor:'#FF7E47'}}>
              <View style={styles.navOverlay}>
                <Text style={styles.navChoiceText}>see stats!</Text>
              </View>
            </Image>
          </TouchableHighlight>
            <ScrollView
              onScroll={() => { console.log('onScroll!'); }}
              scrollEventThrottle={200}
              contentInset={{top: -50}}
              style={styles.scrollView}>
              {indents}
            </ScrollView>
        </Image>
      </View>
    );
  }
  getTraits(){
    personRef = ref.child("pond").child(person.id);
    for (var i = 0; i < qualities.length; i++) {
      var vote = {};
      vote[window.Katfish.userID] = true;
      (function runIt(variable){
        indents.push(
          <TouchableHighlight style={styles.featNavButton}
          underlayColor={'rgba(200,28,78,0.2)'}
          onPress={()=>{
            personRef.child(variable).update(vote)
            qualities.splice(qualities.indexOf(vote),1);
          }}>
            <Text style={styles.featNavButtonText}>{qualities[i]}</Text>
          </TouchableHighlight>);
      })(qualities[i])
    }
  }
}

module.exports = FeaturedNav;

-->

**This is a stub... there's more to come**