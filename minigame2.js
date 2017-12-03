$(document).ready(function(){ 
  currentVersion="2.0.1";
  //Init VARAIABLES starting game 
  //BuildingEstore [ID][NUM,COST,VALUE, CALC COST]
    InitVar1 = {
		version:currentVersion,
		gameState:0,
		workerbots:[0,0,0,0,0],
		workerbotscost:[[1,0],[2,100000]],
		tabsunlocked:[1,0,0,0,0,1],
		totalenergyed:0,
		totalachievements:0,
		totalbuildings:0,
		totalresearch:0,
		energycap:50,
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
	  
  }
  
 InitResearchLVL = {
 unqID9000lvl:0,
 unqID8000lvl:0,
 unqID8001lvl:0,
 unqID8081lvl:0,
 unqID8091lvl:0,
 unqID6000lvl:0,
 unqID6001lvl:0,
 unqID6002lvl:0,
 unqID9001lvl:0,
 unqID9002lvl:0,
 unqID9003lvl:0,
 unqID9004lvl:0
 }
 //fixed variables
 //research9000 [energy cost, research cost , energy cancel cost, max levels]
 staticVar1 = {
 research9000:[10000,0,0,1],
 research8000:[12500,0.5,0,5],
 research8081:[50000,1.5,0,5],
 research8001:[100000,1.5,0,5],
 research8002:[500000,4,0,5],
 research8091:[150000,2,0,5],
 research6000:[5666000000,16,0,1],
 research6001:[7500000,5,7500000000,1],
 research6002:[7500000,5,7500000000,1],
 research9001:[1000000,5,0,1],
 research9002:[1500000,3,0,5],
 research9003:[4500000,5,0,5],
 research9004:[10000000,7.5,0,5]
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
  
 Cookieresult = getCookie("ResearchLVL");
 if(Cookieresult!=""){
	 loadCookies("ResearchLVL","5");
 }else{
	 console.log("Cookie ResearchLVL not found, creating ResearchLVL");
	 setCookieJson("ResearchLVL",InitResearchLVL);
	 loadCookies("ResearchLVL","5");
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
	 if(variableName=="5"){
	  ResearchLVL=JSON.parse(LZString.decompressFromBase64(cookieResult)); 
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
	totalenergyed=loadedVar1.totalenergyed;
	totalachievements=loadedVar1.totalachievements;
	totalbuildings=loadedVar1.totalbuildings;
	totalresearch=loadedVar1.totalresearch;
	energycap=loadedVar1.energycap;
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
/*
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
	unqID9003lvl=loadedVar4.unqID9003lvl;
	unqID9004lvl=loadedVar4.unqID9004lvl;
	*/
/////////////////////////////////////////////////////////////////////
	research9000=staticVar1.research9000;
	research8000=staticVar1.research8000;
	research8081=staticVar1.research8081;
	research8001=staticVar1.research8001;
	research8002=staticVar1.research8002;
	research8091=staticVar1.research8091;
	research6000=staticVar1.research6000;
	research6001=staticVar1.research6001;
	research6002=staticVar1.research6002;
	research9001=staticVar1.research9001;
	research9002=staticVar1.research9002;
	research9003=staticVar1.research9003;
	research9004=staticVar1.research9004;
	
 }
 //others
 
 //GLOBAL VALUES INITIALIZE
 function setSaveVar(){
	saveVar1 = {
		version:version,
		workerbots:workerbots,
		workerbotscost:workerbotscost,
		tabsunlocked:tabsunlocked,
		gameState:gameState,
		totalenergyed:totalenergyed,
		totalachievements:totalachievements,
		totalbuildings:totalbuildings,
		totalresearch:totalresearch,
		energycap:energycap,
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
/*
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
 */
 /*
 unqID9000lvl:unqID9000lvl,
 unqID8000lvl:unqID8000lvl,
 unqID8001lvl:unqID8001lvl,
 unqID8081lvl:unqID8081lvl,
 unqID8091lvl:unqID8091lvl,
 unqID6000lvl:unqID6000lvl,
 unqID6001lvl:unqID6001lvl,
 unqID6002lvl:unqID6002lvl,
 unqID9001lvl:unqID9001lvl,
 unqID9002lvl:unqID9002lvl,
 unqID9003lvl:unqID9003lvl,
 unqID9004lvl:unqID9004lvl
 */
 }
 saveResearchLVL=ResearchLVL; 
 }
probarcounterbasevalue = 2000;
function savegamecookie(){
 setSaveVar();
 setCookieJson("Var1",saveVar1);
 setCookieJson("Var2",saveVar2);
 setCookieJson("Var3",saveVar3);
 setCookieJson("Var4",saveVar4);
 setCookieJson("ResearchLVL",saveResearchLVL);
 notify("Game saved",0);
}
setTimeout(function() {
  setInterval(savegamecookie, 30000);
}, 5000);

 $( "#savebox").click(function() {
savegamecookie();
 });
number = 0;
function removeNotification(evt){
	$("#"+evt.target.id).parent().remove();
}
function notify(data,priority){
	$("#bottomcontainer").append("<div id=\"notification"+ number +"\" class=\"notificationclass\" style=\"display:none;\">"+ data + "\<span id=\"notificationRemove"+number+"\"class=\"remove\" style=\"float:right; margin-right:5px;\"\">&times;</span></div>")
	if(priority==0){
	$("#notification" + number).show("fast").delay(2000).hide("fast").queue(function(next) {$(this).remove();next();});
	}else{
	$("#notification" + number).show("fast").delay(30000).hide("fast").queue(function(next) {$(this).remove();next();});	
	}
	$("#notificationRemove" + number).on('click', removeNotification);
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
function calcrProd(){
	rProdgain=((BuildingrProd[0][2]*BuildingrProd[0][0]))*rProdmultiplytotal*workerbotsrProd;
    rProdgain = Math.round(rProdgain * 1000) / 1000;
}
function calcrStore(){
	RealResearchPointscap=((BuildingrStore[0][2]*BuildingrStore[0][0]))*rStoremultiplytotal*workerbotsrStore;
    RealResearchPointscap = Math.round(RealResearchPointscap * 10000) / 10000;
}
function calcestorebuildings(){
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
//////////////////////////////////////////////////////////////////////////////////////////////
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
	/////
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
	/////	
	energycap = estoretotalgainfrombuildings;
	energycap = Math.round(energycap * 1000) / 1000;
}
function calceprodbuildings(){
	var anotherMultipler=1;
    if(ResearchLVL.unqID6001lvl==1){
		anotherMultipler=0.9;
	}else if(ResearchLVL.unqID6002lvl==1){
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
//////////////////////////////////////////////////////////////////////////////////////////////
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
	/////
	epsgain = epstotal1 + epstotal2 + epstotal3 + epstotal4;
	epsgain = Math.round(epsgain * 1000) / 1000; 
	/////
	autototalgainfrombuildings = epsgain;
	
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
 achievementBonusArray=[0,5,10,20,35,50];
 achievementTotalEmultiplyBonus=[0,15,20,40,80,160];

function calcstats(){
	totalachievements = 0;
	for(var i=0; i<achievementstatus.length; i++){
	totalachievements = totalachievements+achievementstatus[i];
	}
	
	totalbuildings = BuildingAutoNumber0000 + BuildingAutoNumber0001 + BuildingAutoNumber0002 + BuildingAutoNumber0003 + BuildingEstoreNumber0000 + BuildingEstoreNumber0001 + BuildingEstoreNumber0002 + BuildingEstoreNumber0003 + BuildingrProd[0][0] + BuildingrStore[0][0];
	
	totalresearch = 0;
	for (var i in ResearchLVL){
    var value = ResearchLVL[i];
      totalresearch = totalresearch+value; 
	}
 
	totalresearch = totalresearch+ResearchLVL[i];
	 
}
 function calcmultiply(){
	estoremultiplytotal=1+ResearchLVL.unqID8000lvl*0.2+ResearchLVL.unqID8001lvl*0.4;
	estoremultiplytotal=1+ResearchLVL.unqID8000lvl*0.2+ResearchLVL.unqID8001lvl*0.4;
 }
 function calcemultiply(){
	TotalEmultiply=0;
	for(var i=0; i<6; i++){
	 if(totalachievements>=achievementBonusArray[i]){
	  TotalEmultiply=TotalEmultiply+achievementTotalEmultiplyBonus[i];
	}else{
		break;
	}
	}   
    $("#TotalEmultiply").html(TotalEmultiply);
	emultiplytotal = 1;
	for(var i=0; i<achievementstatus.length; i++){
	emultiplytotal = emultiplytotal+achievementstatus[i]*0.05;
	} 
	emultiplytotal=emultiplytotal*((100+TotalEmultiply)/100);
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
	notify("Energy Goal ("+calculatedvalue1+") acquried! Reward: "+rewardcalculatedvalue1+" Research Points",1);
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
	calcstats();
	calcemultiply(); //global multiplyer
	calcmultiply();  //individual multiplyer
	calcestorebuildings();
	calceprodbuildings();
	calcrStore();
    calcrProd();
	researchpercentagetotal();
	calcresearchplustotal();
    acquried();
	cost();
	if(energycap>0){
    widthpercentage=(thetotal/energycap)*100;
	}else{widthpercentage=0;}
    if(widthpercentage>100){widthpercentage=100;}
      $("#bar1").width(widthpercentage + '%'); 
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
//ACHIEVEMENT
//
//
//
 totalAchievement=10;
 
 achievementEnergyGoalArray=[1,3,5,10,15,20,30,40,50,60];
 achievementTotalBuildingsArray=[5,10,25,50,100,250,500,1000,1500,2500];
 achievementTotalResearchArray=[1,3,5,10,15,30,45,75,100,150];
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
	 $( "#achievementTotalResearchGRP" ).after("<div id=\"achievementTotalResearch"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Acquire "+achievementTotalResearchArray[i-1]+" research levels<br><b style=\"color:#FF00FF;\">Reward: </b>Energy multiplyier increased by 0.05</span></div>" );
     }
		
	 for(var i=totalAchievement;i>0;i--){
	 $( "#achievementTotalworkerbotsGRP" ).after("<div id=\"achievementTotalworkerbots"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Acquire "+achievementTotalworkerbotsArray[i-1]+" worker bots<br><b style=\"color:#FF00FF;\">Reward: </b>Energy multiplyier increased by 0.05</span></div>" );
     }
	 
	 //$( "#achievementSpecialtyGRP" ).after("<div id=\"achievementSpecialty1\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Produce 0 energy per sec<br><b style=\"color:#FF00FF;\">Reward: </b>Energy multiplyier increased by 0.05</span></div>" );
 }
 
 function updateAchievement(){
 calculateEverything();
	 //for initial update
 for(var i=0; i<achievementstatus[0]+1;i++){
	 eval("$(\"#achievementEnergyGoal"+i+"\").addClass(\"achievementachieved\");");
 }
 for(var i=0; i<achievementstatus[1]+1;i++){
	 eval("$(\"#achievementTotalBuildings"+i+"\").addClass(\"achievementachieved\");");
 }
 for(var i=0; i<achievementstatus[2]+1;i++){
	 eval("$(\"#achievementTotalResearch"+i+"\").addClass(\"achievementachieved\");");
 }
 for(var i=0; i<achievementstatus[3]+1;i++){
	 eval("$(\"#achievementTotalworkerbots"+i+"\").addClass(\"achievementachieved\");");
 }
 
 var width=totalachievements/50*100;
 for(var i=0; i<6; i++){
	 if(totalachievements>=achievementBonusArray[i]){
	 eval("$(\"#achievementBonusTarget"+i+"\").addClass(\"achievementBonusAchieved\");");
	 }else{
		break;
	 }
 }
 $("#achievementBonusBar").width(width+ '%'); 
 }
 
 setInterval(achievement, 1000);
  function achievement() {
 if(EnergyGoalLevel>=achievementEnergyGoalArray[achievementstatus[0]]){
	achievementstatus[0]=achievementstatus[0]+1;
	//calculateEverything();
	updateAchievement();
	notify("Achievement \"Energy Goal Level "+achievementEnergyGoalArray[achievementstatus[0]-1]+"\" acquried. Energy multiplyier increased to "+ emultiplytotal +"",1);
	eval("$(\"#achievementEnergyGoal"+achievementstatus[0]+"\").addClass(\"achievementachieved\");");
 }
 if(totalbuildings>=achievementTotalBuildingsArray[achievementstatus[1]]){
	achievementstatus[1]=achievementstatus[1]+1;
    //calculateEverything();
	updateAchievement();
	notify("Achievement \"Acquire "+achievementTotalBuildingsArray[achievementstatus[1]-1]+" buildings \" acquried. Energy multiplyier increased to "+ emultiplytotal +"",1);
	eval("$(\"#achievementTotalBuildings"+achievementstatus[1]+"\").addClass(\"achievementachieved\");");
 } 
 if(totalresearch>=achievementTotalResearchArray[achievementstatus[2]]){
	achievementstatus[2]=achievementstatus[2]+1;
    //calculateEverything();
	updateAchievement();
	notify("Achievement \"Acquire "+achievementTotalResearchArray[achievementstatus[2]-1]+" research levels \" acquried. Energy multiplyier increased to "+ emultiplytotal +"",1);
	eval("$(\"#achievementTotalResearch"+achievementstatus[2]+"\").addClass(\"achievementachieved\");");
 }
 if(totalworkerbots>=achievementTotalworkerbotsArray[achievementstatus[3]]){
	achievementstatus[3]=achievementstatus[3]+1;
	//calculateEverything();
	notify("Achievement \"Acquire "+formatNumber(achievementTotalworkerbotsArray[achievementstatus[3]-1])+" worker bots \" acquried. Energy multiplyier increased to "+ emultiplytotal +"",1);
	eval("$(\"#achievementTotalworkerbots"+achievementstatus[3]+"\").addClass(\"achievementachieved\");");
 } 
  }
  //end
 //STATS CODE
 
 setInterval(stats, 2000);
 
 function stats(){
$("#createdenergy").html(formatNumber(totalenergyed)); 
$("#totalachievements").html(totalachievements); 
$("#totalbuildings").html(totalbuildings); 	  
$("#totalresearch").html(totalresearch);
$("#htmltotalworkerbots").html(totalworkerbots);
$("#emultiply").html("x" + emultiplytotal); 	
$("#currentVersionSettings").html(" Current version: "+version);
$("#version").html(version); 
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
tabsName=["Buildings","Research","Energy Goals","Achievements","Unknown","Settings N' Stuff"];
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
	if(totalenergyed>=50&&gameState==1){tabsunlocked[3]=1;gameState=2;fillTabsName(); notify("Tab \""+tabsName[3]+"\" unlocked",1);}
	if(totalenergyed>=750&&gameState==2){tabsunlocked[2]=1;gameState=3;fillTabsName(); notify("Tab \""+tabsName[2]+"\" unlocked",1);}
	if(RealResearchPoints>=1&&gameState==3){tabsunlocked[1]=1;gameState=4;fillTabsName(); notify("Tab \""+tabsName[1]+"\" unlocked",1);}
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
 updateAchievement();
 skip=0;
 function updateValues(){
	calculateEverything();
	//skip game
	if(skip==1){
	BuildingEstoreNumber0003=10000;
	BuildingAutoNumber0003=10000;
	BuildingrProd[0][0]=10000;
	BuildingrStore[0][0]=10000;
	workerbots[0]=100;
	workerbots[3]=10;
	workerbots[4]=10;
	skip=0;
  }
 }
 setInterval(updateValues,100);
 setInterval(addResource,100);
 
 //RESEARCH SECTION
	zoom1=100;
	padding = 5;
	yoffset = 35;
	function checkCostER(costID){
	    if(thetotal>=costID[0]&&RealResearchPoints>=costID[1]){
			return 1;
		}else{
			return 0;
		}
	}
	function useCancel(costID){
		thetotal=thetotal-costID[2];
	}
	function useCost(costID){
		thetotal=thetotal-costID[0];
		RealResearchPoints=RealResearchPoints-costID[1];
	}
	function researchFail(id){
		$("#"+id).qaddclass("redborder").delay(1750).qremoveclass("redborder");
	}
	function researchMax(id){
		boughtIt(id);
	    maxed=" MAX";
	}//$("#unqID9000lvl").text(unqID9000lvl+ maxed);
	function researchClick(id){
		if(id=="upgrade9000"){
			if(ResearchLVL.unqID9000lvl >= research9000[3]) {
			//if bought already
			}else{
			if(checkCostER(research9000)){
			useCost(research9000);
			//successfully purchased upgrade
			ResearchLVL.unqID9000lvl=ResearchLVL.unqID9000lvl+1;
			}else{
			//do not meet requirement
			researchFail("upgrade9000");
			}
			} 
		}else if(id=="upgrade8000"){
			if(ResearchLVL.unqID9000lvl >= research9000[3]){
			if(ResearchLVL.unqID8000lvl >= research8000[3]) {
			//if bought already
			}else{
			if(checkCostER(research8000)){
			useCost(research8000);
			//successfully purchased upgrade
			ResearchLVL.unqID8000lvl=ResearchLVL.unqID8000lvl+1;
			}else{
			//do not meet requirement
			researchFail("upgrade8000");
			}
			}
			}
		}else if(id=="upgrade6000"){
			if(ResearchLVL.unqID9000lvl >= research9000[3]){
			if(ResearchLVL.unqID6000lvl >= research6000[3]){
			//if bought already
			}else{
			if(checkCostER(research6000)){
			useCost(research6000);
			//successfully purchased upgrade
			ResearchLVL.unqID6000lvl=ResearchLVL.unqID6000lvl+1;
			}else{
			//do not meet requirement
			researchFail("upgrade6000");
			}
			}
			}
		}else if(id=="upgrade9001"){
			if(ResearchLVL.unqID9000lvl >= research9000[3]){
			if(ResearchLVL.unqID9001lvl >= research9001[3]) {
			//if bought already
			}else{
			if(checkCostER(research9001)){
			useCost(research9001);
			//successfully purchased upgrade
			ResearchLVL.unqID9001lvl=ResearchLVL.unqID9001lvl+1;
			}else{
			//do not meet requirement
			researchFail("upgrade9001");
			}
			}
			}
		}else if(id=="upgrade9002"){
			if(ResearchLVL.unqID9001lvl >= research9001[3]){
			if(ResearchLVL.unqID9002lvl >= research9002[3]) {
			//if bought already
			}else{
			if(checkCostER(research9002)){
			useCost(research9002);
			//successfully purchased upgrade
			ResearchLVL.unqID9002lvl=ResearchLVL.unqID9002lvl+1;
			}else{
			//do not meet requirement
			researchFail("upgrade9002");
			}
			}	
			}
		}else if(id=="upgrade9003"){
			if(ResearchLVL.unqID9002lvl >= research9002[3]){
			if(ResearchLVL.unqID9003lvl >= research9003[3]) {
			//if bought already
			}else{
			if(checkCostER(research9003)){
			useCost(research9003);
			//successfully purchased upgrade
			ResearchLVL.unqID9003lvl=ResearchLVL.unqID9003lvl+1;
			}else{
			//do not meet requirement
			researchFail("upgrade9003");
			}
			}
			}
		}else if(id=="upgrade8001"){
			if(ResearchLVL.unqID8000lvl >= research8000[3]){
			if(ResearchLVL.unqID8001lvl >= research8001[3]) {
			//if bought already
			}else{
			if(checkCostER(research8001)){
			useCost(research8001);
			//successfully purchased upgrade
			ResearchLVL.unqID8001lvl=ResearchLVL.unqID8001lvl+1;
			}else{
			//do not meet requirement
			researchFail("upgrade8001");
			}
			}
			} 
		}else if(id=="upgrade8081"){
			if(ResearchLVL.unqID8000lvl >= research8000[3]){
			if(ResearchLVL.unqID8081lvl >= research8081[3]) {
			//if bought already
			}else{
			if(checkCostER(research8081)){
			useCost(research8081);
			//successfully purchased upgrade
			ResearchLVL.unqID8081lvl=ResearchLVL.unqID8081lvl+1;
			}else{
			//do not meet requirement
			researchFail("upgrade8081");
			}
			}
			}
		}else if(id=="upgrade8091"){
			if(ResearchLVL.unqID8000lvl>=1){
			if(ResearchLVL.unqID8091lvl>=5) {
			//if bought already
			}else{
			if(checkCostER(research8091)){
			useCost(research8091);
			//successfully purchased upgrade
			ResearchLVL.unqID8091lvl=ResearchLVL.unqID8091lvl+1;
			}else{
			//do not meet requirement
			researchFail("upgrade8091");
			}
			}
			}
		}else if(id=="upgrade6001"){
			if(ResearchLVL.unqID6000lvl >= research6000[3]){
			if(ResearchLVL.unqID6002lvl==0){
			if(ResearchLVL.unqID6001lvl >= research6001[3]) {
				//if bought already now cancel it
				if(thetotal>=research6000[2]){
				useCancel(research6000);
				//successfully purchased upgrade
				ResearchLVL.unqID6001lvl=0;
				}else{
				//do not meet requirement
				researchFail("upgrade6001");
				}
			}else{
			if(checkCostER(research6001)){
				useCost(research6001);
				//successfully purchased upgrade
				ResearchLVL.unqID6001lvl=ResearchLVL.unqID6001lvl+1;
				}else{
				//do not meet requirement
				researchFail("upgrade6001");
				}
			}
			}
			}
		}else if(id=="upgrade6002"){
			if(ResearchLVL.unqID6000lvl >= research6000[3]){
			if(ResearchLVL.unqID6001lvl==0){
			if(ResearchLVL.unqID6002lvl >= research6002[3]) {
				//if bought already
				if(thetotal>=research6000[2]){
				useCancel(research6000);
				//successfully purchased upgrade
				ResearchLVL.unqID6002lvl=0;
				}else{
				//do not meet requirement
				researchFail("upgrade6002");
				}
			}else{
				if(checkCostER(research6002)){
				useCost(research6002);
				//successfully purchased upgrade
				ResearchLVL.unqID6002lvl=ResearchLVL.unqID6002lvl+1;
				}else{
				//do not meet requirement
                researchFail("upgrade6002");
				}
			}
			}
			}
		}
			updateResearchTree();
	}
	updateResearchTree();
	function generateResearchTree(){
	//INITIALIZATION PHASE
	drawIcon(10,280,50,50,40,40,'./website/tools/research.png',"unqID9000","upgrade9000","cost9000","Unlock research","Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.","The beginning");
    drawLink(60,302,20,5,"unqID0000");
	drawLink(80,200,5,200,"unqID0001");
	//Bot branch
	drawIcon(57.5,152.5,50,50,40,40,'./website/tools/bot.png',"unqID9001","upgrade9001","cost9001","Unlock bot research","","Need more and better bots?");
	linkIcon("unqID9000");
	//Bot Physical upgrade branch
	drawLink(107.5,177.5,10,5,"unqID0901"); 
	drawIcon(117.5,152.5,50,50,35,35,'./website/tools/gears.png',"unqID9002","upgrade9002","cost9002","Bot efficiency","Increase Bot efficiency multiplyier by 0.20","Better gears");
	drawLink(167.5,177.5,10,5,"unqID0902"); 
	drawIcon(177.5,152.5,50,50,35,35,'./website/tools/motor.png',"unqID9003","upgrade9003","cost9003","Bot efficiency","Increase Bot efficiency multiplyier by 0.40","Better motors");
	//Bot maintenance branch
	drawLink(80,130,5,22.5,"unqID0911"); 
	drawIcon(57.5,82.5,50,50,30,40,'./website/tools/hammer.png',"unqID9012","upgrade9012","cost9012","Bot efficiency","Increase Bot efficiency multiplyier by 0.30","Bot maintenance");	
	//
	drawLink(85,302,20,5,"unqID0800");
	drawIcon(105,280,50,50,30,40,'./website/tools/hammer.png',"unqID8000","upgrade8000","cost8000","Energy production and storage boost I","Increase multiplyier for both by 0.2","Better maintenance");
	drawLink(225,302,20,5,"unqID0802");
	drawIcon(245,280,50,50,30,40,'./website/tools/probarenergy3.png',"unqID8002","upgrade8002","cost8002","Progress bar - Instant","Progress bar will take next to no time to complete, max level 1.");
		
	drawLink(155,302,20,5,"unqID0801");
	drawIcon(175,280,50,50,40,40,'./website/tools/wires.png',"unqID8001","upgrade8001","cost8001","Energy production and storage boost II","Increase multipler for both by 0.4","More conductive wires");
	
	drawLink(127,245,30,5,"unqID0891");
	drawLink(127,250,5,30,"unqID0892");
	drawIcon(140,220,50,50,40,40,'./website/tools/chipconnect.png',"unqID8091","upgrade8091","cost8091","Energy Parallel Boost","Energy parallel loss reduced by 1%","Energy data network");
	drawLink(190,245,20,5,"unqID0893");
	drawIcon(210,220,50,50,40,40,'./website/tools/pcbconnect.png',"unqID8092","upgrade8092","cost8092","Energy Parallel Boost T2","Energy parallel loss reduced by 2%","Integrated energy data network");
	
	drawIcon(140,375,50,50,40,40,'./website/tools/book_energy.png',"unqID8081","upgrade8081","cost8081","Energy production boost","Increase multipler by 0.3","Energy production studies");
	drawIcon(140,515,50,50,40,40,'./website/tools/book_energystore.png',"unqID8082","upgrade8082","cost8082","Energy storage boost","Increase multiplyer by 0.3","Energy storage studies");
	drawIcon(210,340,50,50,30,40,'./website/tools/probarenergyMultiple.png',"unqID80810","upgrade80810","cost80810","Spatial energy generator boost","Increase multiplyer by 0.5","Better spatial studies");
	drawIcon(210,410,50,50,30,40,'./website/tools/probarenergyMultiple.png',"unqID80811","upgrade80811","cost80811","Plasma energy generator boost","Increase multiplyer by 0.5","Better plasmanomic studes");
    drawIcon(210,480,50,50,30,40,'./website/tools/probarenergyMultiple.png',"unqID80820","upgrade80820","cost80820","Dense field storage boost","Increase multiplyer by 0.5","Better dense field studies");
	drawIcon(210,550,50,50,30,40,'./website/tools/probarenergyMultiple.png',"unqID80821","upgrade80821","cost80821","Batteries boost","Increase multiplyer by 0.5","Better chemistry");
   
	drawLink(127,330,5,210,"unqID0881");
	drawLink(127,397.5,13,5,"unqID0882");
	drawLink(127,537.5,13,5,"unqID0883");

	linkIcon("unqID9012",2);
	linkClass("unqID0911",2);		
	linkIcon("unqID80810",2);
	linkIcon("unqID80811",2);
	linkIcon("unqID80820",2);
	linkIcon("unqID80821",2);
	   
	drawIcon(58,400,50,50,30,40,'./website/tools/researchD.png',"unqID6000","upgrade6000","cost6000","Unlock new research tree","Unlock the ability to research more technologies","The new era");
	drawRect(120,600,300,140,"unqIDRect0600");
	drawLink(80,450,5,350,"unqID0601");
	drawLink(85,670,40,5,"unqID0610");
	drawLink(125,630,5,80,"unqID0611");
	drawLink(130,630,20,5,"unqID0612");
    drawLink(130,705,20,5,"unqID0613");
	drawIconRevokable(150,608,50,50,30,40,'./website/tools/nil.png',"unqID6001","upgrade6001","cost6001","10% additional to EPC but 10% reduction to EPS","10% additional to EPC but 10% reduction to EPS, Max level 1 <br>Can be revoked for a larger amount of energy");
	drawIconRevokable(150,682,50,50,30,40,'./website/tools/nil.png',"unqID6002","upgrade6002","cost6002","10% additional to EPS but 10% reduction to EPC","10% additional to EPS but 10% reduction to EPC, Max level 1 <br>Can be revoked for a larger amount of energy");
	} 
	 
	function researchLevel(ID1,level,max){
		if(level>=max[3]){
		$("#"+ID1).text(level+" MAX");
		}else{
		$("#"+ID1).text(level);	
		}
	}
	function updateResearchTree(){
		linkIcon("unqID9000",2);
		if(ResearchLVL.unqID9000lvl >= research9000[3]){
		linkClass("unqID0000",2);
		linkClass("unqID0001",2);
		linkClass("unqID0002",2);
		linkClass("unqID0800",2);
	       //link icons
		linkIcon("unqID9001",2); 
		linkIcon("unqID8000",2); 
		linkIcon("unqID6000",2);
		boughtIt("upgrade9000");
		}else{
		linkClass("unqID0000",0);
		linkClass("unqID0001",0);
		linkClass("unqID0002",0);
		linkClass("unqID0800",0);
	       //link icons
		linkIcon("unqID9001",0); 
		linkIcon("unqID8000",0); 
		linkIcon("unqID6000",0);			
		}
		
	   	if(ResearchLVL.unqID8000lvl >= research8000[3]){
		//if reach max unlock next make it active
	    linkClass("unqID0881",2);
		linkClass("unqID0882",2);
		linkClass("unqID0883",2);
		
		linkIcon("unqID8081",2);
		linkIcon("unqID8082",2);
	    linkClass("unqID0891",2);
		linkClass("unqID0892",2);
		 
		linkIcon("unqID8091",2);
		 
	    linkClass("unqID0801",2);
		linkIcon("unqID8001",2);
		boughtIt("upgrade8000");
		}else if(ResearchLVL.unqID9000lvl >= research9000[3]){
		linkClass("unqID0881",0);
		linkClass("unqID0882",0);
		linkClass("unqID0883",0);
		
		linkIcon("unqID8081",0);
		linkIcon("unqID8082",0);

	    linkClass("unqID0891",0);
		linkClass("unqID0892",0);
		 
		linkIcon("unqID8091",0);
		 
	    linkClass("unqID0801",0);
		linkIcon("unqID8001",0);
		}
		
		if(ResearchLVL.unqID6000lvl >= research6000[3]){
		//if reach max unlock next make it active
	    linkClass("unqID0601",2);
		linkClass("unqID0610",2);
        linkClass("unqID0611",2);
        linkClass("unqID0612",2);
        linkClass("unqID0613",2);
		 
		linkIcon("unqID6001",2);
        linkIcon("unqID6002",2);
		boughtIt("upgrade6000");
		}else if(ResearchLVL.unqID9000lvl >= research9000[3]){
		linkClass("unqID0601",0);
		linkClass("unqID0610",0);
        linkClass("unqID0611",0);
        linkClass("unqID0612",0);
        linkClass("unqID0613",0);
		 
		linkIcon("unqID6001",0);
        linkIcon("unqID6002",0);	
		}
		
		if(ResearchLVL.unqID6001lvl >= research6001[3]){
		unlinkIcon("unqID6002");
		boughtItCancel("upgrade6001","buy");
		}
		if(ResearchLVL.unqID6001lvl==0){
		//cancel
		linkIcon("unqID6002",2); 
		boughtItCancel("upgrade6001","cancel");
	    }
		
		if(ResearchLVL.unqID6002lvl >= research6002[3]){
		unlinkIcon("unqID6001");
		boughtItCancel("upgrade6002","buy");
		}
	   	if(ResearchLVL.unqID6002lvl==0){
		   //cancel
		  linkIcon("unqID6001",2); 
		  boughtItCancel("upgrade6002","cancel");
		}
		
		if(ResearchLVL.unqID8081lvl >= research8081[3]){
		//if reach max unlock next make it active
	    boughtIt("upgrade8081");
		}
 
		if(ResearchLVL.unqID8091lvl >= research8091[3]){
		//if reach max unlock next make it active
		linkClass("unqID0893",2);
	    linkIcon("unqID8092",2);
		boughtIt("upgrade8091");
		}else if(ResearchLVL.unqID8000lvl >= research8000[3]){
		linkClass("unqID0893",0);
		linkIcon("unqID8092",0);
		}
  
		if(ResearchLVL.unqID8001lvl >= research8001[3]){
		//if reach max unlock next make it active
	    linkClass("unqID0802",2);
		linkIcon("unqID8002",2);
	
		boughtIt("upgrade8001"); 
		}else if(ResearchLVL.unqID8000lvl >= research8000[3]){
		linkClass("unqID0802",0);
		linkIcon("unqID8002",0);	
		}
		
		if(ResearchLVL.unqID9001lvl >= research9001[3]){
		//if reach max unlock next make it active
	    linkClass("unqID0901",2);
		linkIcon("unqID9002",2);
		 
		boughtIt("upgrade9001");
		}else if(ResearchLVL.unqID9000lvl >= research9000[3]){
		linkClass("unqID0901",0);
		linkIcon("unqID9002",0);
		}
	       
		if(ResearchLVL.unqID9002lvl >= research9002[3]){
		//if reach max unlock next make it active
	    linkClass("unqID0902",2);
		linkIcon("unqID9003",2);

	    boughtIt("upgrade9002");
	    }else if(ResearchLVL.unqID9000lvl >= research9000[3]){
		linkClass("unqID0902",0);
		linkIcon("unqID9003",0);
		}
		
		if(ResearchLVL.unqID9003lvl >= research9003[3]){
		//if reach max unlock next make it active
	     //linkClass("unqID0903",2);
		 //linkIcon("unqID9004",2);
	    boughtIt("upgrade9003");
	    }else if(ResearchLVL.unqID9000lvl >= research9000[3]){
		//linkClass("unqID0903",0);
	    //linkIcon("unqID9004",0);	
		}
		
		researchLevel("unqID9000lvl",ResearchLVL.unqID9000lvl,research9000);
		
		researchLevel("unqID8000lvl",ResearchLVL.unqID8000lvl,research8000);
		researchLevel("unqID8001lvl",ResearchLVL.unqID8001lvl,research8001);
		researchLevel("unqID8002lvl",ResearchLVL.unqID8001lvl,research8001);

		researchLevel("unqID8081lvl",ResearchLVL.unqID8081lvl,research8081);
		researchLevel("unqID8091lvl",ResearchLVL.unqID8091lvl,research8091);
		
		researchLevel("unqID9001lvl",ResearchLVL.unqID9001lvl,research9001);
		researchLevel("unqID9002lvl",ResearchLVL.unqID9002lvl,research9002);
		researchLevel("unqID9003lvl",ResearchLVL.unqID9003lvl,research9003);
				
		researchLevel("unqID6000lvl",ResearchLVL.unqID6000lvl,research6000);
		researchLevel("unqID6001lvl",ResearchLVL.unqID6001lvl,research6001);
		researchLevel("unqID6002lvl",ResearchLVL.unqID6001lvl,research6002);
	}
	generateResearchTree();
	updateResearchTree(); 

	     		

	drawCosts();
	//functions
	 
	function drawCosts(){
		$("#cost9003E").text(formatNumber(research9003[0]));
		$("#cost9003R").text(formatNumber(research9003[1]));
		$("#cost9002E").text(formatNumber(research9002[0]));
		$("#cost9002R").text(formatNumber(research9002[1]));
		$("#cost9001E").text(formatNumber(research9001[0]));
		$("#cost9001R").text(formatNumber(research9001[1]));
		$("#cost9000E").text(formatNumber(research9000[0]));
		$("#cost9000R").text(formatNumber(research9000[1]));
		$("#cost8000E").text(formatNumber(research8000[0]));
		$("#cost8000R").text(formatNumber(research8000[1]));
		$("#cost8001E").text(formatNumber(research8001[0]));
		$("#cost8001R").text(formatNumber(research8001[1]));
	    $("#cost8002E").text(formatNumber(research8002[0]));
		$("#cost8002R").text(formatNumber(research8002[1]));
		$("#cost8081E").text(formatNumber(research8081[0]));
		$("#cost8081R").text(formatNumber(research8081[1]));
		$("#cost8091E").text(formatNumber(research8091[0]));
		$("#cost8091R").text(formatNumber(research8091[1]));
		$("#cost6000E").text(formatNumber(research6000[0]));
		$("#cost6000R").text(formatNumber(research6000[1]));
		$("#cost6001E").text(formatNumber(research6001[0]));
		$("#cost6001R").text(formatNumber(research6001[1]));
		$("#cost6001Cancel").text(formatNumber(research6001[3]));
		$("#cost6002E").text(formatNumber(research6002[0]));
		$("#cost6002R").text(formatNumber(research6002[1]));
		$("#cost6002Cancel").text(formatNumber(research6002[2]));
	}
	function linkClass(unqID,state){
		if(state==0){
			$("#"+unqID+"").removeClass("hide");
		}else if(state==1){
		$("#"+unqID+"").removeClass("notLinked");
		$("#"+unqID+"").addClass("isLinked");
		}else if(state==2){
			linkClass(unqID,0);
			linkClass(unqID,1);
		}
	}
	function linkIcon(unqID,state){
		if(state==0){
			$("#"+unqID+"").removeClass("hide");
		}else if(state==1){
		$("#"+unqID+"").removeClass("IconnotLinked");
		$("#"+unqID+"").addClass("IconisLinked");
		$("#"+unqID+"tt").removeClass("notLinkedTooltip");
		$("#"+unqID+"tt").addClass("isLinkedTooltip");
		$("#"+unqID+"ttb").removeClass("notLinkedTooltip");
		$("#"+unqID+"ttb").addClass("isLinkedTooltip");
		}else if(state==2){
			linkIcon(unqID,0);
			linkIcon(unqID,1);
		}
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
 
	function drawIcon(x,y,boxw,boxh,imgw,imgh,url,unqID,upgradeID,costID,title,desc,caption){
		var content="<p style=\"font-size:26px;position: relative;\">"+title+"</p><p>Cost:&nbsp<b><span id=\""+costID+"E\"></span></b>&nbsp<span>Energy</span><p><b><span id=\""+costID+"R\"></span></b> Research Points</p><p style=\"padding-left:5px;padding-right:5px;\">"+desc+"</p><p style=\"color:#dedede; font-size:18px;\">\""+caption+"\"</p><div id=\""+upgradeID+"\" class=\"upgradeBuy buyButton\"><b>Buy</b></div></p></div>"
		drawImageBox(x,y,boxw,boxh,imgw,imgh,url,unqID,content);
		document.getElementById(unqID).addEventListener('click',function(){researchClick(upgradeID);},false);
	}
	function drawIconRevokable(x,y,boxw,boxh,imgw,imgh,url,unqID,upgradeID,costID,title,desc,caption){
		var content="<p style=\"font-size:26px;position: relative;\">"+title+"</p><p>Cost:&nbsp<b><span id=\""+costID+"E\"></span></b>&nbsp<span>Energy</span><p><b><span id=\""+costID+"R\"></span></b> Research Points</p><p>Canceling Cost:&nbsp<b><span id=\""+costID+"Cancel\"></span></b>&nbsp<span>Energy</span></p><p style=\"padding-left:5px;padding-right:5px;\">"+desc+"</p><p style=\"color:#dedede; font-size:18	px;\">\""+caption+"\"</p><div id=\""+upgradeID+"\" class=\"upgradeBuy buyButton\"><b>Buy</b></div></p></div>"
		drawImageBox(x,y,boxw,boxh,imgw,imgh,url,unqID,content);
		document.getElementById(unqID).addEventListener('click',function(){researchClick(upgradeID);},false);
	}
 
	function drawImageBox(x,y,boxw,boxh,imgw,imgh,url,unqID,content){
		border = 6;
		calc1 = ((boxw-imgw-border)/2);
		calc2 = ((boxh-imgh-border)/2);	
		
	$( "#overlay2research" ).append( "<div class=\"upgradeIcon IconnotLinked hide\" id=\""+unqID+"\" style=\"position:absolute;top:"+(y+padding+yoffset)+"px;left:"+(x+padding)+"px;width:"+boxw+"px;height:"+boxh+"px;\"></div>" );	
    $( "#"+unqID+"" ).append("<b><span class=\"upgradeLevel\" style=\"z-index: 1;\" id=\""+unqID+"lvl\"></span></b>");
	$( "#"+unqID+"" ).append("<img src=\""+url+"\" class=\"divsImg\" id=\""+unqID+"Img\" style=\"position:absolute;top:"+calc2 +"px;left:"+calc1+"px;width:"+imgw+"px;height:"+imgh+"px;\">");
    $( "#"+unqID+"" ).append("<span class=\"upgradetooltiptext notLinkedTooltip \" id=\""+unqID+"tt\">"+content+"</span>");
	$( "#"+unqID+"" ).append("<span class=\"upgradebridge notLinkedTooltip\" id=\""+unqID+"ttb\"></span>");
   }
   //next function
   function drawLink(x,y,linkw,linkh,unqID){
	   	$( "#overlay2research" ).append( "<div class=\"researchLink notLinked hide\" id=\""+unqID+"\" style=\"position:absolute;top:"+(y+padding+yoffset)+"px;left:"+(x+padding)+"px;width:"+linkw+"px;height:"+linkh+"px;\"></div>" );	
   }
   function drawRect(x,y,linkw,linkh,unqIDRect){
	   	$( "#overlay2research" ).append( "<div class=\"rect hide\" id=\""+unqIDRect+"\" style=\"background-color:transparent; border-width:2px; border-color:#FFFFFF; border-style:solid; position:absolute;top:"+(y+padding+yoffset)+"px;left:"+(x+padding)+"px;width:"+linkw+"px;height:"+linkh+"px;\"></div>" );	
   }
   function bound(val,min,max){
	   if(val>max){
		  val=max;
	   }
	   if(val<min){
		  val=min;
	   }
	   return val;
   };
    sliderrange1 = $('#range-slider__range1');
	overlay2research=$('#overlay2research');
	overlay2contents = $('#overlay2contents');
	overlay2zoom = $('#overlay2zoom');
    slidervalue1 = $('#range-slider__value1');
	overlay2research.on("mousedown",function(me){
    var move = $(this);
    
    var lastOffset = move.data('lastTransform');
    var lastOffsetX = lastOffset ? lastOffset.dx : 0,
        lastOffsetY = lastOffset ? lastOffset.dy : 0;
         
    var startX = me.pageX - lastOffsetX, startY = me.pageY - lastOffsetY;
    
    $(document).on("mousemove",function(e){
        var newDx = e.pageX - startX,
            newDy = e.pageY - startY;
			newDx = bound(newDx,0,300);
			newDy = bound(newDy,-500,0);
        move.css('transform','translate(' + newDx + 'px, ' + newDy + 'px)');
        
        // we need to save last made offset
        move.data('lastTransform', {dx: newDx, dy: newDy });
    });
});
$(document).on("mouseup",function(){
    $(this).off("mousemove");
});
      zoom1 = sliderrange1.val();
      slidervalue1.html(zoom1+"%");
	function setZoom(){
		sliderrange1.val(zoom1);
		slidervalue1.html(zoom1+"%"); 
		var scaling = "scale("+zoom1/100+","+zoom1/100+")";
		var marginLeft=0;
		if(zoom1>100){
			marginLeft=(zoom1-100)*overlay2zoom.width()/100/3;
		}
		var marginLeftpx = ""+marginLeft+"px";
		overlay2zoom.css("transform", scaling);
		overlay2contents.css("marginLeft", marginLeftpx);
	}  
      sliderrange1.on('input', function(){
		zoom1 = sliderrange1.val(); 
		setZoom();
      });
	  overlay2research.bind('wheel', function (e) {
		if (e.originalEvent.deltaY > 0) {
			zoom1=zoom1+5;
			zoom1=bound(zoom1,25,175);
		} else {
			zoom1=zoom1-5;
			zoom1=bound(zoom1,25,175);
		}
	  	setZoom();
	  });
 
	  
	 
});