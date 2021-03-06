// ==UserScript==
// @name           player.omroep.nl - Video downloaden met mplayer
// @namespace      http://smorgasbord.gavagai.nl/topics/omroepstreamdump/
// @description    On player.omroep.nl-pages, this pops up a dialog when the player loads. You can copy-paste the contents to a shell (tested with Bash) to dump the videostream to the shell's CWD.
// @include        http://player.omroep.nl/?aflid=*
// @copyright 2009-2010, Wicher Minnaard (http://smorgasbord.gavagai.nl)
// @license GPL version 3 or any later version; http://www.gnu.org/copyleft/gpl.html
// @version 0.0.7
// ==/UserScript==


/*
Recommended: "player.omroep.nl en nos.nl - zonder reclames" @ http://userscripts.org/scripts/show/9025

This script is not fit for general consumption - although installing it does no harm, you won't get much use out of it if you're:
- unfamiliar with using a shell
- a Windows user and unable/unwilling to do some extra work on a technical level beyond that which is reasonably expected of the wildtype Windows user

WARNING: ALWAYS REVIEW THE SHELL COMMAND BEFORE RUNNING IT. This script does basic escaping but it doesn't go to great lengths to validate whatever is sourced from player.omroep.nl; hence; player.omroep.nl might in some way, should you assist, run arbitrary code on your machine.

YOU HAVE BEEN WARNED.


This script makes it easier for you to make fair use of the video content on player.omroep.nl such as available through uitzendinggemist.nl . Please refrain from copyright infringement and use it only to exercise fair use.

- Easy to get to work on Gnu/Linux, BSD etc: install Bash and MPlayer with your package manager. You might have them installed already.
- Bit more work on Mac OS X: use Fink or MacPorts to install MPlayer.
- Even more work on Windows: use Cygwin or win-bash to get Bash; get an MPlayer port somewhere. Or upgrade to a more modern and featureful operating system such as GNU/Linux.
*/

var maxtries = 10; //max domnodeinserts to wait for title & date info
var tries = 0;
var playert = document.getElementById("player");
// Listener for node insertions (generated by omroep.nl's javascript)
if (playert) playert.addEventListener("DOMNodeInserted", genAlert, true);

function genAlert()
  {
  var playert = document.getElementById("player");
  var embedelement = document.getElementById('MediaPlayer');
  if (embedelement.getElementsByTagName("param"))
  //The embed element got inserted and has params - now we have all required parameters for dumping

    {
    var source;
    var params = embedelement.getElementsByTagName("param");
    for (var i = 0; ((i < params.length) && (!source)); i++) 
      {
      if (params[i].getAttribute("name")=="url")
        {
        source = params[i].getAttribute("value").replace("'","\\'"); //These URL's shouldn't have "'" in them but we escape them just to be sure.
        }
      }

    if (source)
      {
      //Create a copy of the title & date info so we can use DOM functions to separate the two
      var pastetext;
      var worktitle = document.importNode(playert.getElementsByTagName("h3")[0],true);
      var worktitledatespan = worktitle.getElementsByTagName("span")[0];
      worktitle.removeChild(worktitledatespan);
      var titel = worktitle.innerHTML.replace("'","\\'"); //Escape ' to make shell-safe
      var datum = worktitledatespan.innerHTML.replace("'","\\'"); //Escape ' to make shell-safe

      if ((titel && datum) || (tries > maxtries)){
        if (!datum) datum = 'dl @ '+Date();
        if (!titel) titel = 'Uitzendinggemist-rip';
        playert.removeEventListener("DOMNodeInserted", genAlert, true);
        pastetext = 'export TIEFDIR="${PWD}"; export TEMPDIR=$(mktemp -d); cd ${TEMPDIR} && '
        pastetext+= "mplayer -dumpstream -user-agent 'Windows-Media-Player/11.0.6001.7000' -playlist '"+source+"' && ";
        pastetext+= 'mv stream.dump ${TIEFDIR}/\''+titel+' - '+datum+'.wmv\' && cd - && rmdir ${TEMPDIR}';
        alert(pastetext);
        //alert('tries: '+tries+'\ndate: '+datum+'\ntitel: '+titel+'\nsource: '+source);
        }
      else
        {
        tries++;
        }
      }
    }
  }
