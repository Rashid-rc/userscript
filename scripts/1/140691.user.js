// ==UserScript==
// @name           LoU Baron Bar (philokei edition)
// @namespace      philokei.ch
// @license        Creative Commons Attribution-ShareAlike 3.0 Unported License - http://creativecommons.org/licenses/by-sa/3.0/
// @description    Add Baron information to the players title bar. Created by resurrecting the discontinued "LoU UI MS Baron" script by OzGoober. Updated by philokei
// @include        http://prodgame*.lordofultima.com/*/index.aspx*
// @require        http://sizzlemctwizzle.com/updater.php?id=140691&days=1
// @version        1.0.1
// ==/UserScript==


(function () {
    try {
        var mainLoU_Baron = function () {
            try {
                var oApp, oPlayer, oTech, playerBar, oCity;
                var BaronLabel, BaronValue, PurifiedResourcesLabel, PurifiedResourcesValue,
                    CastleLabel, CastleValue, NeededTALabel, NeededTAValue, darkwood, runestone, veritum, trueseed;
                var NeededBarons = 4;
                var BaronFree = "NO";

                function startCheck() {
                    window.setTimeout(checkIfLoaded, 5000);
                }

                function checkIfLoaded() {
                    try {
                        var isLoaded = false;
                        oApp = qx.core.Init.getApplication(); // application
                        oPlayer = webfrontend.data.Player.getInstance(); // player data
                        

                        if (oApp && oPlayer) {
                            if (oApp.title) {
                                playerBar = oApp.title; // top player info bar
                                oTech = webfrontend.data.Tech.getInstance();

                                if (oTech && oTech.getBonus("baronCount", webfrontend.data.Tech.research) > 0) {
                                    isLoaded = true;
                                }
                            }
                        }

                        if (isLoaded) {
                            console.info("LoU Baron Bar: Injecting");
                            tweakGuiLoU();
                        }
                        else {
                            console.info("LoU Baron Bar: Waiting");
                            startCheck();
                        }
                    }
                    catch (e) {
                        console.info(e);
                    }
                }

                function tweakGuiLoU() {
                    try {
                        var Appearance = "label-playername-banner";
                        var Color = "player-name-banner-dark";
                        var LeftIdent = 975;
                        var VariableIdent = LeftIdent;
                        var VariableIdentSecond;




                        //castles
                        CastleLabel = new qx.ui.basic.Label("Castles");
                        CastleLabel.setAppearance(Appearance);
                        CastleLabel.setTextColor(Color);
                        CastleLabel.setFont("bold"); 
                        CastleLabel.setToolTipText("Show all Castles / Free TA");
                        playerBar.add(CastleLabel, {top: 37, left: VariableIdent=VariableIdent+5});
                        CastleValue = new qx.ui.basic.Label("0");
                        CastleValue.setAppearance(Appearance);
                        CastleValue.setToolTipText("Show all Castles / Free TA");
                        CastleValue.setTextColor("red");
                        CastleValue.setFont("bold"); 
                        playerBar.add(CastleValue, {top: 37, left: VariableIdent=VariableIdent + 45});
                        webfrontend.base.Timer.getInstance().addListener("uiTick",updateCurCastles , this);
                        
                        // Baron Info in Title Bar
                        BaronLabel = new qx.ui.basic.Label("Barons:");
                        BaronLabel.setAppearance(Appearance);
                        BaronLabel.setTextColor(Color);
                        BaronLabel.setFont("bold"); 
                        BaronLabel.setToolTipText("Total / Current / Recruiting / Available");
                        playerBar.add(BaronLabel, {top: 37, left: VariableIdent=VariableIdent+60});
                        BaronValue = new qx.ui.basic.Label("0/0/0/0");
                        BaronValue.setAppearance(Appearance);
                        BaronValue.setToolTipText("Total / Current / Recruiting / Available");
                        BaronValue.setFont("bold"); 
                        playerBar.add(BaronValue, {top: 37, left: VariableIdent=VariableIdent + 45});
                        webfrontend.base.Timer.getInstance().addListener("uiTick", updateCurBarons, this);
                        
                        
                        //purified ress
                        PurifiedResourcesLabel = new qx.ui.basic.Label("PR:");
                        PurifiedResourcesLabel.setAppearance(Appearance);
                        PurifiedResourcesLabel.setTextColor(Color);
                        PurifiedResourcesLabel.setFont("bold"); 
                        PurifiedResourcesLabel.setToolTipText("Purified Ress - Darkwood / Runestone / Veritum / Trueseed");
                        VariableIdentSecond=VariableIdent;
                        playerBar.add(PurifiedResourcesLabel, {top: 25, left: VariableIdent=VariableIdent + 83});
                        PurifiedResourcesValue = new qx.ui.basic.Label("0/0/0/0");
                        PurifiedResourcesValue.setAppearance(Appearance);
                        PurifiedResourcesValue.setFont("bold"); 
                        PurifiedResourcesValue.setToolTipText("Purified Ress - Darkwood / Runestone / Veritum / Trueseed");
                        playerBar.add(PurifiedResourcesValue, {top: 25, left: VariableIdent=VariableIdent + 26});
                        webfrontend.base.Timer.getInstance().addListener("uiTick", updatPurifiedResources, this);
                        
                        //needed ress next TA
                         //purified ress
                         
                        VariableIdent=VariableIdentSecond;
                        NeededTALabel = new qx.ui.basic.Label("NPR:");
                        NeededTALabel.setAppearance(Appearance);
                        NeededTALabel.setTextColor(Color);
                        NeededTALabel.setFont("bold"); 
                        NeededTALabel.setToolTipText("Needed Purified Ress - Darkwood / Runestone / Veritum / Trueseed");
                        playerBar.add(NeededTALabel, {top: 37, left: VariableIdent=VariableIdent + 83});

                        NeededTAValue = new qx.ui.basic.Label("0/0/0/0").set({
                            rich : true
                        });
                        NeededTAValue.setAppearance(Appearance);
                        NeededTAValue.setFont("bold"); 
                        NeededTAValue.setToolTipText("Needed Purified Ress - Darkwood / Runestone / Veritum / Trueseed / Gold (true=enough, false)");
                        playerBar.add(NeededTAValue, {top: 37, left: VariableIdent=VariableIdent + 26});
                        webfrontend.base.Timer.getInstance().addListener("uiTick", updateNeedeToTa, this);
                    }
                    catch (e) {
                        console.log(e);
                    }
                } // tweakGuiLoU

                function updateCurBarons() {
                    var TotalBarons = oPlayer.getBarons();
                    var IdleBarons = oPlayer.getBaronsIdle();
                    var QueuedBarons = oPlayer.getBaronsQueue();
                    var AvailableBarons = oTech.getBonus("baronCount", webfrontend.data.Tech.research) - ((oPlayer.getNumCities() - 1) + IdleBarons + QueuedBarons);
                    BaronValue.setValue(TotalBarons + "/" + IdleBarons + "/" + QueuedBarons + "/" + AvailableBarons);
                    //BaronValue.setValue("100/100/20/100");
                }
                
                function updateCurCastles(){
                   
                  if(oPlayer.getBarons()/oPlayer.getNumCastles()<NeededBarons){
                       
                           BaronFree = "YES";                
                           CastleValue.setTextColor("green");
                   }
                   
                   CastleValue.setValue(oPlayer.getNumCastles()+" / "+BaronFree);
                    
                }

                function updatPurifiedResources() {
                    var pr = oPlayer.getVoidResources();
                    if (pr) {
                        PurifiedResourcesValue.setValue(pr[3][1] + " / " + pr[2][1] + " / " + pr[1][1] + " / " + pr[0][1]);
                        //PurifiedResourcesLabel.setValue("100/100/20/100");
                    }
                }
                
                function updateNeedeToTa(){
                    
                    var pr = oPlayer.getVoidResources();
                    if (pr) {
                        
                  
                    var TAPRNeeded = oTech.__fB[283][(oTech.getBonus("baronCount", webfrontend.data.Tech.research))].r[5];
                    var TAGold = oTech.__fB[283][(oTech.getBonus("baronCount", webfrontend.data.Tech.research))].g;
                    var ActualGold = oPlayer.getGold();
                    
                    var wood = TAPRNeeded - pr[3][1];
                    var stone =TAPRNeeded - pr[2][1];
                    var iron =TAPRNeeded - pr[1][1];
                    var food =TAPRNeeded - pr[0][1];
                    var gold = TAGold -ActualGold;
                 
                    }
                    
                    if(wood<=0){
                        wood=wood*-1;
                        darkwood = "<b style='color:green'>"+wood+"</b>";
                    }
                    else{
                        darkwood = "<b style='color:red'>"+wood+"</b>";
                    }
                    if(stone<=0){
                        stone=stone*-1;
                        runestone = "<b style='color:green'>"+stone+"</b>";
                    }
                    else{
                        runestone = "<b style='color:red'>"+stone+"</b>";
                    }
                      if(iron<=0){
                        iron=iron*-1;
                        veritum = "<b style='color:green'>"+iron+"</b>";
                    }
                    else{
                        veritum = "<b style='color:red'>"+iron+"</b>";
                    }
                    if(food<=0){
                        food=food*-1;
                        trueseed = "<b style='color:green'>"+food+"</b>";
                    }
                    else{
                        trueseed = "<b style='color:red'>"+food+"</b>";
                    }
                    
                    if(gold<=0){
                        gold = "<b style='color:green'>true</b>";
                    }
                    else{
                        gold = "<b style='color:red'>false</b>";
                    }
                   
                           NeededTAValue.setValue(darkwood +" / "+runestone +" / "+ veritum +" / "+trueseed+" / "+gold);
                           
                    
                }
            
                
                startCheck();
                console.log("LoU Baron Bar: Loaded");

            }
            catch (e) {
                console.log(e);
            }
        } // mainLoU_Baron

        var louUIBaronBarScript = document.createElement("script");
        var txt = mainLoU_Baron.toString();
        if (window.opera != undefined) txt = txt.replace(/</g, "&lt;");
        louUIBaronBarScript.innerHTML = "(" + txt + ")();";
        louUIBaronBarScript.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(louUIBaronBarScript);

    }
    catch (e) {
        
    }
})();
