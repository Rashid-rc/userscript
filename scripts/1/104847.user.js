﻿// ==UserScript==
// @name OGame Redesign : Cargos necessary
// @namespace http://userscripts.org/users/36331
// @description OGame : Number of cargos necessary to transport all resources
// @date 2010-06-02
// @creator Black Cat
// @include http://*.ogame.*/game/index.php?page=fleet1*
// @exclude
// ==/UserScript==

(function(){

	// fonction format sur http://www.toutjavascript.com
	function format(valeur,decimal,separateur) {
	// formate un chiffre avec 'decimal' chiffres après la virgule et un separateur
		var deci=Math.round( Math.pow(10,decimal)*(Math.abs(valeur)-Math.floor(Math.abs(valeur)))) ; 
		var val=Math.floor(Math.abs(valeur));
		if ((decimal==0)||(deci==Math.pow(10,decimal))) {val=Math.floor(Math.abs(valeur)); deci=0;}
		var val_format=val+"";
		var nb=val_format.length;
		for (var i=1;i<4;i++) {
			if (val>=Math.pow(10,(3*i))) {
				val_format=val_format.substring(0,nb-(3*i))+separateur+val_format.substring(nb-(3*i));
			}
		}
		if (decimal>0) {
			var decim=""; 
			for (var j=0;j<(decimal-deci.toString().length);j++) {decim+="0";}
			deci=decim+deci.toString();
			val_format=val_format+"."+deci;
		}
		if (parseFloat(valeur)<0) {val_format="-"+val_format;}
		return val_format;
	}

	var metal = document.getElementById("resources_metal").innerHTML;
	metal = parseInt(metal.replace(/\D/g, ''));

	var cristal = document.getElementById("resources_crystal").innerHTML;
	cristal = parseInt(cristal.replace(/\D/g, ''));

	var deuterium = document.getElementById("resources_deuterium").innerHTML;
	deuterium = parseInt(deuterium.replace(/\D/g, ''));
	
	var total = metal + cristal + deuterium;

	var PT = Math.ceil(total/5000);
	var GT = Math.ceil(total/25000);

	var max_PT = 0;
	var button202 = document.getElementById("button202");
	if (button202 && button202.className == "on") {
		max_PT = button202.innerHTML.replace(/\n/g,"").replace(/^.*am202.value=(\d*).*$/,"$1");
	}

	var max_GT = 0;
	var button203 = document.getElementById("button203");
	if (button203 && button203.className == "on") {
		max_GT = button203.innerHTML.replace(/\n/g,"").replace(/^.*am203.value=(\d*).*$/,"$1");
	}

	var childs = document.getElementById("planet").childNodes;
	var nb_divs = 0;
	for (var i = 0; i < childs.length; i++) {
		if (childs[i].nodeName.toLowerCase() == "div") nb_divs++;
	}

	var div_parent = document.createElement("div");
	div_parent.className = "slot";
/*	#planet .slot {
		background:url(../img/layout/slots-bg.gif) no-repeat 0px 0px; 
		height:25px;
		font-size:11px;
		line-height:25px;
		text-align:center;
		text-decoration:none;
		overflow:hidden;
		padding:0px;
		position:absolute;
		width:231px;
		z-index:10;
	}*/
	div_parent.style.right = "3px";
	div_parent.style.bottom = (9 + 27*nb_divs) + "px";
	document.getElementById("planet").appendChild(div_parent);

	var div1 = document.createElement("div");
	div1.className = "fleft tips";
//	.fleft {    float:left;}
	div1.style.paddingLeft = "21px";
	div1.style.color = "yellow";
	div1.title = "|Petits Transporteurs necessaires pour vider la planete";
	div1.innerHTML = format(PT, 0, '.') + " PT";// + " Petit Transporter" + (sc>1?"s":"");
	div1.setAttribute("onClick","document.shipsChosen.am202.value=" + PT + "; checkIntInput('ship_202', 0, " + max_PT + "); checkShips('shipsChosen'); return false;");
	div_parent.appendChild(div1);

	var div2 = document.createElement("div");
	div2.className = "fright tips";
//	.fright {   float:right;}
	div2.style.paddingRight = "21px";
	div2.style.color = "yellow";
	div2.title = "|Grands Transporteurs necessaires pour vider la planete";
	div2.innerHTML = format(GT, 0, '.') + " GT";// + " Grand Transporter" + (GT>1?"s":"");
	div2.setAttribute("onClick","document.shipsChosen.am203.value=" + GT + "; checkIntInput('ship_203', 0, " + max_GT + "); checkShips('shipsChosen'); return false;");
	div_parent.appendChild(div2);

	var script = document.createElement('script');
	script.setAttribute("type","text/javascript");
	script.setAttribute("language","javascript");
	script.text = "$('#planet .slot .tips').cluetip({splitTitle:'|',showTitle:false,width:150,positionBy:'auto',leftOffset:20,topOffset:15,cluezIndex:9997,hoverIntent:{sensitivity:1,interval:250,timeout:400}});";
	div_parent.appendChild(script);
})();
