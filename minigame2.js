$(document).ready(function(){ 
function move() { 
  currentVersion="2.0.0";
  //Init VARAIABLES starting game 
  //BuildingEstore [ID][NUM,COST,VALUE, CALC COST]
    InitVar1 = {
		version:currentVersion,
		gameState:0,
		workerbots:[0,0,0,0,0],
		workerbotscost:[[1,0],[2,100000]],
		tabsunlocked:[1,0,0,0,0,1],
		time:10,
		totalenergyed:0,
		energycap:50,
		probarcounter:0,
		widthpercentage:0,
		probarstartdate:0,
		probarstartdateI:0,
		probarreduction:0,
		epsgaintotal1:0,
		epsgaintotal2:0,
		epsgaintotal3:0,
		epsgaintotal4:0,
		BuildingAutoNumber0000:0,
		BuildingAutoNumber0001:0,
		BuildingAutoNumber0002:0,
		BuildingAutoNumber0003:0,
		BuildingEstoreNumber0000:0,
		BuildingEstoreNumber0001:0,
		BuildingEstoreNumber0002:0,
		BuildingEstoreNumber0003:0,
		BuildingrProd:[[0,25000,0.02,0]],
		BuildingrStore:[[0,25000,1,0]]
		
	}
 
 InitVar2 = {
		 BuildingAutoOriginalCost0000:10,
		 BuildingAutoOriginalCost0001:100,
		 BuildingAutoOriginalCost0002:750,
		 BuildingAutoOriginalCost0003:5000,
	     BuildingEstoreOriginalCost0000:25,
		 BuildingEstoreOriginalCost0001:500,
		 BuildingEstoreOriginalCost0002:7500,
		 BuildingEstoreOriginalCost0003:100000,
		 clicked:0,
		 clickenergy:0,
		 rStoremultiplytotal:1,
		 rProdmultiplytotal:1,
		 emultiplytotal:1,
		 estoremultiplytotal:1,
		 egmultiply:[1,1,1,1],
		 estoremultiply:[1,1,1,1],
		 rStoremultiply:[1],
		 rProdmultiply:[1],
		 BuildingAutoOrginalValue0000:1,
		 BuildingAutoOrginalValue0001:6,
		 BuildingAutoOrginalValue0002:40,
		 BuildingAutoOrginalValue0003:200,
		 BuildingEstoreOrginalValue0000:50,
		 BuildingEstoreOrginalValue0001:400,
		 BuildingEstoreOrginalValue0002:7500,
		 BuildingEstoreOrginalValue0003:100000
	}
  InitVar3 = {
    orginalestore:0,
	orginalepsgain:0,
	thetotal:0,
	achievementstatus:[0,0,0,0,0,0,0,0,0,0,],
	EnergyGoalLevel:0,
	EnergyGoalStart:1000,
	ResearchPoints:0,
	RealResearchPoints:0,
	RealResearchPointscap:0
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
	 if(variableName=="1"){
	  loadedVar1=JSON.parse(LZString.decompressFromBase64(cookieResult));  
	 }
	 if(variableName=="2"){
	  loadedVar2=JSON.parse(LZString.decompressFromBase64(cookieResult)); 
	 }
	 if(variableName=="3"){
	  loadedVar3=JSON.parse(LZString.decompressFromBase64(cookieResult)); 
	 }
	 if(variableName=="4"){
	  loadedVar4=JSON.parse(LZString.decompressFromBase64(cookieResult)); 
	 }
	}else{ 
	  alert("cookie not valid");
	  throw new Error("Something went badly wrong!");
	}
 }
  if(loadedVar1.version!=currentVersion){
	 var r = confirm("Your version "+loadedVar1.version+" is not supported, current supported is verison "+currentVersion+". Reset game? ");
	 if(r==1){deleteallcookies();location.reload();}
 }
 varTovar();
 function varTovar(){
	version=loadedVar1.version;
	gameState=loadedVar1.gameState;
	workerbots=loadedVar1.workerbots;
	workerbotscost=loadedVar1.workerbotscost;
	tabsunlocked=loadedVar1.tabsunlocked;
    time=loadedVar1.time;
	totalenergyed=loadedVar1.totalenergyed;
	energycap=loadedVar1.energycap;
	probarcounter=loadedVar1.probarcounter;
	widthpercentage=loadedVar1.widthpercentage;
	probarstartdate=loadedVar1.probarstartdate;
	probarstartdateI=loadedVar1.probarstartdateI;
	probarreduction=loadedVar1.probarreduction;
	epsgaintotal1=loadedVar1.epsgaintotal1;
	epsgaintotal2=loadedVar1.epsgaintotal2;
	epsgaintotal3=loadedVar1.epsgaintotal3;
	epsgaintotal4=loadedVar1.epsgaintotal4;
	BuildingAutoNumber0000=loadedVar1.BuildingAutoNumber0000;
	BuildingAutoNumber0001=loadedVar1.BuildingAutoNumber0001;
	BuildingAutoNumber0002=loadedVar1.BuildingAutoNumber0002;
	BuildingAutoNumber0003=loadedVar1.BuildingAutoNumber0003;
	BuildingEstoreNumber0000=loadedVar1.BuildingEstoreNumber0000;
	BuildingEstoreNumber0001=loadedVar1.BuildingEstoreNumber0001;
	BuildingEstoreNumber0002=loadedVar1.BuildingEstoreNumber0002;
	BuildingEstoreNumber0003=loadedVar1.BuildingEstoreNumber0003;
	BuildingrProd=loadedVar1.BuildingrProd;
	BuildingrStore=loadedVar1.BuildingrStore;
    /////////////////////////////////////////////////////////////////////
	BuildingAutoOriginalCost0000=loadedVar2.BuildingAutoOriginalCost0000;
	BuildingAutoOriginalCost0001=loadedVar2.BuildingAutoOriginalCost0001;
	BuildingAutoOriginalCost0002=loadedVar2.BuildingAutoOriginalCost0002;
	BuildingAutoOriginalCost0003=loadedVar2.BuildingAutoOriginalCost0003;
	BuildingEstoreOriginalCost0000=loadedVar2.BuildingEstoreOriginalCost0000;
	BuildingEstoreOriginalCost0001=loadedVar2.BuildingEstoreOriginalCost0001;
	BuildingEstoreOriginalCost0002=loadedVar2.BuildingEstoreOriginalCost0002;
	BuildingEstoreOriginalCost0003=loadedVar2.BuildingEstoreOriginalCost0003;
	clicked=loadedVar2.clicked;
	clickenergy=loadedVar2.clickenergy;
	rProdmultiplytotal=loadedVar2.rProdmultiplytotal,
	rStoremultiplytotal=loadedVar2.rStoremultiplytotal,
	emultiplytotal=loadedVar2.emultiplytotal,
    estoremultiplytotal=loadedVar2.estoremultiplytotal,
	egmultiply=loadedVar2.egmultiply,
	estoremultiply=loadedVar2.estoremultiply,
	rProdmultiply=loadedVar2.rProdmultiply,
	rStoremultiply=loadedVar2.rStoremultiply,
	BuildingAutoOrginalValue0000=loadedVar2.BuildingAutoOrginalValue0000;
	BuildingAutoOrginalValue0001=loadedVar2.BuildingAutoOrginalValue0001;
	BuildingAutoOrginalValue0002=loadedVar2.BuildingAutoOrginalValue0002;
	BuildingAutoOrginalValue0003=loadedVar2.BuildingAutoOrginalValue0003;
	BuildingEstoreOrginalValue0000=loadedVar2.BuildingEstoreOrginalValue0000;
	BuildingEstoreOrginalValue0001=loadedVar2.BuildingEstoreOrginalValue0001;
	BuildingEstoreOrginalValue0002=loadedVar2.BuildingEstoreOrginalValue0002;
	BuildingEstoreOrginalValue0003=loadedVar2.BuildingEstoreOrginalValue0003;
/////////////////////////////////////////////////////////////////////	
	orginalgain=loadedVar3.orginalgain;
	orginalepsgain=loadedVar3.orginalepsgain;
	thetotal=loadedVar3.thetotal;
    achievementstatus=loadedVar3.achievementstatus;
	EnergyGoalLevel=loadedVar3.EnergyGoalLevel;
	EnergyGoalStart=loadedVar3.EnergyGoalStart;
	ResearchPoints=loadedVar3.ResearchPoints;
	RealResearchPoints=loadedVar3.RealResearchPoints;
	RealResearchPointscap=loadedVar3.RealResearchPointscap;
/////////////////////////////////////////////////////////////////////	
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
 function setSaveVar(){
	saveVar1 = {
		version:version,
		time:time,
		workerbots:workerbots,
		workerbotscost:workerbotscost,
		tabsunlocked:tabsunlocked,
		gameState:gameState,
		totalenergyed:totalenergyed,
		energycap:energycap,
		probarcounter:probarcounter,
		widthpercentage:widthpercentage,
		probarstartdate:probarstartdate,
		probarstartdateI:probarstartdateI,
		probarreduction:probarreduction,
		epsgaintotal1:epsgaintotal1,
		epsgaintotal2:epsgaintotal2,
		epsgaintotal3:epsgaintotal3,
		epsgaintotal4:epsgaintotal4,
		BuildingAutoNumber0000:BuildingAutoNumber0000,
		BuildingAutoNumber0001:BuildingAutoNumber0001,
		BuildingAutoNumber0002:BuildingAutoNumber0002,
		BuildingAutoNumber0003:BuildingAutoNumber0003,
		BuildingEstoreNumber0000:BuildingEstoreNumber0000,
		BuildingEstoreNumber0001:BuildingEstoreNumber0001,
		BuildingEstoreNumber0002:BuildingEstoreNumber0002,
		BuildingEstoreNumber0003:BuildingEstoreNumber0003,
		BuildingrProd:BuildingrProd,
		BuildingrStore:BuildingrStore
	}
 
 saveVar2 = {
		 BuildingAutoOriginalCost0000:BuildingAutoOriginalCost0000,
		 BuildingAutoOriginalCost0001:BuildingAutoOriginalCost0001,
		 BuildingAutoOriginalCost0002:BuildingAutoOriginalCost0002,
		 BuildingAutoOriginalCost0003:BuildingAutoOriginalCost0003,
		 BuildingEstoreOriginalCost0000:BuildingEstoreOriginalCost0000,
		 BuildingEstoreOriginalCost0001:BuildingEstoreOriginalCost0001,
		 BuildingEstoreOriginalCost0002:BuildingEstoreOriginalCost0002,
		 BuildingEstoreOriginalCost0003:BuildingEstoreOriginalCost0003,
		 clicked:clicked,
		 clickenergy:clickenergy,
		 rProdmultiplytotal:rProdmultiplytotal,
		 rStoremultiplytotal:rStoremultiplytotal,
		 emultiplytotal:emultiplytotal,
		 estoremultiplytotal:estoremultiplytotal,
		 egmultiply:egmultiply,
		 estoremultiply:estoremultiply,
		 rProdmultiply:rProdmultiply,
		 rStoremultiply:rStoremultiply,
		 BuildingAutoOrginalValue0000:BuildingAutoOrginalValue0000,
		 BuildingAutoOrginalValue0001:BuildingAutoOrginalValue0001,
		 BuildingAutoOrginalValue0002:BuildingAutoOrginalValue0002,
		 BuildingAutoOrginalValue0003:BuildingAutoOrginalValue0003,
		 BuildingEstoreOrginalValue0000:BuildingEstoreOrginalValue0000,
		 BuildingEstoreOrginalValue0001:BuildingEstoreOrginalValue0001,
		 BuildingEstoreOrginalValue0002:BuildingEstoreOrginalValue0002,
		 BuildingEstoreOrginalValue0003:BuildingEstoreOrginalValue0003
	}
 saveVar3 = {
    orginalgain:orginalgain,
	orginalepsgain:orginalepsgain,
	thetotal:thetotal,
	achievementstatus:achievementstatus,
	EnergyGoalLevel:EnergyGoalLevel,
	EnergyGoalStart:EnergyGoalStart,
	ResearchPoints:ResearchPoints,
	RealResearchPoints:RealResearchPoints,
	RealResearchPointscap:RealResearchPointscap
	
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
probarcounterbasevalue = 2000;
function savegamecookie(){
 notify("Saving game...");
 setSaveVar();
 setCookieJson("Var1",saveVar1);
 setCookieJson("Var2",saveVar2);
 setCookieJson("Var3",saveVar3);
 setCookieJson("Var4",saveVar4);
 notify("Game saved");
}
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
$.fn.extend({
   qcss: function(css) {
      return $(this).queue(function(next) {
         $(this).css(css);
         next();
      });
   }
});
function insufficientworkerbots(){
	$(".workerbotsINACTIVE").qaddclass("red").delay(1750).qremoveclass("red");
}
/* WORKERS ASSIGNATION*/
//FOR ENERGY PRODUCTION
$("#workerbotsA1").click(function(){
	if(workerbots[0]>0){
		workerbots[0]=workerbots[0]-1;
		workerbots[1]=workerbots[1]+1;
		}else{insufficientworkerbots();}
	calcworkerbots();
});
$("#workerbotsR1").click(function(){
	if(workerbots[1]>0){
		workerbots[1]=workerbots[1]-1;
		workerbots[0]=workerbots[0]+1;
		}
	calcworkerbots();
});
//FOR ENERGY STORAGE
$("#workerbotsA2").click(function(){
	if(workerbots[0]>0){
		workerbots[0]=workerbots[0]-1;
		workerbots[2]=workerbots[2]+1;
		}else{insufficientworkerbots();}
	calcworkerbots();
});
$("#workerbotsR2").click(function(){
	if(workerbots[2]>0){
		workerbots[2]=workerbots[2]-1;
		workerbots[0]=workerbots[0]+1;
		}
	calcworkerbots();
});
//FOR RESEARCH PRODUCTION
$("#workerbotsA3").click(function(){
	if(workerbots[0]>0){
		workerbots[0]=workerbots[0]-1;
		workerbots[3]=workerbots[3]+1;
		}else{insufficientworkerbots();}
	calcworkerbots();
});
$("#workerbotsR3").click(function(){
	if(workerbots[3]>0){
		workerbots[3]=workerbots[3]-1;
		workerbots[0]=workerbots[0]+1;
		}
	calcworkerbots();
});
//FOR RESEARCH STORAGE
$("#workerbotsA4").click(function(){
	if(workerbots[0]>0){
		workerbots[0]=workerbots[0]-1;
		workerbots[4]=workerbots[4]+1;
		}else{insufficientworkerbots();}
	calcworkerbots();
});
$("#workerbotsR4").click(function(){
	if(workerbots[4]>0){
		workerbots[4]=workerbots[4]-1;
		workerbots[0]=workerbots[0]+1;
		}
	calcworkerbots();
});
function calcworkerbots(){
	workerbotsINACTIVE=workerbots[0];
	workerbotsENERGYPRODUCTION=workerbots[1];
	workerbotsENERGYSTORAGE=workerbots[2];
	workerbotsRESEARCHPRODUCTION=workerbots[3];
	workerbotsRESEARCHSTORAGE=workerbots[4];
	totalworkerbots=workerbotsINACTIVE+workerbotsENERGYPRODUCTION+workerbotsENERGYSTORAGE+workerbotsRESEARCHPRODUCTION+workerbotsRESEARCHSTORAGE;

	workerbotsEFF=workerbotsENERGYPRODUCTION;
	workerbotsStore=workerbotsENERGYSTORAGE;
	workerbotsrProd=workerbotsRESEARCHPRODUCTION;
	workerbotsrStore=workerbotsRESEARCHSTORAGE;
	 
	$(".workerbotsINACTIVE").html(workerbotsINACTIVE);
	$(".totalworkerbots").html(totalworkerbots);
	$("#workerbotsT1").html(workerbotsENERGYPRODUCTION);
	$("#workerbotsT2").html(workerbotsENERGYSTORAGE);
	$("#workerbotsT3").html(workerbotsRESEARCHPRODUCTION);
	$("#workerbotsT4").html(workerbotsRESEARCHSTORAGE);
}
function calcestore(){
	energycap=((BuildingEstoreOrginalValue0000*BuildingEstoreNumber0000) + (BuildingEstoreOrginalValue0001*BuildingEstoreNumber0001) + (BuildingEstoreOrginalValue0002*BuildingEstoreNumber0002) + (BuildingEstoreOrginalValue0003*BuildingEstoreNumber0003))*estoremultiplytotal*workerbotsStore;
    energycap = Math.round(energycap * 1000) / 1000;
}
function calcrProd(){
	rProdgain=((BuildingrProd[0][2]*BuildingrProd[0][0]))*rProdmultiplytotal*workerbotsrProd;
    rProdgain = Math.round(rProdgain * 1000) / 1000;
}
function calcrStore(){
	RealResearchPointscap=((BuildingrStore[0][2]*BuildingrStore[0][0]))*rStoremultiplytotal*workerbotsrStore;
    RealResearchPointscap = Math.round(RealResearchPointscap * 10000) / 10000;
}
function calcestoreplus(){
	calcB1 = (BuildingEstoreOrginalValue0000*estoremultiply[0])*estoremultiplytotal*workerbotsStore;
	calcB2 = (BuildingEstoreOrginalValue0001*estoremultiply[1])*estoremultiplytotal*workerbotsStore;
	calcB3 = (BuildingEstoreOrginalValue0002*estoremultiply[2])*estoremultiplytotal*workerbotsStore;
	calcB4 = (BuildingEstoreOrginalValue0003*estoremultiply[3])*estoremultiplytotal*workerbotsStore;
	
    calcB1 = Math.round(calcB1 * 1000) / 1000;
	calcB2 = Math.round(calcB2 * 1000) / 1000;	
	calcB3 = Math.round(calcB3 * 1000) / 1000;	
	calcB4 = Math.round(calcB4 * 1000) / 1000;	
	
	$("#estoreplus1").html(formatNumber(calcB1));
	$("#estoreplus2").html(formatNumber(calcB2));
	$("#estoreplus3").html(formatNumber(calcB3));	
	$("#estoreplus4").html(formatNumber(calcB4));	
}

function calcestoregaintotal(){
	estoretotal1 = (BuildingEstoreOrginalValue0000*BuildingEstoreNumber0000*estoremultiply[0])*estoremultiplytotal*workerbotsStore;
	estoretotal2 = (BuildingEstoreOrginalValue0001*BuildingEstoreNumber0001*estoremultiply[1])*estoremultiplytotal*workerbotsStore;
	estoretotal3 = (BuildingEstoreOrginalValue0002*BuildingEstoreNumber0002*estoremultiply[2])*estoremultiplytotal*workerbotsStore;
	estoretotal4 = (BuildingEstoreOrginalValue0003*BuildingEstoreNumber0003*estoremultiply[3])*estoremultiplytotal*workerbotsStore;
	
    estoretotal1 = Math.round(estoretotal1 * 1000) / 1000;
	estoretotal2 = Math.round(estoretotal2 * 1000) / 1000;
	estoretotal3 = Math.round(estoretotal3 * 1000) / 1000;
    estoretotal4 = Math.round(estoretotal4 * 1000) / 1000;
	  
$("#estoretotal1").html(formatNumber(estoretotal1));
$("#estoretotal2").html(formatNumber(estoretotal2)); 
$("#estoretotal3").html(formatNumber(estoretotal3)); 
$("#estoretotal4").html(formatNumber(estoretotal4)); 
 }
 
 function researchpercentagetotal(){
	rProdtotal1 = (BuildingrProd[0][2]*BuildingrProd[0][0]*rProdmultiply[0])*rProdmultiplytotal*workerbotsrProd;
	
    rProdtotal1 = Math.round(rProdtotal1 * 1000) / 1000;
 
	rProdtotalgainfrombuildings = rProdtotal1;
	rProdtotalgainfrombuildings = Math.round(rProdtotalgainfrombuildings * 1000) / 1000;
	
	rProdpercentage1 = (BuildingrProd[0][0] > 0 && rProdtotalgainfrombuildings>0)?(rProdtotal1/rProdtotalgainfrombuildings)*100:0;
	rProdpercentage1 = Math.round(rProdpercentage1 * 1000) / 1000;

	$("#rProdpercentage1").html(rProdpercentage1); 
	///////
	rStoretotal1 = (BuildingrStore[0][2]*BuildingrStore[0][0]*rStoremultiply[0])*rStoremultiplytotal*workerbotsrStore;
	
    rStoretotal1 = Math.round(rStoretotal1 * 1000) / 1000;
 
	rStoretotalgainfrombuildings = rStoretotal1;
	rStoretotalgainfrombuildings = Math.round(rStoretotalgainfrombuildings * 1000) / 1000;
	
	rStorepercentage1 = (BuildingrStore[0][0] > 0 && rStoretotalgainfrombuildings>0)?(rStoretotal1/rStoretotalgainfrombuildings)*100:0;
	rStorepercentage1 = Math.round(rStorepercentage1 * 1000) / 1000;

	$("#rStorepercentage1").html(rStorepercentage1); 
	
 }
 function estorepercentagetotal() {
	estoretotal1 = (BuildingEstoreOrginalValue0000*BuildingEstoreNumber0000*estoremultiply[0])*estoremultiplytotal*workerbotsStore;
	estoretotal2 = (BuildingEstoreOrginalValue0001*BuildingEstoreNumber0001*estoremultiply[1])*estoremultiplytotal*workerbotsStore;
	estoretotal3 = (BuildingEstoreOrginalValue0002*BuildingEstoreNumber0002*estoremultiply[2])*estoremultiplytotal*workerbotsStore;
	estoretotal4 = (BuildingEstoreOrginalValue0003*BuildingEstoreNumber0003*estoremultiply[3])*estoremultiplytotal*workerbotsStore;
	
    estoretotal1 = Math.round(estoretotal1 * 1000) / 1000;
	estoretotal2 = Math.round(estoretotal2 * 1000) / 1000;
	estoretotal3 = Math.round(estoretotal3 * 1000) / 1000;
    estoretotal4 = Math.round(estoretotal4 * 1000) / 1000;
	
	estoretotalgainfrombuildings = estoretotal1+estoretotal2+estoretotal3+estoretotal4;
	estoretotalgainfrombuildings = Math.round(estoretotalgainfrombuildings * 1000) / 1000;
	
	estorepercentage1 = (BuildingEstoreNumber0000 > 0 && estoretotalgainfrombuildings>0)?(estoretotal1/estoretotalgainfrombuildings)*100:0;
	estorepercentage1 = Math.round(estorepercentage1 * 1000) / 1000;
	
	estorepercentage2 = (BuildingEstoreNumber0001 > 0 && estoretotalgainfrombuildings>0)?(estoretotal2/estoretotalgainfrombuildings)*100:0;
	estorepercentage2 = Math.round(estorepercentage2 * 1000) / 1000;
	
	estorepercentage3 = (BuildingEstoreNumber0002 > 0 && estoretotalgainfrombuildings>0)?(estoretotal3/estoretotalgainfrombuildings)*100:0;
	estorepercentage3 = Math.round(estorepercentage3 * 1000) / 1000;	
	
	estorepercentage4 = (BuildingEstoreNumber0003 > 0 && estoretotalgainfrombuildings>0)?(estoretotal4/estoretotalgainfrombuildings)*100:0;
	estorepercentage4 = Math.round(estorepercentage4 * 1000) / 1000;	
	
	$("#estorepercentage1").html(estorepercentage1);
	$("#estorepercentage2").html(estorepercentage2); 
	$("#estorepercentage3").html(estorepercentage3);
	$("#estorepercentage4").html(estorepercentage4); 
 }
function calcepsgain(){
	//calculate automatic energy gain (eps)
	var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=0.9;
	}else if(unqID6002lvl==1){
		anotherMultipler=1.1;
	}
	epsgain = (orginalepsgain + (BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply[0]) + (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply[1]) + (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply[2]) + (BuildingAutoOrginalValue0003*BuildingAutoNumber0003*egmultiply[3]))*emultiplytotal*anotherMultipler*workerbotsEFF;
	epsgain = Math.round(epsgain * 1000) / 1000; 
}
function calcepsplus(){
    var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=0.9;
	}else if(unqID6002lvl==1){
		anotherMultipler=1.1;
	}
	calcB1 = (BuildingAutoOrginalValue0000*egmultiply[0])*emultiplytotal*anotherMultipler*workerbotsEFF;
	calcB2 = (BuildingAutoOrginalValue0001*egmultiply[1])*emultiplytotal*anotherMultipler*workerbotsEFF;
	calcB3 = (BuildingAutoOrginalValue0002*egmultiply[2])*emultiplytotal*anotherMultipler*workerbotsEFF;
	calcB4 = (BuildingAutoOrginalValue0003*egmultiply[3])*emultiplytotal*anotherMultipler*workerbotsEFF;
	
    calcB1 = Math.round(calcB1 * 1000) / 1000;
	calcB2 = Math.round(calcB2 * 1000) / 1000;	
	calcB3 = Math.round(calcB3 * 1000) / 1000;	
	calcB4 = Math.round(calcB4 * 1000) / 1000;	
	
	$("#epsplus1").html(formatNumber(calcB1));
	$("#epsplus2").html(formatNumber(calcB2));
	$("#epsplus3").html(formatNumber(calcB3));	
	$("#epsplus4").html(formatNumber(calcB4));	
}

function calcepsgaintotal(){
	var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=0.9;
	}else if(unqID6002lvl==1){
		anotherMultipler=1.1;
	}
	epstotal1 = (BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply[0])*emultiplytotal*anotherMultipler*workerbotsEFF;
	epstotal2 = (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply[1])*emultiplytotal*anotherMultipler*workerbotsEFF;
	epstotal3 = (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply[2])*emultiplytotal*anotherMultipler*workerbotsEFF;
	epstotal4 = (BuildingAutoOrginalValue0003*BuildingAutoNumber0003*egmultiply[3])*emultiplytotal*anotherMultipler*workerbotsEFF;
	
    epstotal1 = Math.round(epstotal1 * 1000) / 1000;
	epstotal2 = Math.round(epstotal2 * 1000) / 1000;
	epstotal3 = Math.round(epstotal3 * 1000) / 1000;
    epstotal4 = Math.round(epstotal4 * 1000) / 1000;
	  
$("#epstotal1").html(formatNumber(epstotal1));
$("#epstotal2").html(formatNumber(epstotal2)); 
$("#epstotal3").html(formatNumber(epstotal3)); 
$("#epstotal4").html(formatNumber(epstotal4)); 
 }
function calcresearchplustotal(){
	rProdplus1=((BuildingrProd[0][2]))*rProdmultiplytotal*workerbotsrProd;
    rProdplus1 = Math.round(rProdplus1 * 1000) / 1000;

	rProdtotal1=((BuildingrProd[0][2]*BuildingrProd[0][0]))*rProdmultiplytotal*workerbotsrProd;
    rProdtotal1 = Math.round(rProdtotal1 * 1000) / 1000;
	$("#rProdplus1").html(formatNumber(rProdplus1));
	$("#rProdtotal1").html(formatNumber(rProdtotal1));
////////////////////////////////////////////////////////////////////////////////////////////////////
	rStoreplus1=((BuildingrStore[0][2]))*rStoremultiplytotal*workerbotsrStore;
    rStoreplus1 = Math.round(rStoreplus1 * 1000) / 1000;

	rStoretotal1=((BuildingrStore[0][2]*BuildingrStore[0][0]))*rStoremultiplytotal*workerbotsrStore;
    rStoretotal1 = Math.round(rStoretotal1 * 1000) / 1000;
	$("#rStoreplus1").html(formatNumber(rStoreplus1));
	$("#rStoretotal1").html(formatNumber(rStoretotal1));	
}
 function autopercentagetotal() {
	var anotherMultipler=1;
    if(unqID6001lvl==1){
		anotherMultipler=0.9;
	}else if(unqID6002lvl==1){
		anotherMultipler=1.1;
	}
	epstotal1 = (BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply[0])*emultiplytotal*anotherMultipler*workerbotsEFF;
	epstotal2 = (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply[1])*emultiplytotal*anotherMultipler*workerbotsEFF;
	epstotal3 = (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply[2])*emultiplytotal*anotherMultipler*workerbotsEFF;
	epstotal4 = (BuildingAutoOrginalValue0003*BuildingAutoNumber0003*egmultiply[3])*emultiplytotal*anotherMultipler*workerbotsEFF;
	
    epstotal1 = Math.round(epstotal1 * 1000) / 1000;
	epstotal2 = Math.round(epstotal2 * 1000) / 1000;
	epstotal3 = Math.round(epstotal3 * 1000) / 1000; 
	epstotal4 = Math.round(epstotal4 * 1000) / 1000; 
	
	autototalgainfrombuildings = epstotal1+epstotal2+epstotal3+epstotal4;
	autototalgainfrombuildings = Math.round(autototalgainfrombuildings * 1000) / 1000;
	
	autopercentage1 = (BuildingAutoNumber0000 > 0 && autototalgainfrombuildings>0)?(epstotal1/autototalgainfrombuildings)*100:0;
	autopercentage1 = Math.round(autopercentage1 * 1000) / 1000;
	
	autopercentage2 = (BuildingAutoNumber0001 > 0 && autototalgainfrombuildings>0)?(epstotal2/autototalgainfrombuildings)*100:0;
	autopercentage2 = Math.round(autopercentage2 * 1000) / 1000;
	
	autopercentage3 = (BuildingAutoNumber0002> 0 && autototalgainfrombuildings>0)?(epstotal3/autototalgainfrombuildings)*100:0;
	autopercentage3 = Math.round(autopercentage3 * 1000) / 1000;	
	
	autopercentage4 = (BuildingAutoNumber0003> 0 && autototalgainfrombuildings>0)?(epstotal4/autototalgainfrombuildings)*100:0;
	autopercentage4 = Math.round(autopercentage4 * 1000) / 1000;	
	
	$("#autopercentage1").html(autopercentage1);
	$("#autopercentage2").html(autopercentage2); 
	$("#autopercentage3").html(autopercentage3);
	$("#autopercentage4").html(autopercentage4); 
 }
 achievementBonusArray=[0,5,10,20,35,50];
 achievementTotalEmultiplyBonus=[0,15,20,40,80,160];
 function calcemultiply(){
	 TotalEmultiply=0;
for(var i=0; i<6; i++){
	 if(achievementstatus[0]+achievementstatus[1]+achievementstatus[2]+achievementstatus[3]+achievementstatus[4]+achievementstatus[5]+achievementstatus[6]+achievementstatus[7]+achievementstatus[8]+achievementstatus[9]>=achievementBonusArray[i]){
	  TotalEmultiply=TotalEmultiply+achievementTotalEmultiplyBonus[i];
	 }else{
		 i=999;
	 }
 }   
     $("#TotalEmultiply").html(TotalEmultiply);
	 emultiplytotal=(1+achievementstatus[0]*0.05+achievementstatus[1]*0.05+achievementstatus[2]*0.05+achievementstatus[3]*0.05+achievementstatus[4]*0.05+achievementstatus[5]*0.05+achievementstatus[6]*0.05+achievementstatus[7]*0.05+achievementstatus[8]*0.05+achievementstatus[9]*0.05+unqID9001lvl*0.10+unqID9002lvl*0.20)*((100+TotalEmultiply)/100);
	 emultiplytotal = Math.round(emultiplytotal * 1000) / 1000;
}
function costAutofunctions(ID){
	eval("BuildingAutoCostMultiplier"+ID+" = Math.pow(1.15, BuildingAutoNumber"+ID+");\
	BuildingAutoCost"+ID+" = BuildingAutoOriginalCost"+ID+" * BuildingAutoCostMultiplier"+ID+"; \
	BuildingAutoCost"+ID+"  = Math.round(BuildingAutoCost"+ID+" * 1000) / 1000;	\
	$(\"#egcost"+ID+"\").html(formatNumber(BuildingAutoCost"+ID+"));\
	");
}
function costEstorefunctions(ID){
	eval("BuildingEstoreCostMultiplier"+ID+" = Math.pow(1.15, BuildingEstoreNumber"+ID+");\
	BuildingEstoreCost"+ID+" = BuildingEstoreOriginalCost"+ID+" * BuildingEstoreCostMultiplier"+ID+"; \
	BuildingEstoreCost"+ID+"  = Math.round(BuildingEstoreCost"+ID+" * 1000) / 1000;	\
	$(\"#Estorecost"+ID+"\").html(formatNumber(BuildingEstoreCost"+ID+"));\
	");
}
function costrProdfunctions(ID){
	var BuildingrProdCostMultiplier = Math.pow(2, BuildingrProd[ID][0]);
    BuildingrProd[ID][3] = BuildingrProd[ID][1]*BuildingrProdCostMultiplier;
	BuildingrProd[ID][3] = Math.round(BuildingrProd[ID][3]  * 1000) / 1000;	
	$("#rProdcost000"+ID+"").html(formatNumber(BuildingrProd[ID][3]));
}
function costrStorefunctions(ID){
	var BuildingrStoreCostMultiplier = Math.pow(2, BuildingrStore[ID][0]);
    BuildingrStore[ID][3] = BuildingrProd[ID][1]*BuildingrStoreCostMultiplier;
	BuildingrStore[ID][3] = Math.round(BuildingrStore[ID][3]  * 1000) / 1000;	
	$("#rStorecost000"+ID+"").html(formatNumber(BuildingrStore[ID][3]));
}
function costworkerbotsfunctions(){
    var workerbotsRcost0000;
	var workerbotsEcost0000;
	var BuildingworkerbotsCostMultiplier = Math.pow(2, totalworkerbots-2);
	if(totalworkerbots>=4){
		workerbotsRcost0000=workerbotscost[1][0]*BuildingworkerbotsCostMultiplier;
		workerbotsEcost0000=workerbotscost[1][1]*BuildingworkerbotsCostMultiplier;		
	}else{
		if(totalworkerbots<2){
			workerbotsRcost0000=0;
			workerbotsEcost0000=0;
		}else{
		workerbotsRcost0000=workerbotscost[totalworkerbots-2][0];
		workerbotsEcost0000=workerbotscost[totalworkerbots-2][1];
		}
	}
 
	workerbotsRcost0000 = Math.round(workerbotsRcost0000  * 10000) / 10000;
	workerbotsEcost0000 = Math.round(workerbotsEcost0000  * 10000) / 10000;	
	$("#workerbotsRcost0000").html(formatNumber(workerbotsRcost0000));
	$("#workerbotsEcost0000").html(formatNumber(workerbotsEcost0000));	
}
function cost(){
costAutofunctions("0000");
costAutofunctions("0001");
costAutofunctions("0002");
costAutofunctions("0003");

costEstorefunctions("0000");
costEstorefunctions("0001");
costEstorefunctions("0002");
costEstorefunctions("0003");

costrProdfunctions(0);
costrStorefunctions(0);

costworkerbotsfunctions();
 } 
 function acquried(){
  $("#egnum0000").html(BuildingAutoNumber0000);
  $("#egnum0001").html(BuildingAutoNumber0001);
  $("#egnum0002").html(BuildingAutoNumber0002); 
  $("#egnum0003").html(BuildingAutoNumber0003); 
  
  $("#Estorenum0000").html(BuildingEstoreNumber0000);
  $("#Estorenum0001").html(BuildingEstoreNumber0001);
  $("#Estorenum0002").html(BuildingEstoreNumber0002); 
  $("#Estorenum0003").html(BuildingEstoreNumber0003); 
  
  $("#rProdnum0000").html(BuildingrProd[0][0]); 
  $("#rStorenum0000").html(BuildingrStore[0][0]); 
 }

//BUY
//
 buyClickAutofunctions("0000");
 buyClickAutofunctions("0001");
 buyClickAutofunctions("0002");
 buyClickAutofunctions("0003");
 
 buyClickEstorefunctions("0000");
 buyClickEstorefunctions("0001");
 buyClickEstorefunctions("0002");
 buyClickEstorefunctions("0003");
 
 buyClickrProdfunctions(0);
 buyClickrStorefunctions(0);
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
	calculateEverything();\
	\
} else {\
	$(\"#autoerrorcost"+ID+"\").show(\"medium\").delay(2500).queue(function(n) {\
  $(this).hide(\"medium\"); n();\
  });\
}\
  });\
 ");
 }
  function buyClickEstorefunctions(ID){
  eval("$( \"#estorebuy"+ID+"\" ).click(function() {\
	BuildingEstoreCostMultiplier"+ID+" = Math.pow(1.15, BuildingEstoreNumber"+ID+");\
	BuildingEstoreCost"+ID+" = BuildingEstoreOriginalCost"+ID+" * BuildingEstoreCostMultiplier"+ID+"; \
	BuildingEstoreCost"+ID+"  = Math.round(BuildingEstoreCost"+ID+" * 1000) / 1000;	\
if(BuildingEstoreCost"+ID+"<= thetotal) {\
    \
	thetotal = thetotal - BuildingEstoreCost"+ID+";\
	thetotal = Math.round(thetotal * 1000) / 1000;\
	BuildingEstoreNumber"+ID+" = BuildingEstoreNumber"+ID+" + 1;\
	calculateEverything();\
	\
} else {\
	$(\"#Estoreerrorcost"+ID+"\").show(\"medium\").delay(2500).queue(function(n) {\
  $(this).hide(\"medium\"); n();\
  });\
}\
  });\
 ");
   }
 function buyClickrProdfunctions(ID){
  eval("$( \"#rProdbuy000"+ID+"\" ).click(function() {\
	var BuildingrProdCostMultiplier = Math.pow(2, BuildingrProd["+ID+"][0]);\
    BuildingrProd["+ID+"][3] = BuildingrProd["+ID+"][1]*BuildingrProdCostMultiplier;\
	BuildingrProd["+ID+"][3] = Math.round(BuildingrProd["+ID+"][3]  * 1000) / 1000;\
if(BuildingrProd["+ID+"][3]<= thetotal) {\
    \
	thetotal = thetotal - BuildingrProd["+ID+"][3];\
	thetotal = Math.round(thetotal * 1000) / 1000;\
	BuildingrProd["+ID+"][0] = BuildingrProd["+ID+"][0] + 1;\
	calculateEverything();\
	\
} else {\
	$(\"#rProderrorcost000"+ID+"\").show(\"medium\").delay(2500).queue(function(n) {\
  $(this).hide(\"medium\"); n();\
  });\
}\
  });\
 ");
 }
  function buyClickrStorefunctions(ID){
  eval("$( \"#rStorebuy000"+ID+"\" ).click(function() {\
	var BuildingrStoreCostMultiplier = Math.pow(2, BuildingrStore["+ID+"][0]);\
    BuildingrStore["+ID+"][3] = BuildingrProd["+ID+"][1]*BuildingrStoreCostMultiplier;\
	BuildingrStore["+ID+"][3] = Math.round(BuildingrStore["+ID+"][3]  * 1000) / 1000;\
if(BuildingrStore["+ID+"][3]<= thetotal) {\
    \
	thetotal = thetotal - BuildingrStore["+ID+"][3];\
	thetotal = Math.round(thetotal * 1000) / 1000;\
	BuildingrStore["+ID+"][0] = BuildingrStore["+ID+"][0] + 1;\
	calculateEverything();\
	\
} else {\
	$(\"#rStoreerrorcost000"+ID+"\").show(\"medium\").delay(2500).queue(function(n) {\
  $(this).hide(\"medium\"); n();\
  });\
}\
  });\
 ");
   }
 $("#workerbotsbuy0000" ).click(function() {
    var workerbotsRcost0000;
	var workerbotsEcost0000;
	var BuildingworkerbotsCostMultiplier = Math.pow(2, totalworkerbots-2);
	if(totalworkerbots>2+2){
		workerbotsRcost0000=workerbotscost[1][0]*BuildingworkerbotsCostMultiplier;
		workerbotsEcost0000=workerbotscost[1][1]*BuildingworkerbotsCostMultiplier;		
	}else{
		if(totalworkerbots<2){
			workerbotsRcost0000=0;
			workerbotsEcost0000=0;
		}else{
		workerbotsRcost0000=workerbotscost[totalworkerbots-2][0];
		workerbotsEcost0000=workerbotscost[totalworkerbots-2][1];
		}
	}
 
	workerbotsRcost0000 = Math.round(workerbotsRcost0000  * 1000) / 1000;
	workerbotsEcost0000 = Math.round(workerbotsEcost0000  * 1000) / 1000;
if(workerbotsEcost0000<= thetotal && workerbotsRcost0000<= RealResearchPoints) {
 
	thetotal = thetotal - workerbotsEcost0000;
	thetotal = Math.round(thetotal * 1000) / 1000;
	RealResearchPoints = RealResearchPoints - workerbotsRcost0000;
	RealResearchPoints = Math.round(RealResearchPoints * 10000) / 10000;	
	workerbots[0]=workerbots[0]+1;
	calculateEverything();
	
} else {
	$("#workerbotserrorcost0000").show("medium").delay(2500).queue(function(n) {
  $(this).hide("medium"); n();
  });
}
  }); 
      //ENERGY GOALS
  function multiply(a,b){
	  var factor = 2.75;
	  return a*Math.pow(factor,b);  
  }
  energyGoal1=$("#energyGoal1");
  energyGoal2=$("#energyGoal2");
  energyGoal3=$("#energyGoal3");
  energyGoal4=$("#energyGoal4");
  energyGoal5=$("#energyGoal5");
  energyGoal6=$("#energyGoal6");
  energyGoal7=$("#energyGoal7");
  energyGoal8=$("#energyGoal8");
  energyGoal9=$("#energyGoal9");
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
  
  energyGoal1.html("Requirement: "+formatNumber(calculatedvalue1)+" Energy || Reward: "+rewardcalculatedvalue1);
  energyGoal2.html("Requirement: "+formatNumber(calculatedvalue2)+" Energy || Reward: "+rewardcalculatedvalue2);
  energyGoal3.html("Requirement: "+formatNumber(calculatedvalue3)+" Energy || Reward: "+rewardcalculatedvalue3);
  energyGoal4.html("Requirement: "+formatNumber(calculatedvalue4)+" Energy || Reward: "+rewardcalculatedvalue4);
  energyGoal5.html("Requirement: "+formatNumber(calculatedvalue5)+" Energy || Reward: "+rewardcalculatedvalue5);
  energyGoal6.html("Requirement: "+formatNumber(calculatedvalue6)+" Energy || Reward: "+rewardcalculatedvalue6);
  energyGoal7.html("Requirement: "+formatNumber(calculatedvalue7)+" Energy || Reward: "+rewardcalculatedvalue7);
  energyGoal8.html("Requirement: "+formatNumber(calculatedvalue8)+" Energy || Reward: "+rewardcalculatedvalue8);
  energyGoal9.html("Requirement: "+formatNumber(calculatedvalue9)+" Energy || Reward: "+rewardcalculatedvalue9);
  
 $(".EnergyGoalLevel").html(EnergyGoalLevel);
  } 

function calculateEverything(){
	calcworkerbots();
	calcemultiply();
	calcestore();
	calcrStore();
    calcrProd();
	calcestoreplus();
	calcestoregaintotal();
	estorepercentagetotal();
	calcepsgain();
	calcepsplus();
	calcepsgaintotal();
	autopercentagetotal();
	researchpercentagetotal();
	calcresearchplustotal();
    acquried();
	cost();
	if(energycap>0){
    widthpercentage=(thetotal/energycap)*100;
	}else{widthpercentage=0;}
    if(widthpercentage>100){widthpercentage=100;}
      document.getElementById("bar1").style.width = widthpercentage + '%'; 
	  $(".thetotal").html(formatNumber(thetotal)+"/"+formatNumber(energycap));
	  $("#epsgain").html(formatNumber(epsgain));
	  $("#rProdgain").html(formatNumber(rProdgain));
	  $(".researchpoint").html(formatNumber(ResearchPoints));
	  $(".ResearchPoints").html(formatNumber(ResearchPoints));
	  $(".RealResearchPoints").html(formatNumber(RealResearchPoints));
	  $(".RealResearchPointscap").html(formatNumber(RealResearchPointscap));
	  doEnergyGoals();
	if(thetotal >= 100000000000000){$( "#won" ).show();}
}
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
//ACHEIVEMENT
//
//
//
 totalAchievement=10;
 
 achievementEnergyGoalArray=[1,3,5,10,15,20,30,40,50,60];
 achievementTotalBuildingsArray=[5,10,25,50,100,250,500,1000,1500,2500];
 achievementTotalworkerbotsArray=[3,4,5,6,7,8,9,10,11,12];
 displayAchievementInit();
 function displayAchievementInit(){
	
	 for(var i=totalAchievement;i>0;i--){
	 $( "#achievementEnergyGoalGRP" ).after("<div id=\"achievementEnergyGoal"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Energy Goal Level "+achievementEnergyGoalArray[i-1]+"<br><b style=\"color:#FF00FF;\">Reward: </b>Energy multiplyier increased by 0.05</span></div>" );
     }
	 for(var i=totalAchievement;i>0;i--){
	 $( "#achievementTotalBuildingsGRP" ).after("<div id=\"achievementTotalBuildings"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Acquire "+achievementTotalBuildingsArray[i-1]+" buildings<br><b style=\"color:#FF00FF;\">Reward: </b>Energy multiplyier increased by 0.05</span></div>" );
     }
	
	 for(var i=totalAchievement;i>0;i--){
	 $( "#achievementTotalworkerbotsGRP" ).after("<div id=\"achievementTotalworkerbots"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Acquire "+achievementTotalworkerbotsArray[i-1]+" worker bots<br><b style=\"color:#FF00FF;\">Reward: </b>Energy multiplyier increased by 0.05</span></div>" );
     }
 }
 updateAchievement();
 function updateAchievement(){
	 //for initial update
 for(var i=0; i<achievementstatus[0]+1;i++){
	 eval("$(\"#achievementEnergyGoal"+i+"\").addClass(\"achievementachieved\");");
 }
 for(var i=0; i<achievementstatus[1]+1;i++){
	 eval("$(\"#achievementTotalBuildings"+i+"\").addClass(\"achievementachieved\");");
 }
 for(var i=0; i<achievementstatus[2]+1;i++){
	 eval("$(\"#achievementTotalworkerbots"+i+"\").addClass(\"achievementachieved\");");
 }
 
 var width=(achievementstatus[0]+achievementstatus[1]+achievementstatus[2]+achievementstatus[3]+achievementstatus[4]+achievementstatus[5]+achievementstatus[6]+achievementstatus[7]+achievementstatus[8]+achievementstatus[9])/50*100;
 for(var i=0; i<6; i++){
	 if(achievementstatus[0]+achievementstatus[1]+achievementstatus[2]+achievementstatus[3]+achievementstatus[4]+achievementstatus[5]+achievementstatus[6]+achievementstatus[7]+achievementstatus[8]+achievementstatus[9]>=achievementBonusArray[i]){
	 eval("$(\"#achievementBonusTarget"+i+"\").addClass(\"achievementBonusAchieved\");");
	 }else{
		 i=999;
	 }
 }
 document.getElementById("achievementBonusBar").style.width = width+ '%'; 
 }
 
 setInterval(achievement, 1000);
  function achievement() {
 if(EnergyGoalLevel>=achievementEnergyGoalArray[achievementstatus[0]]){
	achievementstatus[0]=achievementstatus[0]+1;
	calculateEverything();
	updateAchievement();
	notify("Achievement \"Energy Goal Level "+achievementEnergyGoalArray[achievementstatus[0]-1]+"\" acquried. Energy multiplyier increased to "+ emultiplytotal +"");
	eval("$(\"#achievementEnergyGoal"+achievementstatus[0]+"\").addClass(\"achievementachieved\");");
 }
 if(totalbuildings>=achievementTotalBuildingsArray[achievementstatus[1]]){
	achievementstatus[1]=achievementstatus[1]+1;
    calculateEverything();
	updateAchievement();
	notify("Achievement \"Acquire "+achievementTotalBuildingsArray[achievementstatus[1]-1]+" buildings \" acquried. Energy multiplyier increased to "+ emultiplytotal +"");
	eval("$(\"#achievementTotalBuildings"+achievementstatus[1]+"\").addClass(\"achievementachieved\");");
 } 
 if(totalworkerbots>=achievementTotalworkerbotsArray[achievementstatus[2]]){
	achievementstatus[2]=achievementstatus[2]+1;
	calculateEverything();
	notify("Achievement \"Acquire "+formatNumber(achievementTotalworkerbotsArray[achievementstatus[2]-1])+" worker bots \" acquried. Energy multiplyier increased to "+ emultiplytotal +"");
	eval("$(\"#achievementTotalworkerbots"+achievementstatus[2]+"\").addClass(\"achievementachieved\");");
 } 
  }
  //end
 //STATS CODE
 
 setInterval(stats, 2000);
 
 function stats(){
totalachievements = achievementstatus[0]+achievementstatus[1]+achievementstatus[2]+achievementstatus[3]+achievementstatus[4]+achievementstatus[5]+achievementstatus[6]+achievementstatus[7]+achievementstatus[8]+achievementstatus[9]
totalbuildings = BuildingAutoNumber0000 + BuildingAutoNumber0001 + BuildingAutoNumber0002 + BuildingAutoNumber0003 + BuildingEstoreNumber0000 + BuildingEstoreNumber0001 + BuildingEstoreNumber0002 + BuildingEstoreNumber0003 + BuildingrProd[0][0] + BuildingrStore[0][0];
$("#createdenergy").html(formatNumber(totalenergyed)); 
$("#totalachievements").html(totalachievements); 
$("#totalbuildings").html(totalbuildings); 	  
$("#htmltotalworkerbots").html(totalworkerbots);
$("#emultiply").html("x" + emultiplytotal); 	
$("#version").html(version); 
$("#currentVersionSettings").html(" Current version: "+version);
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
tabsName=["Buildings","Research","Energy Goals","Achievements","Stats","Settings N' Stuff"];
function fillTabsName(){
	if(tabsunlocked[0]==1){$("#menuA").html(tabsName[0]);}else{$("#menuA").html("&#128274");}
	if(tabsunlocked[1]==1){$("#menuB").html(tabsName[1]);}else{$("#menuB").html("&#128274");}
	if(tabsunlocked[2]==1){$("#menuC").html(tabsName[2]);}else{$("#menuC").html("&#128274");}
	if(tabsunlocked[3]==1){$("#menuD").html(tabsName[3]);}else{$("#menuD").html("&#128274");}
	if(tabsunlocked[4]==1){$("#menuE").html(tabsName[4]);}else{$("#menuE").html("&#128274");}
	if(tabsunlocked[5]==1){$("#menuF").html(tabsName[5]);}else{$("#menuF").html("&#128274");}
}
fillTabsName();
tabs = document.getElementsByClassName("tabs");
 var x = document.getElementsByClassName("tabClass");
 for (i = 0; i < x.length; i++) {
        tabs[i].className = tabs[i].className += " notOn";
    }
 
 openTab('menuA',"tabA");
 document.getElementById('menuA').addEventListener("click", function() {if(tabsunlocked[0]==1){openTab('menuA','tabA')}else{$("#menuA").qaddclass("red").delay(750).qremoveclass("red");}});
 document.getElementById('menuB').addEventListener("click", function() {if(tabsunlocked[1]==1){openTab('menuB','tabB')}else{$("#menuB").qaddclass("red").delay(750).qremoveclass("red");}});
 document.getElementById('menuC').addEventListener("click", function() {if(tabsunlocked[2]==1){openTab('menuC','tabC')}else{$("#menuC").qaddclass("red").delay(750).qremoveclass("red");}});
 document.getElementById('menuD').addEventListener("click", function() {if(tabsunlocked[3]==1){openTab('menuD','tabD')}else{$("#menuD").qaddclass("red").delay(750).qremoveclass("red");}});
 document.getElementById('menuE').addEventListener("click", function() {if(tabsunlocked[4]==1){openTab('menuE','tabE')}else{$("#menuE").qaddclass("red").delay(750).qremoveclass("red");}});
 document.getElementById('menuF').addEventListener("click", function() {if(tabsunlocked[5]==1){openTab('menuF','tabF')}else{$("#menuF").qaddclass("red").delay(750).qremoveclass("red");}});
 //
 /* PROGRESSION COMPONENT */
function gamestate0(){
	$('.blackScreen').fadeOut(0);
	$('#startgameText1').fadeOut(0);
	$('#startgameText2').fadeOut(0);	
}
function gamestate1(){
	workerbots[1]=1; //first workerbots
	workerbots[2]=1; //first workerbots
	$('.blackScreen').fadeOut(1000);
	$('#startgameText1').fadeOut(1000);
	$('#startgameText2').fadeOut(1000);
	BuildingAutoNumber0000 = BuildingAutoNumber0000 + 1;
	BuildingEstoreNumber0000 = BuildingEstoreNumber0000 + 1;
	calculateEverything();	
}
if(gameState>=1){
   gamestate0();
}
$( "#progress1" ).click(function() {
	if(gameState==0){
	gamestate1();
	gameState=1;
	}
});
function checkGamestate(){
	if(totalenergyed>=50&&gameState==1){tabsunlocked[3]=1;gameState=2;fillTabsName(); notify("Tab \""+tabsName[3]+"\" unlocked");}
	if(totalenergyed>=250&&gameState==2){tabsunlocked[4]=1;gameState=3;fillTabsName(); notify("Tab \""+tabsName[4]+"\" unlocked");}
	if(totalenergyed>=750&&gameState==3){tabsunlocked[2]=1;gameState=4;fillTabsName(); notify("Tab \""+tabsName[2]+"\" unlocked");}
	if(RealResearchPoints>=1&&gameState==4){tabsunlocked[1]=1;gameState=5;fillTabsName(); notify("Tab \""+tabsName[1]+"\" unlocked");}
}
 setInterval(checkGamestate, 500);
 //ADD RESOURCE
  var lastUpdate=Date.now();
function limit(val,max){
	if(val>max){val=max;}
	return val;
}
 function addResource(){
    var timeSinceLastUpdate = Date.now() - lastUpdate;
    var secondsSinceLastUpdate = timeSinceLastUpdate / 1000; //divide by 1000 to convert from milliseconds to fraction of seconds.
    // you now have the number of seconds since the last update which works independently of framerate.
	oldtotal = thetotal;  
	thetotal = thetotal + limit((epsgain*secondsSinceLastUpdate),energycap); 
	thetotal = limit(thetotal,energycap);
	incremented = thetotal-oldtotal;
	totalenergyed = totalenergyed + limit(incremented,energycap);
	totalenergyed = Math.round(totalenergyed * 1000) / 1000;
	thetotal = Math.round(thetotal * 1000) / 1000;
    
    testResearchPoints = RealResearchPoints + limit((rProdgain*secondsSinceLastUpdate), RealResearchPointscap); 
	testResearchPoints = limit(testResearchPoints,RealResearchPointscap);
	assumedResearchPointsconverted = testResearchPoints-RealResearchPoints;
	assumedNewResearchPoint=ResearchPoints-assumedResearchPointsconverted;
	if(assumedNewResearchPoint<0){
		//if result is negative reduce ResearchPoints by ResearchPoints to zero
		diffResearchPoint=ResearchPoints; 
	}else{
		//if result not negative reduce by assumedResearchPointsconverted
		diffResearchPoint=assumedResearchPointsconverted;
		}
 
	RealResearchPoints = RealResearchPoints + limit(diffResearchPoint,RealResearchPointscap);
	RealResearchPoints = Math.round(RealResearchPoints * 10000) / 10000;
 
	ResearchPoints = ResearchPoints - limit(diffResearchPoint,RealResearchPointscap);
	ResearchPoints = Math.round(ResearchPoints * 10000) / 10000;
	
 
    lastUpdate = Date.now();
 }
calculateEverything();
addResource();
stats();
 function updateValues(){
	calculateEverything();
 }
 setInterval(updateValues,100);
 setInterval(addResource,100);
 
 //RESEARCH SECTION
	zoom1=100;
	padding = 5;
	yoffset =-10;
    function research(){
	function checkCostER(costE,costR){
	    if(thetotal>=costE&&RealResearchPoints>=costR){
			return 1;
		}else{
			return 0;
		}
	}
	 function useCost(costE,costR){
	   thetotal=thetotal-costE;
	   RealResearchPoints=RealResearchPoints-costR;
 }	
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
	   
	   if(checkCostER(cost9000E,cost9000R)){
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
	   
	   if(checkCostER(cost8000E,cost8000R)){
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
	   
	   if(checkCostER(cost6000E,cost6000R)){
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
	   
	   if(checkCostER(cost9001E,cost9001R)){
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
	   
	   if(checkCostER(cost9002E,cost9002R)){
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
	   
	   if(checkCostER(cost8001E,cost8001R)){
	   useCost(cost8001E,cost8001R);
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
	   
	   if(checkCostER(cost8081E,cost8081R)){
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
	   
	   if(checkCostER(cost8091E,cost8091R)){
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
	   
	   if(checkCostER(cost6001E,cost6001R)){
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
	   if(checkCostER(cost6002E,cost6002R)){
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
		border = 6;
		calc1 = ((boxw-imgw-border)/2);
		calc2 = ((boxh-imgh-border)/2);	
		
	$( "#overlay2contents" ).append( "<div class=\"upgradeIcon IconnotLinked\" id=\""+unqID+"\" style=\"position:absolute;top:"+(y+padding+yoffset)+"px;left:"+(x+padding)+"px;width:"+boxw+"px;height:"+boxh+"px;\"></div>" );	
    $( "#"+unqID+"" ).append("<b><span class=\"upgradeLevel\" id=\""+unqID+"lvl\"></span></b>");
	$( "#"+unqID+"" ).append("<img src=\""+url+"\" class=\"divsImg\" id=\""+unqID+"Img\" style=\"position:absolute;top:"+calc2 +"px;left:"+calc1+"px;width:"+imgw+"px;height:"+imgh+"px;\">");
    $( "#"+unqID+"" ).append("<span class=\"upgradetooltiptext notLinkedTooltip \" id=\""+unqID+"tt\">"+content+"</span>");
	$( "#"+unqID+"" ).append("<span class=\"upgradebridge notLinkedTooltip\" id=\""+unqID+"ttb\"></span>");
   }
   //next function
   function drawLink(x,y,linkw,linkh,unqID){
	   	$( "#overlay2contents" ).append( "<div class=\"researchLink notLinked\" id=\""+unqID+"\" style=\"position:absolute;top:"+(y+padding+yoffset)+"px;left:"+(x+padding)+"px;width:"+linkw+"px;height:"+linkh+"px;\"></div>" );	
   }
   function drawRect(x,y,linkw,linkh,unqIDRect){
	   	$( "#overlay2contents" ).append( "<div class=\"rect\" id=\""+unqIDRect+"\" style=\"background-color:transparent; border-width:2px; border-color:#FFFFFF; border-style:solid; position:absolute;top:"+(y+padding+yoffset)+"px;left:"+(x+padding)+"px;width:"+linkw+"px;height:"+linkh+"px;\"></div>" );	
   }
   function researchZoom(){
      sliderrange1 = $('#range-slider__range1');
	  overlay2contents = $('#overlay2contents');
      slidervalue1 = $('#range-slider__value1');
     
      zoom1 = sliderrange1.val();
      slidervalue1.html(zoom1+"%");
	  
      sliderrange1.on('input', function(){
		 zoom1 = sliderrange1.val();
		slidervalue1.html(zoom1+"%");  
		var scaling = "scale("+zoom1/100+","+zoom1/100+")";
		var marginLeft=0;
		if(zoom1>100){
			marginLeft=(zoom1-100)*overlay2contents.width()/100/2;
		}
		var marginLeftpx = ""+marginLeft+"px";
		$('#overlay2contents').css("transform", scaling);
		$('#overlay2contents').css("marginLeft", marginLeftpx);
      });
	   
	}
	researchZoom();
	};
	move();
});
 
 /*
 //running at 100 times a second (10 milliseconds)
  run();
  setInterval(run, 100);
  function run() { 
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
*/