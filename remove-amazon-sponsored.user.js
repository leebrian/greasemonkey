// ==UserScript==
// @name     Remove Amazon Sponsored
// @version  .1
// @grant    none
// @include      *://www.amazon.com/*
// ==/UserScript==
//alert('hello')
var ads = document.querySelectorAll(".AdHolder")
for (var i=0, max=ads.length;i<max;i++){
  ads[i].style.display='none';
}
//alert('goodbye, deleted ' + i)
if (i>0){
	console.log('deleted ' + i);
}
