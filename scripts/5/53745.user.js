// ==UserScript==
// @name           Friends For Sale Cheater
// @namespace      http://userscripts.org/scripts/show/24984
// @include        http://apps.facebook.com/friendsforsale/chores*
// @require        http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js
// @version	1.1
// ==/UserScript==

var FFS = {
	performClick : function(node) {
		var evt = document.createEvent("MouseEvents");
		evt.initEvent("click", true, false);
		node.dispatchEvent(evt);
	},
	
	refresh : function() {
		window.location.reload( false );
	},
	
	nextPage : function() {
		var next = $('#app7019261521_pet_value div.pagination a:last');
		if (next.html() == 'Next') {
			FFS.performClick(next[0]);
			window.setTimeout(FFS.refresh, 5000);
		}
		else {
			alert('DONE');
		}
	},
	
	work : function() {
		FFS.performClick($('div.left_column div.headline ul.filters li:eq(1) a')[0]);
		
		
		var pets = $('#app7019261521_pet_value span.pet_container a');
		pets.each(function(i) {
			var pet = pets.eq(i);
			FFS.performClick(pet[0]);
			
			var energy = $('span.energy', pet).html();
			
			var point = parseInt(energy.match(/([0-9]+)/i)[1]);
			
			var worked = false;
			
			if (point >= 100) {
				worked = true;
			
				var work;
				
				if (point == 100) {
					// date
					work = $('span.chore_container:eq(0) a');
				}

				FFS.performClick(work[0]);
				var parity=i%2;
				// friend
				//var randFriend = Math.floor(Math.random() * 9);
				//var friend = $('span.friend_container:eq('+ randFriend +') a');
				
				if(parity==0){
					var friend = $('span.friend_container:eq('+22+') a');
				}
				if(parity==1){
					var friend = $('span.friend_container:eq('+12+') a');
				}
				FFS.performClick(friend[0]);
				
				
				// work
				var work = $('div.buy a');
				FFS.performClick(work[0]);
			}
			
			if (i == pets.length - 1) {
				FFS.nextPage();
			}
			
			if (worked) {
				return false;
			}
		});
		
	}
}

window.setTimeout(FFS.work, 5000);