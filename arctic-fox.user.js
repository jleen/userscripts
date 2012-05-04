// Author: John Leen <jleen@saturnvalley.org>

// ==UserScript==
// @name Arctic Fox
// @namespace http://www.saturnvalley.org/arctic-fox
// @description Make the Tea House theme not use silly white-on-black.
// @include http://gmail.google.com/*
// @include http://mail.google.com/*
// @include https://gmail.google.com/*
// @include https://mail.google.com/*
// ==/UserScript==

(function(){ 
    function addGlobalStyle(css) {
    	var head, style;
    	head = document.getElementsByTagName('head')[0];
    	if (!head) { return; }
    	style = document.createElement('style');
    	style.type = 'text/css';
    	style.innerHTML = css;
    	head.appendChild(style);
    }
    
    addGlobalStyle('td.xY { background-color: rgba(243, 243, 243, 0.85) }');
    addGlobalStyle('td.xY span { color: #222 }');
    addGlobalStyle('td.xY span.y2 { color: #777 }');
})()
