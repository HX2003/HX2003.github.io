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

function setCookieJson(name, value) {
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + 30);
	 
	var cookie = [name, '=',  LZString.compressToBase64(JSON.stringify(value)),';'].join('');
	document.cookie = cookie;
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
function setVar(variable,value){
	if(variable !== "undefined"){
		eval(""+variable+" = "+value+";");
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
  currentVersion="1.1.0";
  //Init VARAIABLES starting game 
    InitVar1 = {
		version:currentVersion,
		time:10,
		totalenergyed:0,
		probarcounter:0,
		widthpercentage:0,
		ProbarpercentageA:0,
		Probarpercentage:0,
		probarstartdate:0,
		probarstartdateI:0,
		probarreduction:0,
		timesprobarcompleted:0,
		epcgaintotal1:0,
		epcgaintotal2:0,
		epcgaintotal3:0,
		epcgaintotal4:0,
		epsgaintotal1:0,
		epsgaintotal2:0,
		epsgaintotal3:0,
		epsgaintotal4:0,
		BuildingClickNumber0000:0,
		BuildingClickNumber0001:0,
		BuildingClickNumber0002:0,
		BuildingClickNumber0003:0,
		BuildingAutoNumber0000:0,
		BuildingAutoNumber0001:0,
		BuildingAutoNumber0002:0,
		BuildingAutoNumber0003:0
	}
 
 InitVar2 = {
		 BuildingClickOriginalCost0000:5,
		 BuildingClickOriginalCost0001:50,
		 BuildingClickOriginalCost0002:800,
		 BuildingClickOriginalCost0003:16000,
		 BuildingAutoOriginalCost0000:100,
		 BuildingAutoOriginalCost0001:1000,
		 BuildingAutoOriginalCost0002:7500,
		 BuildingAutoOriginalCost0003:125000,
		 clicked:0,
		 clickenergy:0,
		 emultiply:1,
		 epcmultiply1:1,
		 epcmultiply2:1,
		 epcmultiply3:1,
		 epcmultiply4:1,
		 egmultiply1:1,
		 egmultiply2:1,
		 egmultiply3:1,
		 egmultiply4:1,
		 BuildingClickOrginalValue0000:0.75,
		 BuildingClickOrginalValue0001:4,
		 BuildingClickOrginalValue0002:50,
		 BuildingClickOrginalValue0003:500,
		 BuildingAutoOrginalValue0000:0.75,
		 BuildingAutoOrginalValue0001:5,
		 BuildingAutoOrginalValue0002:20,
		 BuildingAutoOrginalValue0003:250
	}
  InitVar3 = {
    orginalgain:1,
	orginalepsgain:0,
	thetotal:0,
	achievementEnergyGoalStatus:0,
	achievementClickTimesStatus:0,
	achievementClickEnergyStatus:0,
	achievementstatus1:true,
	achievementstatus2:true,
	achievementstatus3:true,
	achievementstatus4:true,
	achievementstatus5:true,
	achievementstatus6:true,
	EnergyGoalLevel:0,
	EnergyGoalStart:50,
	ResearchPoints:0,
	
 }
 InitVar4 = {
 cost9000E:50,
 cost9000R:0,
 cost8000E:125,
 cost8000R:0.5,
 cost8081E:400,
 cost8081R:1,
 cost8001E:500,
 cost8001R:1.25,
 cost8002E:10000,
 cost8002R:4,
 cost8091E:1500,
 cost8091R:2,
 cost6000E:566000,
 cost6000R:16,
 cost6001E:750000,
 cost6001R:5,
 cost6001Cancel:750000000,
 cost6002E:750000,
 cost6002R:5,
 cost6002Cancel:750000000,
 cost9001E:200,
 cost9001R:0.75,
 cost9002E:10000,
 cost9002R:3,
 unqID9000lvl:0,
 unqID8000lvl:0,
 unqID8001lvl:0,
 unqID8081lvl:0,
 unqID8091lvl:0,
 unqID6000lvl:0,
 unqID6001lvl:0,
 unqID6002lvl:0,
 unqID9001lvl:0,
 unqID9002lvl:0
 }
 
 Cookieresult = getCookie("Var1");
 if(Cookieresult!=""){
	 loadCookies("Var1","1");
 }else{
	 //not found 
	 console.log("Cookie Var1 not found, creating Var1");
	 setCookieJson("Var1",InitVar1);
	 loadCookies("Var1","1");
 }
 
 Cookieresult = getCookie("Var2");
 if(Cookieresult!=""){
	 loadCookies("Var2","2");
 }else{
	 console.log("Cookie Var2 not found, creating Var2");
	 setCookieJson("Var2",InitVar2);
	 loadCookies("Var2","2");
 }
 
 Cookieresult = getCookie("Var3");
 if(Cookieresult!=""){
	 loadCookies("Var3","3");
 }else{
	 console.log("Cookie Var3 not found, creating Var3");
	 setCookieJson("Var3",InitVar3);
	 loadCookies("Var3","3");
 }
 
 Cookieresult = getCookie("Var4");
 if(Cookieresult!=""){
	 loadCookies("Var4","4");
 }else{
	 console.log("Cookie Var4 not found, creating Var4");
	 setCookieJson("Var4",InitVar4);
	 loadCookies("Var4","4");
 }
 
 function loadCookies(cookieName,variableName){
	cookieResult = getCookie(cookieName);
	if(cookieResult!=""){
        Var output = "";
        try { output = JSON.parse(LZString.decompressFromBase64(cookieResult));
		} catch(e) { deleteallcookies();location.reload(); }
	
	 if(variableName=="1"){
	  loadedVar1=output; 
	 }
	 if(variableName=="2"){
	  loadedVar2=output;
	 }
	 if(variableName=="3"){
	  loadedVar3=output;
	 }
	 if(variableName=="4"){
	  loadedVar4=output;
	 }
	}else{ 
	  alert("cookie not valid");
	  throw new Error("Something went badly wrong!");
	}
 }
  if(loadedVar1.version!=currentVersion){
	 var r = confirm("Your version "+loadedVar1.version+" is not supported, current supported is verison "+currentVersion+". Reset game? Errors may occur if you proceed.");
	 if(r==1){deleteallcookies();location.reload();}
 }
 varTovar();
 function varTovar(){
	version=loadedVar1.version;
    time=loadedVar1.time;
	totalenergyed=loadedVar1.totalenergyed;
	probarcounter=loadedVar1.probarcounter;
	widthpercentage=loadedVar1.widthpercentage;
	ProbarpercentageA=loadedVar1.ProbarpercentageA;
	Probarpercentage=loadedVar1.Probarpercentage;
	probarstartdate=loadedVar1.probarstartdate;
	probarstartdateI=loadedVar1.probarstartdateI;
	probarreduction=loadedVar1.probarreduction;
	timesprobarcompleted=loadedVar1.timesprobarcompleted;
	epcgaintotal1=loadedVar1.epcgaintotal1;
	epcgaintotal2=loadedVar1.epcgaintotal2;
	epcgaintotal3=loadedVar1.epcgaintotal3;
	epcgaintotal4=loadedVar1.epcgaintotal4;
	epsgaintotal1=loadedVar1.epsgaintotal1;
	epsgaintotal2=loadedVar1.epsgaintotal2;
	epsgaintotal3=loadedVar1.epsgaintotal3;
	epsgaintotal4=loadedVar1.epsgaintotal4;
	BuildingClickNumber0000=loadedVar1.BuildingClickNumber0000;
	BuildingClickNumber0001=loadedVar1.BuildingClickNumber0001;
	BuildingClickNumber0002=loadedVar1.BuildingClickNumber0002;
	BuildingClickNumber0003=loadedVar1.BuildingClickNumber0003;
	BuildingAutoNumber0000=loadedVar1.BuildingAutoNumber0000;
	BuildingAutoNumber0001=loadedVar1.BuildingAutoNumber0001;
	BuildingAutoNumber0002=loadedVar1.BuildingAutoNumber0002;
	BuildingAutoNumber0003=loadedVar1.BuildingAutoNumber0003;
    
	BuildingClickOriginalCost0000=loadedVar2.BuildingClickOriginalCost0000;
	BuildingClickOriginalCost0001=loadedVar2.BuildingClickOriginalCost0001;	
	BuildingClickOriginalCost0002=loadedVar2.BuildingClickOriginalCost0002;
	BuildingClickOriginalCost0003=loadedVar2.BuildingClickOriginalCost0003;
	BuildingAutoOriginalCost0000=loadedVar2.BuildingAutoOriginalCost0000;
	BuildingAutoOriginalCost0001=loadedVar2.BuildingAutoOriginalCost0001;
	BuildingAutoOriginalCost0002=loadedVar2.BuildingAutoOriginalCost0002;
	BuildingAutoOriginalCost0003=loadedVar2.BuildingAutoOriginalCost0003;
	clicked=loadedVar2.clicked;
	clickenergy=loadedVar2.clickenergy;
	emultiply=loadedVar2.emultiply;
	epcmultiply1=loadedVar2.epcmultiply1;
	epcmultiply2=loadedVar2.epcmultiply2;
	epcmultiply3=loadedVar2.epcmultiply3;
	epcmultiply4=loadedVar2.epcmultiply4;
	egmultiply1=loadedVar2.egmultiply1;
	egmultiply2=loadedVar2.egmultiply2;
	egmultiply3=loadedVar2.egmultiply3;
	egmultiply4=loadedVar2.egmultiply4;
	BuildingClickOrginalValue0000=loadedVar2.BuildingClickOrginalValue0000;
	BuildingClickOrginalValue0001=loadedVar2.BuildingClickOrginalValue0001;
	BuildingClickOrginalValue0002=loadedVar2.BuildingClickOrginalValue0002;
	BuildingClickOrginalValue0003=loadedVar2.BuildingClickOrginalValue0003;
	BuildingAutoOrginalValue0000=loadedVar2.BuildingAutoOrginalValue0000;
	BuildingAutoOrginalValue0001=loadedVar2.BuildingAutoOrginalValue0001;
	BuildingAutoOrginalValue0002=loadedVar2.BuildingAutoOrginalValue0002;
	BuildingAutoOrginalValue0003=loadedVar2.BuildingAutoOrginalValue0003;
	
	orginalgain=loadedVar3.orginalgain;
	orginalepsgain=loadedVar3.orginalepsgain;
	thetotal=loadedVar3.thetotal;
    achievementEnergyGoalStatus=loadedVar3.achievementEnergyGoalStatus;
	achievementClickTimesStatus=loadedVar3.achievementClickTimesStatus;
	achievementClickEnergyStatus=loadedVar3.achievementClickEnergyStatus;
	achievementstatus1=loadedVar3.achievementstatus1;
	achievementstatus2=loadedVar3.achievementstatus2;
	achievementstatus3=loadedVar3.achievementstatus3;
	achievementstatus4=loadedVar3.achievementstatus4;
	achievementstatus5=loadedVar3.achievementstatus5;
	achievementstatus6=loadedVar3.achievementstatus6;
	EnergyGoalLevel=loadedVar3.EnergyGoalLevel;
	EnergyGoalStart=loadedVar3.EnergyGoalStart;
	ResearchPoints=loadedVar3.ResearchPoints;
	
	cost9000E=loadedVar4.cost9000E;
	cost9000R=loadedVar4.cost9000R;
	cost8000E=loadedVar4.cost8000E;
	cost8000R=loadedVar4.cost8000R;
	cost8081E=loadedVar4.cost8081E;
	cost8081R=loadedVar4.cost8081R;
	cost8001E=loadedVar4.cost8001E;
	cost8001R=loadedVar4.cost8001R;
	cost8002E=loadedVar4.cost8002E;
	cost8002R=loadedVar4.cost8002R;
	cost8091E=loadedVar4.cost8091E;
	cost8091R=loadedVar4.cost8091R;
	cost6000E=loadedVar4.cost6000E;
	cost6000R=loadedVar4.cost6000R;
	cost6001E=loadedVar4.cost6001E;
	cost6001R=loadedVar4.cost6001R;
	cost6001Cancel=loadedVar4.cost6001Cancel;
	cost6002E=loadedVar4.cost6002E;
	cost6002R=loadedVar4.cost6002R;
    cost6002Cancel=loadedVar4.cost6002Cancel;
    cost9001E=loadedVar4.cost9001E;
	cost9001R=loadedVar4.cost9001R;
	cost9002E=loadedVar4.cost9002E;
	cost9002R=loadedVar4.cost9002R;
	unqID9000lvl=loadedVar4.unqID9000lvl;
	unqID8000lvl=loadedVar4.unqID8000lvl;
	unqID8001lvl=loadedVar4.unqID8001lvl;
	unqID8081lvl=loadedVar4.unqID8081lvl;
	unqID8091lvl=loadedVar4.unqID8091lvl;
	unqID6000lvl=loadedVar4.unqID6000lvl;
	unqID6001lvl=loadedVar4.unqID6001lvl;
	unqID6002lvl=loadedVar4.unqID6002lvl;
	unqID9001lvl=loadedVar4.unqID9001lvl;
	unqID9002lvl=loadedVar4.unqID9002lvl;
	
	
 }
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
 function setSaveVar(){
	saveVar1 = {
		version:version,
		time:time,
		totalenergyed:totalenergyed,
		probarcounter:probarcounter,
		widthpercentage:widthpercentage,
		ProbarpercentageA:ProbarpercentageA,
		Probarpercentage:Probarpercentage,
		probarstartdate:probarstartdate,
		probarstartdateI:probarstartdateI,
		probarreduction:probarreduction,
		timesprobarcompleted:timesprobarcompleted,
		epcgaintotal1:epcgaintotal1,
		epcgaintotal2:epcgaintotal2,
		epcgaintotal3:epcgaintotal3,
		epcgaintotal4:epcgaintotal4,
		epsgaintotal1:epsgaintotal1,
		epsgaintotal2:epsgaintotal2,
		epsgaintotal3:epsgaintotal3,
		epsgaintotal4:epsgaintotal4,
		BuildingClickNumber0000:BuildingClickNumber0000,
		BuildingClickNumber0001:BuildingClickNumber0001,
		BuildingClickNumber0002:BuildingClickNumber0002,
		BuildingClickNumber0003:BuildingClickNumber0003,
		BuildingAutoNumber0000:BuildingAutoNumber0000,
		BuildingAutoNumber0001:BuildingAutoNumber0001,
		BuildingAutoNumber0002:BuildingAutoNumber0002,
		BuildingAutoNumber0003:BuildingAutoNumber0003
	}
 
 saveVar2 = {
		 BuildingClickOriginalCost0000:BuildingClickOriginalCost0000,
		 BuildingClickOriginalCost0001:BuildingClickOriginalCost0001,
		 BuildingClickOriginalCost0002:BuildingClickOriginalCost0002,
		 BuildingClickOriginalCost0003:BuildingClickOriginalCost0003,
		 BuildingAutoOriginalCost0000:BuildingAutoOriginalCost0000,
		 BuildingAutoOriginalCost0001:BuildingAutoOriginalCost0001,
		 BuildingAutoOriginalCost0002:BuildingAutoOriginalCost0002,
		 BuildingAutoOriginalCost0003:BuildingAutoOriginalCost0003,
		 clicked:clicked,
		 clickenergy:clickenergy,
		 emultiply:emultiply,
		 epcmultiply1:epcmultiply1,
		 epcmultiply2:epcmultiply2,
		 epcmultiply3:epcmultiply3,
		 epcmultiply4:epcmultiply4,
		 egmultiply1:egmultiply1,
		 egmultiply2:egmultiply2,
		 egmultiply3:egmultiply3,
		 egmultiply4:egmultiply4,
		 BuildingClickOrginalValue0000:BuildingClickOrginalValue0000,
		 BuildingClickOrginalValue0001:BuildingClickOrginalValue0001,
		 BuildingClickOrginalValue0002:BuildingClickOrginalValue0002,
		 BuildingClickOrginalValue0003:BuildingClickOrginalValue0003,
		 BuildingAutoOrginalValue0000:BuildingAutoOrginalValue0000,
		 BuildingAutoOrginalValue0001:BuildingAutoOrginalValue0001,
		 BuildingAutoOrginalValue0002:BuildingAutoOrginalValue0002,
		 BuildingAutoOrginalValue0003:BuildingAutoOrginalValue0003
	}
 saveVar3 = {
    orginalgain:orginalgain,
	orginalepsgain:orginalepsgain,
	thetotal:thetotal,
	achievementEnergyGoalStatus:achievementEnergyGoalStatus,
	achievementClickTimesStatus:achievementClickTimesStatus,
	achievementClickEnergyStatus:achievementClickEnergyStatus,
	achievementstatus1:achievementstatus1,
	achievementstatus2:achievementstatus2,
	achievementstatus3:achievementstatus3,
	achievementstatus4:achievementstatus4,
	achievementstatus5:achievementstatus5,
	achievementstatus6:achievementstatus6,
	EnergyGoalLevel:EnergyGoalLevel,
	EnergyGoalStart:EnergyGoalStart,
	ResearchPoints:ResearchPoints,
	
 }
 saveVar4 = {
 cost9000E:cost9000E,
 cost9000R:cost9000R,
 cost8000E:cost8000E,
 cost8000R:cost8000R,
 cost8081E:cost8081E,
 cost8081R:cost8081R,
 cost8001E:cost8001E,
 cost8001R:cost8001R,
 cost8002E:cost8002E,
 cost8002R:cost8002R,
 cost8091E:cost8091E,
 cost8091R:cost8091R,
 cost6000E:cost6000E,
 cost6000R:cost6000R,
 cost6001E:cost6001E,
 cost6001R:cost6001R,
 cost6001Cancel:cost6001Cancel,
 cost6002E:cost6002E,
 cost6002R:cost6002R,
 cost6002Cancel:cost6002Cancel, 
 cost9001E:cost9001E,
 cost9001R:cost9001R,
 cost9002E:cost9002E,
 cost9002R:cost9002R,
 unqID9000lvl:unqID9000lvl,
 unqID8000lvl:unqID8000lvl,
 unqID8001lvl:unqID8001lvl,
 unqID8081lvl:unqID8081lvl,
 unqID8091lvl:unqID8091lvl,
 unqID6000lvl:unqID6000lvl,
 unqID6001lvl:unqID6001lvl,
 unqID6002lvl:unqID6002lvl,
 unqID9001lvl:unqID9001lvl,
 unqID9002lvl:unqID9002lvl
 }
	 
 }
function savegamecookie(){
 notify("Saving game...");
 setSaveVar();
 setCookieJson("Var1",saveVar1);
 setCookieJson("Var2",saveVar2);
 setCookieJson("Var3",saveVar3);
 setCookieJson("Var4",saveVar4);
 notify("Game saved");
}
//Export SAVE
  $( "#exportImportSave" ).click(function() {
document.getElementById("SaveDialog").style.display = "block";
  });
  $( "#canceldialog2" ).click(function() {
document.getElementById("SaveDialog").style.display = "none";
document.getElementById('ImportExportField').value = "";  
  });
   $( "#selectAll" ).click(function() {
	   document.getElementById("ImportExportField").select();
   });
   $("#import").click(function(){
	   if(document.getElementById('ImportExportField').value==""){
		    alert("Textbox is empty");
	   }else{
	   var compressed = document.getElementById('ImportExportField').value;
	   var decompressed = LZString.decompressFromBase64(compressed);
	   if(isJson(decompressed)){
	   var revived = JSON.parse(decompressed);
	   if(revived[0].version==currentVersion){
		//set variables to load from
		 setCookieJson("Var1",revived[0]);
         setCookieJson("Var2",revived[1]);
         setCookieJson("Var3",revived[2]);
         setCookieJson("Var4",revived[3]);
		 location.reload();
	   }
	   else{
		   alert("Save file version "+revived[0].version+" not supported use verison "+currentVersion+" instead.");
	   }
	   }
	   else{
		   alert("Invalid save file");
	   }
	   }
   });
  function isJson(str) {
       try {
        JSON.parse(str);
       } catch (e) {
        return false;
       }
    return true;
     }
   $( "#export" ).click(function() {
	  setSaveVar();
 	  var string = '[' + JSON.stringify(saveVar1) + ',' + JSON.stringify(saveVar2) + ',' + JSON.stringify(saveVar3) + ',' + JSON.stringify(saveVar4) + ']';
	  var compressed = LZString.compressToBase64(string);
      document.getElementById('ImportExportField').value = compressed;  
  });
function calcgain(){
	//calculate click energy gain
	calcepsgain();
	if(unqID8091lvl==0){
		additionalGain=0;
	}else{
		 additionalGain =  epsgain*(unqID8091lvl*0.02);
	}
	var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=1.1;
	}else if(unqID6002lvl==1){
		anotherMultipler=0.9;
	}
	gain = (orginalgain + (BuildingClickOrginalValue0000*BuildingClickNumber0000*epcmultiply1) + (BuildingClickOrginalValue0001*BuildingClickNumber0001*epcmultiply2) + (BuildingClickOrginalValue0002*BuildingClickNumber0002*epcmultiply3) + (BuildingClickOrginalValue0003*BuildingClickNumber0003*epcmultiply4)+additionalGain)*emultiply*anotherMultipler;
	gain = Math.round(gain * 1000) / 1000;
 }
function calcepsgain(){
	//calculate automatic energy gain (eps)
	var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=0.9;
	}else if(unqID6002lvl==1){
		anotherMultipler=1.1;
	}
	epsgain = (orginalepsgain + (BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply1) + (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply2) + (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply3) + (BuildingAutoOrginalValue0003*BuildingAutoNumber0003*egmultiply4))*emultiply*anotherMultipler;
	epsgain = Math.round(epsgain * 1000) / 1000;
}
 
function calcplus() {
	//GIVE VALUE FOR INCREASE EPC BY WHAT EACH
	var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=1.1;
	}else if(unqID6002lvl==1){
		anotherMultipler=0.9;
	}
	calcA1 = (BuildingClickOrginalValue0000*epcmultiply1)*emultiply*anotherMultipler;
	calcA2 = (BuildingClickOrginalValue0001*epcmultiply2)*emultiply*anotherMultipler;
	calcA3 = (BuildingClickOrginalValue0002*epcmultiply3)*emultiply*anotherMultipler;
	calcA4 = (BuildingClickOrginalValue0003*epcmultiply4)*emultiply*anotherMultipler;
	
    calcA1 = Math.round(calcA1 * 1000) / 1000;
	calcA2 = Math.round(calcA2 * 1000) / 1000;
	calcA3 = Math.round(calcA3 * 1000) / 1000;
	calcA4 = Math.round(calcA4 * 1000) / 1000;
	
	$("#epcplus1").html(formatNumber(calcA1));
	$("#epcplus2").html(formatNumber(calcA2));	
	$("#epcplus3").html(formatNumber(calcA3));	
	$("#epcplus4").html(formatNumber(calcA3));	
}
function calcepsplus(){
    var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=0.9;
	}else if(unqID6002lvl==1){
		anotherMultipler=1.1;
	}
	calcB1 = (BuildingAutoOrginalValue0000*egmultiply1)*emultiply*anotherMultipler;
	calcB2 = (BuildingAutoOrginalValue0001*egmultiply2)*emultiply*anotherMultipler;
	calcB3 = (BuildingAutoOrginalValue0002*egmultiply3)*emultiply*anotherMultipler;
	calcB4 = (BuildingAutoOrginalValue0003*egmultiply4)*emultiply*anotherMultipler;
	
    calcB1 = Math.round(calcB1 * 1000) / 1000;
	calcB2 = Math.round(calcB2 * 1000) / 1000;	
	calcB3 = Math.round(calcB3 * 1000) / 1000;	
	calcB4 = Math.round(calcB4 * 1000) / 1000;	
	
	$("#epsplus1").html(formatNumber(calcB1));
	$("#epsplus2").html(formatNumber(calcB2));
	$("#epsplus3").html(formatNumber(calcB3));	
	$("#epsplus4").html(formatNumber(calcB4));	
}
 calcgain();
 calcepsgain();
 
 calcplus();
 calcepsplus();


 
 function calcgaintotal(){
	//GIVE VALUE FOR INCREASE EPC BY WHAT TOTAL
	var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=1.1;
	}else if(unqID6002lvl==1){
		anotherMultipler=0.9;
	}
	epctotal1 = (BuildingClickOrginalValue0000*BuildingClickNumber0000*epcmultiply1)*emultiply*anotherMultipler;
	epctotal2 = (BuildingClickOrginalValue0001*BuildingClickNumber0001*epcmultiply2)*emultiply*anotherMultipler;
	epctotal3 = (BuildingClickOrginalValue0002*BuildingClickNumber0002*epcmultiply3)*emultiply*anotherMultipler;
	epctotal4 = (BuildingClickOrginalValue0003*BuildingClickNumber0003*epcmultiply4)*emultiply*anotherMultipler;
	
    epctotal1 = Math.round(epctotal1 * 1000) / 1000;
	epctotal2 = Math.round(epctotal2 * 1000) / 1000;
	epctotal3 = Math.round(epctotal3 * 1000) / 1000;
	epctotal4 = Math.round(epctotal4 * 1000) / 1000;
	
$("#epctotal1").html(formatNumber(epctotal1));
$("#epctotal2").html(formatNumber(epctotal2)); 
$("#epctotal3").html(formatNumber(epctotal3)); 
$("#epctotal4").html(formatNumber(epctotal4));
 }
 calcgaintotal();
 
  function calcepsgaintotal(){
	var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=0.9;
	}else if(unqID6002lvl==1){
		anotherMultipler=1.1;
	}
	epstotal1 = (BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply1)*emultiply*anotherMultipler;
	epstotal2 = (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply2)*emultiply*anotherMultipler;
	epstotal3 = (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply3)*emultiply*anotherMultipler;
	epstotal4 = (BuildingAutoOrginalValue0003*BuildingAutoNumber0003*egmultiply4)*emultiply*anotherMultipler;
	
    epstotal1 = Math.round(epstotal1 * 1000) / 1000;
	epstotal2 = Math.round(epstotal2 * 1000) / 1000;
	epstotal3 = Math.round(epstotal3 * 1000) / 1000;
    epstotal4 = Math.round(epstotal4 * 1000) / 1000;
	  
$("#epstotal1").html(formatNumber(epstotal1));
$("#epstotal2").html(formatNumber(epstotal2)); 
$("#epstotal3").html(formatNumber(epstotal3)); 
$("#epstotal4").html(formatNumber(epstotal4)); 
 }
 calcepsgaintotal();
   
 clickpercentagetotal();
  setInterval(clickpercentagetotal, 2500);
 function clickpercentagetotal() {
	var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=1.1;
	}else if(unqID6002lvl==1){
		anotherMultipler=0.9;
	}
	epctotal1 = (BuildingClickOrginalValue0000*BuildingClickNumber0000*epcmultiply1)*emultiply*anotherMultipler;
	epctotal2 = (BuildingClickOrginalValue0001*BuildingClickNumber0001*epcmultiply2)*emultiply*anotherMultipler;
	epctotal3 = (BuildingClickOrginalValue0002*BuildingClickNumber0002*epcmultiply3)*emultiply*anotherMultipler;
	epctotal4 = (BuildingClickOrginalValue0003*BuildingClickNumber0003*epcmultiply4)*emultiply*anotherMultipler;
	
    epctotal1 = Math.round(epctotal1 * 1000) / 1000;
	epctotal2 = Math.round(epctotal2 * 1000) / 1000;
	epctotal3 = Math.round(epctotal3 * 1000) / 1000;
	epctotal4 = Math.round(epctotal4 * 1000) / 1000;
	
	//calculate click energy gain
	clicktotalgainfrombuildings = (orginalgain + (BuildingClickOrginalValue0000*BuildingClickNumber0000*epcmultiply1) + (BuildingClickOrginalValue0001*BuildingClickNumber0001*epcmultiply2) + (BuildingClickOrginalValue0002*BuildingClickNumber0002*epcmultiply3) + (BuildingClickOrginalValue0003*BuildingClickNumber0003*epcmultiply4))*emultiply*anotherMultipler;
	clicktotalgainfrombuildings = Math.round(clicktotalgainfrombuildings * 1000) / 1000;

	clickpercentage1 = (BuildingClickNumber0000 > 0)?(epctotal1/clicktotalgainfrombuildings)*100:0;
	clickpercentage1 = Math.round(clickpercentage1 * 1000) / 1000;
	
	clickpercentage2 = (BuildingClickNumber0001 > 0)?(epctotal2/clicktotalgainfrombuildings)*100:0;
	clickpercentage2 = Math.round(clickpercentage2 * 1000) / 1000;

	clickpercentage3 = (BuildingClickNumber0002 > 0)?(epctotal3/clicktotalgainfrombuildings)*100:0;
	clickpercentage3 = Math.round(clickpercentage3 * 1000) / 1000;
	
	clickpercentage4 = (BuildingClickNumber0003 > 0)?(epctotal4/clicktotalgainfrombuildings)*100:0;
	clickpercentage4 = Math.round(clickpercentage4 * 1000) / 1000;
	
	$("#clickpercentage1").html(clickpercentage1);
	$("#clickpercentage2").html(clickpercentage2); 
	$("#clickpercentage3").html(clickpercentage3);
    $("#clickpercentage4").html(clickpercentage4);
 }
 
 autopercentagetotal();
  setInterval(autopercentagetotal, 2500);
 function autopercentagetotal() {
	var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=0.9;
	}else if(unqID6002lvl==1){
		anotherMultipler=1.1;
	}
	epstotal1 = (BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply1)*emultiply*anotherMultipler;
	epstotal2 = (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply2)*emultiply*anotherMultipler;
	epstotal3 = (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply3)*emultiply*anotherMultipler;
	epstotal4 = (BuildingAutoOrginalValue0003*BuildingAutoNumber0003*egmultiply4)*emultiply*anotherMultipler;
	
    epstotal1 = Math.round(epstotal1 * 1000) / 1000;
	epstotal2 = Math.round(epstotal2 * 1000) / 1000;
	epstotal3 = Math.round(epstotal3 * 1000) / 1000; 
	epstotal4 = Math.round(epstotal4 * 1000) / 1000; 
	
	autototalgainfrombuildings = ((BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply1) + (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply2) + (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply3) + (BuildingAutoOrginalValue0003*BuildingAutoNumber0003*egmultiply4))*emultiply*anotherMultipler;
	autototalgainfrombuildings = Math.round(autototalgainfrombuildings * 1000) / 1000;
	
	autopercentage1 = (BuildingAutoNumber0000 > 0)?(epstotal1/autototalgainfrombuildings)*100:0;
	autopercentage1 = Math.round(autopercentage1 * 1000) / 1000;
	
	autopercentage2 = (BuildingAutoNumber0001 > 0)?(epstotal2/autototalgainfrombuildings)*100:0;
	autopercentage2 = Math.round(autopercentage2 * 1000) / 1000;
	
	autopercentage3 = (BuildingAutoNumber0002> 0)?(epstotal3/autototalgainfrombuildings)*100:0;
	autopercentage3 = Math.round(autopercentage3 * 1000) / 1000;	
	
	autopercentage4 = (BuildingAutoNumber0003> 0)?(epstotal4/autototalgainfrombuildings)*100:0;
	autopercentage4 = Math.round(autopercentage4 * 1000) / 1000;	
	
	$("#autopercentage1").html(autopercentage1);
	$("#autopercentage2").html(autopercentage2); 
	$("#autopercentage3").html(autopercentage3);
	$("#autopercentage4").html(autopercentage4); 
 }
 achievementBonusArray=[0,5,10,20,35,50];
 acheivementTotalEmultiplyBonus=[0,15,20,40,80,160];
  calcemultiply();
 function calcemultiply(){
	 TotalEmultiply=0;
for(var i=0; i<6; i++){
	 if(achievementEnergyGoalStatus+achievementClickTimesStatus+achievementClickEnergyStatus>=achievementBonusArray[i]){
	  TotalEmultiply=TotalEmultiply+acheivementTotalEmultiplyBonus[i];
	 }else{
		 i=999;
	 }
 }   
     $("#TotalEmultiply").html(TotalEmultiply);
	 emultiply=(1+achievementEnergyGoalStatus*0.05+achievementClickTimesStatus*0.05+achievementClickEnergyStatus*0.05+unqID9001lvl*0.10+unqID9002lvl*0.20)*((100+TotalEmultiply)/100);
	 emultiply = Math.round(emultiply * 1000) / 1000;
 }
 cost();
 function cost(){
costClickfunctions("0000");
costClickfunctions("0001");
costClickfunctions("0002");
costClickfunctions("0003");
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
costAutofunctions("0003");
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
  $("#epnum0003").html(BuildingClickNumber0003);
  
  $("#egnum0000").html(BuildingAutoNumber0000);
  $("#egnum0001").html(BuildingAutoNumber0001);
  $("#egnum0002").html(BuildingAutoNumber0002); 
  $("#egnum0003").html(BuildingAutoNumber0003); 
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
 buyClickClickfunctions("0003");
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
 buyClickAutofunctions("0003");
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
 totalAchievement=10;
 
 achievementEnergyGoalArray=[1,3,5,10,15,20,30,40,50,60];
 achievementClickTimesArray=[10,50,200,1000,2000,5000,10000,20000,50000,100000];
 achievementClickEnergyArray=[100,10000,1000000,100000000,10000000000,1000000000000,100000000000000,10000000000000000,1000000000000000000,100000000000000000000];
 displayAchievementInit();
 function displayAchievementInit(){
	
	 for(var i=totalAchievement;i>0;i--){
	 $( "#achievementEnergyGoalGRP" ).after("<div id=\"achievementEnergyGoal"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Energy Goal Level "+achievementEnergyGoalArray[i-1]+"<br><b style=\"color:#FF00FF;\">Reward: </b>Energy multiplyier increased by 0.05</span></div>" );
     }
	 for(var i=totalAchievement;i>0;i--){
	 $( "#achievementClickTimesGRP" ).after("<div id=\"achievementClickTimes"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Click "+achievementClickTimesArray[i-1]+" times<br><b style=\"color:#FF00FF;\">Reward: </b>Energy multiplyier increased by 0.05</span></div>" );
     }
	
	 for(var i=totalAchievement;i>0;i--){
	 $( "#achievementClickEnergyGRP" ).after("<div id=\"achievementClickEnergy"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Gain "+formatNumber(achievementClickEnergyArray[i-1])+" energy from clicking<br><b style=\"color:#FF00FF;\">Reward: </b>Energy multiplyier increased by 0.05</span></div>" );
     }
 }
 updateAchievement();
 function updateAchievement(){
	 //for initial update
 for(var i=0; i<achievementEnergyGoalStatus+1;i++){
	 eval("$(\"#achievementEnergyGoal"+i+"\").addClass(\"achievementachieved\");");
 }
 for(var i=0; i<achievementClickTimesStatus+1;i++){
	 eval("$(\"#achievementClickTimes"+i+"\").addClass(\"achievementachieved\");");
 }
 for(var i=0; i<achievementClickEnergyStatus+1;i++){
	 eval("$(\"#achievementClickEnergy"+i+"\").addClass(\"achievementachieved\");");
 }
 if(achievementstatus1 == false){$("#achievement1").addClass("achievementachieved");}
 if(achievementstatus2 == false){$("#achievement2").addClass("achievementachieved");}
 var width=(achievementEnergyGoalStatus+achievementClickTimesStatus+achievementClickEnergyStatus)/50*100;
 for(var i=0; i<6; i++){
	 if(achievementEnergyGoalStatus+achievementClickTimesStatus+achievementClickEnergyStatus>=achievementBonusArray[i]){
	 eval("$(\"#achievementBonusTarget"+i+"\").addClass(\"achievementBonusAchieved\");");
	 }else{
		 i=999;
	 }
 }
 document.getElementById("achievementBonusBar").style.width = width+ '%'; 
 }
 
 setInterval(achievement, 1000);
  function achievement() {
 if(EnergyGoalLevel>=achievementEnergyGoalArray[achievementEnergyGoalStatus]){
	 achievementEnergyGoalStatus=achievementEnergyGoalStatus+1;
    calcemultiply(); 
	calcgain();
	calcplus();
	calcgain();
    calcepsgain();
 updateAchievement();
	 notify("Achievement \"Energy Goal Level "+achievementEnergyGoalArray[achievementEnergyGoalStatus-1]+"\" acquried. Energy multiplyier increased to "+ emultiply +"");
	 eval("$(\"#achievementEnergyGoal"+achievementEnergyGoalStatus+"\").addClass(\"achievementachieved\");");
 }
 if(clicked>=achievementClickTimesArray[achievementClickTimesStatus]){
	 achievementClickTimesStatus=achievementClickTimesStatus+1;
    calcemultiply(); 
	calcgain();
	calcplus();
	calcgain();
    calcepsgain();
	 updateAchievement();
	 notify("Achievement \"Click "+achievementClickTimesArray[achievementClickTimesStatus-1]+" times \" acquried. Energy multiplyier increased to "+ emultiply +"");
	 eval("$(\"#achievementClickTimes"+achievementClickTimesStatus+"\").addClass(\"achievementachieved\");");
 } 
 if(clickenergy>=achievementClickEnergyArray[achievementClickEnergyStatus]){
	 achievementClickEnergyStatus=achievementClickEnergyStatus+1;
    calcemultiply(); 
	calcgain();
	calcplus();
	calcgain();
    calcepsgain();
	 notify("Achievement \"Gain "+formatNumber(achievementClickEnergyArray[achievementClickEnergyStatus-1])+" energy from clicking \" acquried. Energy multiplyier increased to "+ emultiply +"");
	 eval("$(\"#achievementClickEnergy"+achievementClickEnergyStatus+"\").addClass(\"achievementachieved\");");
 } 
 //achievement1 
 if(BuildingClickNumber0000 >= 5 && achievementstatus1 == true){
	notify("Achievement \"Acquired 5 Energy Pylon\" acquried. Energy progress bar operation reduced by 100ms.")
    probarreduction=probarreduction+100;
	    
	calcgain();
	calcplus();
	calcgain();
    calcepsgain();
	 updateAchievement();
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
	calcgain();
    calcepsgain();
 }
 
 
 }
  //end

 stats();
 
 setInterval(stats, 2000);
 
 function stats(){
totalbuildings = BuildingClickNumber0000 + BuildingClickNumber0001 + BuildingClickNumber0002 + BuildingClickNumber0003 + BuildingAutoNumber0000 + BuildingAutoNumber0001 + BuildingAutoNumber0002 + BuildingAutoNumber0003;
$("#createdenergy").html(formatNumber(totalenergyed));
$("#createdenergyclicking").html(formatNumber(clickenergy));
$("#timesclicked").html(clicked); 
$("#timesprobarcompleted").html(timesprobarcompleted); 
$("#totalbuildings").html(totalbuildings); 	 
$("#probartime").html((probarcounterbasevalue-probarreduction-(unqID8000lvl*200)-(unqID8001lvl*150))+" ms");
$("#emultiply").html("x" + emultiply); 	
$("#version").html(version); 
$("#currentVersionSettings").html(" Current version: "+version);
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
	  drawCosts();
	if(thetotal >= 100000000000000){$( "#won" ).show();}
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

openTab('menuA',"tabA");
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
	drawLink(85,185,20,5,"unqID0002");
	//E branch
		drawIcon(105,160,50,50,30,40,'/website/tools/EPOWunlock.png',"unqID9001","upgrade9001","cost9001","Energy multipler","Increase energy multiplyier by 0.10");
	linkIcon("unqID9000");
	//PRO bar branch
	drawLink(85,302,20,5,"unqID0800");
	    drawIcon(105,280,50,50,30,40,'/website/tools/probarenergy1.png',"unqID8000","upgrade8000","cost8000","Speed up pro bar","Reduce time taken for progress bar to complete 200ms each, max level 5. Cost increases by 0.05 each level.");
    //9
	drawIcon(58,440,50,50,30,40,'/website/tools/researchD.png',"unqID6000","upgrade6000","cost6000","Unlock new research tree","Unlock the ability to research new, perharps more sinister technologies.");
	//onload functions
 
		upgrade9000Pack("onload");
		upgrade9001Pack("onload");
	    upgrade8000Pack("onload");
		upgrade6000Pack("onload");
        
 
	drawCosts();
	//functions
	//click functions
	 $("#upgrade9000").click(function() {
     if(unqID9000lvl >=1) {
		 //if bought already
	 }else{
	   
	   if(thetotal>=cost9000E&&ResearchPoints>=cost9000R){
	   useCost(cost9000E,cost9000R);
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
	   useCost(cost8000E,cost8000R+(unqID8000lvl*0.05));
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
	    $("#upgrade6000").click(function() { 
	 if(unqID9000lvl>=1){
     if(unqID6000lvl>=1) {
		 //if bought already
	 }else{
	   
	   if(thetotal>=cost6000E&&ResearchPoints>=cost6000R){
	   useCost(cost6000E,cost6000R);
	   //successfully purchased upgrade
	   unqID6000lvl=unqID6000lvl+1;
	   upgrade6000Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade6000").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }
	 }
	 	 });
	$("#upgrade9001").click(function() {
	if(unqID9000lvl>=1){
     if(unqID9001lvl>=5) {
		 //if bought already
	 }else{
	   
	   if(thetotal>=cost9001E&&ResearchPoints>=cost9001R){
	   useCost(cost9001E,cost9001R);
	   //successfully purchased upgrade
	   unqID9001lvl=unqID9001lvl+1;
	   upgrade9001Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade9001").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }
	}
	 	 });
	function load9002(){
	if(unqID9001lvl>=5){
     $("#upgrade9002").click(function() {
		  
     if(unqID9002lvl>=5) {
		 //if bought already
	 }else{
	   
	   if(thetotal>=cost9002E&&ResearchPoints>=cost9002R){
	   useCost(cost9002E,cost9002R);
	   //successfully purchased upgrade
	   unqID9002lvl=unqID9002lvl+1;
	   upgrade9002Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade9002").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }
	 	 });
	}
	 }	 
	 function load8001(){
	if(unqID8000lvl>=5){
     $("#upgrade8001").click(function() {
		  
     if(unqID8001lvl>=5) {
		 //if bought already
	 }else{
	   
	   if(thetotal>=cost8001E&&ResearchPoints>=cost8001R){
	   useCost(cost8000E,cost8000R);
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
	   useCost(cost8081E,cost8081R);
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
	   useCost(cost8091E,cost8091R);
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
	 	 function load6001(){
	if(unqID6000lvl>=1){
     $("#upgrade6001").click(function() {
	 if(unqID6002lvl==0){
     if(unqID6001lvl>=1) {
		 //if bought already now cancel it
	 if(thetotal>=cost6001Cancel){
	   useCost(cost6001Cancel,0);
	   //successfully purchased upgrade
	   unqID6001lvl=0;
	   upgrade6001Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade6001").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }else{
	   
	   if(thetotal>=cost6001E&&ResearchPoints>=cost6001R){
	   useCost(cost6001E,cost6001R);
	   //successfully purchased upgrade
	   unqID6001lvl=unqID6001lvl+1;
	   upgrade6001Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade6001").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }
	 }
	 	 });
	}
	 }
	 	 function load6002(){
	if(unqID6000lvl>=1){
     $("#upgrade6002").click(function() {
     if(unqID6001lvl==0){
     if(unqID6002lvl>=1) {
		 //if bought already
	 if(thetotal>=cost6002Cancel){
	   useCost(cost6002Cancel,0);
	   //successfully purchased upgrade
	   unqID6002lvl=0;
	   upgrade6002Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade6002").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }else{
	   if(thetotal>=cost6002E&&ResearchPoints>=cost6002R){
	   useCost(cost6002E,cost6002R);
	   //successfully purchased upgrade
	   unqID6002lvl=unqID6002lvl+1;
	   upgrade6002Pack("click");
	   }else{
	   //do not meet requirement
	   $("#upgrade6002").qaddclass("redborder").delay(1750).qremoveclass("redborder");
	   }
	 }
	 }
	 	 });
	}
	 }
	 //link packs
	 function useCost(costE,costR){
	   thetotal=thetotal-costE;
	   ResearchPoints=ResearchPoints-costR;
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
	   linkIcon("unqID6000");
	       //reveal new links and icons
	  drawLink(155,185,20,5,"unqID0901");
	      drawIcon(175,160,50,50,30,40,'/website/tools/nil.png',"unqID9002","upgrade9002","cost9002","Energy multipler T2","Increase energy multiplyier by 0.20");
	   drawLink(155,302,20,5,"unqID0801");
	      drawIcon(175,280,50,50,30,40,'/website/tools/probarenergy2.png',"unqID8001","upgrade8001","cost8001","Speed up pro bar T2","Reduce time taken for progress bar to complete 150ms each, max level 5.");
	   drawLink(127,330,5,30,"unqID0881");
	   drawLink(127,360,30,5,"unqID0882");
	      drawIcon(140,340,50,50,30,40,'/website/tools/probarenergyMultiple.png',"unqID8081","upgrade8081","cost8081","Add additional value to progress bar","Each level increases the amount of times the progress bar completes by 1, 1 click on the progress bar will result in multiple clicks registered, max level 5.");
	   drawLink(127,245,30,5,"unqID0891");
	   drawLink(127,250,5,30,"unqID0892");
	      drawIcon(140,220,50,50,30,40,'/website/tools/nil.png',"unqID8091","upgrade8091","cost8091","Energy per click gains additional +2% Eps","Energy per click gains additional +1% Eps for each level, max level 5.");
	   //research 
	   drawRect(120,480,300,140,"unqIDRect0600");
	   drawLink(80,490,5,200,"unqID0601");
	   drawLink(85,550,40,5,"unqID0610");
	   drawLink(125,510,5,80,"unqID0611");
	   drawLink(130,510,20,5,"unqID0612");
       drawLink(130,585,20,5,"unqID0613");
	      drawIconRevokable(150,488,50,50,30,40,'/website/tools/nil.png',"unqID6001","upgrade6001","cost6001","10% additional to EPC but 10% reduction to EPS","10% additional to EPC but 10% reduction to EPS, Max level 1 <br>Can be revoked for a larger amount of energy");
		  drawIconRevokable(150,562,50,50,30,40,'/website/tools/nil.png',"unqID6002","upgrade6002","cost6002","10% additional to EPS but 10% reduction to EPC","10% additional to EPS but 10% reduction to EPC, Max level 1 <br>Can be revoked for a larger amount of energy");
       //load them
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
		 //load them
		  upgrade8001Pack("onload");
		 load8001();
	    //reveal this
		 drawLink(225,302,20,5,"unqID0802");
	      drawIcon(245,280,50,50,30,40,'/website/tools/probarenergy3.png',"unqID8002","upgrade8002","cost8002","Progress bar - Instant","Progress bar will take next to no time to complete, max level 1.");
		}
	   if(unqID8000lvl>=5){
	   boughtIt("upgrade8000");
	   maxed=" MAX";
	   }
	   $("#unqID8000lvl").text(unqID8000lvl+maxed);
	 }
	 function upgrade6000Pack(theLocation){
		  
	   var maxed = "";
	   	 if(unqID6000lvl==1){
		//if reach max unlock next make it active
	     linkClass("unqID0601");
		 linkClass("unqID0610");
         linkClass("unqID0611");
         linkClass("unqID0612");
         linkClass("unqID0613");
		 
		 linkIcon("unqID6001");
         linkIcon("unqID6002");
	     //load them
         upgrade6001Pack("onload");
		 load6001();
		 upgrade6002Pack("onload");
		 load6002();
		}
	   
	   if(unqID6000lvl>=1){
	   boughtIt("upgrade6000");
	   maxed=" MAX";
	   }
	   
	   $("#unqID6000lvl").text(unqID6000lvl+maxed);
	 }
	 function upgrade6001Pack(theLocation){
		  
	   var maxed = "";
	   	 if(unqID6001lvl==1){
           
		}
	   
	   if(unqID6001lvl>=1){
	   unlinkIcon("unqID6002");
	   boughtItCancel("upgrade6001","buy");
	   maxed=" MAX";
	   }
	   if(unqID6001lvl==0){
		   //cancel
		  linkIcon("unqID6002"); 
		  boughtItCancel("upgrade6001","cancel");
	   }
	   $("#unqID6001lvl").text(unqID6001lvl+maxed);
	 }
	 function upgrade6002Pack(theLocation){
		  
	   var maxed = "";
	   	 if(unqID6002lvl==1){
		//if reach max unlock next make it active
	     //load them
         
		}
	   
	   if(unqID6002lvl>=1){
	   unlinkIcon("unqID6001");
	   boughtItCancel("upgrade6002","buy");
	   maxed=" MAX";
	   }
	   	if(unqID6002lvl==0){
		   //cancel
		  linkIcon("unqID6001"); 
		  boughtItCancel("upgrade6002","cancel");
	   }
	   $("#unqID6002lvl").text(unqID6002lvl+maxed);
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
	 function upgrade9001Pack(theLocation){
	   var maxed = "";
	    if(unqID9001lvl>=5){
		//if reach max unlock next make it active
	     linkClass("unqID0901");
		 linkIcon("unqID9002");
	 	 upgrade9002Pack("onload");
		 load9002();
		}
	   if(unqID9001lvl>=5){
	   boughtIt("upgrade9001");
	   maxed=" MAX";
	   }
	   $("#unqID9001lvl").text(unqID9001lvl+maxed);
	 }
	}
	 function upgrade9002Pack(theLocation){
	   var maxed = "";
	    if(unqID9002lvl>=5){
		//if reach max unlock next make it active
	     //linkClass("unqID9002");
		 //linkIcon("unqID0901");
	 	 //upgrade9003Pack("onload");
		 //load9003();
		}
	   if(unqID9002lvl>=5){
	   boughtIt("upgrade9002");
	   maxed=" MAX";
	   }
	   $("#unqID9002lvl").text(unqID9002lvl+maxed);
	 }
	
	research();
	//functions
	  padding = 5;
	function drawCosts(){
		$("#cost9002E").text(formatNumber(cost9002E));
		$("#cost9002R").text(formatNumber(cost9002R));
		$("#cost9001E").text(formatNumber(cost9001E));
		$("#cost9001R").text(formatNumber(cost9001R));
		$("#cost9000E").text(formatNumber(cost9000E));
		$("#cost9000R").text(formatNumber(cost9000R));
		$("#cost8000E").text(formatNumber(cost8000E));
		$("#cost8000R").text(formatNumber(cost8000R+(unqID8000lvl*0.05)));
		$("#cost8001E").text(formatNumber(cost8001E));
		$("#cost8001R").text(formatNumber(cost8001R));
	    $("#cost8002E").text(formatNumber(cost8002E));
		$("#cost8002R").text(formatNumber(cost8002R));
		$("#cost8081E").text(formatNumber(cost8081E));
		$("#cost8081R").text(formatNumber(cost8081R));
		$("#cost8091E").text(formatNumber(cost8091E));
		$("#cost8091R").text(formatNumber(cost8091R));
		$("#cost6000E").text(formatNumber(cost6000E));
		$("#cost6000R").text(formatNumber(cost6000R));
		$("#cost6001E").text(formatNumber(cost6001E));
		$("#cost6001R").text(formatNumber(cost6001R));
		$("#cost6001Cancel").text(formatNumber(cost6001Cancel));
		$("#cost6002E").text(formatNumber(cost6002E));
		$("#cost6002R").text(formatNumber(cost6002R));
		$("#cost6002Cancel").text(formatNumber(cost6002Cancel));
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
	function unlinkIcon(unqID){
		$("#"+unqID+"").addClass("IconnotLinked");
		$("#"+unqID+"").removeClass("IconisLinked");
		$("#"+unqID+"tt").addClass("notLinkedTooltip");
		$("#"+unqID+"tt").removeClass("isLinkedTooltip");
		$("#"+unqID+"ttb").addClass("notLinkedTooltip");
		$("#"+unqID+"ttb").removeClass("isLinkedTooltip");
	}
	function boughtIt(upgradeID){
		$("#"+upgradeID+"").removeClass("buyButton");
		$("#"+upgradeID+"").addClass("boughtButton");
		$("#"+upgradeID+"").text("Bought");
	}
	function boughtItCancel(upgradeID,mode){
	     if(mode=="buy"){
		 $("#"+upgradeID+"").text("Cancel");
		 }
		 if(mode=="cancel"){
		 $("#"+upgradeID+"").text("Buy"); 
		 }
	}
	function drawIcon(x,y,boxw,boxh,imgw,imgh,url,unqID,upgradeID,costID,title,desc){
		var content="<p style=\"font-size:26px;position: relative;\">"+title+"</p><p>Cost:&nbsp<b><span id=\""+costID+"E\"></span></b>&nbsp<span>Energy</span><p><b><span id=\""+costID+"R\"></span></b> Research Points</p><p style=\"text-align:left; padding-left:5px;padding-right:5px;\">"+desc+"</p><div id=\""+upgradeID+"\" class=\"upgradeBuy buyButton\"><b>Buy</b></div></p></div>"
		drawImageBox(x,y,boxw,boxh,imgw,imgh,url,unqID,content);
	}
	function drawIconRevokable(x,y,boxw,boxh,imgw,imgh,url,unqID,upgradeID,costID,title,desc){
		var content="<p style=\"font-size:26px;position: relative;\">"+title+"</p><p>Cost:&nbsp<b><span id=\""+costID+"E\"></span></b>&nbsp<span>Energy</span><p><b><span id=\""+costID+"R\"></span></b> Research Points</p><p>Canceling Cost:&nbsp<b><span id=\""+costID+"Cancel\"></span></b>&nbsp<span>Energy</span></p><p style=\"text-align:left; padding-left:5px;padding-right:5px;\">"+desc+"</p><div id=\""+upgradeID+"\" class=\"upgradeBuy buyButton\"><b>Buy</b></div></p></div>"
		drawImageBox(x,y,boxw,boxh,imgw,imgh,url,unqID,content);
	}
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
   function drawRect(x,y,linkw,linkh,unqIDRect){
	   	$( "#overlay" ).append( "<div class=\"rect\" id=\""+unqIDRect+"\" style=\"background-color:transparent; border-width:2px; border-color:#FFFFFF; border-style:solid; position:absolute;top:"+(y+padding)+"px;left:"+(x+padding)+"px;width:"+linkw+"px;height:"+linkh+"px;\"></div>" );	
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
