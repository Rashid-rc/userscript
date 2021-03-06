/*
    Ad Skipper
    (c) Carlo Zottmann, carlo@g-blog.net
    http://G-Spotting.net/

    Copy, use, modify, spread as you see fit.
*/

// ==UserScript==
// @name            Ad Skipper GamesIndustry.biz
// @namespace       http://docs.g-blog.net/code/greasemonkey
// @description     2005-04-28: Disables the content area ads on GamesIndustry.biz.
// @include         http://*gamesindustry.biz*
// ==/UserScript==

(function() {

    var AdSkipper =
    {
        checkPage: function()
        {
            currentURL = location.href;
            currentDoc = document;

            if (currentURL.match(/^http:\/\/(www\.)?gamesindustry\.biz\//))
            {
                this.injectCSS(".adMPU, .mpuAd { display: none; }\n");
            }
        },


        injectCSS: function(css)
        {
            head = document.getElementsByTagName("head")[0];
            style = document.createElement("style");
            style.setAttribute("type", 'text/css');
            style.innerHTML = css;
            head.appendChild(style);
        },



        ignSkipAd: function()
        {
            document.forward_form.submit();
        }
    }

    AdSkipper.checkPage();

})();
