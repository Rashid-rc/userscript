// ==UserScript==

// @name     Install Theme Grim Reaper for Google
// @version     26.01.2014

// ==/UserScript==
@namespace url(http://www.w3.org/1999/xhtml);

@-moz-document url-prefix(https://maps.google.co.uk),
               url-prefix(http://www.google),
               url-prefix(http://images.google),
               url-prefix(http://news.google),
               url-prefix(http://blogsearch.google),
               url-prefix(http://books.google),
               url-prefix(http://209.85.165.104),
               url-prefix(http://translate.google),
               url-prefix(http://video.google), 
               url-prefix(https://encrypted.google),
               url-prefix(https://www.google), 
               url-prefix(https://accounts.google){
 
body,.gssb_m,.gbmc,#hdtbSum,#hdtb_more_mn.hdtb-mn-o,.hdtbItm,.hdtbU,.hdtb-mn-o,.cdr_dlg,#cdrlnk,.action-menu-panel.ab_dropdown,#header #logo,.exydlg ,.hdtb-mn-c,#qbp,.goog-menu,.gb_o,.gb_r {
  background: #101010 url("http://img841.imageshack.us/img841/8639/50m4.png")
 fixed!important;
background-size: cover !important;}


*{background-color: transparent !important;}

.kno-sh,.wta,.top-shopping-title-text,#Email,#Passwd,#lc-input,#footer,.ktf.mini.exymm.exyw,.ktf.mini.exymm.exyh,.dict.vk_c.vk_bk,INPUT#prc_min,INPUT#prc_max,#qbui,#search_box,#gb a.gb_r,.lst-t {background:transparent!important;}

#gbx1,.google-header-bar,#footer,.hdtb-mn-c,.gb_P,.gb_R,.gb_U,.gb_X {border:transparent!important;}

#gbx3,#gbgsa,#hpplink,.google-footer-bar,#pmocntr2,#gbql,.mn-dwn-arw,
#gbz,#ab_ctls,.smli,.footer.content.clearfix,.prcmg,.c.commercial-unit.commercial-unit-desktop-rhs.rhsvw,#gbqld,
.fbar,#epbar,.gb_K,.gb_L{display:none!important;}
           
.gbto .gbmab, .gbto .gbmac {
    visibility: hidden!important;}

                /*search and suggest box*/
.gssb_e,.c.commercial-unit.commercial-unit-desktop-top,.gssb_m,.gbmc,.kno-ec.rhsvw.vk_rhsc.kno-ec-si,#epbar,.signin-box,.vk_c ,.gb_o,.gb_r {box-shadow: 0px 0px 4px rgb(222,222,222)!important;
    border: 0px solid !important;}
    
#gbqfb{margin-left:3px!important;}

DIV.gspr_a{color: rgb(236, 236, 236)!important;
text-shadow: 0px 0px 2px rgb(233,0,0)!important;}

/*hover*/.gssb_i, .rg_fbl:hover ,.hdtb-tl:hover,.Za:hover,#doodle-site-navigation li a:hover,#ms a:hover,li.psgi:hover{background: -webkit-linear-gradient( left, rgb(50, 50, 50),rgb(110,10,0))!important;
background-image: -moz-linear-gradient(  to left, rgb(50, 50, 50),rgb(110,10,0))!important;}  


#gbqfqw,.kno-ec.rhsvw.vk_rhsc,.kno-mcl.rhsvw.vk_rhsc,#Email,#Passwd,.rhsvw.vk_rhsc,.rg_fbl,.action-menu-panel.ab_dropdown,.hdtb-mn-o,.exydlg,#qbp,.goog-menu{box-shadow: 0px 0px 4px rgb(222,222,222)!important;
    border: 0px solid !important;}
    
#gbqfqw:hover{box-shadow: 0px 0px 6px rgb(200,50,50)!important;}
                   
              /*dropdown menu link hover*/
A.q.qs:hover,.hdtbItm a:hover,.action-menu-button:hover,LI.action-menu-item.ab_dropdownitem:hover, #cdrlnk{color: rgb(190, 100, 100)!important;
background-color:transparent!important;}


                       /*sign in buttons*/
.gbqfbb,#hdtb_msb .hdtb-tl-sel,A#link-signup.g-button.g-button-red,.gbgs,A#gbmplp.gbiba.gbp1,#gb_70.gbgs,.g-button-submit,.gbqfb,a.gbqfbb,#gbgs3,#smb,#gbqfbb,#gbqfba,.clickable-dropdown-arrow.ab_button,.ksb.mini,.ksb,.kd-button,#search_button,.goog-flat-menu-button.goog-flat-menu-button,#gb a.gb_y.gb_y,.gb_8a.gbp1.gb_x,.gb_x,.gb_4a,#gb a.gb_D.gb_D,.gb_cb{box-shadow: 0px 0px 4px rgb(222,222,222)!important;
    color:#999!important;
    border: 1px solid !important;
    border-color:#123!important;
    background: -webkit-linear-gradient( top, rgb(50, 50, 50),rgb(6,6,6))!important;
background-image: -moz-linear-gradient( top center , rgb(50, 50, 50),rgb(6,6,6))!important;}

.gbqfbb:hover,#hdtb_msb .hdtb-tl-sel:hover,A#link-signup.g-button.g-button-red:hover,.gbgs:hover,A#gbmplp.gbiba.gbp1:hover,#gb_70.gbgs:hover,.g-button-submit:hover,.gbqfb:hover,a.gbqfbb:hover,#gbgs3:hover,#smb:hover,#gbqfbb:hover,#gbqfba:hover,.clickable-dropdown-arrow.ab_button:hover,.ksb.mini:hover,.ksb:hover,.kd-button:hover,#search_button:hover,.goog-flat-menu-button.goog-flat-menu-button:hover,#gb a.gb_y.gb_y:hover,.gb_8a.gbp1.gb_x:hover,.gb_x:hover,.gb_4a:hover,#gb a.gb_D.gb_D:hover,.gb_cb:hover{box-shadow: 0px 0px 5px rgb(200,50,50)!important;
    color:#666!important;
    border: 1px solid !important;
    border-color:#123!important;
    background: -webkit-linear-gradient( top , rgb(15, 15, 15),rgb(40,40,40))!important;
background-image: -moz-linear-gradient( top center , rgb(15, 15, 15),rgb(40,40,40))!important;}

                      /*links*/
a:link ,INPUT#gbqfq.gbqfif,.mn-hd-txt,#hdtb_tls,SPAN,B,div,#Email,#Passwd{color: rgb(236, 236, 236)!important;
text-shadow: 0px 0px 2px rgb(233,0,0)!important;}

a:link:hover {text-shadow: 0px 0px 6px rgb(255,100,100)!important;}
.kno-fv-vq.fl,SPAN{color: rgb(200, 200, 200)!important;}
 
CITE,td{color: rgb(200, 200, 200)!important;
text-shadow: 0px 0px 6px rgb(233,0,0)!important;}

.st,.med{color: rgb(190, 10, 13)!important;
text-shadow: 0px 0px 4px rgb(233,0,0)!important;}
 
a:visited {color: rgb(200, 60, 60)!important;}
  
#hdtb_msb .hdtb_mitem.hdtb_msel {color: rgb(190, 10, 13)!important;
border-bottom: 3px solid rgb(190, 10, 13)!important;}

             
                   /*home page logo*/
#lga>* {background: url(http://img266.imageshack.us/img266/8567/nnyw.png)no-repeat!important;
height: 0px !important;
padding:90px!important;
width: 400px!important;
position: absolute!important;
top: 220px!important;
left: 40%!important;
z-index: -1!important;
margin-left: -18px!important;}
#lga>* * {opacity:0!important;}
div[nowrap=nowrap] {position:static!important;}

                        /*search page logo*/
 .gb_ja .gb_g{
  background-image:url(http://i1324.photobucket.com/albums/u604/maksta/cooltext1154033677_zpscdcce715.png)!important;
  height:53px !important;
  width:110px !important;
  background-size: 110px 50px !important;
  background-position: 0px 5px!important;}
          
             /*bottom soouls logo*/
.star div,
.star span,
a#logo,
.csb{
  background-image:url(http://i1324.photobucket.com/albums/u604/maksta/soouls_zpsb9c1c567.png)!important}


              /*luckymouse GOOGLE SIGN IN*/
.google-header-bar,
.sign-in ~ *,
.google-footer-bar {display: none !important;}

/* Adjust */
.wrapper {
width: 100% !important;
height: 100% !important; 
display: table !important;}

.main.content {
width: 100% !important;
display:table-cell !important;
vertical-align: middle !important;
min-width: 0 !important;
max-width: none !important;
padding: 0 !important;}

.sign-in {
float: none !important; 
margin: 0 auto !important;
width: 40% !important;
min-width: 450px !important;}
.signin-box {margin: 0 !important;}

                         /*image sliders*/
.prp ,.klnav.klright,.klnav.klleft
   {box-shadow: 0px 0px 4px rgb(222,222,222)!important;
    color:#999!important;
    border: 1px solid !important;
    border-color:#123!important;
    background: -webkit-linear-gradient( top , rgb(50,50,50),   
    rgb(6,6,6))!important;
background-image: -moz-linear-gradient( top center , rgb(50,50,50),   
    rgb(6,6,6))!important;}


 *{cursor: url("http://i1324.photobucket.com/albums/u604/maksta/cur117_zps1ead7d89.gif"), default !important; }  

#tads,#tadsb{border-radius:5px!important;
width: 91.5% !important;}

/*search page background*/
DIV#center_col{
   border-radius:5px!important;
background: -webkit-linear-gradient(  left , rgba(0,0,0,.9),   
    rgba(10,10,10,.2))!important;
background-image: -moz-linear-gradient(  to right , rgba(0,0,0,.9),   
    rgba(10,10,10,.2))!important;}

#rhs .vk_rhsc{
   border-radius:5px!important;
background: -webkit-linear-gradient(  left, rgba(10,10,10,.2),   
rgba(20,20,20,.1))!important;
background-image: -moz-linear-gradient(  to right , rgba(10,10,10,.2),   
rgba(20,20,20,.1))!important;}

OL.dict.vk_c.vk_bk,DIV#cwmcwd.vk_c,#rhs .vk_rhsc{box-shadow: none!important;}

           /* top search background and shadow finally*/
.gb_pb > .gb_f:before,.gb_qb:before,.gb_rb:before,.gb_sb:before
{background:transparent!important;}
.gb_qb > .gb_f{border-bottom: 0px  !important;}

#hdtbSum{border-bottom: 0px  !important;
box-shadow: 0px 0px 4px rgb(222,222,222)!important;}


 
}