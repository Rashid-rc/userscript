// ==UserScript==
// @version        0.04
// @name           OGameRediseño Compactador Batallas RDF prueba
// @author         FARSUMI
// @date           2010-06-12
// @namespace      OGame
// @description    OGameRediseño Compactador Batallas RDF prueba
// @include        http://*.ogame.*/game/index.php?page=combatreport*
// ==/UserScript==



(function ()
{

var UPDATE = {
  name: "OGameRediseño Compactador Batallas RDF prueba"
  ,check: "http://userscripts.org/scripts/review/108389.txt"
  ,install: "http://userscripts.org/scripts/source/108389.user.js"
  ,version: "0.04"
  ,msg: "Hay disponible una nueva versión del compactador"
  ,minHours: 3
};




function SAC() {
    var lstNombres = new Array();
    var lstFlotas = new Array();
    
    this.length = function() {
        return lstNombres.length
    }
    
    this.getNombre = function(n) {
        return lstNombres[n];
    }
	
    
    this.getFlotas = function(n) {
        var ret = null;
        if(isNaN(parseInt(n))) {
            for(var i = 0; i < lstNombres.length; i++) {
                if(lstNombres[i] == n) ret = lstFlotas[i];
            }
        }
        else {
            ret = lstFlotas[n];
        }
        return ret;
    }
    

    this.add = function (nombre, idFlota, unidades) {
        var insertado = false;
        for(var i = 0; i < lstNombres.length; i++) {
            if(lstNombres[i] == nombre) {
                insertado = true;
                if(arguments.length == 3) lstFlotas[i].add(idFlota, unidades);
            }
        }
        if(!insertado) {
            var pos = lstNombres.length;
            lstNombres[pos] = nombre;
            lstFlotas[pos] = new Flota();
            if(arguments.length == 3) lstFlotas[pos].add(idFlota, unidades);
        }
        
    }
    
    this.addSupervivientes = function(s) {
        for(var i = 0; i < s.length(); i++) {
            var nombre = s.getNombre(i);
            for(var j = 0; j < lstNombres.length; j++){
                if(lstNombres[j] == nombre) 
                    lstFlotas[j].addSupervivientes(s.getFlotas(i));
            }
            
        }
    }
    
    
    this.ordenar = function() {
        for(var i = 0; i < lstNombres.length; i++) {
            lstFlotas[i].ordenar();
        }
    }
    
    
    this.getCostePerdidas = function(id) {
        var ret = [0,0,0, 0]; // metal, cristal, deu, total
        
        if(id == -1) {
            for(var i = 0; i < lstNombres.length; i++) {
                var coste = lstFlotas[i].getCostePerdidas();
                ret[0] += coste[0];
                ret[1] += coste[1];
                ret[2] += coste[2];
                ret[3] += coste[3]; 
            }
        }
        else {
            var coste = lstFlotas[id].getCostePerdidas();
            ret[0] += coste[0];
            ret[1] += coste[1];
            ret[2] += coste[2];
            ret[3] += coste[3]; 
        }
        
        
        return ret;
    }
    
}

// ============================================================
// ============================================================


function Flota() {
    var idNombre = new Array();
    var nombre = new Array();
    var unidades = new Array();
    var perdidas = new Array();
    
    var datosFlota = [
    ['P.Carga','Nave pequeña de Carga', 2000,2000,0],
    ['Gr.Carga','Nave grande de Carga', 6000,6000,0],
    ['Cazador L.','Cazador ligero', 3000,1000,0],
    ['Cazador P.','Cazador pesado', 6000,4000,0],
    ['Crucero','Crucero', 20000,7000,2000],
    ['Nave de batalla','Nave de batalla', 45000,15000,0],
    ['Acoraz.','Acorazado', 30000,40000,15000],
    ['Bombardero','Bombardero', 50000,25000,15000],
    ['Destructor','Destructor', 60000,50000,15000],
    ['Est.Muerte','Estrella de la muerte', 5000000,4000000,1000000],
    ['Colonizador','Colonizador', 10000,20000,10000],
    ['Reciclador.','Reciclador', 10000,6000,2000],
    ['Sonda','Sonda de espionaje', 0,1000,0],
    ['Satélite S.','Satélite Solar', 0,2000,500],
    ['Misil', 'Lanzamisiles', 2000,0,0],
    ['Láser Peq.','Láser pequeño', 1500,500,0],
    ['Láser Gr.','Lase grande', 6000,2000,0],
    ['C.Gauss','Cañón Gauss', 20000,15000,2000],
    ['C.Iónico','Cañón Iónico', 2000,6000,0],
    ['C.Plasma','Cañón de Plasma', 50000,50000,30000],
    ['Cúpula Peq.','Cúpula pequeña', 10000,10000,0],
    ['Cúpula Gr.','Cúpula grande', 50000,50000,0]];
    
    
    this.length = function () {
        return idNombre.length;
    }
    
    this.getId = function(n) {
        return idNombre[n];
    }
    
    this.getNombre = function(n) {
        var id = idNombre[n]
        var ret = id;
        for(var i = 0; i < datosFlota.length; i++) {
            if(id == datosFlota[i][0]) ret = datosFlota[i][1];
        }
        return ret;
    }
    
    this.getUnidades = function(n) {
        return unidades[n];
    }
    
    this.getPerdidas = function(n) {
        return perdidas[n];
    }
    
    this.add = function(id, u) {
        var insertado = false;
        for(var i = 0; i < idNombre.length; i++) {
            if(idNombre[i] == id) {
                insertado = true;
                unidades[i] += parseInt(u);
                perdidas[i] += parseInt(u);
            }
        }
        
        if(!insertado) {
            var pos = idNombre.length;
            idNombre[pos] = id;
            nombre[pos] = '';
            unidades[pos] = parseInt(u);
            perdidas[pos] = parseInt(u);
        }
    }
    
    
    this.addSupervivientes = function(f) {
        for(var i = 0; i < f.length(); i++) {
            for(var j = 0; j < idNombre.length; j++) {
                if(idNombre[j] == f.getId(i)) {
                    perdidas[j] -= parseInt(f.getUnidades(i));
                }
            }
        }
    }
    
    
    this.ordenar = function() {
        var n_idNombre = new Array();
        var n_nombre = new Array();
        var n_unidades = new Array();
        var n_perdidas = new Array();
        
        var contador = 0;
           
        for(var i = 0; i < datosFlota.length; i++) {
            for(var j = 0; j<idNombre.length; j++) {
                if(idNombre[j] == datosFlota[i][0]) {
                    n_idNombre[contador] = idNombre[j];
                    n_nombre[contador] = datosFlota[i][1];
                    n_unidades[contador] = unidades[j];
                    n_perdidas[contador] = perdidas[j];
                    contador++;
                }
            }
        }
        idNombre = n_idNombre;
        nombre = n_nombre;
        unidades = n_unidades;
        perdidas = n_perdidas;
    }
    
    
    this.getCostePerdidas = function() {
        var ret = [0,0,0, 0];
        for(var i = 0; i < idNombre.length; i++) {
            for(var j = 0; j < datosFlota.length; j++) {
                if(idNombre[i] == datosFlota[j][0]) {
                    ret[0] += (perdidas[i] * datosFlota[j][2]);
                    ret[1] += (perdidas[i] * datosFlota[j][3]);
                    ret[2] += (perdidas[i] * datosFlota[j][4]);
                    ret[3] += ((perdidas[i] * datosFlota[j][2]) + (perdidas[i] * datosFlota[j][3]) + (perdidas[i] * datosFlota[j][4]));
                }
            }
        }
        return ret;
    }
    
    
}


// ============================================================
// ============================================================

// COMPROBADOR DE ACTUALIZACIONES (SCRIPT)


var checkUPDATE = function() {
    var version = UPDATE.version;
    var url = UPDATE.check;
	var now = new Date();
	var str = GM_getValue('lastupdate');
    var hDif = 99999;
    var lastCheck;
    
    if(typeof str != 'undefined') {
        lastCheck = new Date(str);
        hDif = Math.abs(Math.floor((now-lastCheck)/(1000*60*60)));
    }

	
	this.init = function() {
	   if(hDif >= UPDATE.minHours) {
         GM_setValue('lastupdate',now.toString());
         this.check();   
      }
        else {
            var ant_check = GM_getValue('checkver');
            if(typeof ant_check != 'undefined') {
                var thisver = parseInt(version.replace(/\./g,''))+100;
                if(parseInt(ant_check)>thisver){
                    this.doupdate(null,true);
                }
            }
        }
   }

   this.check = function() {
      
       GM_xmlhttpRequest({
            method:"GET",
            url:uurl,
            headers: {
                "Expires":"Mon, 26 Jul 1997 05:00:00 GMT",
                "Last-Modified":"Sun, 25 Jul 2004 16:12:09 GMT",
                "Cache-Control":"no-cache, must-revalidate",
                "Pragma":"nocache"
            },
            onreadystatechange:this.doupdate});
   }

   this.doupdate = function(o, force) {

      var show = false
      if(arguments.length == 2){
          if(force) show = true;
       }
       else {
            if(o.readyState == 4) {
                checkver = o.responseText.substr(0,100);
                checkver = checkver.split('@version')[1];
                checkver = parseInt(checkver.replace(/\./g,''))+100;
                thisver = parseInt(version.replace(/\./g,''))+100;
                if(checkver>thisver) {
                    GM_setValue('checkver', checkver); 
                    show = true;
                }
            }
        }
        
        if(show) {
            var divA = document.createElement('div');
            var html = '<div style="position:absolute;position:fixed;bottom:0;left:0;padding:0.2em 0.35em;color:#FFFFFF;background:#FF0000;font-weight:bold;font-size:small;z-index:99;"';
            html += '<a href="' + UPDATE.install + '" style="color:#FFFFFF">' + UPDATE.msg + '</a></div>';
            divA.innerHTML = html;
            document.body.appendChild(divA);
        }
            
   }
    
    this.init();
}




// ============================================================
// ============================================================



function getElementsByClass(searchClass,node,tag) {
var classElements = new Array();
    if (node == null) 
        node = document;
    if (tag == null) 
        tag = '*';
    var els = node.getElementsByTagName(tag);
    var elsLen = els.length;

    for (var i = 0, j = 0; i < elsLen; i++) {
        var sep = els[i].className.split(" ");
        var content = false;
        
        for(var k = 0; k < sep.length; k++){
            if(sep[k] == searchClass) 
                content = true;
        }
        
        if (els[i].className == searchClass || content) {
            classElements[j] = els[i];
            j++;
        }
   }
   return classElements;
}



function mostrarNumero(num) {
    var negativo = false;
    
    if(parseInt(num) < 0) {
        num = parseInt(num)*-1;
        negativo = true;
    }
    
    var nNmb = String(parseInt(num)); 
    var sRes = "";
    for (var j = 0, i = nNmb.length - 1; i >= 0; i--, j++)
        sRes = nNmb.charAt(i) + ((j > 0) && (j % 3 == 0)? ".": "") + sRes;
    
    if(negativo) sRes = '-' + sRes;    
    
   return sRes;
}

function N(num) {
    var ret = new Array();
    
    if(typeof num == 'object') {
        for(var i = 0; i < num.length; i++) {
            ret[i] = mostrarNumero(num[i]);
        }
        return ret;
    }
    else {   
        return mostrarNumero(num);
    }
}


function codificar(patron, tipo, version) {

    var marcas = new Array();
    var url_script = 'http://userscripts.org/scripts/show/108389';
    var txt_firma = 'Compactador automático de batallas FARSUMI [RDF] [' + version + ']';
    
    patron = '{CENTER}' +  patron + '{/CENTER}';
    
    
    var colores = [
        [/{COLOR_R1}/gi, '#FFCC66'],
        [/{COLOR_R2}/gi, '#9E7625'],
        [/{COLOR_R3}/gi, '#FF0000'], //escombros
        [/{COLOR_R4}/gi, '#F0EC64'], //rec.robo
        [/{COLOR_T1}/gi, '#AA96ED'],
        [/{COLOR_A1}/gi, '#00FF40'],
        [/{COLOR_A2}/gi, '#00DDDD'],
        [/{COLOR_D1}/gi, '#ED7010'],
        [/{COLOR_D2}/gi, '#00DDDD']];


    if(tipo == "HTML") {
    
        marcas = [
            [/{B}/gi, '<b>'],
            [/{\/B}/gi, '</b>'],
            [/{I}/gi, '<i>'],
            [/{\/I}/gi, '</i>'],
            [/{NL}/gi, '<br>\n'],
            [/{CENTER}/gi, '<center>'],
            [/{\/CENTER}/gi, '</center>'],
            [/{SIZE_PEQ}/gi, '<font style="font-size:8pt;">'],
            [/{SIZE_MED}/gi, '<font style="font-size:14pt;">'],
            [/{SIZE_GRA}/gi, '<font style="font-size:18pt;">'],
            [/{\/SIZE}/gi, '</font>'],
            [/{\/COLOR}/gi, '</font>'] ];
            
        patron = patron.replace(/{ENLACE_SCRIPT}/gi, '<a href="' + url_script + '">' + txt_firma + '</a>');

        for(var i = 0; i < colores.length; i++)
            patron = patron.replace(colores[i][0],'<font color="' + colores[i][1] + '">');
    }
    
    if(tipo == "OGame") {
    
        marcas = [
            [/{B}/gi, '[B]'],
            [/{\/B}/gi, '[/B]'],
            [/{I}/gi, '[I]'],
            [/{\/I}/gi, '[/I]'],
            [/{NL}/gi, '\n'],
            [/{CENTER}/gi, '[CENTER]'],
            [/{\/CENTER}/gi, '[/CENTER]'],
            [/{SIZE_PEQ}/gi, '[SIZE=10]'],
            [/{SIZE_MED}/gi, '[SIZE=14]'],
            [/{SIZE_GRA}/gi, '[SIZE=18]'],
            [/{\/SIZE}/gi, '[/SIZE]'],
            [/{\/COLOR}/gi, '[/COLOR]'] ];
            
        patron = patron.replace(/{ENLACE_SCRIPT}/gi, '[url="' + url_script + '"]' + txt_firma + '[/URL]');

        for(var i = 0; i < colores.length; i++)
            patron = patron.replace(colores[i][0],'[COLOR="' + colores[i][1] + '"]');
    }
    
    
    if(tipo == "phpBB") {
    
        marcas = [
            [/{B}/gi, '[b]'],
            [/{\/B}/gi, '[/b]'],
            [/{I}/gi, '[i]'],
            [/{\/I}/gi, '[/i]'],
            [/{NL}/gi, '\n'],
            [/{CENTER}/gi, '[center]'],
            [/{\/CENTER}/gi, '[/center]'],
            [/{SIZE_PEQ}/gi, '[size=9]'],
            [/{SIZE_MED}/gi, '[size=14]'],
            [/{SIZE_GRA}/gi, '[size=18]'],
            [/{\/SIZE}/gi, '[/size]'],
            [/{\/COLOR}/gi, '[/color]'] ];
            
        patron = patron.replace(/{ENLACE_SCRIPT}/gi, '[url=' + url_script + ']' + txt_firma + '[/URL]');

        for(var i = 0; i < colores.length; i++)
            patron = patron.replace(colores[i][0],'[color=' + colores[i][1] + ']');
    }
    
    
   if(tipo == "phpBB3") {
    
        marcas = [
            [/{B}/gi, '[b]'],
            [/{\/B}/gi, '[/b]'],
            [/{I}/gi, '[i]'],
            [/{\/I}/gi, '[/i]'],
            [/{NL}/gi, '\n'],
            [/{CENTER}/gi, '[center]'],
            [/{\/CENTER}/gi, '[/center]'],
            [/{SIZE_PEQ}/gi, '[size=90]'],
            [/{SIZE_MED}/gi, '[size=140]'],
            [/{SIZE_GRA}/gi, '[size=180]'],
            [/{\/SIZE}/gi, '[/size]'],
            [/{\/COLOR}/gi, '[/color]'] ];
            
        patron = patron.replace(/{ENLACE_SCRIPT}/gi, '[url=' + url_script + ']' + txt_firma + '[/URL]');

        for(var i = 0; i < colores.length; i++)
            patron = patron.replace(colores[i][0],'[color=' + colores[i][1] + ']');
    }
    
    
    for(var i = 0; i < marcas.length; i++)
        patron = patron.replace(marcas[i][0],marcas[i][1]);
    
    
    return patron;
}



// ============================================================
// ============================================================


function getLuna() {
   var salida = "";
   var ret = new Array();
   var cresult = document.getElementById('combat_result');
   var str_luna = getElementsByClass('action',cresult)[1].innerHTML.split('<br>');
   if(str_luna.length >= 5) {
      salida =  str_luna[3].replace(/(^s*)|(s*$)/g,"");
   }
   
   if(str_luna.length == 6) {
      salida += '{NL}' + str_luna[4].replace(/(^s*)|(s*$)/g,"");
   }


    return salida;    
}


function getEscombros() {
    var ret = new Array();
    var cresult = document.getElementById('combat_result');
    var str_escombros = getElementsByClass('action',cresult)[1].innerHTML.split('<br>')[2];
    ret[0] = parseInt(str_escombros.split('y')[0].replace(/\D/g,''));
    ret[1] = parseInt(str_escombros.split('y')[1].replace(/\D/g,''));
    ret[2] = parseInt(ret[0]) + parseInt(ret[1]);
    return ret;    
}

function getCaptura() {
    var ret = [0, 0, 0, 0];
    
    if(getMensajeConclusion().indexOf("atacante") != -1) {
        var cresult = document.getElementById('combat_result');
        var str_captura = getElementsByClass('action',cresult)[0].innerHTML;
        var str_metal = str_captura.substring(str_captura.indexOf('captura'), str_captura.indexOf('Metal'));
        var str_cristal = str_captura.substring(str_captura.indexOf(','), str_captura.indexOf('Cristal'));
        var str_deu = str_captura.substring(str_captura.indexOf('y'), str_captura.indexOf('Deuterio'));
        
        if(str_metal.length == 0) str_metal = '0';
        if(str_cristal.length == 0) str_cristal = '0';
        if(str_deu.length == 0) str_deu = "0";
        
        ret[0] = parseInt(str_metal.replace(/\D/g,''));
        ret[1] = parseInt(str_cristal.replace(/\D/g,''));
        ret[2] = parseInt(str_deu.replace(/\D/g,''));
        ret[3] = parseInt(ret[0]) + parseInt(ret[1]) + parseInt(ret[2]);
        
    }
    
    return ret;
}


function getFecha() {
    var listaMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    var strFecha = getElementsByClass("start")[0].innerHTML;
    strFecha = strFecha.substring(strFecha.indexOf('(')+1, strFecha.indexOf(')'));
    
    var fecha = strFecha.split(" ")[0];
    var hora = strFecha.split(" ")[1];
    
    var dia = fecha.split(".")[0];
    var mes = fecha.split(".")[1];
    var anyo = fecha.split(".")[2];
    
    return (dia + " de " + listaMes[parseInt(mes)-1] + " de " + anyo);
}


function getMensajeConclusion() {
    var ret = '';
    var cresult = document.getElementById('combat_result');
    var str = getElementsByClass('action',cresult)[0].innerHTML;
    
    if(str.indexOf('atacante') != -1)
        ret = '¡El atacante ha ganado la batalla!';
        
    if(str.indexOf('defensor') != -1)
        ret = '¡El defensor ha ganado la batalla!';
        
    if(str.indexOf('empate') != -1)
        ret = '¡La batalla ha terminado en empate!';

    
    return ret;
}


function calcularRecicladores(escombros) {
    var ret = 0;
    
    if(escombros > 0) ret = (parseInt(escombros)/20000)+1;
    
    return ret;
}


function getNumRondas() {
    return getElementsByClass("combat_round").length-1;
}


function getCuadrosBBCode(patron) {

   var html = "";

   // cuadros de texto
   html += '<table cellspacing="0" cellpadding="0">';
   html += '<tr><td>'
   // foro ogame
   html += '<b><font color=#FE9A2E>Foro OGame:</font></b><br>';
   html += '<textarea id="txtBB" name="txtBB" style="background-color:#1F273C;width:200px;height:100px;border: 2px solid #FFFFFF;color:#FFFFFF" onFocus="javascript:this.select()">';
   html += codificar(patron, "OGame", UPDATE.version);
   html += '</textarea><br><br>';
   html += '</td><td>'
   // foro phpBB
   html += '<b><font color=#FE9A2E>Foro phpBB:</font></b><br>';
   html += '<textarea id="txtBB" name="txt_phpBB" style="background-color:#1F273C;width:200px;height:100px;border: 2px solid #FFFFFF;color:#FFFFFF" onFocus="javascript:this.select()">';
   html += codificar(patron, "phpBB", UPDATE.version);
   html += '</textarea><br><br>';
   html += '</td></tr><tr><td>'
   // foro phpBB3
   html += '<b><font color=#FE9A2E>Foro phpBB 3:</font></b><br>';
   html += '<textarea id="txtBB" name="txt_phpBB" style="background-color:#1F273C;width:200px;height:100px;border: 2px solid #FFFFFF;color:#FFFFFF" onFocus="javascript:this.select()">';
   html += codificar(patron, "phpBB3", UPDATE.version);
   html += '</textarea><br><br>';
   html += '</td><td>'
   // html
   html += '<b><font color=#FE9A2E>HTML:</font></b><br>';
   html += '<textarea id="txtBB" name="txt_phpBB" style="background-color:#1F273C;width:200px;height:100px;border: 2px solid #FFFFFF;color:#FFFFFF" onFocus="javascript:this.select()">';
   html += codificar(patron, "HTML", UPDATE.version);
   html += '</textarea><br><br>';
   html += '</td></tr></table>'
   
   return html;

}

// ============================================================
// ============================================================

function getColumnas(tabla){
    return tabla.rows[0].cells.length;
}

function getFilas(tabla){
   return tabla.rows.length;
}

function getContenido(tabla, fila, col)
{
    var rowElem = tabla.rows[fila];
    var tdValue = rowElem.cells[col].innerHTML;
    return tdValue;
}


// ============================================================



function getFlotas(numRonda, ataque) {
    
    var ret = new SAC();
    
    var cround = getElementsByClass("combat_round");
    var maxRondas = cround.length-1;
    
    
    if(ronda > maxRondas) return 0 // excede el num de rondas
    
    var idTipoBando = (ataque)? 'round_attacker':'round_defender'; // ronda de ataque o defensa
    
    var ronda = cround[numRonda];

    var rondaBando = getElementsByClass(idTipoBando, ronda)[0];
    var newBack = getElementsByClass("newBack", rondaBando);
    
    for(var i = 0; i < newBack.length ; i++ ) {
        var destroyed = getElementsByClass("destroyed", newBack[i])[0];
        if(typeof destroyed != 'undefined') {
            var nombre = destroyed.innerHTML;
            nombre = nombre.replace('El defensor ', '');
            nombre = nombre.replace('ha sido destruido.', '');
            ret.add(nombre);
        }
        else {
        
            var nombre = getElementsByClass("name", newBack[i])[0].firstChild.textContent;
            var tabla = newBack[i].getElementsByTagName("TABLE")[0];
            
            nombre = nombre.replace('Atacante ', '');
            nombre = nombre.replace('Defensor ', '');

            for(var j = 1; j < getColumnas(tabla); j++) {
                nave = getContenido(tabla, 0, j);
                cantidad = getContenido(tabla, 1, j).replace(/\./gi, '');
                ret.add(nombre, nave, cantidad);
            }
        }
    }
    
        
    return ret;
}


// ============================================================



function actualizar () {

    var codHTML = document.getElementById("codHTML");
    var txtBB = document.getElementById("txtBB");
    var txtInfo = document.getElementById("txtInfo");
    var tipoCodif = document.F1.lstBB.options[document.F1.lstBB.selectedIndex].value;
    
   
    txtInfo.innerHTML = 'Código ' + tipoCodif;

    codHTML.innerHTML = codificar(patron, "HTML", document.F1.centrado.checked, version);
    txtBB.value = codificar(patron, tipoCodif, document.F1.centrado.checked, version);
    
    
}

// ============================================================


    if( location.href.indexOf('/game/index.php?page=combatreport') != -1 || location.href.indexOf('//localhost/') != -1){
        
        var patron = ''; 
        
        
        // comprobacion de nueva version de script
        window.addEventListener("load", function(){checkUPDATE();}, true); 


        // atacantes
        var lstAtaq = getFlotas(0, true);
        var lstAtaq_final = getFlotas(getNumRondas(), true);
        lstAtaq.addSupervivientes(lstAtaq_final);
        
        
        // defensores
        var lstDef = getFlotas(0, false);        
        var lstDef_final = getFlotas(getNumRondas(), false);
        lstDef.addSupervivientes(lstDef_final);
        
        
        lstAtaq.ordenar();
        lstDef.ordenar();
        
        

        
        // *****************************************************************************************************************
        // ***** GENERA PATRON *********************************************************************************************
        
       


        patron = '';
        
        //if(op_centrado == 'checked') { patron = '{CENTER}'; }
        
        patron += '{SIZE_PEQ}Batalla del día ' + getFecha() + '{/SIZE}{NL}';
        
        // ATACANTES
        patron += '{COLOR_T1}{B}{SIZE_GRA}Atacantes (' + lstAtaq.length() + '):{/SIZE}{/B}{/COLOR}{NL}';
        
        for(var i = 0; i < lstAtaq.length(); i++){
             patron += '{COLOR_A1}{B}{SIZE_MED}'+ lstAtaq.getNombre(i) + '{/SIZE}{/B}{/COLOR}{NL}';
             for(var j = 0; j < lstAtaq.getFlotas(i).length(); j++) {
                 var nombre = lstAtaq.getFlotas(i).getNombre(j);
                 var unidades = N(lstAtaq.getFlotas(i).getUnidades(j));
                 var perdidas = N(lstAtaq.getFlotas(i).getPerdidas(j));
                 patron += nombre + " {COLOR_A1}" + unidades + "{/COLOR} {COLOR_A2}perdió " + perdidas +  "{/COLOR}{NL}";
             }
             patron += '{NL}';

             if(lstAtaq.getCostePerdidas(i)[3] != 0) {    
               var coste = N(lstAtaq.getCostePerdidas(i));
               patron += 'Perdidas: {COLOR_R1}' + coste[3] + '{/COLOR}{NL}';
               patron += '( {COLOR_R2}' + coste[0] + '{/COLOR}, Metal  {COLOR_R2}' + coste[1] + '{/COLOR}, Cristal, {COLOR_R2}' + coste[2] + '{/COLOR} Deuterio ){NL}{NL}';
            }
             
        }
        
        
        
         // DEFENSOR
        patron += '{COLOR_T1}{B}{SIZE_GRA}Defensores (' + lstDef.length() + '):{/SIZE}{/B}{/COLOR} {NL}';
        
        for(var i = 0; i < lstDef.length(); i++){
          patron += '{COLOR_D1}{B}{SIZE_MED}'+ lstDef.getNombre(i) + '{/SIZE}{/B}{/COLOR}{NL}';
          for(var j = 0; j < lstDef.getFlotas(i).length(); j++) {
            var nombre = lstDef.getFlotas(i).getNombre(j);
            var unidades = N(lstDef.getFlotas(i).getUnidades(j));
            var perdidas = N(lstDef.getFlotas(i).getPerdidas(j));
            patron += nombre + " {COLOR_D1}" + unidades + "{/COLOR} {COLOR_D2}perdió " + perdidas +  "{/COLOR}{NL}";
          }
          
          if(lstDef.getFlotas(i).length() == 0) {
            patron += "{I}Sin defensas{/I}{NL}";
          }
          
          patron += '{NL}';
          
          if(lstDef.getCostePerdidas(i)[3] != 0) {
             var coste = N(lstDef.getCostePerdidas(i));
             patron += 'Perdidas: {COLOR_R1}' + coste[3] + '{/COLOR}{NL}';
             patron += '( {COLOR_R2}' + coste[0] + '{/COLOR}, Metal  {COLOR_R2}' + coste[1] + '{/COLOR}, Cristal, {COLOR_R2}' + coste[2] + '{/COLOR} Deuterio ){NL}{NL}';
          }
        }
        
        patron += '{SIZE_MED}{COLOR_T1}{B}' + getMensajeConclusion() + '{/B}{/COLOR}{/SIZE}{NL}{NL}';
        
 
 
        // RESUMEN (robos, escombros, perdidas, rentabilidad...)
        

        var perdidasAtaq = lstAtaq.getCostePerdidas(-1);
        var perdidasDef = lstDef.getCostePerdidas(-1);
        var N_perdidasAtaq = N(perdidasAtaq);
        var N_perdidasDef = N(perdidasDef);
        
        var perdidasTotales = new Array();
        perdidasTotales[0] = (perdidasAtaq[0] + perdidasDef[0]);
        perdidasTotales[1] = (perdidasAtaq[1] + perdidasDef[1]);
        perdidasTotales[2] = (perdidasAtaq[2] + perdidasDef[2]);
        perdidasTotales[3] = (perdidasAtaq[0] + perdidasDef[0]) + (perdidasAtaq[1] + perdidasDef[1]) + (perdidasAtaq[2] + perdidasDef[2]);
        var N_perdidasTotales = N(perdidasTotales);


        var escombros = getEscombros();
        var N_escombros = N(escombros);
        
        var captura = getCaptura();
        var N_captura = N(captura); 
        
        
        // RENTABILIDAD Y PORCENTAJE: ATACANTE CON RECICLAJE
        var renta_ataq_conReci = new Array();
        renta_ataq_conReci[0] = (-1*perdidasAtaq[0])+captura[0]+escombros[0];
        renta_ataq_conReci[1] = (-1*perdidasAtaq[1])+captura[1]+escombros[1];
        renta_ataq_conReci[2] = (-1*perdidasAtaq[2])+captura[2];
        renta_ataq_conReci[3] = (-1*perdidasAtaq[3])+captura[3]+escombros[2];
        var N_renta_ataq_conReci = N(renta_ataq_conReci);
        
        var p_renta_ataq_conReci = new Array();
        p_renta_ataq_conReci[3] = Math.floor((renta_ataq_conReci[3]/perdidasAtaq[3])*100);
        p_renta_ataq_conReci[0] = Math.floor((renta_ataq_conReci[0]/perdidasAtaq[0])*100);
        p_renta_ataq_conReci[1] = Math.floor((renta_ataq_conReci[1]/perdidasAtaq[1])*100);
        p_renta_ataq_conReci[2] = Math.floor((renta_ataq_conReci[2]/perdidasAtaq[2])*100);
        var p_renta_ataq_conReci = N(p_renta_ataq_conReci);
        
        
        // RENTABILIDAD Y PORCENTAJE: ATACANTE SIN RECICLAJE
        var renta_ataq_sinReci = new Array();
        renta_ataq_sinReci[0] = (-1*perdidasAtaq[0])+captura[0];
        renta_ataq_sinReci[1] = (-1*perdidasAtaq[1])+captura[1];
        renta_ataq_sinReci[2] = (-1*perdidasAtaq[2])+captura[2];
        renta_ataq_sinReci[3] = (-1*perdidasAtaq[3])+captura[3];
        var N_renta_ataq_sinReci = N(renta_ataq_sinReci);
        
        var p_renta_ataq_sinReci = new Array();
        p_renta_ataq_sinReci[3] = Math.floor((renta_ataq_sinReci[3]/perdidasAtaq[3])*100);
        p_renta_ataq_sinReci[0] = Math.floor((renta_ataq_sinReci[0]/perdidasAtaq[0])*100);
        p_renta_ataq_sinReci[1] = Math.floor((renta_ataq_sinReci[1]/perdidasAtaq[1])*100);
        p_renta_ataq_sinReci[2] = Math.floor((renta_ataq_sinReci[2]/perdidasAtaq[2])*100);
        p_renta_ataq_sinReci = N(p_renta_ataq_sinReci);

        
        // RENTABILIDAD Y PORCENTAJE: DEFENSOR CON RECICLAJE
        var renta_def_conReci = new Array();
        renta_def_conReci[0] = (-1*perdidasDef[0])+escombros[0];
        renta_def_conReci[1] = (-1*perdidasDef[1])+escombros[1];
        renta_def_conReci[2] = (-1*perdidasDef[2]);
        renta_def_conReci[3] = (-1*perdidasDef[3])+escombros[2];
        var N_renta_def_conReci = N(renta_def_conReci);
        
        var p_renta_def_conReci = new Array();
        p_renta_def_conReci[3] = Math.floor((renta_def_conReci[3]/perdidasDef[3])*100);
        p_renta_def_conReci[0] = Math.floor((renta_def_conReci[0]/perdidasDef[0])*100);
        p_renta_def_conReci[1] = Math.floor((renta_def_conReci[1]/perdidasDef[1])*100);
        p_renta_def_conReci[2] = Math.floor((renta_def_conReci[2]/perdidasDef[2])*100);
        p_renta_def_conReci = N(p_renta_def_conReci);
        
        
                
        patron += '{B}Robo:{/B} {COLOR_R4}{SIZE_MED}' + N_captura[0] + '{/SIZE}{/COLOR} Metal, {COLOR_R4}{SIZE_MED}' + N_captura[1] + '{/SIZE}{/COLOR} Cristal y {COLOR_R4}{SIZE_MED}' + N_captura[2] + '{/SIZE}{/COLOR} Deuterio{NL}';
        patron += '{B}Escombros:{/B} {COLOR_R3}{SIZE_GRA}' + N_escombros[0] + '{/SIZE}{/COLOR} Metal y {COLOR_R3}{SIZE_GRA}' +  N_escombros[1] + '{/SIZE}{/COLOR} Cristal  {SIZE_GRA}{COLOR_T1}'   + N(calcularRecicladores(escombros[2])) + "{/COLOR}{/SIZE} recicladores {NL}";
        
        patron += '{NL}{NL}'
        
        patron += '{COLOR_T1}PERDIDAS{/COLOR} Atacantes: {COLOR_R1}' + N_perdidasAtaq[3] + '{/COLOR}{NL}';
        patron += '( {COLOR_R2}' + N_perdidasAtaq[0] + "{/COLOR} metal , {COLOR_R2}" + N_perdidasAtaq[1] + "{/COLOR} cristal, {COLOR_R2}" + N_perdidasAtaq[2] + "{/COLOR} deuterio ){NL}{NL}";
        
        patron += '{COLOR_T1}PERDIDAS{/COLOR} Defensores: {COLOR_R1}' + N_perdidasDef[3] + '{/COLOR}{NL}';
        patron += '( {COLOR_R2}' + N_perdidasDef[0] + "{/COLOR} metal , {COLOR_R2}" + N_perdidasDef[1] + "{/COLOR} cristal, {COLOR_R2}" + N_perdidasDef[2] + "{/COLOR} deuterio ){NL}{NL}";
        
        patron += '{NL}'
        
        
     
        
        // si rentabilidad = infinita, lo cambia por MAX
        patron = patron.replace(/infinity\%/gi, "Máx.");
        patron = patron.replace(/NaN\%/gi, "Máx.");
        
        
        if(getLuna().length > 4)
            patron += '{NL}' + getLuna() + '{NL}'
        
        
        patron += '{NL}{SIZE_MED} Perdidas {COLOR_T1}TOTALES{/COLOR}: {B}{COLOR_R3}' + N(perdidasTotales[3]) + '{/COLOR}{/B}{/SIZE}{NL}';
        
        patron += '{NL}{SIZE_PEQ}{ENLACE_SCRIPT}{/SIZE}{NL}'; 
        
        
        
        // *****************************************************************************************************************
        // ***** PATRON MINI ***********************************************************************************************
        
        
        var patronMini = "{COLOR_T1}{B}Ataque-Granjeo{/B}{/COLOR} [ {COLOR_A1}";
                
        for(var i = 0; i < lstAtaq.length(); i++){
             patronMini  += ''+ lstAtaq.getNombre(i) + '';
        }
        
        patronMini += ' .vs. ';
        
         for(var i = 0; i < lstDef.length(); i++){
          patronMini += ''+ lstDef.getNombre(i) + '{/COLOR}';
        }
        
        patronMini += ' ]{NL}{COLOR_T1}{B}Renta atacante: {/B}{/COLOR} {COLOR_R4}' + N_renta_ataq_conReci[0] + '{/COLOR} Metal, {COLOR_R4}' + N_renta_ataq_conReci[1] + '{/COLOR} Cristal, {COLOR_R4}' + N_renta_ataq_conReci[2] + '{/COLOR} Deuterio {NL}'; 


      
        // *****************************************************************************************************************
        // ***** MOSTRAR ***************************************************************************************************
        
        var html = '';
      
      //cabecera
        html +=  '<div><table border="0" width="100%" style="">';
        html += '<tr><td height="30" bgcolor="transparent" style="border: 0px solid #000000;">';
        html += '<p align="center"><font style="font-size:12pt;" color="#FF6600">';
        html += '</br><img src="http://anti-k.webcindario.com/Foro/epico1_a.gif" align="right"><img src="http://anti-k.webcindario.com/Foro/epico1_a.gif" align="left"></br><b>COMPACTADOR DE BATALLAS [RDF]<p align="center"></br><a target="_blank" href="http://www.facebook.com/pages/Recicladores-de-Flotas/214955861877274"><img style="opacity:0.5;filter:alpha(opacity=50)" onmouseover="this.style.opacity=1.0;this.filters.alpha.opacity=100" onmouseout="this.style.opacity=0.5;this.filters.alpha.opacity=50" src="http://anti-k.webcindario.com/Foro/faceforo.gif"></a><a target="_blank" href="http://twitter.com/#!/ReciclaDeFlotas"><img style="opacity:0.5;filter:alpha(opacity=50)" onmouseover="this.style.opacity=1.0;this.filters.alpha.opacity=100" onmouseout="this.style.opacity=0.5;this.filters.alpha.opacity=50" src="http://anti-k.webcindario.com/Foro/twitterforo.gif"></a><a target="_blank" href="http://www.recicladoresdeflotas.tk"><img style="opacity:0.5;filter:alpha(opacity=50)" onmouseover="this.style.opacity=1.0;this.filters.alpha.opacity=100" onmouseout="this.style.opacity=0.5;this.filters.alpha.opacity=50" src="http://anti-k.webcindario.com/Foro/favicon2.3.gif"></a><a target="_blank" href="http://www.youtube.com/user/RecicladoresDeFlotas?feature=mhee"><img style="opacity:0.5;filter:alpha(opacity=50)" onmouseover="this.style.opacity=1.0;this.filters.alpha.opacity=100" onmouseout="this.style.opacity=0.5;this.filters.alpha.opacity=50" src="http://anti-k.webcindario.com/Foro/youtubeforo.gif"></a></p>';
        html += '</font></p></td></tr></table></div>';
        // ...
        html += '<div style="font-size:14px;font-family:Verdana,sans-serif;">';
        html +=  '<br><center><table border="0" width="90%" style="">';
        html += '<tr><td colspan="2" height="450" bgcolor="transparent" style="border: 2px solid #1F273C;"><br><br>'
        html += '<div id="codHTML">' + codificar(patron, 'HTML', UPDATE.version) + '</div>';
        html += '</td></tr>';
        html += '<tr><td><br><center>';
        
        html += getCuadrosBBCode(patron);
        
        html += '</center></td></tr></table></center><br>'
        
        
        // patron mini
              //cabecera
        html +=  '<div><table border="0" width="100%" style="">';
        html += '<tr><td height="30" bgcolor="transparent" style="border: 0px solid #000000;">';
        html += '<p align="center"><font style="font-size:12pt;" color="#FF6600">';
        html += '</br><b>COMPACTADO MINIMO [RDF]</b>';
        html += '</font></p></td></tr></table></div>';

        html +=  '<br><center><table border="0" width="90%" style="">';
        html += '<tr><td colspan="2" height="100" bgcolor="transparent" style="border: 2px solid #1F273C;"><br><br>'
        html += '<div id="codHTML">' + codificar(patronMini, 'HTML', UPDATE.version) + '</div>';
        html += '</td></tr>';
        html += '<tr><td><br><center>';
        
        html += getCuadrosBBCode(patronMini);
        
        html += '</center></td></tr></table></center><br>'
      
      
         html += '</div>';
      

      

        var compactador = document.createElement('div');
        var master = document.getElementById("master");
        
        compactador.innerHTML = html;
        master.insertBefore(compactador, master.firstChild);
        
        

    }
    
   
}) ()