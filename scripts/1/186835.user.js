// ==UserScript==
// @name        盖茨killer
// @namespace   盖茨killer
// @author         le
// @description 将cnbeta主页中标题含有“盖茨”的新闻从您眼前删除
// @include     http://www.cnbeta.com/*
// @version     0.1
// ==/UserScript==
var a = "盖茨";
var b = this.document.getElementsByTagName("strong");
//var c = new Array();
for(i =0;i<b.length;i++){
	if(b[i].innerHTML.indexOf(a) != -1){
		//c[i]=b[i].innerHTML.indexOf(a);
		b[i].parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(b[i].parentNode.parentNode.parentNode.parentNode);
	}
}main();