/*
	FriendFeed The Reef
	http://ffapps.com/tabs
*/

// ==UserScript==
// @name           FriendFeed The Reef
// @namespace      http://reef.beachwalks.tv
// @description    Customize your FriendFeed by adding The Reef
// @include        http://friendfeed.com/*
// @version        0.1
// ==/UserScript==

var ffreef_version = "0.1";

(function() {

  autoUpdateFromUserscriptsDotOrg({
    name: 'FriendFeed The Reef',
		url: 'http://userscripts.org/scripts/source/24466.user.js',
		version: ffreef_version,
	});

  function techmeme_setup() {
		$('.settings').find('.l_tab').after('<td class="l_tab" style="padding-left: 10px;" id="tdtabReef"><div class="rounded bb" id="tabreef"><div class="t"><div class="l"><div class="r"><div class="tl"><div class="tr"><div class="body"><a id="tab-link-thereef" href="#">The Reef</a></div></div></div></div></div></div></div></td>');
    $('#tab-link-thereef').click(function() {
			$('#subtabs').hide();
			$('#body').css("height","100%").html('<div class=iframe style="width:100%;height:100%;"><iframe id="content_iframe" marginWidth=0 marginHeight=0 src="http://reef.beachwalks.tv/" frameBorder=0 style="width:100%;height:100%;overflow:auto;"></iframe></div>');
			$('.tabs').find('td').removeClass("selected");
			$('.tabs').find('td').find('.rounded').removeClass("white");
			$('.settings').find('#tabreef').addClass("white");
			$('.settings').find('#tdtabReef').addClass("selected");
		});
  }

  function lets_jquery() {
		techmeme_setup();
	}

  function jquery_wait() {
    if(typeof unsafeWindow.jQuery == 'undefined') { window.setTimeout(jquery_wait,100); }
    else { $ = unsafeWindow.jQuery; lets_jquery(); }
  }

  jquery_wait();

})();

function autoUpdateFromUserscriptsDotOrg(SCRIPT) {
  // Update code from Junk Blocker: http://loonyone.livejournal.com/
  // usage example
  // autoUpdateFromUserscriptsDotOrg({
  //   name: 'RSS+Atom Feed Subscribe Button Generator',
  //   url: 'http://userscripts.org/scripts/source/688.user.js',
  //   version: "1.2",
  // });
  try {
    if (!GM_getValue) return; // Older version of Greasemonkey. Can't run.

    // avoid a flood of dialogs e.g. when opening a browser with multiple tabs set to homepage
    // and a script with * includes or opening a tabgrop
    var DoS_PREVENTION_TIME = 2 * 60 * 1000;
    var isSomeoneChecking = GM_getValue('CHECKING', null);
    var now = new Date().getTime();
    GM_setValue('CHECKING', now.toString());

    if (isSomeoneChecking && (now - isSomeoneChecking) < DoS_PREVENTION_TIME) return;

    // check daily
    var ONE_DAY = 24 * 60 * 60 * 1000;
    var ONE_WEEK = 7 * ONE_DAY;
    var TWO_WEEKS = 2 * ONE_WEEK;
    var lastChecked = GM_getValue('LAST_CHECKED', null);
    if (lastChecked && (now - lastChecked) < TWO_WEEKS) return;

    GM_xmlhttpRequest({
      method: 'GET',
	  url: SCRIPT.url + '?source', // don't increase the 'installed' count just for update checks
	  onload: function(result) {
	  if (!result.responseText.match(/@version\s+([\d.]+)/)) return;     // did not find a suitable version header

	  var theOtherVersion = parseFloat(RegExp.$1);
	  if (theOtherVersion <= parseFloat(SCRIPT.version)) return;      // no updates or older version on userscripts.orge site

	  if (window.confirm('A new version ' + theOtherVersion + ' of greasemonkey script "' + SCRIPT.name + '" is available.\nYour installed version is ' + SCRIPT.version + ' .\n\nUpdate now?\n')) {
	    GM_openInTab(SCRIPT.url);   // better than location.replace as doing so might lose unsaved data
	  }
	}
      });
    GM_setValue('LAST_CHECKED', now.toString());
  } catch (ex) {
  }
}