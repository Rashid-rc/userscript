// ==UserScript==
// @name Kartenhilfe
// @description ae1.tribalwars.ae-points-on-map-plapl.com.
// @author TheJGH
// @include http://ae1.tribalwars.ae/game.php?village=*&screen=map*
// ==/UserScript==
function addPointLabelTo(x, y) {
var e = document.getElementById("tile_" + x + "_" + y);
var pkts = "";
if (e.getElementsByTagName("a").length != 0) {
	var pat = /^map_popup\(.*,.*,.*,(.*),.*,.*,.*,.*,.*,.*,.*,.*,.*\)/;
	pat.exec(e.getElementsByTagName("a")[0].getAttribute("onmouseover"));
	var pkts = RegExp.$1;
}
var toAdd = "";
toAdd += '<div style="position: relative; top: -5px; left: 10px; z-index: 5; height: 0; font-size: 1 strong; font-weight: bolder" onmouseover="';
if (e.getElementsByTagName("a").length != 0) toAdd += e.getElementsByTagName("a")[0].getAttribute("onmouseover");
toAdd += '">' + pkts + '</div>';
e.innerHTML += toAdd;
}

function doSetup() {
for (var x=0; x<7; x++) {
	for (var y=0; y<7; y++) {
		addPointLabelTo(x, y);
	}
}
}

mapscr = unsafeWindow.mapScroll;

function myMapScroll(x, y) {
	mapscr(x, y);
	doSetup();
}

unsafeWindow.mapScroll = myMapScroll;

doSetup();