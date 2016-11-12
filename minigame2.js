$(document).ready(function(){ 

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
function deleteCookie(delcookie) {
	
	document.cookie = delcookie + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";

	}
function setCookie(cname, cvalue) {
    document.cookie = cname + "=" + cvalue + ";";
}

function cookietoviarble(cname){
	 newcookie = getCookie(cname);
	 eval(cname + "=" + newcookie + ";");
}

function doCookie(cname,initial) {
    thecookie = getCookie(cname);
    if (thecookie != "") {
  cookietoviarble(cname);
    } else {
     setCookie(cname, initial);
	 cookietoviarble(cname);
        }
    }
 function deleteallcookies(){
    var cookies = document.cookie.split(";");
        for (var i = 0; i < cookies.length; i++){   
            var spcook =  cookies[i].split("=");
            document.cookie = spcook[0] + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC";                                
        }
    }


function move() {


  elem = document.getElementById("bar1");  
 doCookie("upgradeenergy1init","true");
 doCookie("upgradeenergy2init","true");
 doCookie("upgradeprobarenergy1init","true")
 doCookie("upgradeprobarenergy2init","true");
 
 doCookie("achievementstatus1","true");
 doCookie("achievementstatus2","true");
 doCookie("achievementstatus3","true");
 doCookie("achievementstatus4","true");
 doCookie("achievementstatus5","true");
 doCookie("achievementstatus6","true");
 
 doCookie("resolution","2");
 doCookie("width1","10");
 doCookie("time",eval(1000/200));
 doCookie("init1","true");
 //related to probar
 doCookie("probarcounter","0");
 doCookie("widthpercentage","0");
 doCookie("ProbarpercentageA","0");
 doCookie("Probarpercentage","0");
 doCookie("probarstartdate","0");
 doCookie("probarstartdateI","0");
 doCookie("probarreduction","0");
 doCookie("timesprobarcompleted","0");
  
 doCookie("totalenergyed","0");


  //orginal total gain for each building
 doCookie("epcgaintotal1","0");
 doCookie("epcgaintotal2","0");

 doCookie("epsgaintotal1","0");
 doCookie("epsgaintotal2","0");
 doCookie("epsgaintotal3","0");
 
  //orginal number of buildings
 doCookie("BuildingClickNumber0000","0");
 doCookie("BuildingClickNumber0001","0");
 doCookie("BuildingClickNumber0002","0");
 
 doCookie("BuildingAutoNumber0000","0");
 doCookie("BuildingAutoNumber0001","0");
 doCookie("BuildingAutoNumber0002","0");
  //orginal costs
 doCookie("BuildingClickOriginalCost0000","5");
 doCookie("BuildingClickOriginalCost0001","50");
 doCookie("BuildingClickOriginalCost0002","400");
  
 doCookie("BuildingAutoOriginalCost0000","100");
 doCookie("BuildingAutoOriginalCost0001","1000");
 doCookie("BuildingAutoOriginalCost0002","7500");
  
 // cost1 = orginalcost1;
 // cost2 = orginalcost2;
   
 // egcost1 = orginalegcost1;
 // egcost2 = orginalegcost2;
 // egcost3 = orginalegcost3;
  
  //upgrade costs
 doCookie("upgradeenergy1cost","200");
 doCookie("upgradeenergy2cost","1500");
 doCookie("upgradeprobarenergy1cost","200");
 doCookie("upgradeprobarenergy2cost","400");
  //orginal click 
 doCookie("clicked","0");
 doCookie("clickenergy","0");
 
  //multiplyier 
 doCookie("emultiply","1");

  //individual multiplyier 
 doCookie("epcmultiply1","1");
 doCookie("epcmultiply2","1");
 doCookie("epcmultiply3","1");
 
 doCookie("egmultiply1","1");
 doCookie("egmultiply2","1");
 doCookie("egmultiply3","1");
  //orginal individual energy gain
  //not needed as these value are re calculated every time
 /*
 doCookie("epcgain1","0");
 doCookie("epcgain2","0");
 doCookie("epsgain1","0");
 doCookie("epsgain2","0");
 doCookie("epsgain3","0");
 */
  //orginal increment energy for individual (starting value)
 doCookie("BuildingClickOrginalValue0000","0.75");
 doCookie("BuildingClickOrginalValue0001","4");
 doCookie("BuildingClickOrginalValue0002","25");
 
 doCookie("BuildingAutoOrginalValue0000","0.75");
 doCookie("BuildingAutoOrginalValue0001","5");
 doCookie("BuildingAutoOrginalValue0002","20");
  //orginal energy gain
 doCookie("orginalgain","1");
 doCookie("orginalepsgain","0");

  //orginal energy 
 doCookie("thetotal","0");
 
 //new upgrade
 doCookie("upgrade9000","0");
  
 //EnergyGoals
 doCookie("EnergyGoalLevel","0");
 doCookie("EnergyGoalStart","50");
 
  
 //research points
 doCookie("ResearchPoints","0");
 
 //research costs
 doCookie("cost9000E","25");
 doCookie("cost9000R","0");
 
 doCookie("cost8000E","125");
 doCookie("cost8000R","0.75");
 
 doCookie("cost8081E","400");
 doCookie("cost8081R","1.25");
 
 doCookie("cost8091E","500");
 doCookie("cost8091R","1.5");
 
 doCookie("cost8001E","1500");
 doCookie("cost8001R","2");
 
 doCookie("cost8002E","10000");
 doCookie("cost8002R","4");
 

 //research levels
 doCookie("unqID9000lvl","0");
 doCookie("unqID8000lvl","0");
 doCookie("unqID8001lvl","0");
 doCookie("unqID8081lvl","0");
 doCookie("unqID8091lvl","0");
 //others
 
 //GLOBAL VALUES INITIALIZE
 
 probarcounterbasevalue = 2000;
setTimeout(function() {
  setInterval(savegamecookie, 30000);
}, 5000);

 $( "#savebox").click(function() {
savegamecookie();
 });
number = 0;
function notify(data){
	
	$("#centernotify").append("<div id=\"notification"+ number +"\" class=\"notificationclass\" style=\"display:none;\">"+ data + "</div>")
	$("#notification" + number).show("fast").delay(5000).hide("fast").queue(function(next) {$(this).remove();next();});
	
	number = $(".notificationclass").length;
	number = number + 1;
}
function AddEvent(html_element, event_name, event_function) 
{
   if(html_element.attachEvent) 
      html_element.attachEvent("on" + event_name, function() {event_function.call(html_element);}); 
   else if(html_element.addEventListener) 
      html_element.addEventListener(event_name, event_function, false); 
}

AddEvent(window,'keydown',function(e){
if (e.ctrlKey && e.keyCode==83) {savegamecookie();e.preventDefault();}
});
 
function savegamecookie(){
 notify("Game saved");
 setCookie("resolution",resolution);
 setCookie("width1",width1);
 setCookie("time",time);
 setCookie("init1",init1);
 setCookie("totalenergyed",totalenergyed);

 //related to probar
 setCookie("probarcounter",probarcounter);
 setCookie("widthpercentage",widthpercentage);
 setCookie("ProbarpercentageA",ProbarpercentageA);
 setCookie("Probarpercentage",Probarpercentage);
 setCookie("probarstartdate",probarstartdate);
 setCookie("probarstartdateI",probarstartdateI);
 setCookie("probarreduction",probarreduction);
 setCookie("timesprobarcompleted",timesprobarcompleted);
 
  //orginal total gain for each building
 setCookie("epcgaintotal1",epcgaintotal1);
 setCookie("epcgaintotal2",epcgaintotal2);

 setCookie("epsgaintotal1",epsgaintotal1);
 setCookie("epsgaintotal2",epsgaintotal2);
 setCookie("epsgaintotal3",epsgaintotal3);
 
  //orginal number of buildings
 setCookie("BuildingClickNumber0000",BuildingClickNumber0000);
 setCookie("BuildingClickNumber0001",BuildingClickNumber0001);
 setCookie("BuildingClickNumber0002",BuildingClickNumber0002);

 setCookie("BuildingAutoNumber0000",BuildingAutoNumber0000);
 setCookie("BuildingAutoNumber0001",BuildingAutoNumber0001);
 setCookie("BuildingAutoNumber0002",BuildingAutoNumber0002);
  //orginal costs
 setCookie("BuildingClickOriginalCost0000",BuildingClickOriginalCost0000);
 setCookie("BuildingClickOriginalCost0001",BuildingClickOriginalCost0001);

 setCookie("BuildingAutoOriginalCost0000",BuildingAutoOriginalCost0000);
 setCookie("BuildingAutoOriginalCost0001",BuildingAutoOriginalCost0001);
 setCookie("BuildingAutoOriginalCost0002",BuildingAutoOriginalCost0002);

   

  
 // cost1 = orginalcost1;
 // cost2 = orginalcost2;
   
 // egcost1 = orginalegcost1;
 // egcost2 = orginalegcost2;
 // egcost3 = orginalegcost3;
  
  //upgrade costs
 setCookie("upgradeenergy1cost",upgradeenergy1cost);
 setCookie("upgradeenergy2cost",upgradeenergy2cost);
 setCookie("upgradeprobarenergy1cost",upgradeprobarenergy1cost);
 setCookie("upgradeprobarenergy2cost",upgradeprobarenergy2cost);
 
 
  //orginal click 
 setCookie("clicked",clicked);
 setCookie("clickenergy",clickenergy);
 
  //multiplyier 
 setCookie("emultiply",emultiply);

  //individual multiplyier 
 setCookie("epcmultiply1",epcmultiply1);
 setCookie("epcmultiply2",epcmultiply2);
 setCookie("epcmultiply3",epcmultiply3);
 
 setCookie("egmultiply1",egmultiply1);
 setCookie("egmultiply2",egmultiply2);
 setCookie("egmultiply3",egmultiply3);
  //orginal individual energy gain
 //not needed as these value are re calculated every time
 /*
 setCookie("epcgain1",epcgain1);
 setCookie("epcgain2",epcgain2);
 
 setCookie("epsgain1",epsgain1);
 setCookie("epsgain2",epsgain2);
 setCookie("epsgain3",epsgain3);
 */
  //orginal increment energy
 setCookie("BuildingClickOrginalValue0000",BuildingClickOrginalValue0000);
 setCookie("BuildingClickOrginalValue0001",BuildingClickOrginalValue0001);
 setCookie("BuildingClickOrginalValue0002",BuildingClickOrginalValue0002);
 
 setCookie("BuildingAutoOrginalValue0000",BuildingAutoOrginalValue0000);
 setCookie("BuildingAutoOrginalValue0001",BuildingAutoOrginalValue0001);
 setCookie("BuildingAutoOrginalValue0002",BuildingAutoOrginalValue0002);
  //orginal energy gain
 setCookie("orginalgain",orginalgain);
 setCookie("orginalepsgain",orginalepsgain);

  //orginal energy 
 setCookie("thetotal",thetotal);
 
 setCookie("upgradeenergy1init",upgradeenergy1init);
 setCookie("upgradeenergy2init",upgradeenergy2init);
 setCookie("upgradeprobarenergy1init",upgradeprobarenergy1init);
 setCookie("upgradeprobarenergy2init",upgradeprobarenergy2init);
 
 
 setCookie("achievementstatus1",achievementstatus1);
 setCookie("achievementstatus2",achievementstatus2);
 setCookie("achievementstatus3",achievementstatus3);
 setCookie("achievementstatus4",achievementstatus4);
 setCookie("achievementstatus5",achievementstatus5);
 setCookie("achievementstatus6",achievementstatus6);

 //new upgrade
 setCookie("upgrade9000",upgrade9000);
 
 //EnergyGoals
 setCookie("EnergyGoalLevel",EnergyGoalLevel);
 setCookie("EnergyGoalStart",EnergyGoalStart);
 
 //research points
 setCookie("ResearchPoints",ResearchPoints);
 
 //research costs
 setCookie("cost9000E",cost9000E);
 setCookie("cost9000R",cost9000R);
 setCookie("cost8000E",cost8000E);
 setCookie("cost8000R",cost8000R);
 setCookie("cost8081E",cost8081E);
 setCookie("cost8081R",cost8081R);
 setCookie("cost8001E",cost8001E);
 setCookie("cost8001R",cost8001R);
 setCookie("cost8002E",cost8002E);
 setCookie("cost8002R",cost8002R);
 setCookie("cost8091E",cost8091E);
 setCookie("cost8091R",cost8091R);

 
 //research levels
 setCookie("unqID9000lvl",unqID9000lvl);
 setCookie("unqID8000lvl",unqID8000lvl);
 setCookie("unqID8001lvl",unqID8001lvl);
 setCookie("unqID8081lvl",unqID8081lvl);
 setCookie("unqID8091lvl",unqID8091lvl);
}

function calcgain(){
	//calculate click energy gain
	calcepsgain();
	if(unqID8091lvl==0){
		additionalGain=0;
	}else{
		 additionalGain =  epsgain*(unqID8091lvl*0.02);
	}
   
	gain = (orginalgain + (BuildingClickOrginalValue0000*BuildingClickNumber0000*epcmultiply1) + (BuildingClickOrginalValue0001*BuildingClickNumber0001*epcmultiply2) + (BuildingClickOrginalValue0002*BuildingClickNumber0002*epcmultiply3)+additionalGain)*emultiply;
	gain = Math.round(gain * 1000) / 1000;
 }
function calcepsgain(){
	//calculate automatic energy gain (eps)
	epsgain = (orginalepsgain + (BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply1) + (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply2) + (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply3))*emultiply;
	epsgain = Math.round(epsgain * 1000) / 1000;
}
 
function calcplus() {
	//GIVE VALUE FOR INCREASE EPC BY WHAT EACH
	calcA1 = (BuildingClickOrginalValue0000*epcmultiply1)*emultiply;
	calcA2 = (BuildingClickOrginalValue0001*epcmultiply2)*emultiply;
	calcA3 = (BuildingClickOrginalValue0002*epcmultiply3)*emultiply;
	
    calcA1 = Math.round(calcA1 * 1000) / 1000;
	calcA2 = Math.round(calcA2 * 1000) / 1000;
	calcA3 = Math.round(calcA3 * 1000) / 1000;
	
	$("#epcplus1").html(formatNumber(calcA1));
	$("#epcplus2").html(formatNumber(calcA2));	
	$("#epcplus3").html(formatNumber(calcA3));	
}
function calcepsplus(){
	calcB1 = (BuildingAutoOrginalValue0000*egmultiply1)*emultiply;
	calcB2 = (BuildingAutoOrginalValue0001*egmultiply2)*emultiply;
	calcB3 = (BuildingAutoOrginalValue0002*egmultiply3)*emultiply;
	
    calcB1 = Math.round(calcB1 * 1000) / 1000;
	calcB2 = Math.round(calcB2 * 1000) / 1000;	
	calcB3 = Math.round(calcB3 * 1000) / 1000;	
	
	$("#epsplus1").html(formatNumber(calcB1));
	$("#epsplus2").html(formatNumber(calcB2));
	$("#epsplus3").html(formatNumber(calcB3));	
}
 calcgain();
 calcepsgain();
 
 calcplus();
 calcepsplus();


 
 function calcgaintotal(){
	//GIVE VALUE FOR INCREASE EPC BY WHAT TOTAL
	epctotal1 = (BuildingClickOrginalValue0000*BuildingClickNumber0000*epcmultiply1)*emultiply;
	epctotal2 = (BuildingClickOrginalValue0001*BuildingClickNumber0001*epcmultiply2)*emultiply;
	epctotal3 = (BuildingClickOrginalValue0002*BuildingClickNumber0002*epcmultiply3)*emultiply;
	
    epctotal1 = Math.round(epctotal1 * 1000) / 1000;
	epctotal2 = Math.round(epctotal2 * 1000) / 1000;
	epctotal3 = Math.round(epctotal3 * 1000) / 1000;
	 
$("#epctotal1").html(formatNumber(epctotal1));
$("#epctotal2").html(formatNumber(epctotal2)); 
$("#epctotal3").html(formatNumber(epctotal3)); 
 }
 calcgaintotal();
 
  function calcepsgaintotal(){
	epstotal1 = (BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply1)*emultiply;
	epstotal2 = (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply2)*emultiply;
	epstotal3 = (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply3)*emultiply;
	
    epstotal1 = Math.round(epstotal1 * 1000) / 1000;
	epstotal2 = Math.round(epstotal2 * 1000) / 1000;
	epstotal3 = Math.round(epstotal3 * 1000) / 1000;
	  
$("#epstotal1").html(formatNumber(epstotal1));
$("#epstotal2").html(formatNumber(epstotal2)); 
$("#epstotal3").html(formatNumber(epstotal3)); 
 }
 calcepsgaintotal();
   
 clickpercentagetotal();
  setInterval(clickpercentagetotal, 2500);
 function clickpercentagetotal() {
	epctotal1 = (BuildingClickOrginalValue0000*BuildingClickNumber0000*epcmultiply1)*emultiply;
	epctotal2 = (BuildingClickOrginalValue0001*BuildingClickNumber0001*epcmultiply2)*emultiply;
	epctotal3 = (BuildingClickOrginalValue0002*BuildingClickNumber0002*epcmultiply3)*emultiply;
	
    epctotal1 = Math.round(epctotal1 * 1000) / 1000;
	epctotal2 = Math.round(epctotal2 * 1000) / 1000;
	epctotal3 = Math.round(epctotal3 * 1000) / 1000;
	
	//calculate click energy gain
	clicktotalgainfrombuildings = (orginalgain + (BuildingClickOrginalValue0000*BuildingClickNumber0000*epcmultiply1) + (BuildingClickOrginalValue0001*BuildingClickNumber0001*epcmultiply2) + (BuildingClickOrginalValue0002*BuildingClickNumber0002*epcmultiply3))*emultiply;
	clicktotalgainfrombuildings = Math.round(clicktotalgainfrombuildings * 1000) / 1000;

	clickpercentage1 = (BuildingClickNumber0000 > 0)?(epctotal1/clicktotalgainfrombuildings)*100:0;
	clickpercentage1 = Math.round(clickpercentage1 * 1000) / 1000;
	
	clickpercentage2 = (BuildingClickNumber0001 > 0)?(epctotal2/clicktotalgainfrombuildings)*100:0;
	clickpercentage2 = Math.round(clickpercentage2 * 1000) / 1000;

	clickpercentage3 = (BuildingClickNumber0002 > 0)?(epctotal3/clicktotalgainfrombuildings)*100:0;
	clickpercentage3 = Math.round(clickpercentage3 * 1000) / 1000;
	
	$("#clickpercentage1").html(clickpercentage1);
	$("#clickpercentage2").html(clickpercentage2); 
	$("#clickpercentage3").html(clickpercentage3);
 
 }
 
 autopercentagetotal();
  setInterval(autopercentagetotal, 2500);
 function autopercentagetotal() {
	epstotal1 = (BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply1)*emultiply;
	epstotal2 = (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply2)*emultiply;
	epstotal3 = (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply3)*emultiply;
	
    epstotal1 = Math.round(epstotal1 * 1000) / 1000;
	epstotal2 = Math.round(epstotal2 * 1000) / 1000;
	epstotal3 = Math.round(epstotal3 * 1000) / 1000; 
	
	autototalgainfrombuildings = ((BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply1) + (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply2) + (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply3))*emultiply;
	autototalgainfrombuildings = Math.round(autototalgainfrombuildings * 1000) / 1000;
	
	autopercentage1 = (BuildingAutoNumber0000 > 0)?(epstotal1/autototalgainfrombuildings)*100:0;
	autopercentage1 = Math.round(autopercentage1 * 1000) / 1000;
	
	autopercentage2 = (BuildingAutoNumber0001 > 0)?(epstotal2/autototalgainfrombuildings)*100:0;
	autopercentage2 = Math.round(autopercentage2 * 1000) / 1000;
	
	autopercentage3 = (BuildingAutoNumber0001> 0)?(epstotal3/autototalgainfrombuildings)*100:0;
	autopercentage3 = Math.round(autopercentage3 * 1000) / 1000;	
	
	$("#autopercentage1").html(autopercentage1);
	$("#autopercentage2").html(autopercentage2); 
	$("#autopercentage3").html(autopercentage3); 
 }
 cost();
 function cost(){
costClickfunctions("0000");
costClickfunctions("0001");
costClickfunctions("0002");
 function costClickfunctions(ID){
	eval("BuildingClickCostMultiplier"+ID+" = Math.pow(1.15, BuildingClickNumber"+ID+");\
	BuildingClickCost"+ID+"= BuildingClickOriginalCost"+ID+" * BuildingClickCostMultiplier"+ID+"; \
	BuildingClickCost"+ID+" = Math.round(BuildingClickCost"+ID+" * 1000) / 1000;\
	$(\"#epcost"+ID+"\").html(formatNumber(BuildingClickCost"+ID+")); \
	");
 }
costAutofunctions("0000");
costAutofunctions("0001");
costAutofunctions("0002");
 function costAutofunctions(ID){
	eval("BuildingAutoCostMultiplier"+ID+" = Math.pow(1.15, BuildingAutoNumber"+ID+");\
	BuildingAutoCost"+ID+" = BuildingAutoOriginalCost"+ID+" * BuildingAutoCostMultiplier"+ID+"; \
	BuildingAutoCost"+ID+"  = Math.round(BuildingAutoCost"+ID+" * 1000) / 1000;	\
	$(\"#egcost"+ID+"\").html(formatNumber(BuildingAutoCost"+ID+"));\
	");
 }
 }
  acquried();
 function acquried(){
  $("#epnum0000").html(BuildingClickNumber0000);
  $("#epnum0001").html(BuildingClickNumber0001);
  $("#epnum0002").html(BuildingClickNumber0002);
  
  $("#egnum0000").html(BuildingAutoNumber0000);
  $("#egnum0001").html(BuildingAutoNumber0001);
  $("#egnum0002").html(BuildingAutoNumber0002); 
 }
/*
  $(".menubutton1").addClass("highlighted");
 function menu(menuselected){
	 $(".menubutton").removeClass("highlighted"); 
	 $(".menu").hide();
	 $(".menu" + menuselected).show();
	 $(".menubutton" + menuselected).addClass("highlighted");
 }
 $("#achievementmenu" ).click(function() {
	 menu(1);
 });
 $("#statsmenu" ).click(function() {
	 menu(2);
 });
 $("#settingsmenu" ).click(function() {
	 menu(3);
 });
  $("#unlockedupgradesmenu" ).click(function() {
	 menu(4);
 });
*/
//DELETE SAVE
  $( "#deleteallcookies" ).click(function() {
document.getElementById("deleteallcookiesdialog").style.display = "block";
  });
  $( "#canceldialog" ).click(function() {
document.getElementById("deleteallcookiesdialog").style.display = "none";
  });
   $( "#no" ).click(function() {
document.getElementById("deleteallcookiesdialog").style.display = "none";	   
  });
  $( "#yes" ).click(function() {
document.getElementById("deleteallcookiesdialog").style.display = "none";	
deleteallcookies();
location.reload();
  });
//
//
//
//BUY
//
//
//
 buyClickClickfunctions("0000");
 buyClickClickfunctions("0001");
 buyClickClickfunctions("0002");
 function buyClickClickfunctions(ID){
	eval("$( \"#clickbuy"+ID+"\" ).click(function() {\
	BuildingClickCostMultiplier"+ID+" = Math.pow(1.15, BuildingClickNumber"+ID+");\
	BuildingClickCost"+ID+"= BuildingClickOriginalCost"+ID+" * BuildingClickCostMultiplier"+ID+"; \
    \
	BuildingClickCost"+ID+" = Math.round(BuildingClickCost"+ID+" * 1000) / 1000;\
if(BuildingClickCost"+ID+" <= thetotal) {\
    \
	thetotal = thetotal - BuildingClickCost"+ID+";\
	thetotal = Math.round(thetotal * 1000) / 1000;\
	BuildingClickNumber"+ID+" = BuildingClickNumber"+ID+" + 1;\
	calcgain();\
	calcplus();\
	calcgaintotal();\
	acquried();\
	cost();\
	} else {\
	$(\"#errorcost"+ID+"\").show(\"medium\").delay(2500).queue(function(n) { $(this).hide(\"medium\"); n();}); \
    }\
    });\
    ");
 }
 
 buyClickAutofunctions("0000");
 buyClickAutofunctions("0001");
 buyClickAutofunctions("0002");
  //auto
  //autoBUY1
  function buyClickAutofunctions(ID){
  eval("$( \"#autobuy"+ID+"\" ).click(function() {\
	BuildingAutoCostMultiplier"+ID+" = Math.pow(1.15, BuildingAutoNumber"+ID+");\
	BuildingAutoCost"+ID+" = BuildingAutoOriginalCost"+ID+" * BuildingAutoCostMultiplier"+ID+"; \
	BuildingAutoCost"+ID+"  = Math.round(BuildingAutoCost"+ID+" * 1000) / 1000;	\
if(BuildingAutoCost"+ID+"<= thetotal) {\
    \
	thetotal = thetotal - BuildingAutoCost"+ID+";\
	thetotal = Math.round(thetotal * 1000) / 1000;\
	BuildingAutoNumber"+ID+" = BuildingAutoNumber"+ID+" + 1;\
	calcepsgain();\
	calcepsplus();\
	calcepsgaintotal();\
    acquried();\
	cost();\
	\
} else {\
	$(\"#autoerrorcost"+ID+"\").show(\"medium\").delay(2500).queue(function(n) {\
  $(this).hide(\"medium\"); n();\
  });\
}\
  });\
 ");
   }

//
//
//
//UPGRADE
//
//
//
$.fn.extend({
   qcss: function(css) {
      return $(this).queue(function(next) {
         $(this).css(css);
         next();
      });
   }
});
$.fn.extend({
   qaddclass: function(theclass) {
      return $(this).queue(function(next) {
         $(this).addClass(theclass);
         next();
      });
   }
});
$.fn.extend({
   qremoveclass: function(theclass) {
      return $(this).queue(function(next) {
         $(this).removeClass(theclass);
         next();
      });
   }
});
//old upgrade code not use anymore
upgradecost();
function upgradecost(){
	$("#upgradeenergy1cost").html(upgradeenergy1cost);
	$("#upgradeenergy2cost").html(upgradeenergy2cost);
	
	$("#upgradeprobarenergy1cost").html(upgradeprobarenergy1cost);
	$("#upgradeprobarenergy2cost").html(upgradeprobarenergy2cost);
}
//upgradeenergy1
 $("#upgradeenergy1").click(function() {

if(upgradeenergy1init == true) {
	 
if(upgradeenergy1cost <= thetotal) {
upgradeenergy1init = "notinit";
} else {
$("#upgradeenergy1").qaddclass("redborder").delay(1750).qremoveclass("redborder");
}

}
	   });
//upgradeenergy2
 $("#upgradeenergy2").click(function() {
if(upgradeenergy2init == true) {
	
if(upgradeenergy2cost <= thetotal) {
upgradeenergy2init = "notinit";
} else {
$("#upgradeenergy2").qaddclass("redborder").delay(1750).qremoveclass("redborder");
}

}
	   });
//upgradeprobarenergy1
 $("#upgradeprobarenergy1").click(function() {
if(upgradeprobarenergy1init == true) {
	
if(upgradeprobarenergy1cost <= thetotal) {
upgradeprobarenergy1init = "notinit";
} else {
$("#upgradeprobarenergy1").qaddclass("redborder").delay(1750).qremoveclass("redborder");
}

}
	   });
	   
//upgradeprobarenergy2
 $("#upgradeprobarenergy2").click(function() {
if(upgradeprobarenergy2init == true) {
	
if(upgradeprobarenergy2cost <= thetotal) {
upgradeprobarenergy2init = "notinit";
} else {
$("#upgradeprobarenergy2").qaddclass("redborder").delay(1750).qremoveclass("redborder");
}

}
	   });
 //end
 //
 //
 //achievement
 updateAchievement();
 function updateAchievement(){
 if(achievementstatus1 == false){$("#achievement1").addClass("achievementachieved");}
 if(achievementstatus2 == false){$("#achievement2").addClass("achievementachieved");}
 if(achievementstatus3 == false){$("#achievement3").addClass("achievementachieved");}
 if(achievementstatus4 == false){$("#achievement4").addClass("achievementachieved");}
 if(achievementstatus5 == false){$("#achievement5").addClass("achievementachieved");}
 if(achievementstatus6 == false){$("#achievement6").addClass("achievementachieved");}
 }
 
 setInterval(achievement, 1000);
  function achievement() {
	  
 //achievement1 
 if(BuildingClickNumber0000 >= 5 && achievementstatus1 == true){
	notify("Achievement \"Acquired 5 Energy Pylon\" acquried. Energy progress bar operation reduced by 100ms.")
    probarreduction=probarreduction+100;
	achievementstatus1 = false;
	setTimeout(function(){
	updateAchievement();
	 },100);
 }
 //achievement2
 if(BuildingClickNumber0000>= 10 && achievementstatus2 == true){
  notify("Achievement \"Acquired 10 Energy Pylon\" acquried. Energy multiplyier for Energy Pylon increased to 1.5.")
  epcmultiply1 = 1.5;
	achievementstatus2 = false;
	updateAchievement();
	calcgain();
	calcplus();
 }

 //achievement3
 if(clicked >= 10 && achievementstatus3 == true){
	notify("Achievement \"Click 10 times\" acquried. Energy multiplyier increased to "+ emultiply +"");
	emultiply = emultiply + 0.05;
	emultiply = Math.round(emultiply * 1000) / 1000;
	achievementstatus3 = false;
	updateAchievement();
	calcgain();
	calcplus();
 }
 
  //achievement4
 if(clicked >= 100 && achievementstatus4 == true){
	notify("Achievement \"Click 100 times\" acquried. Energy multiplyier increased to "+ emultiply +"");
	emultiply = emultiply + 0.05;
	emultiply = Math.round(emultiply * 1000) / 1000;
	achievementstatus4= false;
	updateAchievement();
	calcgain();
	calcplus();
 }
  
 
  //achievement5
 if(clickenergy >= 50 && achievementstatus5 == true){
	notify("Achievement \"Gain 50 energy from clicking\" acquried. Energy multiplyier increased to "+ emultiply +"");
	emultiply = emultiply + 0.05;
	emultiply = Math.round(emultiply * 1000) / 1000;
	achievementstatus5= false;
	updateAchievement();
	calcgain();
	calcplus();
 }
  
  //achievement6
 if(clickenergy >= 500 && achievementstatus6 == true){
	notify("Achievement \"Gain 500 energy from clicking\" acquried. Energy multiplyier increased to "+ emultiply +"");
	emultiply = emultiply + 0.05;
	emultiply = Math.round(emultiply * 1000) / 1000;
	achievementstatus6= false;
	updateAchievement();
	calcgain();
	calcplus();
 }
 
 }
  //end

 stats();
 
 setInterval(stats, 2000);
 
 function stats(){
totalbuildings = BuildingClickNumber0000 + BuildingClickNumber0001 + BuildingAutoNumber0000 + BuildingAutoNumber0001 + BuildingAutoNumber0002;
$("#createdenergy").html(formatNumber(totalenergyed));
$("#createdenergyclicking").html(formatNumber(clickenergy));
$("#timesclicked").html(clicked); 
$("#timesprobarcompleted").html(timesprobarcompleted); 
$("#totalbuildings").html(totalbuildings); 	 
$("#probartime").html((probarcounterbasevalue-probarreduction-(unqID8000lvl*200)-(unqID8001lvl*150))+" ms");
$("#emultiply").html("x" + emultiply); 	
 }
 //click to enable probar
   
  $( "#click1" ).click(function() {
     clickityClick("click");
	 }); 
ClickTimes=0; 
  function clickityClick(source){
	 if(Probarpercentage == 0&&source=="click"){
	 //calculated final probar time
	 probarcounter = probarcounterbasevalue-probarreduction-(unqID8000lvl*200)-(unqID8001lvl*150);
	 probarstartdateI = new Date().getTime();
	 probarstartdate = new Date().getTime();
     ClickTimes = unqID8081lvl+1;
	 }
  } 
  
 //running at 200 times a second (5 milliseconds)
  setInterval(run, time);
  function run() { 

   if(probarcounter>0){
	
    
    thedatenow = new Date().getTime();
 
   Probarpercentage=(thedatenow-probarstartdateI)/(probarcounter*ClickTimes)*100;
   ProbarpercentageA=(thedatenow-probarstartdateI)/(probarcounter*ClickTimes)*100*ClickTimes;
    if(ProbarpercentageA<100){
		elem.style.backgroundColor = "#4CAF50"; 
	}else if(ProbarpercentageA<200){
		elem.style.backgroundColor = "#fff71c"; 
	}else if(ProbarpercentageA<300){
		elem.style.backgroundColor = "#ffb200"; 
	}else if(ProbarpercentageA<400){
		elem.style.backgroundColor = "#ff731c"; 
	}else if(ProbarpercentageA<500){
		elem.style.backgroundColor = "#ff4300"; 
	}else if(ProbarpercentageA<600){
		elem.style.backgroundColor = "#ff0000"; 
	} 
		
		
    widthpercentage=(thedatenow-probarstartdate)/probarcounter*100;
   if(widthpercentage>(99.999999)){
	   if(Probarpercentage>(99.999999)){
	   Probarpercentage=0;
	   ProbarpercentageA=0;
	   probarcounter=0;
	   $("#click1").html("Click");
       }
	   widthpercentage=0;
	   clicked = clicked + 1;
	    probarstartdate = new Date().getTime();
	   timesprobarcompleted = timesprobarcompleted + 1;
	   //clickenergy stat
	   clickenergy = clickenergy + gain;
	   //round to 3 d.p.
	   clickenergy = Math.round(clickenergy * 1000) / 1000;
	   //totalenergyed stat
	   totalenergyed = totalenergyed + gain; 
	   //round to 3 d.p.
	   totalenergyed = Math.round(totalenergyed * 1000) / 1000;
	   //add to the total
	   thetotal = thetotal + gain; 
	   //round to 3 d.p.
	   thetotal = Math.round(thetotal * 1000) / 1000;
   }
   if(probarcounter>0){
	   "two step verification"
   var leftProbarcounter = probarcounter-(widthpercentage*probarcounter/100);
   leftProbarcounter = Math.round(leftProbarcounter * 1000) / 1000;
   $("#click1").html(leftProbarcounter);
   //display  percentage $("#click1").html(widthpercentage);
   }
   }
      elem.style.width = widthpercentage + '%'; 
	  $(".thetotal").html(formatNumber(thetotal));
	  calcgain();
	  $("#gain").html(formatNumber(gain));
	  calcepsgain();
	  $("#epsgain").html(formatNumber(epsgain));
	  $(".thetotalresearchpoint").html(formatNumber(ResearchPoints));
	  doEnergyGoals();
	if(thetotal >= 100000000){$( "#won" ).show();}
  }

  //TABS CODE
function openTab(tabID,ID) {
    var x = document.getElementsByClassName("tabClass");
    var i;
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";
    }
    document.getElementById(ID).style.display = "block";
	
    tabs = document.getElementsByClassName("tabs");
    for (i = 0; i < x.length; i++) {
        tabs[i].className = tabs[i].className.replace(/(?:^|\s)isOn(?!\S)/g, " notOn");
    }
   $('#'+tabID+'').addClass('isOn');
   $('#'+tabID+'').removeClass('notOn');
    //document.getElementById(tabID).className += " isOn";
	 
}
//addTabClass CODE
tabs = document.getElementsByClassName("tabs");
 var x = document.getElementsByClassName("tabClass");
 for (i = 0; i < x.length; i++) {
        tabs[i].className = tabs[i].className += " notOn";
    }

openTab('menuB',"tabB");
 document.getElementById('menuA').addEventListener("click", function() {openTab('menuA','tabA')});
 document.getElementById('menuB').addEventListener("click", function() {openTab('menuB','tabB')});
 document.getElementById('menuC').addEventListener("click", function() {openTab('menuC','tabC')});
 document.getElementById('menuD').addEventListener("click", function() {openTab('menuD','tabD')});
 document.getElementById('menuE').addEventListener("click", function() {openTab('menuE','tabE')});
 document.getElementById('menuF').addEventListener("click", function() {openTab('menuF','tabF')});
 //ADD RESOURCE
  var lastUpdate=Date.now();
 function addResource(){
      var timeSinceLastUpdate = Date.now() - lastUpdate;
      var secondsSinceLastUpdate = timeSinceLastUpdate / 1000; //divide by 1000 to convert from milliseconds to fraction of seconds.
      // you now have the number of seconds since the last update which works independently of framerate.
	   calcepsgain();
	  thetotal = thetotal + (epsgain*secondsSinceLastUpdate);
	  totalenergyed = totalenergyed + (epsgain*secondsSinceLastUpdate);
	  totalenergyed = Math.round(totalenergyed * 1000) / 1000;
	  thetotal = Math.round(thetotal * 1000) / 1000;

      lastUpdate = Date.now();
 }

 setInterval(addResource,20);
 //RESEARCH SECTION

    function research(){
	drawIcon(10,280,50,50,30,40,'/website/tools/research.png',"unqID9000","upgrade9000","cost9000","Unlock research","Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.");
    drawLink(60,302,20,5,"unqID0000");
	drawLink(80,185,5,255,"unqID0001");
	drawLink(80,185,20,5,"unqID0002");
	//E branch
		drawIcon(100,160,50,50,30,40,'/website/tools/EPOWunlock.png',"unqID9001","upgrade9001","cost9001","Energy multipler + pow","Increase energy multiplyier and pow each by 0.05, Stacks with other tiers");
	linkIcon("unqID9000");
	//PRO bar branch
	drawLink(80,302,20,5,"unqID0800");
	    drawIcon(100,280,50,50,30,40,'/website/tools/probarenergy1.png',"unqID8000","upgrade8000","cost8000","Speed up pro bar","Reduce time taken for progress bar to complete 200ms each, max level 5.");
     
	//onload functions
	 
		upgrade9000Pack("onload");
	    upgrade8000Pack("onload");
    	upgrade8001Pack("onload");
	    upgrade8081Pack("onload");
	    upgrade8091Pack("onload");
 
	drawCosts();
	//functions
	function drawCosts(){
		$("#cost9000E").text(formatNumber(cost9000E));
		$("#cost9000R").text(formatNumber(cost9000R));
		$("#cost8000E").text(formatNumber(cost8000E));
		$("#cost8000R").text(formatNumber(cost8000R));
		$("#cost8001E").text(formatNumber(cost8001E));
		$("#cost8001R").text(formatNumber(cost8001R));
	    $("#cost8002E").text(formatNumber(cost8002E));
		$("#cost8002R").text(formatNumber(cost8002R));
		$("#cost8081E").text(formatNumber(cost8081E));
		$("#cost8081R").text(formatNumber(cost8081R));
		$("#cost8091E").text(formatNumber(cost8091E));
		$("#cost8091R").text(formatNumber(cost8091R));
	}
	function linkClass(unqID){
		$("#"+unqID+"").removeClass("notLinked");
		$("#"+unqID+"").addClass("isLinked");
	}
	function linkIcon(unqID){
		$("#"+unqID+"").removeClass("IconnotLinked");
		$("#"+unqID+"").addClass("IconisLinked");
		$("#"+unqID+"tt").removeClass("notLinkedTooltip");
		$("#"+unqID+"tt").addClass("isLinkedTooltip");
		$("#"+unqID+"ttb").removeClass("notLinkedTooltip");
		$("#"+unqID+"ttb").addClass("isLinkedTooltip");
	}
	function boughtIt(upgradeID){
		$("#"+upgradeID+"").removeClass("buyButton");
		$("#"+upgradeID+"").addClass("boughtButton");
		$("#"+upgradeID+"").text("Bought");
	}
	function drawIcon(x,y,boxw,boxh,imgw,imgh,url,unqID,upgradeID,costID,title,desc){
		var content="<p style=\"font-size:26px;position: relative;\">"+title+"</p><p>Cost:&nbsp<b><span id=\""+costID+"E\"></span></b>&nbsp<span>Energy</span><p><b><span id=\""+costID+"R\"></span></b> Research Points</p><p style=\"text-align:left; padding-left:5px;padding-right:5px;\">"+desc+"</p><div id=\""+upgradeID+"\" class=\"upgradeBuy buyButton\"><b>Buy</b></div></p></div>"
		drawImageBox(x,y,boxw,boxh,imgw,imgh,url,unqID,content);
	}
	//click functions
	 $("#upgrade9000").click(function() {
     if(unqID9000lvl >1) {
		 //if bought already
	 }else{
	   
	   if(thetotal>=cost9000E&&ResearchPoints>=cost9000R){
	   useCost("9000");
	   //successfully purchased upgrade
	   unqID9000lvl=unqID9000lvl+1;
	   upgrade9000Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade9000").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }
	 	 });
     $("#upgrade8000").click(function() { 
	 if(unqID9000lvl>=1){
     if(unqID8000lvl>=5) {
		 //if bought already
	 }else{
	   
	   if(thetotal>=cost8000E&&ResearchPoints>=cost8000R){
	   useCost("8000");
	   //successfully purchased upgrade
	   unqID8000lvl=unqID8000lvl+1;
	   upgrade8000Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade8000").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }
	 }
	 	 });
	 function load8001(){
	if(unqID8000lvl>=1){
     $("#upgrade8001").click(function() {
		  
     if(unqID8001lvl>=5) {
		 //if bought already
	 }else{
	   
	   if(thetotal>=cost8001E&&ResearchPoints>=cost8001R){
	   useCost("8001");
	   //successfully purchased upgrade
	   unqID8001lvl=unqID8001lvl+1;
	   upgrade8001Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade8001").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }
	 	 });
	}
	 }
	 function load8081(){
     $("#upgrade8081").click(function() {
     if(unqID8081lvl>=5) {
		 //if bought already
	 }else{
	   
	   if(thetotal>=cost8081E&&ResearchPoints>=cost8081R){
	   useCost("8081");
	   //successfully purchased upgrade
	   unqID8081lvl=unqID8081lvl+1;
	   upgrade8081Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade8081").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }
	 	 });
	 }
	 function load8091(){
     if(unqID8000lvl>=1){
     $("#upgrade8091").click(function() {
     if(unqID8091lvl>=5) {
		 //if bought already
	 }else{
	   
	   if(thetotal>=cost8091E&&ResearchPoints>=cost8091R){
	   useCost("8091");
	   //successfully purchased upgrade
	   unqID8091lvl=unqID8091lvl+1;
	   upgrade8091Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade8091").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }
	 	 });
	 }
	 }
	 //link packs
	 function useCost(theID){
	   eval("thetotal=thetotal-cost"+theID+"E;");
	   eval("ResearchPoints=ResearchPoints-cost"+theID+"R;"); 
	 }
	 function upgrade9000Pack(theLocation){
		   //link
	 var maxed = "";
	 if(unqID9000lvl>=1){
	   linkClass("unqID0000");
	   linkClass("unqID0001");
	   linkClass("unqID0002");
	   linkClass("unqID0800");
	       //link icons
	   linkIcon("unqID9001"); 
	   linkIcon("unqID8000"); 
	       //reveal new links and icons
	   drawLink(150,302,20,5,"unqID0801");
	      drawIcon(170,280,50,50,30,40,'/website/tools/probarenergy2.png',"unqID8001","upgrade8001","cost8001","Speed up pro bar T2","Reduce time taken for progress bar to complete 150ms each, max level 5.");
	   drawLink(122,330,5,30,"unqID0881");
	   drawLink(122,360,30,5,"unqID0882");
	      drawIcon(135,340,50,50,30,40,'/website/tools/probarenergyMultiple.png',"unqID8081","upgrade8081","cost8081","Add additional value to progress bar","Each level increases the amount of times the progress bar completes by 1, 1 click on the progress bar will result in multiple clicks registered, max level 5.");
	   drawLink(122,245,30,5,"unqID0891");
	   drawLink(122,250,5,30,"unqID0892");
	      drawIcon(135,220,50,50,30,40,'/website/tools/nil.png',"unqID8091","upgrade8091","cost8091","Energy per click gains additional +2% Eps","Energy per click gains additional +1% Eps for each level, max level 5.");
       //load them
	   	upgrade8001Pack("onload");
		load8001();
 
	    drawCosts();
	 }
	       //boughtIt reachmax
	   if(unqID9000lvl>=1){
	   boughtIt("upgrade9000");
	   maxed=" MAX";
	   }
	       //
	   $("#unqID9000lvl").text(unqID9000lvl+ maxed);
	 }
	 function upgrade8000Pack(theLocation){
		  
	   var maxed = "";
	   	 if(unqID8000lvl==1||(theLocation=="onload"&&unqID8000lvl>=1)){
		//if reach max unlock next make it active
	     linkClass("unqID0881");
		 linkClass("unqID0882");
		 
		 linkIcon("unqID8081");

	     linkClass("unqID0891");
		 linkClass("unqID0892");
		 
		 linkIcon("unqID8091");
	     //load them
		 upgrade8081Pack("onload");
		 load8081();
		 upgrade8091Pack("onload");
		 load8091();
		}
	    if(unqID8000lvl>=5){
		//if reach max unlock next make it active
	     linkClass("unqID0801");
		 linkIcon("unqID8001");
	    //reveal this
		 drawLink(220,302,20,5,"unqID0802");
	      drawIcon(240,280,50,50,30,40,'/website/tools/probarenergy3.png',"unqID8002","upgrade8002","cost8002","Progress bar - Instant","Progress bar will take next to no time to complete, max level 1.");
		}
	   if(unqID8000lvl>=5){
	   boughtIt("upgrade8000");
	   maxed=" MAX";
	   }
	   $("#unqID8000lvl").text(unqID8000lvl+maxed);
	 }
     function upgrade8081Pack(theLocation){
	   var maxed = "";
	    if(unqID8081lvl>=5){
		//if reach max unlock next make it active
	  
		}
	   if(unqID8081lvl>=5){
	   boughtIt("upgrade8081");
	   maxed=" MAX";
	   }
	   $("#unqID8081lvl").text(unqID8081lvl+maxed);
	 }
     function upgrade8091Pack(theLocation){
	   var maxed = "";
	    if(unqID8091lvl>=5){
		//if reach max unlock next make it active
	  
		}
	   if(unqID8091lvl>=5){
	   boughtIt("upgrade8091");
	   maxed=" MAX";
	   }
	   $("#unqID8091lvl").text(unqID8091lvl+maxed);
	 }
	 function upgrade8001Pack(theLocation){
	   var maxed = "";
	    if(unqID8001lvl>=5){
		//if reach max unlock next make it active
	     linkClass("unqID0802");
		 linkIcon("unqID8002");
	 
		}
	   if(unqID8001lvl>=5){
	   boughtIt("upgrade8001");
	   maxed=" MAX";
	   }
	   $("#unqID8001lvl").text(unqID8001lvl+maxed);
	 }
	}
	research();
	//functions
	  padding = 5;
	function drawImageBox(x,y,boxw,boxh,imgw,imgh,url,unqID,content){
		var border = 6;
		var calc1 = ((boxw-imgw-border)/2);
		var calc2 = ((boxh-imgh-border)/2);
 padding = 5;
	$( "#overlay" ).append( "<div class=\"upgradeIcon IconnotLinked\" id=\""+unqID+"\" style=\"position:absolute;top:"+(y+padding)+"px;left:"+(x+padding)+"px;width:"+boxw+"px;height:"+boxh+"px;\"></div>" );	
     $( "#"+unqID+"" ).append("<b><span class=\"upgradeLevel\" id=\""+unqID+"lvl\"></span></b>");
	 $( "#"+unqID+"" ).append("<img src=\""+url+"\" class=\"divsImg\" id=\""+unqID+"Img\" style=\"position:absolute;top:"+calc2 +"px;left:"+calc1+"px;width:"+imgw+"px;height:"+imgh+"px;\">");
     $( "#"+unqID+"" ).append("<span class=\"upgradetooltiptext notLinkedTooltip \" id=\""+unqID+"tt\">"+content+"</span>");
	 $( "#"+unqID+"" ).append("<span class=\"upgradebridge notLinkedTooltip\" id=\""+unqID+"ttb\"></span>");
   }
   //next function
   function drawLink(x,y,linkw,linkh,unqID){
	   	$( "#overlay" ).append( "<div class=\"researchLink notLinked\" id=\""+unqID+"\" style=\"position:absolute;top:"+(y+padding)+"px;left:"+(x+padding)+"px;width:"+linkw+"px;height:"+linkh+"px;\"></div>" );	
   }
  
  function multiply(a,b){
	  var factor = 8;
	  return a*Math.pow(factor,b);  
  }
 
  //ENERGY GOALS
  
  function doEnergyGoals(){
  rewardcalculatedvalue1 = Math.ceil(Math.pow(1*((EnergyGoalLevel+1)/2),2));
  calculatedvalue1 = multiply(EnergyGoalStart,EnergyGoalLevel);
  if(thetotal>=calculatedvalue1){
    EnergyGoalLevel = EnergyGoalLevel+1;
	ResearchPoints = ResearchPoints+rewardcalculatedvalue1;
	notify("Energy Goal ("+calculatedvalue1+") acquried! Reward: "+rewardcalculatedvalue1+" Research Points");
  }
  calculatedvalue1 = multiply(EnergyGoalStart,EnergyGoalLevel);
  calculatedvalue2 = multiply(EnergyGoalStart,EnergyGoalLevel+1);
  calculatedvalue3 = multiply(EnergyGoalStart,EnergyGoalLevel+2);
  calculatedvalue4 = multiply(EnergyGoalStart,EnergyGoalLevel+3);
  calculatedvalue5 = multiply(EnergyGoalStart,EnergyGoalLevel+4);
  calculatedvalue6 = multiply(EnergyGoalStart,EnergyGoalLevel+5);
  calculatedvalue7 = multiply(EnergyGoalStart,EnergyGoalLevel+6);
  calculatedvalue8 = multiply(EnergyGoalStart,EnergyGoalLevel+7);
  calculatedvalue9 = multiply(EnergyGoalStart,EnergyGoalLevel+8);
  
  rewardcalculatedvalue1 = Math.ceil(Math.pow(1*((EnergyGoalLevel+1)/2),2));
  rewardcalculatedvalue2 = Math.ceil(Math.pow(1*((EnergyGoalLevel+2)/2),2));
  rewardcalculatedvalue3 = Math.ceil(Math.pow(1*((EnergyGoalLevel+3)/2),2));
  rewardcalculatedvalue4 = Math.ceil(Math.pow(1*((EnergyGoalLevel+4)/2),2));
  rewardcalculatedvalue5 = Math.ceil(Math.pow(1*((EnergyGoalLevel+5)/2),2));
  rewardcalculatedvalue6 = Math.ceil(Math.pow(1*((EnergyGoalLevel+6)/2),2));
  rewardcalculatedvalue7 = Math.ceil(Math.pow(1*((EnergyGoalLevel+7)/2),2));
  rewardcalculatedvalue8 = Math.ceil(Math.pow(1*((EnergyGoalLevel+8)/2),2));
  rewardcalculatedvalue9 = Math.ceil(Math.pow(1*((EnergyGoalLevel+9)/2),2));
  
  $("#energyGoal1").html("Requirement: "+formatNumber(calculatedvalue1)+" Energy || Reward: "+rewardcalculatedvalue1);
  $("#energyGoal2").html("Requirement: "+formatNumber(calculatedvalue2)+" Energy || Reward: "+rewardcalculatedvalue2);
  $("#energyGoal3").html("Requirement: "+formatNumber(calculatedvalue3)+" Energy || Reward: "+rewardcalculatedvalue3);
  $("#energyGoal4").html("Requirement: "+formatNumber(calculatedvalue4)+" Energy || Reward: "+rewardcalculatedvalue4);
  $("#energyGoal5").html("Requirement: "+formatNumber(calculatedvalue5)+" Energy || Reward: "+rewardcalculatedvalue5);
  $("#energyGoal6").html("Requirement: "+formatNumber(calculatedvalue6)+" Energy || Reward: "+rewardcalculatedvalue6);
  $("#energyGoal7").html("Requirement: "+formatNumber(calculatedvalue7)+" Energy || Reward: "+rewardcalculatedvalue7);
  $("#energyGoal8").html("Requirement: "+formatNumber(calculatedvalue8)+" Energy || Reward: "+rewardcalculatedvalue8);
  $("#energyGoal9").html("Requirement: "+formatNumber(calculatedvalue9)+" Energy || Reward: "+rewardcalculatedvalue9);
  
 $(".EnergyGoalLevel").html(EnergyGoalLevel);
  }
 //format number
 function prettifySub(number) {
    number = parseFloat(number.toFixed(3));
    if (number >= 1000) number = 999;
    number = number.toString();
    var hasDecimal = number.split('.');
    if (typeof hasDecimal[1] === 'undefined' || hasDecimal[0].length >= 3) return number.substring(0, 6);
    return number.substring(0, 6);
	//123.456
}
 function formatNumber(number) {
    var numberTmp = number;
    number = Math.round(number * 1000000) / 1000000;
    if (!isFinite(number)) return "Infinite";
    if (number >= 1000 && number < 10000) return Math.floor(number);
    if (number === 0) {
        return prettifySub(0);
    }
    var base = Math.floor(Math.log(number) / Math.log(1000));
    if (base <= 0) return prettifySub(number);
    number /= Math.pow(1000, base);

        var suffices = [
            'K', 'M', 'B', 'T', 'Qa', 'Qi', 'Sx', 'Sp', 'Oc', 'No', 'Dc', 'Ud',
            'Dd', 'Td', 'Qad', 'Qid', 'Sxd', 'Spd', 'Od', 'Nd', 'V', 'Uv', 'Dv',
            'Tv', 'Qav', 'Qiv', 'Sxv', 'Spv', 'Ov', 'Nv', 'Tt'
        ];
        var suffix;
        if ((base <= suffices.length && base > 0)) {
            suffix = suffices[base - 1];
        }
        else {
            var exponent = parseFloat(numberTmp).toExponential(2);
            exponent = exponent.replace('+', '');
            return exponent;
        }

        return prettifySub(number) + suffix;
}    
     

};



	move();

 
 function canvass(){
	 
	  ctx.beginPath();
      ctx.rect(x, y, boxw, boxh);
      ctx.fillStyle = '#f7f7f7';
      ctx.fill();
      ctx.lineWidth = 3;
      ctx.strokeStyle = '#000000';
      ctx.strokeRect(x, y, boxw, boxh);  
      var img = new Image();
      img.src = url;
	
      img.onload = function() {
		  var calc1 = x+((boxw-imgw)/2);
		  var calc2 = y+((boxh-imgh)/2);
    ctx.drawImage(img, calc1, calc2,30,40);
    ctx.drawImage(img, calc1, calc2 ,30,40);
	  }
 }
 function holderplaceholder(){
	  //x , y, boxw, boxh, img w, img h, imgurl
   var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
	container = $('#myCanvas').parent();
	drawLink(150,35,20,5,"unqID0003");
		drawImageBox(170,10,50,50,30,40,'/website/tools/EMUL.png',"unqID9002","<p style=\"font-size:26px;position: relative;\"> Energy multipler T1</p><p>Cost:<span></span><span>Increase energy multiplyier T1 by 0.05, Stacks with other tiers</p></p><br>");
	drawLink(220,35,20,5,"unqID0004");	
		drawImageBox(240,10,50,50,30,40,'/website/tools/EMUL2.png',"unqID9003","<p style=\"font-size:26px;position: relative;\"> Energy multipler T1</p><p>Cost:<span></span><span>Increase energy multiplyier T1 by 0.05, Stacks with other tiers</p></p><br>");
	drawLink(290,35,20,5,"unqID0005");
	    drawImageBox(310,10,50,50,30,40,'/website/tools/EMUL3.png',"unqID9004","<p style=\"font-size:26px;position: relative;\"> Energy multipler T1</p><p>Cost:<span></span><span>Increase energy multiplyier T1 by 0.05, Stacks with other tiers</p></p><br>");
	 
	drawLink(192,60,5,20,"unqID0100");
	    drawImageBox(170,70,50,50,30,40,'/website/tools/EPOW.png',"unqID9100","<p style=\"font-size:26px;position: relative;\"> Energy pow T1</p><p>Cost:<span></span><span>Increase energy multiplyier T1 by 0.05, Stacks with other tiers</p></p><br>");
	drawLink(220,95,20,5,"unqID0101");
	    drawImageBox(240,70,50,50,30,40,'/website/tools/EPOW2.png',"unqID9101","<p style=\"font-size:26px;position: relative;\"> Energy pow T1</p><p>Cost:<span></span><span>Increase energy multiplyier T1 by 0.05, Stacks with other tiers</p></p><br>");
	drawLink(290,95,20,5,"unqID0102");
	    drawImageBox(310,70,50,50,30,40,'/website/tools/EPOW3.png',"unqID9102","<p style=\"font-size:26px;position: relative;\"> Energy pow T1</p><p>Cost:<span></span><span>Increase energy multiplyier T1 by 0.05, Stacks with other tiers</p></p><br>");
	//
}
});