// ==UserScript==
// @namespace      topcoms
// @description    Puts top "liked" comments on top, like youtube :)
// @include        http*://*.facebook.com/*
// @exclude        http://www.tunisia-sat.com
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// ==/UserScript==

//@classes		   	".comment_like_button": the number of likes.
//@classes			"uiList uiUfi focus_target fbUfi" //comments initial container;
if(unsafeWindow.top != unsafeWindow) return false;
//log to firebug
function log(obj){
	try{
	unsafeWindow.console.log(obj)
	}catch(ex){}
}

//sort array
function sortfunction(a, b){
    if(a<b)return 1
    if(a==b)return 0
    if(a>b)return -1
}

var top_coms_num = GM_getValue('topcomnum',4);
var top_coms_min = GM_getValue('topcommin',3);
var refresh_interval

$(function(){
	addOptions();
	setTimeout(makeTopLikesUp,3000);
	setInterval(makeTopLikesUp,6000);

	$('.topcomoptions').click(function(){
		$(topcomspopup
		$('#navAccount').removeClass("openToggler")
	});

		$('.topcomdialog').fadeOut();
	});
	
		var num = $('#topcomnum').val();
		var min = $('#topcommin').val();
		
		num = isNaN(parseInt(num))?GM_getValue('topcomnum',4):parseInt(num);
		min = isNaN(parseInt(min))?GM_getValue('topcommin',3):parseInt(min);
		
		GM_setValue('topcommin',min);		
		$('.topcomdialog').fadeOut();
	});

function makeTopLikesUp(){
	$.each($('.commentList'),function(){
		//get the <li>'s / comments;
		var commentList = this;
		var lis = $(commentList).find('li:not(.upped)');
		if(lis.length < 10) return true;		
		if($(commentList).hasClass('checked')){
			var len = lis.length;
			if($(commentList).hasClass('had'+len)) return true;
			$(commentList).find('.upped').remove();
			log('removed');
		}
		$(commentList).addClass('checked');
		$(commentList).removeClass(function(index,cls){
    		var classes = cls.split(' ');
			var toberemoved = "";
			for(x in classes){
			    if(classes[x].indexOf('had')==0)
			    	toberemoved += classes[x] + " ";
			}
			    return toberemoved
			});
		$(commentList).addClass('had'+lis.length)
		var liked = new Array();
		var coms  = new Array();		
		$.each(lis,function(){
			//get the like button and parse the number of likes :)
			var likeBtn = $(this).find('.comment_like_button');
			if(likeBtn.length == 0) return true;
			var likes = $(likeBtn).text();
			var spaceIdx = likes.indexOf(' ');
			likes = likes.substring(0,spaceIdx);
			//parse the number of likes
			var numLikes = isNaN(parseInt(likes))?0:parseInt(likes);
			liked.push(numLikes);
			coms.push(this);
		});
		//get the [number of top coms] max values indexes of likes;
		var clone = liked.slice(0);
		var maxVals = getMaxVals(clone,top_coms_num);
		var lastAdded = null;
		for(k=0;k<maxVals.length;k++){
			var val = maxVals[k];
			if(val<top_coms_min)continue;
			var idx = liked.indexOf(val);
			var li = $(coms[idx]).clone().css({backgroundColor:'#DDFFDD'}).addClass('upped');
			$(li).find('.UIImageBlock_Ext').remove();
			//$(li).find('.comment_like_button').parent().attr('class','fsm fwn fcg');
			if(lastAdded == null) 	$(li).prependTo(commentList);
			else					$(li).insertAfter(lastAdded);
			lastAdded = li;
		}
}
function addOptions(){
	$(topcomshtml).insertBefore($('#navAccount ul li:last').get(0));