// ==UserScript==
// @name HF purple fix
// @author Mr. Anderson
// @include http://www.hackforums.net/forumdisplay.php*
// @include http://hackforums.net/forumdisplay.php*
// @version     1.3
// ==/UserScript== 




  var script = document.createElement('script');
	script.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js';
	document.getElementsByTagName('head')[0].appendChild(script);
	document.body.innerHTML = document.body.innerHTML.replace('<td class="trow1" align="center" width="2%">&nbsp;</td>', '');
	document.body.innerHTML = document.body.innerHTML.replace('<td class="trow1" style="white-space: nowrap; text-align: right"><span class="smalltext">Today 08:30 AM</span></td>', '');






