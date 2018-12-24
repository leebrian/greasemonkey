// ==UserScript==
// @name     Remove Amazon Sponsored
// @version  .3
// @include   *://www.amazon.com/*
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js
// @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant    GM_addStyle
// thanks https://gist.github.com/BrockA
// ==/UserScript==

waitForKeyElements(".thirdPartySponsorLink, .AdHolder, .slot__ad", removeAds);

function removeAds(jNode) {
  var message = "Greasemonkey script to remove amazon sponsored ads ran";

  //these are the ones interspersed in results
  var ads = document.querySelectorAll(".AdHolder");
  for (var i = 0, max = ads.length; i < max; i++) {
    ads[i].style.display = "none";
  }
  message += "; deleted (" + max + ") inline ads";

  //this is the one up at the top of search results
  var ads = document.querySelectorAll(".slot__ad");
  for (var i = 0, max = ads.length; i < max; i++) {
    ads[i].style.display = "none";
  }
  message += "; deleted (" + max + ") slot ads";

  //these are at the bottom
  var ads = document.querySelectorAll(".thirdPartySponsorLink");
  for (var i = 0, max = ads.length; i < max; i++) {
    ads[i].style.display = "none";
  }
  message += "; deleted (" + max + ") bottom sponsor ads";
  console.log(message);
}
