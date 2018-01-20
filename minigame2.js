$(document).ready(function(){ 
  currentVersion="2.1.0";
  //Init VARAIABLES starting game 
  //BuildingEstore [ID][NUM,COST,VALUE, CALC COST]
  	researchData = [
	{"researchID":"unqID0000","researchName":"Unlock research","Ecost":10000,"Rcost":0,"xPos":110-75,"yPos":150,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/research.png","child":["unqID0001","unqID0010","unqID0020","unqID-0001","unqIDdeep0000","unqIDresearchpts0000"],"parent":[""],"sibling":[""],"description":"Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.","quote":"The beginning"}, 
	//right branch
	{"researchID":"unqID0001","researchName":"Energy production and storage boost I","Ecost":12500,"Rcost":0.5,"customData":{"addmultiplier":0.2},"xPos":110,"yPos":200,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/hammer.png","child":["unqID0002"],"parent":["unqID0000"],"sibling":[""],"description":"Increase multiplyier for both by 0.2","quote":"Better maintenance"},
	{"researchID":"unqID0002","researchName":"Energy production and storage boost II","Ecost":100000,"Rcost":1.5,"customData":{"addmultiplier":0.8},"xPos":110+75,"yPos":200,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/wires.png","child":["unqID0003"],"parent":["unqID0001"],"sibling":[""],"description":"Increase multiplyier for both by 0.8","quote":"More conductive wires"},
	{"researchID":"unqID0003","researchName":"Energy production and storage boost III","Ecost":250000,"Rcost":2,"customData":{"addmultiplier":3},"xPos":110+150,"yPos":200,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/superconductivewires.png","child":["unqID0100","unqID0004"],"parent":["unqID0002"],"sibling":[""],"description":"Increase multiplyier for both by 3","quote":"Superconductive wires"},
	{"researchID":"unqID0004","researchName":"Energy production and storage boost IV","Ecost":1000000,"Rcost":4,"customData":{"addmultiplier":9},"xPos":110+225,"yPos":250,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/superconductivewires.png","child":["unqID0005"],"parent":["unqID0003"],"sibling":[""],"description":"Increase multiplyier for both by 9","quote":"Superconductive wires"},
	{"researchID":"unqID0005","researchName":"Energy production and storage boost V","Ecost":2500000,"Rcost":6,"customData":{"addmultiplier":15},"xPos":110+300,"yPos":250,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/superconductivewires.png","child":[""],"parent":["unqID0004"],"sibling":[""],"description":"Increase multiplyier for both by 15","quote":"Superconductive wires"},
	
	{"researchID":"unqID0010","researchName":"Unlock bot research","Ecost":100000,"Rcost":2,"xPos":110,"yPos":100,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/bot.png","child":["unqID0011","unqIDresearchpts0001"],"parent":["unqID0000"],"sibling":[""],"description":"Unlock the ability to research new technologies. Unlock more efficient bots.","quote":"Need better bots?"},
	{"researchID":"unqID0011","researchName":"Bot efficiency I","Ecost":1500000,"Rcost":3,"customData":{"addmultiplier":0.2},"xPos":110+75,"yPos":100,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/gears.png","child":["unqID0012"],"parent":["unqID0010"],"sibling":[""],"description":"Increase Bot efficiency multipler by 0.20 ","quote":"Better gears"},
	{"researchID":"unqID0012","researchName":"Bot efficiency II","Ecost":4500000,"Rcost":5,"customData":{"addmultiplier":0.4},"xPos":110+150,"yPos":100,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/motor.png","child":["unqID0100","unqID0013"],"parent":["unqID0011"],"sibling":[""],"description":"Increase Bot efficiency multipler by 0.40 ","quote":"Better motors"},
	{"researchID":"unqID0013","researchName":"Bot efficiency III","Ecost":10000000,"Rcost":5,"customData":{"addmultiplier":1},"xPos":110+225,"yPos":50,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/motor.png","child":["unqID0014"],"parent":["unqID0012"],"sibling":[""],"description":"Increase Bot efficiency multipler by 1.00 ","quote":"Better motors"},
	{"researchID":"unqID0014","researchName":"Bot efficiency IV","Ecost":20000000,"Rcost":8,"customData":{"addmultiplier":1},"xPos":110+300,"yPos":50,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/motor.png","child":["unqID0200"],"parent":["unqID0013"],"sibling":[""],"description":"Increase Bot efficiency multipler by 1.00 ","quote":"Better motors"},
	{"researchID":"unqID0200","researchName":"Unlock offline production research","Ecost":50000000,"Rcost":10,"xPos":110+300,"yPos":50-75,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/motor.png","child":["unqID0201","unqID0210"],"parent":["unqID0014"],"sibling":[""],"description":"Unlock the ability to research new technologies. Unlock offline production research. You get 10% production for 1 hour as the base.","quote":"Unmanned bots"},
	{"researchID":"unqID0201","researchName":"Offline production efficiency","Ecost":50000000,"Rcost":10,"customData":{"addmultiplier":5},"xPos":110+350,"yPos":50-150,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/motor.png","child":[""],"parent":["unqID0200"],"sibling":[""],"description":"Increase offline production efficiency by 5%.","quote":"Cranking it up"},
	{"researchID":"unqID0210","researchName":"Offline production maximum duration","Ecost":50000000,"customData":{"addmultiplier":0.5},"Rcost":10,"xPos":110+250,"yPos":50-150,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/motor.png","child":[""],"parent":["unqID0200"],"sibling":[""],"description":"Increase offline production maximum duration by 1/2 h","quote":"Longer trust"},
		
	{"researchID":"unqID0020","researchName":"Cheaper Energy Buildings","Ecost":20000000,"Rcost":8,"customData":{"addmultiplier":0.01},"xPos":110-75,"yPos":150+75,"MaxLvl":3,"curLvl":0,"imgURL":"./website/tools/motor.png","child":["unqID0021"],"parent":["unqID0000"],"sibling":[""],"description":"1% Reduction of energy buildings costs","quote":"Cheaper components"},
	{"researchID":"unqID0021","researchName":"Cheaper Energy Buildings II","Ecost":500000000,"Rcost":15,"customData":{"addmultiplier":0.02},"xPos":110-75,"yPos":150+150,"MaxLvl":3,"curLvl":0,"imgURL":"./website/tools/motor.png","child":["unqID0022","unqID0021-0"],"parent":["unqID0020"],"sibling":[""],"description":"2% Reduction of energy buildings costs","quote":"Cheaper components"},
	
	{"researchID":"unqID0022","researchName":"Cheaper Energy Buildings III","Ecost":25000000000,"Rcost":30,"customData":{"addmultiplier":0.04},"xPos":110-25,"yPos":150+225,"MaxLvl":3,"curLvl":0,"imgURL":"./website/tools/motor.png","child":[""],"parent":["unqID0021"],"sibling":[""],"description":"4% Reduction of energy buildings costs","quote":"Cheaper components"},
		
	{"researchID":"unqID0021-0","researchName":"Cheaper Research Buildings","Ecost":5000000000,"Rcost":50,"customData":{"addmultiplier":0.01},"xPos":110-125,"yPos":150+225,"MaxLvl":3,"curLvl":0,"imgURL":"./website/tools/motor.png","child":[""],"parent":["unqID0021"],"sibling":[""],"description":"4% Reduction of research buildings costs","quote":"Cheaper components"},
	
	{"researchID":"unqID0100","researchName":"Energy Parallel Boost","Ecost":4500000,"Rcost":5,"customData":{"addmultiplier":0.01},"xPos":110+225,"yPos":150,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/chipconnect.png","child":["unqID0101"],"parent":["unqID0012","unqID0003"],"sibling":[""],"description":"For each additional worker bot on a task there's a bonus. Increase that percentage by 1%","quote":"Energy data network"},
	{"researchID":"unqID0101","researchName":"Energy Parallel Boost T2","Ecost":45000000,"Rcost":8,"customData":{"addmultiplier":0.04},"xPos":110+300,"yPos":150,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/pcbconnect.png","child":["unqID0102"],"parent":["unqID0100"],"sibling":[""],"description":"For each additional worker bot on a task there's a bonus. Increase that percentage by 4%","quote":"Clustered energy data network"},
	{"researchID":"unqID0102","researchName":"Energy Parallel Boost T3","Ecost":100000000,"Rcost":12,"customData":{"addmultiplier":0.16},"xPos":110+375,"yPos":150,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/pcbconnect.png","child":[""],"parent":["unqID0101"],"sibling":[""],"description":"For each additional worker bot on a task there's a bonus. Increase that percentage by 16%","quote":"Integrated energy data network"},
	//left branch
	{"researchID":"unqID-0001","researchName":"More Tooltip Information","Ecost":12500,"Rcost":0.1,"xPos":110-150,"yPos":150,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/book_energybuildinginfo.png","child":["unqID-0002"],"parent":["unqID0000"],"sibling":[""],"description":"Additional information about energy buildings on tooltips.","quote":"Statistical goodness"},
	{"researchID":"unqID-0002","researchName":"More Tooltip Information II","Ecost":30000,"Rcost":0.25,"xPos":110-225,"yPos":150,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/book_researchbuildinginfo.png","child":[""],"parent":["unqID-0001"],"sibling":[""],"description":"Additional information about research buildings on tooltips.","quote":"Statistical goodness"},
	//more research points branch
	{"researchID":"unqIDresearchpts0000","researchName":"Lower energy goals","Ecost":150000,"Rcost":1,"xPos":110-62.5,"yPos":75,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/currency_research.png","child":["unqIDresearchpts0001"],"parent":["unqID0000"],"sibling":[""],"description":"Reduce energy goal requirement by 5%","quote":"Making it easier"},		
	{"researchID":"unqIDresearchpts0001","researchName":"Lower energy goals","Ecost":500000,"Rcost":2,"xPos":110,"yPos":75-75,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/currency_research.png","child":[""],"parent":["unqIDresearchpts0000","unqID0010"],"sibling":[""],"description":"Reduce energy goal requirement by 5%","quote":"Getting help from bots"},		
	//deep research branch
	{"researchID":"unqIDdeep0000","researchName":"Unbounded research","Ecost":10E14,"Rcost":1000,"xPos":110-125,"yPos":75,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/researchD.png","child":["unqIDdeep0001"],"parent":["unqID0000"],"sibling":[""],"description":"Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.","quote":"A mysterious world lies ahead."},	
	{"researchID":"unqIDdeep0001","researchName":"Unlimited research","Ecost":10E15,"Rcost":1500,"xPos":110-125-50,"yPos":0,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/researchD.png","child":[""],"parent":["unqIDdeep0000"],"sibling":[""],"description":"Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.","quote":"A mysterious world lies ahead."},	
	];
	longtime=30000;
    InitVar1 = {
		version:currentVersion,
		gameState:[0,0,0,0],//base state, energy building state, research building state, worker bots state,
		workerbots:[0,0,0,0,0],
		workerbotscost:[[1,0],[2,200000]],
		tabsunlocked:[1,0,0,0,0,1],
		energybuildingsunlocked:[1,0,0,0],
		researchbuildingsunlocked:[0],
		workerbotsunlocked:[0],
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
		 workerbotBonus:0,
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
 createResearchLvlSave();
 InitResearchLVL=ResearchLvlSave; 
  
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
	 var r = confirm("Your version "+loadedVar1.version+" is not supported, current supported is version "+currentVersion+". Reset game? ");
	 if(r==1){deleteallcookies();location.reload();}
 }
 varTovar();
 function varTovar(){
	version=loadedVar1.version;
	gameState=loadedVar1.gameState;
	workerbots=loadedVar1.workerbots;
	workerbotscost=loadedVar1.workerbotscost;
	tabsunlocked=loadedVar1.tabsunlocked;
	energybuildingsunlocked=loadedVar1.energybuildingsunlocked;
	researchbuildingsunlocked=loadedVar1.researchbuildingsunlocked;
	workerbotsunlocked=loadedVar1.workerbotsunlocked;
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
	workerbotBonus=loadedVar2.workerbotBonus,
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
 
	convertResearchLvlSave(ResearchLVL);
 }
 //others
 
 //GLOBAL VALUES INITIALIZE
 function setSaveVar(){
	saveVar1 = {
		version:version,
		workerbots:workerbots,
		workerbotscost:workerbotscost,
		tabsunlocked:tabsunlocked,
		energybuildingsunlocked:energybuildingsunlocked,
		researchbuildingsunlocked:researchbuildingsunlocked,
		workerbotsunlocked:workerbotsunlocked,
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
		 workerbotBonus:workerbotBonus,
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
 
 }
 createResearchLvlSave();
 saveResearchLVL=ResearchLvlSave; 
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
active_notifications =0;
function removeNotification(evt){
	active_notifications = active_notifications - 1;
	$("#"+evt.target.id).parent().remove();
	removeallNotificationUpdater();
}
function removeNotificationAll(evt){
	active_notifications = 0;
	$(".notificationclass").remove();
	removeallNotificationUpdater();
}
function notify(data,priority){
	$("#bottomcontainer").append("<div id=\"notification"+ number +"\" class=\"notificationclass\" style=\"display:none;\">"+ data + "\<span id=\"notificationRemove"+number+"\"class=\"remove\" style=\"float:right; margin-right:5px;\"\">&times;</span></div>")
	if(priority==0){
	$("#notification" + number).show("fast").delay(2000).hide("fast").queue(function(next) {active_notifications=active_notifications-1;removeallNotificationUpdater();$(this).remove();next();});
	}else{ 
	$("#notification" + number).show("fast").delay(longtime).hide("fast").queue(function(next) {active_notifications=active_notifications-1;removeallNotificationUpdater();$(this).remove();next();});	
	}
	$("#notificationRemove" + number).on('click', removeNotification);
	number = number + 1;
	active_notifications = active_notifications + 1; 
	removeallNotificationUpdater();
} 
function removeallNotificationUpdater(){
	if(active_notifications==2){
		$("#bottomcontainer").after("<div id=\"notificationremoveall\" class=\"notificationclass\"><span id=\"notificationRemoveall\"class=\"remove\" style=\"\"\">&times;</span></div>");
		$("#notificationremoveall").on('click', removeNotificationAll);
	}else if(active_notifications>2){
		
	}else if(active_notifications<2){
		$("#notificationremoveall").remove();	 
	}
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
  
    workerbotBonus=getlvl("unqID0100")*getcustomDataaddmultiplier("unqID0100")+getlvl("unqID0101")*getcustomDataaddmultiplier("unqID0101")+getlvl("unqID0102")*getcustomDataaddmultiplier("unqID0102");
	workerbotsmultiplier=1+getlvl("unqID0011")*getcustomDataaddmultiplier("unqID0011")+getlvl("unqID0012")*getcustomDataaddmultiplier("unqID0012")+getlvl("unqID0013")*getcustomDataaddmultiplier("unqID0013")+getlvl("unqID0014")*getcustomDataaddmultiplier("unqID0014");
	
	workerbotsEFF=workerbotsENERGYPRODUCTION*workerbotsmultiplier * (1+workerbotsENERGYPRODUCTION*workerbotBonus);
	workerbotsStore=workerbotsENERGYSTORAGE*workerbotsmultiplier * (1+workerbotsENERGYSTORAGE*workerbotBonus);
	workerbotsrProd=workerbotsRESEARCHPRODUCTION*workerbotsmultiplier * (1+workerbotsRESEARCHPRODUCTION*workerbotBonus);
	workerbotsrStore=workerbotsRESEARCHSTORAGE*workerbotsmultiplier * (1+workerbotsRESEARCHSTORAGE*workerbotBonus);
	 
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
	for (var i in ResearchLvlSave){
    var value = ResearchLvlSave[i];
      totalresearch = totalresearch+value; 
	}
 
	totalresearch = totalresearch+ResearchLvlSave[i];
	 
}
 function calcTotalmultiply(){
	TotalMultiply=0;
	TotalMultiplyAchievement=0;
	TotalMultiplyBonus=0;
	for(var i=0; i<6; i++){
	 if(totalachievements>=achievementBonusArray[i]){
	  TotalMultiplyBonus=achievementTotalEmultiplyBonus[i];
	}else{
		break;
	}
	}   
	TotalMultiplyAchievement = 1;
	for(var i=0; i<achievementstatus.length; i++){
	TotalMultiplyAchievement = TotalMultiplyAchievement+achievementstatus[i]*0.05;
	} 
	
	TotalMultiply = TotalMultiplyAchievement*(100+TotalMultiplyBonus)/100;
	TotalMultiply = Math.round(TotalMultiply * 1000) / 1000;
	
    $("#TotalMultiplyBonus").html(TotalMultiplyBonus);
	
	estoremultiplytotal=(1+getlvl("unqID0001")*getcustomDataaddmultiplier("unqID0001")+getlvl("unqID0002")*getcustomDataaddmultiplier("unqID0002")+getlvl("unqID0003")*getcustomDataaddmultiplier("unqID0003")+getlvl("unqID0004")*getcustomDataaddmultiplier("unqID0004")+getlvl("unqID0005")*getcustomDataaddmultiplier("unqID0005"))*TotalMultiply;
	emultiplytotal=(1+getlvl("unqID0001")*getcustomDataaddmultiplier("unqID0001")+getlvl("unqID0002")*getcustomDataaddmultiplier("unqID0002")+getlvl("unqID0003")*getcustomDataaddmultiplier("unqID0003")+getlvl("unqID0004")*getcustomDataaddmultiplier("unqID0004")+getlvl("unqID0005")*getcustomDataaddmultiplier("unqID0005"))*TotalMultiply;
	rStoremultiplytotal=(1)*TotalMultiply;
	rProdmultiplytotal=(1)*TotalMultiply;
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
	if(totalworkerbots>=4){
		workerbotsRcost0000=workerbotscost[1][0]*Math.pow(1.75,totalworkerbots);
		workerbotsEcost0000=workerbotscost[1][1]*Math.pow(5.5,totalworkerbots);		
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
	if(totalworkerbots>=4){
		workerbotsRcost0000=workerbotscost[1][0]*Math.pow(1.75,totalworkerbots);
		workerbotsEcost0000=workerbotscost[1][1]*Math.pow(5.5,totalworkerbots);	
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
  rewardfactor1 = 0.5;
  rewardcalculatedvalue1 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+1)/2),2));
  calculatedvalue1 = multiply(EnergyGoalStart,EnergyGoalLevel);
  if(thetotal>=calculatedvalue1){
    EnergyGoalLevel = EnergyGoalLevel+1;
	ResearchPoints = ResearchPoints+rewardcalculatedvalue1;
	notify("Energy Goal ("+formatNumber(calculatedvalue1)+") acquried! Reward: "+formatNumber(rewardcalculatedvalue1)+" Research Points",1);
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
  
  rewardcalculatedvalue1 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+1)/2),2));
  rewardcalculatedvalue2 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+2)/2),2));
  rewardcalculatedvalue3 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+3)/2),2));
  rewardcalculatedvalue4 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+4)/2),2));
  rewardcalculatedvalue5 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+5)/2),2));
  rewardcalculatedvalue6 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+6)/2),2));
  rewardcalculatedvalue7 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+7)/2),2));
  rewardcalculatedvalue8 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+8)/2),2));
  rewardcalculatedvalue9 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+9)/2),2));
  
  energyGoal1.html("Requirement: <span class=\"cur_energy\">"+formatNumber(calculatedvalue1)+"</span> || Reward: <span class=\"cur_research\">"+rewardcalculatedvalue1+"</span>");
  energyGoal2.html("Requirement: <span class=\"cur_energy\">"+formatNumber(calculatedvalue2)+"</span> || Reward: <span class=\"cur_research\">"+rewardcalculatedvalue2+"</span>");
  energyGoal3.html("Requirement: <span class=\"cur_energy\">"+formatNumber(calculatedvalue3)+"</span> || Reward: <span class=\"cur_research\">"+rewardcalculatedvalue3+"</span>");
  energyGoal4.html("Requirement: <span class=\"cur_energy\">"+formatNumber(calculatedvalue4)+"</span> || Reward: <span class=\"cur_research\">"+rewardcalculatedvalue4+"</span>");
  energyGoal5.html("Requirement: <span class=\"cur_energy\">"+formatNumber(calculatedvalue5)+"</span> || Reward: <span class=\"cur_research\">"+rewardcalculatedvalue5+"</span>");
  energyGoal6.html("Requirement: <span class=\"cur_energy\">"+formatNumber(calculatedvalue6)+"</span> || Reward: <span class=\"cur_research\">"+rewardcalculatedvalue6+"</span>");
  energyGoal7.html("Requirement: <span class=\"cur_energy\">"+formatNumber(calculatedvalue7)+"</span> || Reward: <span class=\"cur_research\">"+rewardcalculatedvalue7+"</span>");
  energyGoal8.html("Requirement: <span class=\"cur_energy\">"+formatNumber(calculatedvalue8)+"</span> || Reward: <span class=\"cur_research\">"+rewardcalculatedvalue8+"</span>");
  energyGoal9.html("Requirement: <span class=\"cur_energy\">"+formatNumber(calculatedvalue9)+"</span> || Reward: <span class=\"cur_research\">"+rewardcalculatedvalue9+"</span>");
  
 $(".EnergyGoalLevel").html(EnergyGoalLevel);
  } 
function calcspecialresearch(){
	lvl1energybuildingtooltip = getlvl("unqID-0001"); 
	if(lvl1energybuildingtooltip==1){
		$(".lvl1energybuildingtooltip").removeClass("hide"); 
	} 
	lvl1researchtooltiplvl = getlvl("unqID-0002");
	if(lvl1researchtooltiplvl==1){
		$(".lvl1researchbuildingtooltip").removeClass("hide");	
	}
}
function calculateEverything(){
	calcspecialresearch();
	calcworkerbots();
	calcstats();
	calcTotalmultiply(); //global multiplyer
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
	//if(thetotal >= 100000000000000){$( "#won" ).show();}
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
	 $( "#achievementEnergyGoalGRP" ).after("<div id=\"achievementEnergyGoal"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Energy Goal Level "+achievementEnergyGoalArray[i-1]+"<br><b style=\"color:#FF00FF;\">Reward: </b>Game multiplyier increased by 0.05</span></div>" );
     }
	 for(var i=totalAchievement;i>0;i--){
	 $( "#achievementTotalBuildingsGRP" ).after("<div id=\"achievementTotalBuildings"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Acquire "+achievementTotalBuildingsArray[i-1]+" buildings<br><b style=\"color:#FF00FF;\">Reward: </b>Game multiplyier increased by 0.05</span></div>" );
     }
	 for(var i=totalAchievement;i>0;i--){
	 $( "#achievementTotalResearchGRP" ).after("<div id=\"achievementTotalResearch"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Acquire "+achievementTotalResearchArray[i-1]+" research levels<br><b style=\"color:#FF00FF;\">Reward: </b>Game multiplyier increased by 0.05</span></div>" );
     }
		
	 for(var i=totalAchievement;i>0;i--){
	 $( "#achievementTotalworkerbotsGRP" ).after("<div id=\"achievementTotalworkerbots"+i+"\" class=\"achievementbox\"><span class=\"achievementtooltiptext\">Acquire "+achievementTotalworkerbotsArray[i-1]+" worker bots<br><b style=\"color:#FF00FF;\">Reward: </b>Game multiplyier increased by 0.05</span></div>" );
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
 
 setInterval(achievement, 500);
  function achievement() {
 if(EnergyGoalLevel>=achievementEnergyGoalArray[achievementstatus[0]]){
	achievementstatus[0]=achievementstatus[0]+1;
	//calculateEverything();
	updateAchievement();
	notify("Achievement \"Energy Goal Level "+achievementEnergyGoalArray[achievementstatus[0]-1]+"\" acquried. Game multiplyier increased to "+ TotalMultiply +"",1);
	eval("$(\"#achievementEnergyGoal"+achievementstatus[0]+"\").addClass(\"achievementachieved\");");
 }
 if(totalbuildings>=achievementTotalBuildingsArray[achievementstatus[1]]){
	achievementstatus[1]=achievementstatus[1]+1;
    //calculateEverything();
	updateAchievement();
	notify("Achievement \"Acquire "+achievementTotalBuildingsArray[achievementstatus[1]-1]+" buildings \" acquried. Game multiplyier increased to "+ TotalMultiply +"",1);
	eval("$(\"#achievementTotalBuildings"+achievementstatus[1]+"\").addClass(\"achievementachieved\");");
 } 
 if(totalresearch>=achievementTotalResearchArray[achievementstatus[2]]){
	achievementstatus[2]=achievementstatus[2]+1;
    //calculateEverything();
	updateAchievement();
	notify("Achievement \"Acquire "+achievementTotalResearchArray[achievementstatus[2]-1]+" research levels \" acquried. Game multiplyier increased to "+ TotalMultiply +"",1);
	eval("$(\"#achievementTotalResearch"+achievementstatus[2]+"\").addClass(\"achievementachieved\");");
 }
 if(totalworkerbots>=achievementTotalworkerbotsArray[achievementstatus[3]]){
	achievementstatus[3]=achievementstatus[3]+1;
	//calculateEverything();
	notify("Achievement \"Acquire "+formatNumber(achievementTotalworkerbotsArray[achievementstatus[3]-1])+" worker bots \" acquried. Game multiplyier increased to "+ TotalMultiply +"",1);
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
$("#TotalMultiply").html("x" + TotalMultiply); 	
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
if(gameState[0]>=1){
   gamestate0();
}
$( "#progress1" ).click(function() {
	if(gameState[0]==0){
	gamestate1();
	gameState[0]=1;
	}
});
function checkGamestate(){
	if(totalenergyed>=50&&gameState[0]==1){tabsunlocked[3]=1;gameState[0]=2;fillTabsName(); notify("Tab \""+tabsName[3]+"\" unlocked",1);}
	if(totalenergyed>=750&&gameState[0]==2){tabsunlocked[2]=1;gameState[0]=3;fillTabsName(); notify("Tab \""+tabsName[2]+"\" unlocked",1);}
	if(RealResearchPoints>=1&&gameState[0]==3){tabsunlocked[1]=1;gameState[0]=4;fillTabsName(); notify("Tab \""+tabsName[1]+"\" unlocked",1);}
	
	if(totalenergyed>=75&&gameState[1]==0){gameState[1]=1; notify("New buildings unlocked!",1); energybuildingsunlocked[1]=1; fillenergybuildings();}
	if(totalenergyed>=500&&gameState[1]==1){gameState[1]=2; notify("New buildings unlocked!",1); energybuildingsunlocked[2]=1; fillenergybuildings();}
	if(totalenergyed>=3500&&gameState[1]==2){gameState[1]=3; notify("New buildings unlocked!",1); energybuildingsunlocked[3]=1; fillenergybuildings();}
	
	if(totalenergyed>=15000&&gameState[2]==0){gameState[2]=1; notify("New buildings unlocked!",1); researchbuildingsunlocked[0]=1; fillresearchbuildings();}
	
	if(totalenergyed>=25000&&gameState[3]==0){gameState[3]=1; notify("New buildings unlocked!",1); workerbotsunlocked[0]=1; fillworkerbots();}
}
	setInterval(checkGamestate, 250);
	function fillenergybuildings(){
		if(energybuildingsunlocked[1]==1){$("#autobuilding2").removeClass("hide");$("#estorebuilding2").removeClass("hide");}
		if(energybuildingsunlocked[2]==1){$("#autobuilding3").removeClass("hide");$("#estorebuilding3").removeClass("hide");}
		if(energybuildingsunlocked[3]==1){$("#autobuilding4").removeClass("hide");$("#estorebuilding4").removeClass("hide");}
	}
	function fillresearchbuildings(){
	 	if(researchbuildingsunlocked[0]==1){$("#researchproduction").removeClass("hide");$("#researchstorage").removeClass("hide");}
	}
	function fillworkerbots(){
		if(workerbotsunlocked[0]==1){$("#workerbot").removeClass("hide");}
	}
 fillenergybuildings();
 fillresearchbuildings();
 fillworkerbots();
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
	$( "#debugclick" ).click(function() {
		if(document.getElementById('DebugCode').value=="skip1"){
			skip=1;
		}
		if(document.getElementById('DebugCode').value=="skip2"){
			skip=2;
		}
	});
 function updateValues(){
	calculateEverything();
	//skip game
	if(skip==1){ //head start
	BuildingEstoreNumber0003=30;
	BuildingAutoNumber0003=30;
	BuildingrProd[0][0]=10;
	BuildingrStore[0][0]=10;
	workerbots[0]=0;
	workerbots[1]=2;
	workerbots[2]=1;
	workerbots[3]=2;
	workerbots[4]=1;
	skip=0;
	}
	if(skip==2){ //unbalanced start
	BuildingEstoreNumber0003=1000;
	BuildingAutoNumber0003=1000;
	BuildingrProd[0][0]=1000;
	BuildingrStore[0][0]=1000;
	workerbots[0]=0;
	workerbots[1]=100;
	workerbots[2]=100;
	workerbots[3]=100;
	workerbots[4]=100;
	skip=0;
	}
 }
 setInterval(updateValues,100);
 setInterval(addResource,100);
 
 //RESEARCH SECTION
	zoom1=100;
	padding = 5;
	yoffset = 35;
	xoffset = 35+75;
	createResearchIcons();
	createResearchLinks();
	linkIcon("unqID0000",2); 
	autoResearchHighlights();
	function createResearchIcons(){
		for (i in researchData)
		{	
			drawIcon(researchData[i].xPos,researchData[i].yPos,50,50,40,40,researchData[i].imgURL,researchData[i].researchID,researchData[i].researchID+"cost",researchData[i].researchName,researchData[i].description,researchData[i].quote);
			$("#"+researchData[i].researchID+"costE").text(formatNumber(researchData[i].Ecost));
			$("#"+researchData[i].researchID+"costR").text(formatNumber(researchData[i].Rcost));
		}
	}
	function createResearchLinks(){
		for (i in researchData)
		{	
			for(i2 in researchData[i].child){
				if(researchData[i].child[i2]!=""){
					drawNewLink(researchData[i].researchID,researchData[i].child[i2]); 
				}
			}
		}	
	}
	function getlvl(getlvlid){
	for (getlvlvar in researchData)
		{	 
			if(researchData[getlvlvar].researchID==getlvlid){ 
				return researchData[getlvlvar].curLvl;
			}
		}
		return 0;
	}
	function getcustomDataaddmultiplier(getcustomDataaddmultiplierid){
	for (getcustomDataaddmultipliervar in researchData)
		{	 
			if(researchData[getcustomDataaddmultipliervar].researchID==getcustomDataaddmultiplierid){ 
				return researchData[getcustomDataaddmultipliervar].customData.addmultiplier;
			}
		}
		return 0;
	}	
	function lookIfIDMaxedChildParentsLvl(lookIfIDMaxedChildParentsLvlid){ 
		lookIfIDMaxedChildParentsMaxed=1; //given the id of the child
		for(parentsvar in researchData){
			if(researchData[parentsvar].researchID==lookIfIDMaxedChildParentsLvlid){//found child
				for(parentsvar2 in researchData[parentsvar].parent){
					if( researchData[parentsvar].parent[parentsvar2]!=""){ //parents name
					if(lookIfIDMaxedLvl(researchData[parentsvar].parent[parentsvar2])==0){
					lookIfIDMaxedChildParentsMaxed=0;					
					}
					}									
				}
		}	
		}
		return lookIfIDMaxedChildParentsMaxed;
	}
	function lookIfIDMaxedLvl(lookIfIDMaxedLvlid){
	for (lookIfIDMaxedLvlvar in researchData)
		{	
			if(researchData[lookIfIDMaxedLvlvar].researchID==lookIfIDMaxedLvlid){
				if(researchData[lookIfIDMaxedLvlvar].curLvl==researchData[lookIfIDMaxedLvlvar].MaxLvl){
					return 1;
				}else{
					return 0;
				}
			}
		}
	}	
	function autoResearchHighlights(){
		for (i in researchData)
		{
			if(researchData[i].curLvl<researchData[i].MaxLvl){
				maxedparent=1;
			for(researchparent in researchData[i].parent){
				if(researchData[i].parent[researchparent]!=""){
				if(lookIfIDMaxedLvl(researchData[i].parent[researchparent])==0){
					maxedparent=0;
				}
				}	
			}
			if(maxedparent==1){//parents are maxed then unlock child
				for(i2 in researchData[i].child){
				if(researchData[i].child[i2]!=""){
				linkIcon(researchData[i].child[i2],0); //reveal it, unlock 
				linkClass(researchData[i].researchID+"-"+researchData[i].child[i2],0);
				}
				}
			}
			}else{
				//this is maxed
					boughtIt(researchData[i].researchID);
					for(i2 in researchData[i].child){
					if(researchData[i].child[i2]!=""){ //find the childs of id
						if(lookIfIDMaxedChildParentsLvl(researchData[i].child[i2])){
						linkIcon(researchData[i].child[i2],2); 
						linkClass(researchData[i].researchID+"-"+researchData[i].child[i2],2);
						}
					}
					}
			}			
				 
						//set highlights for maxed
			maxed="";
			if(researchData[i].curLvl>=researchData[i].MaxLvl){
				maxed="MAX";  
			}  
			$("#"+researchData[i].researchID+"lvl").text(researchData[i].curLvl+ maxed);
		}	
	}
	function researchClick(id){
		for (i in researchData)
		{	
			if(researchData[i].researchID==id){
					maxedparent=1;
			for(researchparent in researchData[i].parent){
				if(researchData[i].parent[researchparent]!=""){
				if(lookIfIDMaxedLvl(researchData[i].parent[researchparent])==0){
					maxedparent=0;
				}
				}	
			}
			if(maxedparent==1){//parents are maxed then unlock child
				if(researchData[i].curLvl>=researchData[i].MaxLvl){
					//bought already
				}else if(researchData[i].curLvl>=0){
					if(thetotal>=researchData[i].Ecost&&RealResearchPoints>=researchData[i].Rcost){
					thetotal=thetotal-researchData[i].Ecost;
					RealResearchPoints=RealResearchPoints-researchData[i].Rcost;
					//successfully purchased upgrade
					researchData[i].curLvl=researchData[i].curLvl+1;
						autoResearchHighlights();
						createResearchLvlSave();
					}else{
					//do not meet requirement
					researchFail(researchData[i].researchID);	
				}
			}
			}
		}	
		}
	}
	function researchFail(id){
		$("#"+id).qaddclass("redborder").delay(1750).qremoveclass("redborder");
	}
	function createResearchLvlSave(){
	ResearchLvlSave = new Array();
		for (ResearchLvlSavevar in researchData)
		{
			ResearchLvlSave[ResearchLvlSavevar]=researchData[ResearchLvlSavevar].curLvl;
		}
	}
	function convertResearchLvlSave(source){
		for (ResearchLvlSavevar in researchData)
		{
			researchData[ResearchLvlSavevar].curLvl=source[ResearchLvlSavevar];
		}
	}
	function adjustLine(from, to, line){
  from=$("#"+from+"");
  to=$("#"+to+"");
  line=document.getElementById(line);
  fromOffset=from.offset();
  fromOuterWidth=from.outerWidth();
  fromOuterHeight=from.outerHeight();
  toOffset=to.offset();
  toOuterWidth=to.outerWidth();
  toOuterHeight=to.outerHeight(); 
  var fT = parseFloat(from.css("top"))  + fromOuterHeight/2;
  var tT = parseFloat(to.css("top"))    + toOuterHeight/2;
  var fL = parseFloat(from.css("left")) + fromOuterWidth/2;
  var tL = parseFloat(to.css("left"))   + toOuterWidth/2;
  
  var CA   = Math.abs(tT - fT);
  var CO   = Math.abs(tL - fL);
  var H    = Math.sqrt(CA*CA + CO*CO);
  var ANG  = 180 / Math.PI * Math.acos( CA/H );

  if(tT > fT){
      var top  = (tT-fT)/2 + fT;
  }else{
      var top  = (fT-tT)/2 + tT;
  }
  if(tL > fL){
      var left = (tL-fL)/2 + fL;
  }else{
      var left = (fL-tL)/2 + tL;
  }

  if(( fT < tT && fL < tL) || ( tT < fT && tL < fL) || (fT > tT && fL > tL) || (tT > fT && tL > fL)){
    ANG *= -1;
  }
  top-= H/2;

  line.style["-webkit-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-moz-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-ms-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-o-transform"] = 'rotate('+ ANG +'deg)';
  line.style["-transform"] = 'rotate('+ ANG +'deg)';
  line.style.top    = top+'px';
  line.style.left   = left+'px';
  line.style.height = H + 'px';
}
	function drawNewLink(from,to){
		linkcontent = "<div class=\"researchLink notLinked hide\" id=\""+from+"-"+to+"\" style=\"z-index:-1; width:5px; position:absolute; \"></div>";
		$( "#overlay2research" ).append(linkcontent); 
		adjustLine(from, to, from+"-"+to);
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
	function boughtIt(unqID){
		$("#"+unqID+"upgrade").removeClass("buyButton");
		$("#"+unqID+"upgrade").addClass("boughtButton");
		$("#"+unqID+"upgrade").text("Bought");
	}
	function boughtItCancel(upgradeID,mode){
	     if(mode=="buy"){
		 $("#"+upgradeID+"").text("Cancel");
		 }
		 if(mode=="cancel"){
		 $("#"+upgradeID+"").text("Buy"); 
		 }
	}
 
	function drawIcon(x,y,boxw,boxh,imgw,imgh,url,unqID,costID,title,desc,caption){
		var content="<p style=\"font-size:26px;position: relative;\">"+title+"</p><p>Cost:&nbsp<b><span id=\""+costID+"E\" class=\"cur_energy\"></span></b><b><span id=\""+costID+"R\" class=\"cur_research\"></span></b><p style=\"padding-left:5px;padding-right:5px;\">"+desc+"</p><p style=\"color:#dedede; font-size:18px;\">\""+caption+"\"</p><div id=\""+unqID+"upgrade\" class=\"upgradeBuy buyButton\"><b>Buy</b></div></p></div>"
		//drawImageBox(x,y,boxw,boxh,imgw,imgh,url,unqID,content);
		drawImageBox(x,y,boxw,boxh,imgw,imgh,url,unqID,content);
		document.getElementById(unqID+"upgrade").addEventListener('click',function(){researchClick(unqID);},false);
	}
	function drawIconRevokable(x,y,boxw,boxh,imgw,imgh,url,unqID,costID,title,desc,caption){
		var content="<p style=\"font-size:26px;position: relative;\">"+title+"</p><p>Cost:&nbsp<b><span id=\""+costID+"E\" class=\"cur_energy\"></span></b><b><span id=\""+costID+"R\" class=\"cur_research\"></span></b><p>Canceling Cost:&nbsp<b><span id=\""+costID+"Cancel\"></span></b>&nbsp<span>Energy</span></p><p style=\"padding-left:5px;padding-right:5px;\">"+desc+"</p><p style=\"color:#dedede; font-size:18	px;\">\""+caption+"\"</p><div id=\""+upgradeID+"\" class=\"upgradeBuy buyButton\"><b>Buy</b></div></p></div>"
		drawImageBox(x,y,boxw,boxh,imgw,imgh,url,unqID,content);
		document.getElementById(unqID+"upgrade").addEventListener('click',function(){researchClick(unqID);},false);
	}
 
	function drawImageBox(x,y,boxw,boxh,imgw,imgh,url,unqID,content){
		border = 6;
		calc1 = ((boxw-imgw-border)/2);
		calc2 = ((boxh-imgh-border)/2);	
		
		$( "#overlay2research" ).append( "<div class=\"upgradeIcon IconnotLinked hide\" id=\""+unqID+"\" style=\"position:absolute;top:"+(y+padding+yoffset)+"px;left:"+(x+padding+xoffset)+"px;width:"+boxw+"px;height:"+boxh+"px;\"></div>" );	
		$( "#"+unqID+"" ).append("<b><span class=\"upgradeLevel\" style=\"z-index: 1;\" id=\""+unqID+"lvl\"></span></b>");
		$( "#"+unqID+"" ).append("<img src=\""+url+"\" class=\"divsImg\" id=\""+unqID+"Img\" style=\"position:absolute;top:"+calc2 +"px;left:"+calc1+"px;width:"+imgw+"px;height:"+imgh+"px;\">");
		$( "#"+unqID+"" ).append("<span class=\"upgradetooltiptext notLinkedTooltip \" id=\""+unqID+"tt\">"+content+"</span>");
		$( "#"+unqID+"" ).append("<span class=\"upgradebridge notLinkedTooltip\" id=\""+unqID+"ttb\"></span>");
	}
   //next function
	function drawLink(x,y,linkw,linkh,unqID){
		$( "#overlay2research" ).append( "<div class=\"researchLink notLinked hide\" id=\""+unqID+"\" style=\"position:absolute;top:"+(y+padding+yoffset)+"px;left:"+(x+padding+xoffset)+"px;width:"+linkw+"px;height:"+linkh+"px;\"></div>" );	
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
	
	overlay2research.on("mousedown touchstart",function(me){
		 if (me.target === this) {
    var move = $(this);
    
    var lastOffset = move.data('lastTransform');
    var lastOffsetX = lastOffset ? lastOffset.dx : 0,
        lastOffsetY = lastOffset ? lastOffset.dy : 0;
    var startX, startY =0;
	if(me.originalEvent.targetTouches){
	me.preventDefault();
    startX = me.originalEvent.touches[0].pageX - lastOffsetX, startY = me.originalEvent.touches[0].pageY - lastOffsetY;
	}else{
	startX = me.pageX - lastOffsetX, startY = me.pageY - lastOffsetY;	
	}
    $(document).on("mousemove touchmove",function(e){
		var newDx=0;
		var newDy=0;
		
		if(me.originalEvent.targetTouches){
			newDx = e.originalEvent.touches[0].pageX- startX,
			newDy = e.originalEvent.touches[0].pageY- startY;
		}else{
			newDx = e.pageX- startX,
			newDy = e.pageY- startY;
		}
		newDx = bound(newDx,-200,400);
		newDy = bound(newDy,-200,400);
        move.css('transform','translate(' + newDx + 'px, ' + newDy + 'px)');
        
        // we need to save last made offset
        move.data('lastTransform', {dx: newDx, dy: newDy });
    });
		 }
});
$(document).on("mouseup touchend",function(){
    $(this).off("mousemove touchmove");
});
	  
      zoom1 = sliderrange1.val();
      slidervalue1.html(zoom1+"%");
	function setZoom(){
		sliderrange1.val(zoom1);
		slidervalue1.html(zoom1+"%"); 
		var scaling = "scale("+zoom1/100+","+zoom1/100+")";
		var marginLeft=0;
		//if(zoom1>100){
		//	marginLeft=(zoom1-100)*overlay2zoom.width()/100/3;
		//}
		var marginLeftpx = ""+marginLeft+"px";
		overlay2zoom.css("transform", scaling);
		overlay2contents.css("marginLeft", marginLeftpx);
	}  
      sliderrange1.on('input', function(){
		zoom1 = sliderrange1.val(); 
		setZoom();
      });
	  overlay2research.bind('wheel', function (e) {
		zoom1=zoom1/1;
		if (e.originalEvent.deltaY > 0) {
			zoom1=zoom1+10;
			zoom1=bound(zoom1,25,200);
		} else {
			zoom1=zoom1-10;
			zoom1=bound(zoom1,25,200);
		}
	  	setZoom();
	  });
 
	  
	 
});