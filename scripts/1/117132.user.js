// ==UserScript==
// @name           Kill Gmail Ads
// @namespace      gdc_
// @include        http*://mail.google.com/*
// ==/UserScript==

GM_addStyle(".mq { display:none; }"); // sticky footer
GM_addStyle(".z0DeRc { display:none; }"); // message detail footer
GM_addStyle(".oM { display:none; }"); // good ol gmail ads right sidebar
GM_addStyle(".u7 { display:none; }"); // 'about these links' link
// hiding right col altogether 
GM_addStyle(".Bu { display:none; }"); 
GM_addStyle(".Bu:first-child { display:block; }"); 
GM_addStyle(".Bu .hx { padding-right:0; }");