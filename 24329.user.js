// ==UserScript==
// @name           twitterverse
// @namespace      twitterverse
// @description    Live in a different twitter universe
// @include        http://twitter.com/home
// ==/UserScript==



var allLabels, thisLabel;
var newLabel;
    newLabel = document.createTextNode("What do you wish you were doing?");
    var div = thisLabel.parentNode;
    div.insertBefore(newLabel, thisLabel);
    div.removeChild(thisLabel);