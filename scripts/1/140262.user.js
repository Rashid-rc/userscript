// ==UserScript==
// @name           AutoLike by 6xx6
// @namespace      Facebook AutoLike
// @description    One click to like all facebook Friend Post and comment
// @include        http://www.facebook.com/*
// @include        https://www.facebook.com/*
// @version        0.4.7
// ==/UserScript==


body = document.body;
if(body != null) {
	div = document.createElement("div");
	div.style.position = "fixed";
	div.style.bottom = "+125px";
	div.style.left = "+15px";
	div.style.padding = "2px";
	div.innerHTML = "<a style=\"font-weight:bold;color:#FFFFFF\" href=\"JavaScript:AutoLike()\"><img src=http://b2nplen.netai.net/images/likev.gif height=30 width=30 alt='Like Post or Status' title='Like Post or Status'</img></a>"
	
	body.appendChild(div);
	
	unsafeWindow.AutoLike = function() {
	
		buttons = document.getElementsByTagName("button");
		for(i = 0; i < buttons.length; i++) {
			myClass = buttons[i].getAttribute("class");
			if(myClass != null && myClass.indexOf("like_link") >= 0)
				if(buttons[i].getAttribute("name") == "like")
					buttons[i].click();
		}
		
	};
}

body = document.body;
if(body != null) {
	div = document.createElement("div");
	div.style.position = "fixed";
	div.style.bottom = "+80px";
	div.style.left = "+15px";
	div.style.padding = "2px";
	div.innerHTML = "<a style=\"font-weight:bold;color:#FFFFFF\" href=\"JavaScript:AutoUnLike()\"><image src=http://b2nplen.netai.net/images/unlike.gif height=30 width=30 alt='UnLike Post or Status' title='UnLike Post or Status'></a>"
	
	body.appendChild(div);
	
	unsafeWindow.AutoUnLike = function() {
	
		buttons = document.getElementsByTagName("button");
		for(i = 0; i < buttons.length; i++) {
			myClass = buttons[i].getAttribute("class");
			if(myClass != null && myClass.indexOf("like_link") >= 0)
				if(buttons[i].getAttribute("name") == "unlike")
					buttons[i].click();
		}
		
	};
}



body = document.body;
if(body != null) {
	div = document.createElement("div");
	div.style.position = "fixed";
	div.style.bottom = "+50px";
	div.style.left = "+15px";
	div.style.padding = "2px";
	div.innerHTML = "<a style=\"font-weight:bold;color:#FFFFFF\" href=\"JavaScript:AutoExpand()\"><img src=http://b2nplen.netai.net/images/expandindex.jpg height=30 width=30 alt='Expand Comment' title='Expand Comment'</img></a>"
	
	body.appendChild(div);
	
	unsafeWindow.AutoExpand = function() {
	
		buttons = document.getElementsByTagName("input");
		for(i = 0; i < buttons.length; i++) {
			myClass = buttons[i].getAttribute("class");
			if(myClass != null && myClass.indexOf("") >= 0)
				if(buttons[i].getAttribute("name") == "view_all[1]")
					buttons[i].click();
		}
		
	};
}

body = document.body;
if(body != null) {
	div = document.createElement("div");
	div.style.position = "fixed";
	div.style.bottom = "+20px";
	div.style.left = "+15px";
	div.style.padding = "2px";
	div.innerHTML = "<a style=\"font-weight:bold;color:#FFFFFF\" href=\"JavaScript:AutoLikeC()\"><img src=http://b2nplen.netai.net/images/likecommentb.gif height=30 width=30 alt='Like Comment' title='Like Comment'</img></a>"
	
	body.appendChild(div);
	
	unsafeWindow.AutoLikeC = function() {
	
		buttons = document.getElementsByTagName("button");
		for(i = 0; i < buttons.length; i++) {
			myClass = buttons[i].getAttribute("class");
			if(myClass != null && myClass.indexOf("like_link") >= 0)
				if(buttons[i].getAttribute("title") == "Like this comment")
					buttons[i].click();
		}
		
	};
}