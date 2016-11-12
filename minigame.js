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

 doCookie("done","true");
 doCookie("probar","true");
 
 doCookie("resolution","2");
 doCookie("width1","10");
 doCookie("time",eval(1000/20));
 doCookie("init1","true");
 doCookie("duration1","0");
 doCookie("changingduration1","500");
 doCookie("auto1","false");
 doCookie("s","0");
 doCookie("sl","1");
 doCookie("totalenergyed","0");
 doCookie("timesprobarcompleted","0");

  //orginal total gain for each building
 doCookie("epcgaintotal1","0");
 doCookie("epcgaintotal2","0");

 doCookie("epsgaintotal1","0");
 doCookie("epsgaintotal2","0");
 doCookie("epsgaintotal3","0");
 
  //orginal number of buildings
 doCookie("epnum1","0");
 doCookie("epnum2","0");

 doCookie("egnum1","0");
 doCookie("egnum2","0");
 doCookie("egnum3","0");
  //orginal costs
 doCookie("orginalcost1","5");
 doCookie("orginalcost2","50");

 doCookie("orginalegcost1","100");
 doCookie("orginalegcost2","1000");
 doCookie("orginalegcost3","7500");
   

  
 // cost1 = orginalcost1;
 // cost2 = orginalcost2;
   
 // egcost1 = orginalegcost1;
 // egcost2 = orginalegcost2;
 // egcost3 = orginalegcost3;
  
  //upgrade costs
 doCookie("upgradeenergy1cost","200");
 doCookie("upgradeenergy2cost","1500");
 doCookie("upgradeprobarenergy1cost","200")
 doCookie("upgradeprobarenergy2cost","400")
  //orginal click 
 doCookie("clicked","0");
 doCookie("clickenergy","0");
 
  //multiplyier 
 doCookie("emultiply","1");

  //individual multiplyier 
 doCookie("epcmultiply1","1");
 doCookie("epcmultiply2","1");

 doCookie("egmultiply1","1");
 doCookie("egmultiply2","1");
 doCookie("egmultiply3","1");
  //orginal individual energy gain
 doCookie("epcgain1","0");
 doCookie("epcgain2","0");
 
 doCookie("epsgain1","0");
 doCookie("epsgain2","0");
 doCookie("epsgain3","0");
 
  //orginal increment energy
 doCookie("epcplus1","0.5");
 doCookie("epcplus2","2.5");

 doCookie("epsplus1","0.75");
 doCookie("epsplus2","5");
 doCookie("epsplus3","20");
  //orginal energy gain
 doCookie("orginalgain","1");
 doCookie("orginalepsgain","0");

  //orginal energy 
 doCookie("thetotal","0");
 
 //others
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
 setCookie("duration1",duration1);
 setCookie("changingduration1",changingduration1);
 setCookie("auto1",auto1);
 setCookie("s",s);
 setCookie("sl",sl);
 setCookie("totalenergyed",totalenergyed);
 setCookie("timesprobarcompleted",timesprobarcompleted);

  //orginal total gain for each building
 setCookie("epcgaintotal1",epcgaintotal1);
 setCookie("epcgaintotal2",epcgaintotal2);

 setCookie("epsgaintotal1",epsgaintotal1);
 setCookie("epsgaintotal2",epsgaintotal2);
 setCookie("epsgaintotal3",epsgaintotal3);
 
  //orginal number of buildings
 setCookie("epnum1",epnum1);
 setCookie("epnum2",epnum2);

 setCookie("egnum1",egnum1);
 setCookie("egnum2",egnum2);
 setCookie("egnum3",egnum3);
  //orginal costs
 setCookie("orginalcost1",orginalcost1);
 setCookie("orginalcost2",orginalcost2);

 setCookie("orginalegcost1",orginalegcost1);
 setCookie("orginalegcost2",orginalegcost2);
 setCookie("orginalegcost3",orginalegcost3);
   

  
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

 setCookie("egmultiply1",egmultiply1);
 setCookie("egmultiply2",egmultiply2);
 setCookie("egmultiply3",egmultiply3);
  //orginal individual energy gain
 setCookie("epcgain1",epcgain1);
 setCookie("epcgain2",epcgain2);
 
 setCookie("epsgain1",epsgain1);
 setCookie("epsgain2",epsgain2);
 setCookie("epsgain3",epsgain3);
 
  //orginal increment energy
 setCookie("epcplus1",epcplus1);
 setCookie("epcplus2",epcplus2);

 setCookie("epsplus1",epsplus1);
 setCookie("epsplus2",epsplus2);
 setCookie("epsplus3",epsplus3);
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

 setCookie("done",done);
 setCookie("probar",probar);

}
 $( "#click1" ).click(function() {
	 if(widthpercentage === 0){
	 duration1 = changingduration1;
	 s = duration1;
	 }
    
	 });
 $( "#auto" ).click(function() {
 auto1 = "true";
 });
 
function calcgain(){
	gain = (orginalgain + (epcgain1*epcmultiply1) + (epcgain2*epcmultiply2))*emultiply;
	gain = Math.round(gain * 1000) / 1000;
 }
function calcepsgain(){
	epsgain = (orginalepsgain + (epsgain1*egmultiply1) + (epsgain2*egmultiply2) + (epsgain3*egmultiply3))*emultiply;
	epsgain = Math.round(epsgain * 1000) / 1000;
}
 
function calcplus() {
	calcA1 = (epcplus1*epcmultiply1)*emultiply;
	calcA2 = (epcplus2*epcmultiply2)*emultiply;
	
    calcA1 = Math.round(calcA1 * 1000) / 1000;
	calcA2 = Math.round(calcA2 * 1000) / 1000;
	
	$("#epcplus1").html(calcA1);
	$("#epcplus2").html(calcA2) ;	
}
function calcepsplus(){
	calcB1 = (epsplus1*egmultiply1)*emultiply;
	calcB2 = (epsplus2*egmultiply2)*emultiply;
	calcB3 = (epsplus3*egmultiply3)*emultiply;
	
    calcB1 = Math.round(calcB1 * 1000) / 1000;
	calcB2 = Math.round(calcB2 * 1000) / 1000;	
	calcB3 = Math.round(calcB3 * 1000) / 1000;	
	
	$("#epsplus1").html(calcB1);
	$("#epsplus2").html(calcB2);
	$("#epsplus3").html(calcB3);	
}
 calcgain();
 calcepsgain();
 
 calcplus();
 calcepsplus();


 
 function calcgaintotal(){
	epctotal1 = (epcgain1*epcmultiply1)*emultiply;
	epctotal2 = (epcgain2*epcmultiply2)*emultiply;
	
    epctotal1 = Math.round(epctotal1 * 1000) / 1000;
	epctotal2 = Math.round(epctotal2 * 1000) / 1000;
	 
$("#epctotal1").html(epctotal1);
$("#epctotal2").html(epctotal2); 
 }
 calcgaintotal();
 
  function calcepsgaintotal(){
	epstotal1 = (epsgain1*egmultiply1)*emultiply;
	epstotal2 = (epsgain2*egmultiply2)*emultiply;
	epstotal3 = (epsgain3*egmultiply3)*emultiply;
	
    epstotal1 = Math.round(epstotal1 * 1000) / 1000;
	epstotal2 = Math.round(epstotal2 * 1000) / 1000;
	epstotal3 = Math.round(epstotal3 * 1000) / 1000;
	  
$("#epstotal1").html(epstotal1);
$("#epstotal2").html(epstotal2); 
$("#epstotal3").html(epstotal3); 
 }
 calcepsgaintotal();
   
 clickpercentagetotal();
  setInterval(clickpercentagetotal, 2500);
 function clickpercentagetotal() {
	epctotal1 = (epcgain1*epcmultiply1)*emultiply;
	epctotal2 = (epcgain2*epcmultiply2)*emultiply;
	
    epctotal1 = Math.round(epctotal1 * 1000) / 1000;
	epctotal2 = Math.round(epctotal2 * 1000) / 1000;
	 
	clicktotalgainfrombuildings = ((epcgain1*epcmultiply1) + (epcgain2*epcmultiply2))*emultiply;
	clicktotalgainfrombuildings = Math.round(clicktotalgainfrombuildings * 1000) / 1000;
	
	clickpercentage1 = (epnum1 > 0)?(epctotal1/clicktotalgainfrombuildings)*100:0;
	clickpercentage1 = Math.round(clickpercentage1 * 1000) / 1000;
	
	clickpercentage2 = (epnum2 > 0)?(epctotal2/clicktotalgainfrombuildings)*100:0;
	clickpercentage2 = Math.round(clickpercentage2 * 1000) / 1000;
	
	$("#clickpercentage1").html(clickpercentage1);
	$("#clickpercentage2").html(clickpercentage2); 

 }
 
 autopercentagetotal();
  setInterval(autopercentagetotal, 2500);
 function autopercentagetotal() {
	epstotal1 = (epsgain1*egmultiply1)*emultiply;
	epstotal2 = (epsgain2*egmultiply2)*emultiply;
	epstotal3 = (epsgain3*egmultiply3)*emultiply;
	
    epstotal1 = Math.round(epstotal1 * 1000) / 1000;
	epstotal2 = Math.round(epstotal2 * 1000) / 1000;
	epstotal3 = Math.round(epstotal3 * 1000) / 1000; 
	
	autototalgainfrombuildings = ((epsgain1*egmultiply1) + (epsgain2*egmultiply2) + (epsgain3*egmultiply3))*emultiply;
	autototalgainfrombuildings = Math.round(autototalgainfrombuildings * 1000) / 1000;
	
	autopercentage1 = (egnum1 > 0)?(epstotal1/autototalgainfrombuildings)*100:0;
	autopercentage1 = Math.round(autopercentage1 * 1000) / 1000;
	
	autopercentage2 = (egnum2 > 0)?(epstotal2/autototalgainfrombuildings)*100:0;
	autopercentage2 = Math.round(autopercentage2 * 1000) / 1000;
	
	autopercentage3 = (egnum3 > 0)?(epstotal3/autototalgainfrombuildings)*100:0;
	autopercentage3 = Math.round(autopercentage3 * 1000) / 1000;	
	
	$("#autopercentage1").html(autopercentage1);
	$("#autopercentage2").html(autopercentage2); 
	$("#autopercentage3").html(autopercentage3); 
 }
 cost();
 function cost(){
	epcostmultiply1 = Math.pow(1.15, epnum1)
	cost1 = orginalcost1 * epcostmultiply1; 
	cost1 = Math.round(cost1 * 1000) / 1000;
	
	$("#epcost1").html(cost1); 
	
	epcostmultiply2 = Math.pow(1.15, epnum2)
	cost2 = orginalcost2 * epcostmultiply2; 
	cost2 = Math.round(cost2 * 1000) / 1000;
	$("#epcost2").html(cost2);
		 
	egcostmultiply1 = Math.pow(1.15, egnum1)
	egcost1 = orginalegcost1 * egcostmultiply1; 
	egcost1 = Math.round(egcost1 * 1000) / 1000;	
	
	$("#egcost1").html(egcost1);
	
	egcostmultiply2 = Math.pow(1.15, egnum2)
	egcost2 = orginalegcost2 * egcostmultiply2; 
	egcost2 = Math.round(egcost2 * 1000) / 1000;	
	$("#egcost2").html(egcost2);
	
	egcostmultiply3 = Math.pow(1.15, egnum3)
	egcost3 = orginalegcost3 * egcostmultiply3; 
	egcost3 = Math.round(egcost3 * 1000) / 1000;
	$("#egcost3").html(egcost3);
 }
  acquried();
 function acquried(){
  $("#epnum1").html(epnum1);
  $("#epnum2").html(epnum2);
  
  $("#egnum1").html(egnum1);
  $("#egnum2").html(egnum2);
  $("#egnum3").html(egnum3); 
 }
  
 fast();
  setInterval(fast, 20);
  
  function fast(){
	  epsgain = (orginalepsgain + (epsgain1*egmultiply1) + (epsgain2*egmultiply2) + (epsgain3*egmultiply3))*emultiply;
	  epsgain = Math.round(epsgain * 1000) / 1000;
	  thetotal = thetotal + epsgain/50;
	  totalenergyed = totalenergyed + epsgain/50;
	  totalenergyed = Math.round(totalenergyed * 1000) / 1000;
	  thetotal = Math.round(thetotal * 1000) / 1000;
  }
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
  $( "#deleteallcookies" ).click(function() {
document.getElementById("deleteallcookiesdialog").style.display = "block";
document.getElementById("cover").style.display = "block";
  });
  $( "#canceldialog" ).click(function() {
document.getElementById("deleteallcookiesdialog").style.display = "none";
document.getElementById("cover").style.display = "none";	   
  });
   $( "#no" ).click(function() {
document.getElementById("deleteallcookiesdialog").style.display = "none";
document.getElementById("cover").style.display = "none";	   
  });
  $( "#yes" ).click(function() {
document.getElementById("deleteallcookiesdialog").style.display = "none";
document.getElementById("cover").style.display = "none";	
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
 //clickBUY1
  $( "#clickbuy1" ).click(function() {
	epcostmultiply1 = Math.pow(1.15, epnum1)
	cost1 = orginalcost1 * epcostmultiply1; 
	cost1 = Math.round(cost1 * 1000) / 1000;
if(cost1 <= thetotal) {
	thetotal = thetotal - cost1;
	thetotal = Math.round(thetotal * 1000) / 1000;
	epnum1 = epnum1 + 1;
	epcostmultiply1 = Math.pow(1.15, epnum1)
	cost1 = orginalcost1 * epcostmultiply1; 
	cost1 = Math.round(cost1 * 1000) / 1000;
	epcgain1 = epcgain1 + epcplus1;
	calcgain();
	calcplus();
	calcgaintotal();
	acquried();
	cost();
} else {
	$("#errorcost1").show("medium").delay(2500).queue(function(n) {
  $(this).hide("medium"); n();
});
}
 });
  //clickBUY2
   $( "#clickbuy2" ).click(function() {
	epcostmultiply2 = Math.pow(1.15, epnum2)
	cost2 = orginalcost2 * epcostmultiply2; 
	cost2 = Math.round(cost2 * 1000) / 1000;
if(cost2 <= thetotal) {

	thetotal = thetotal - cost2;
	thetotal = Math.round(thetotal * 1000) / 1000;
	epnum2 = epnum2 + 1;
	epcostmultiply2 = Math.pow(1.15, epnum2)
	cost2 = orginalcost2 * epcostmultiply2; 
	cost2 = Math.round(cost2 * 1000) / 1000;
    epcgain2 = epcgain2 + epcplus2;
	calcgain();
	calcplus();
	calcgaintotal();
    acquried();
	cost();
} else {
	$("#errorcost2").show("medium").delay(2500).queue(function(n) {
  $(this).hide("medium"); n();
});
}
 });
  //auto
  //autoBUY1
  $( "#autobuy1" ).click(function() {
	egcostmultiply1 = Math.pow(1.15, egnum1)
	egcost1 = orginalegcost1 * egcostmultiply1; 
	egcost1 = Math.round(egcost1 * 1000) / 1000;
if(egcost1 <= thetotal) {

	thetotal = thetotal - egcost1;
	thetotal = Math.round(thetotal * 1000) / 1000;
	egnum1 = egnum1 + 1;
	egcostmultiply1 = Math.pow(1.15, egnum1)
	egcost1 = orginalegcost1 * egcostmultiply1; 
	egcost1 = Math.round(egcost1 * 1000) / 1000;
	epsgain1 = epsgain1 + epsplus1;
	calcepsgain();
	calcepsplus();
	calcepsgaintotal();
    acquried();
	cost();
	
} else {
	$("#autoerrorcost1").show("medium").delay(2500).queue(function(n) {
  $(this).hide("medium"); n();
});
}
 });
  //autoBUY2
   $( "#autobuy2" ).click(function() {
	egcostmultiply2 = Math.pow(1.15, egnum2)
	egcost2 = orginalegcost2 * egcostmultiply2; 
	egcost2 = Math.round(egcost2 * 1000) / 1000;
if(egcost2 <= thetotal) {

	thetotal = thetotal - egcost2;
	thetotal = Math.round(thetotal * 1000) / 1000;
	egnum2 = egnum2 + 1;

    epsgain2 = epsgain2 + epsplus2;
	calcepsgain();
	calcepsplus();
	calcepsgaintotal();
    acquried();
	cost();
} else {
	$("#autoerrorcost2").show("medium").delay(2500).queue(function(n) {
  $(this).hide("medium"); n();
});
}
 });
  //autoBUY3
   $( "#autobuy3" ).click(function() {
	egcostmultiply3 = Math.pow(1.15, egnum3)
	egcost3 = orginalegcost3 * egcostmultiply3; 
	egcost3 = Math.round(egcost3 * 1000) / 1000;
if(egcost3 <= thetotal) {

	thetotal = thetotal - egcost3;
	thetotal = Math.round(thetotal * 1000) / 1000;
	egnum3 = egnum3 + 1;
	egcostmultiply3 = Math.pow(1.15, egnum3)
	egcost3 = orginalegcost3 * egcostmultiply3; 
	egcost3 = Math.round(egcost3 * 1000) / 1000;
    epsgain3 = epsgain3 + epsplus3;
	calcepsgain();
	calcepsplus();
	calcepsgaintotal();
    acquried();
	cost();
} else {
	$("#autoerrorcost3").show("medium").delay(2500).queue(function(n) {
  $(this).hide("medium"); n();
});
}
 });
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
 if(epnum1 >= 5 && achievementstatus1 == true){
	notify("Achievement \"Acquired 5 Energy Pylon\" acquried. Energy progress bar operation reduced by 100ms.")
    changingduration1 = changingduration1 - 100;
	achievementstatus1 = false;
	setTimeout(function(){
	updateAchievement();
	 },100);
 }
 //achievement2
 if(epnum1 >= 10 && achievementstatus2 == true){
  notify("Achievement\"Acquired 10 Energy Pylon\" acquried. Energy multiplyier for Energy Pylon increased to 1.5.")
  epcmultiply1 = 1.5;
	achievementstatus2 = false;
	updateAchievement();
	calcgain();
	calcplus();
 }

 //achievement3
 if(clicked >= 10 && achievementstatus3 == true){
	notify("Achievement\"Click 10 times\" acquried. Energy multiplyier increased to "+ emultiply +"");
	emultiply = emultiply + 0.05;
	emultiply = Math.round(emultiply * 1000) / 1000;
	achievementstatus3 = false;
	updateAchievement();
	calcgain();
	calcplus();
 }
 
  //achievement4
 if(clicked >= 100 && achievementstatus4 == true){
	notify("Achievement\"Click 100 times\" acquried. Energy multiplyier increased to "+ emultiply +"");
	emultiply = emultiply + 0.05;
	emultiply = Math.round(emultiply * 1000) / 1000;
	achievementstatus4= false;
	updateAchievement();
	calcgain();
	calcplus();
 }
  
 
  //achievement5
 if(clickenergy >= 50 && achievementstatus5 == true){
	notify("Achievement\"Gain 50 energy from clicking\" acquried. Energy multiplyier increased to "+ emultiply +"");
	emultiply = emultiply + 0.05;
	emultiply = Math.round(emultiply * 1000) / 1000;
	achievementstatus5= false;
	updateAchievement();
	calcgain();
	calcplus();
 }
  
  //achievement6
 if(clickenergy >= 500 && achievementstatus6 == true){
	notify("Achievement\"Gain 500 energy from clicking\" acquried. Energy multiplyier increased to "+ emultiply +"");
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
 
 setInterval(stats, 2500);
 
 function stats(){
totalbuildings = epnum1 + epnum2 + egnum1 + egnum2 + egnum3;
$("#createdenergy").html(totalenergyed);
$("#createdenergyclicking").html(clickenergy);
$("#timesclicked").html(clicked); 
$("#timesprobarcompleted").html(timesprobarcompleted); 
$("#totalbuildings").html(totalbuildings); 	 
$("#emultiply").html("x" + emultiply); 	
 }
 
 
  setInterval(run, time);
  function run() {

 if(auto1 === "true" && init1 === "true") { duration1 = changingduration1; init1 = "false";}
	if(s <= 0 && auto1 === "true"){s = duration1;}
	if(sl <= 0){sl = 1; thetotal = thetotal + gain; thetotal = Math.round(thetotal * 1000) / 1000;}
   if(s <= 0){ duration1 = 0; elem.style.width = '0%'; sreverse = 0; widthpercentage = 0; if(probar === false){timesprobarcompleted = timesprobarcompleted + 1; probar = true; clicked = clicked + 1; clickenergy = clickenergy + gain; clickenergy = Math.round(clickenergy * 1000) / 1000; totalenergyed = totalenergyed + gain; totalenergyed = Math.round(totalenergyed * 1000) / 1000;} $("#click1").html("Click");} else {
  probar = false;
  s = s - 20;
  sl = s;
   $("#click1").html(s);
   sreverse = duration1 - s;
   widthpercentage = sreverse/duration1*100;
   $("#a").html(widthpercentage);
   elem.style.width = widthpercentage + '%'; 
  
}
    $("#thetotal").html(thetotal);
	
	  $("#gain").html(gain);
	  $("#epsgain").html(epsgain);
	if(thetotal >= 5000){$( "#won" ).show();}
  }


  
  
  
  
  
}



	move();

});