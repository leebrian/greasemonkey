// ==UserScript==
// @name     Remove Amazon Sponsored
// @version  .2
// @grant    none
// @include      *://www.amazon.com/*
// ==/UserScript==

//these are the ones interspersed in results
var ads = document.querySelectorAll(".AdHolder")
for (var i=0, max=ads.length;i<max;i++){
  ads[i].style.display='none';
}

//this is the one up at the top of search results
var more_ads = document.querySelectorAll(".slot__ad")
for (var i=0, max=more_ads.length;i<max;i++){
  more_ads[i].style.display='none';
}

var blocked_ads = ads.length+more_ads.length;

if (blocked_ads>0){
	console.log('deleted ' + blocked_ads);
}

