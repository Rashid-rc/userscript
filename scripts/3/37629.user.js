// ==UserScript==

// @name           LolWhuut's Custom Post Counter

// @namespace      BM

// @description    Made by LolWhuuts of BasilMarket.com on 4/23/07

// @include        http://www.basilmarket.com/*

// ==/UserScript==


window.addEventListener('submit', newsubmit, true);


if (!GM_getValue('VuCounter')) {

	GM_setValue('VuCounter', 58928);

}


var username = readCookie("name").toLowerCase();
if (document.URL.toLowerCase().match(username)) {
	document.title= readCookie("name") + "'s BasilID - LolWhuut's Custom Post Counter 4/23/07 " + GM_getValue('VuCounter');
}




function newsubmit(event) {

	var target = event ? event.target : this;

		if (target.action.match("func-submit_forum.php")){

		var addone = new Number(GM_getValue('VuCounter'));

		addone += 1;

		GM_setValue('VuCounter', addone);

	}

    this._submit();

}





function readCookie(name) {

	var nameEQ = name + "=";

	var ca = document.cookie.split(';');

	for(var i=0;i < ca.length;i++) {

		var c = ca[i];

		while (c.charAt(0)==' ') c = c.substring(1,c.length);

		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);

	}



	return null;

}