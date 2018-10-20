$(document).ready(function(){ 
  currentVersion="2.2.0";
  //Init VARAIABLES starting game 
  //BuildingEstore [ID][NUM,COST,VALUE, CALC COST]
  	researchData = [//110-75, 150
	{"chpt":1,"type":0,"researchID":"unqID0000","researchName":"Unlock research","Ecost":10000,"Rcost":0,"xPos":0,"yPos":0,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/research.png","child":["unqID0001","unqID0010","unqID-0001"],"parent":[""],"sibling":[""],"description":"Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.","quote":"The beginning"}, 
	//right branch
	{"chpt":1,"type":0,"researchID":"unqID0001","researchName":"Energy production and storage boost I","Ecost":50000,"Rcost":0.5,"customData":{"addmultiplier":0.4},"xPos":1,"yPos":-0.5,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/hammer.png","child":["unqID0002"],"parent":["unqID0000"],"sibling":[""],"description":"Increase multiplyier for both by 0.4","quote":"Better maintenance"},
	{"chpt":1,"type":0,"researchID":"unqID0002","researchName":"Energy production and storage boost II","Ecost":1000000,"Rcost":1.5,"customData":{"addmultiplier":3},"xPos":2,"yPos":-0.5,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/wires.png","child":["unqID0003"],"parent":["unqID0001"],"sibling":[""],"description":"Increase multiplyier for both by 3","quote":"More conductive wires"},
	{"chpt":1,"type":0,"researchID":"unqID0003","researchName":"Energy production and storage boost III","Ecost":5000000,"Rcost":2,"customData":{"addmultiplier":9},"xPos":3,"yPos":-0.5,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/superconductivewires.png","child":["unqID0100","unqID0004"],"parent":["unqID0002"],"sibling":[""],"description":"Increase multiplyier for both by 9","quote":"Superconductive wires"},
	{"chpt":1,"type":0,"researchID":"unqID0004","researchName":"Energy production and storage boost IV","Ecost":250000000,"Rcost":4,"customData":{"addmultiplier":30},"xPos":4,"yPos":-1,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/superconductivewires.png","child":["unqID0005"],"parent":["unqID0003"],"sibling":[""],"description":"Increase multiplyier for both by 30","quote":"Superconductive wires"},
	{"chpt":1,"type":0,"researchID":"unqID0005","researchName":"Energy production and storage boost V","Ecost":900000000,"Rcost":6,"customData":{"addmultiplier":90},"xPos":5,"yPos":-1,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/superconductivewires.png","child":[""],"parent":["unqID0004"],"sibling":[""],"description":"Increase multiplyier for both by 90","quote":"Superconductive wires"},
	
	{"chpt":1,"type":0,"researchID":"unqID0010","researchName":"Unlock bot research","Ecost":100000,"Rcost":2,"xPos":1,"yPos":0.5,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/bot.png","child":["unqID0011"],"parent":["unqID0000"],"sibling":[""],"description":"Unlock the ability to research new technologies. Unlock more efficient bots.","quote":"Need better bots?"},
	{"chpt":1,"type":0,"researchID":"unqID0011","researchName":"Bot efficiency I","Ecost":1500000,"Rcost":3,"customData":{"addmultiplier":0.1},"xPos":2,"yPos":0.5,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/gears.png","child":["unqID0012"],"parent":["unqID0010"],"sibling":[""],"description":"Increase Bot efficiency multipler by 0.20 ","quote":"Better gears"},
	{"chpt":1,"type":0,"researchID":"unqID0012","researchName":"Bot efficiency II","Ecost":9000000,"Rcost":5,"customData":{"addmultiplier":0.2},"xPos":3,"yPos":0.5,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/motor.png","child":["unqID0100","unqID0013"],"parent":["unqID0011"],"sibling":[""],"description":"Increase Bot efficiency multipler by 0.40 ","quote":"Better motors"},
	{"chpt":1,"type":0,"researchID":"unqID0013","researchName":"Bot efficiency III","Ecost":100000000,"Rcost":5,"customData":{"addmultiplier":1},"xPos":4,"yPos":1,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/motor.png","child":["unqID0014"],"parent":["unqID0012"],"sibling":[""],"description":"Increase Bot efficiency multipler by 1.00 ","quote":"Better motors"},
	{"chpt":1,"type":0,"researchID":"unqID0014","researchName":"Bot efficiency IV","Ecost":20000000,"Rcost":8,"customData":{"addmultiplier":1},"xPos":5,"yPos":1,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/motor.png","child":[""],"parent":["unqID0013"],"sibling":[""],"description":"Increase Bot efficiency multipler by 1.00 ","quote":"Better motors"},
 
	{"chpt":1,"type":0,"researchID":"unqID0100","researchName":"Energy Parallel Boost","Ecost":450000000,"Rcost":5,"customData":{"addmultiplier":0.01},"xPos":4,"yPos":0,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/chipconnect.png","child":["unqID0101"],"parent":["unqID0012","unqID0003"],"sibling":[""],"description":"For each additional worker bot on a task there's a bonus. Increase that percentage by 1%","quote":"Energy data network"},
	{"chpt":1,"type":0,"researchID":"unqID0101","researchName":"Energy Parallel Boost T2","Ecost":4500000000,"Rcost":8,"customData":{"addmultiplier":0.04},"xPos":5,"yPos":0,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/pcbconnect.png","child":["unqID0102"],"parent":["unqID0100"],"sibling":[""],"description":"For each additional worker bot on a task there's a bonus. Increase that percentage by 4%","quote":"Clustered energy data network"},
	{"chpt":1,"type":0,"researchID":"unqID0102","researchName":"Energy Parallel Boost T3","Ecost":10000000000,"Rcost":12,"customData":{"addmultiplier":0.16},"xPos":6,"yPos":0,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/pcbconnect.png","child":[""],"parent":["unqID0101"],"sibling":[""],"description":"For each additional worker bot on a task there's a bonus. Increase that percentage by 16%","quote":"Integrated energy data network"},
	//left branch
	{"chpt":1,"type":0,"researchID":"unqID-0001","researchName":"More Tooltip Information","Ecost":12500,"Rcost":0.1,"xPos":-1,"yPos":0,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/book_energybuildinginfo.png","child":["unqID-0002"],"parent":["unqID0000"],"sibling":[""],"description":"Additional information about energy buildings on tooltips.","quote":"Statistical goodness"},
	{"chpt":1,"type":0,"researchID":"unqID-0002","researchName":"More Tooltip Information II","Ecost":30000,"Rcost":0.25,"xPos":-2,"yPos":0,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/book_researchbuildinginfo.png","child":[""],"parent":["unqID-0001"],"sibling":[""],"description":"Additional information about research buildings on tooltips.","quote":"Statistical goodness"},	
	
	//deep research branch
	//{"chpt":1,"type":0,"researchID":"unqIDdeep0000","researchName":"Unbounded research","Ecost":10E14,"Rcost":1000,"xPos":-1,"yPos":-1,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/researchD.png","child":["unqIDdeep0001"],"parent":["unqID0000"],"sibling":[""],"description":"Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.","quote":"A mysterious world lies ahead."},	
	//{"chpt":1,"type":0,"researchID":"unqIDdeep0001","researchName":"Unlimited research","Ecost":10E15,"Rcost":1500,"xPos":-2,"yPos":-2,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/researchD.png","child":[""],"parent":["unqIDdeep0000"],"sibling":[""],"description":"Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.","quote":"A mysterious world lies ahead."},	
	
	//CHAPTER 2
	{"chpt":2,"type":1,"researchID":"unqID2_0000","researchName":"Unlock research","customData":{"completion":50,"chapter":1},"xPos":0,"yPos":0,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/researchD.png","child":["unqID2_0020","unqID2_0200","unqID2_0001"],"parent":[""],"sibling":[""],"description":"Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.","quote":"Chapter 2! Lets go."}, 
	
	//more research points branch
	{"chpt":2,"type":0,"researchID":"unqID2_0001","researchName":"Lower energy goals","Ecost":1500000000,"Rcost":1,"customData":{"addmultiplier":0.05},"xPos":0,"yPos":1,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/currency_research.png","child":["unqID2_0002"],"parent":["unqID2_0000"],"sibling":[""],"description":"Reduce energy goal requirement by 5%","quote":"Making it easier"},		
	{"chpt":2,"type":0,"researchID":"unqID2_0002","researchName":"Lower energy goals","Ecost":5000000000,"Rcost":2,"customData":{"addmultiplier":0.08},"xPos":0,"yPos":2,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/currency_research.png","child":[""],"parent":["unqID2_0001"],"sibling":[""],"description":"Reduce energy goal requirement by 8%","quote":"Getting help from bots"},	
	
	{"chpt":2,"type":0,"researchID":"unqID2_0020","researchName":"Cheaper Energy Buildings","Ecost":20000000000,"Rcost":8,"customData":{"addmultiplier":0.01},"xPos":1,"yPos":2,"MaxLvl":3,"curLvl":0,"imgURL":"./website/tools/motor.png","child":["unqID2_0021"],"parent":["unqID2_0000"],"sibling":[""],"description":"1% Reduction of energy buildings costs","quote":"Cheaper components"},
	{"chpt":2,"type":0,"researchID":"unqID2_0021","researchName":"Cheaper Energy Buildings II","Ecost":500000000000,"Rcost":15,"customData":{"addmultiplier":0.02},"xPos":1,"yPos":3,"MaxLvl":3,"curLvl":0,"imgURL":"./website/tools/motor.png","child":["unqID2_0022","unqID2_0021-0"],"parent":["unqID2_0020"],"sibling":[""],"description":"2% Reduction of energy buildings costs","quote":"Cheaper components"},
	
	{"chpt":2,"type":0,"researchID":"unqID2_0022","researchName":"Cheaper Energy Buildings III","Ecost":25000000000,"Rcost":30,"customData":{"addmultiplier":0.04},"xPos":2,"yPos":4,"MaxLvl":3,"curLvl":0,"imgURL":"./website/tools/motor.png","child":[""],"parent":["unqID2_0021"],"sibling":[""],"description":"4% Reduction of energy buildings costs","quote":"Cheaper components"},	
	{"chpt":2,"type":0,"researchID":"unqID2_0021-0","researchName":"Cheaper Research Buildings","Ecost":5000000000,"Rcost":50,"customData":{"addmultiplier":0.01},"xPos":2,"yPos":5,"MaxLvl":3,"curLvl":0,"imgURL":"./website/tools/motor.png","child":[""],"parent":["unqID2_0021"],"sibling":[""],"description":"4% Reduction of research buildings costs","quote":"Cheaper components"},
	
	//offline production
	{"chpt":2,"type":0,"researchID":"unqID2_0200","researchName":"Unlock offline production research","Ecost":50000000,"Rcost":10,"xPos":6,"yPos":1,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/motor.png","child":["unqID0201","unqID0210"],"parent":["unqID2_0000"],"sibling":[""],"description":"Unlock the ability to research new technologies. Unlock offline production research. You get 10% production for 1 hour as the base.","quote":"Unmanned bots"},
	{"chpt":2,"type":0,"researchID":"unqID2_0201","researchName":"Offline production efficiency","Ecost":50000000,"Rcost":10,"customData":{"addmultiplier":5},"xPos":6,"yPos":1,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/motor.png","child":[""],"parent":["unqID2_0200"],"sibling":[""],"description":"Increase offline production efficiency by 5%.","quote":"Cranking it up"},
	{"chpt":2,"type":0,"researchID":"unqID2_0210","researchName":"Offline production maximum duration","Ecost":50000000,"customData":{"addmultiplier":0.5},"Rcost":10,"xPos":7,"yPos":1,"MaxLvl":5,"curLvl":0,"imgURL":"./website/tools/motor.png","child":[""],"parent":["unqID2_0200"],"sibling":[""],"description":"Increase offline production maximum duration by 1/2 h","quote":"Longer trust"},
	//CHAPTER 3
	{"chpt":3,"type":1,"researchID":"unqID3_0000","researchName":"Unlock research","customData":{"completion":100,"chapter":2},"xPos":0,"yPos":0,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/researchD.png","child":[""],"parent":[""],"sibling":[""],"description":"Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.","quote":""}, 
	//CHAPTER 4
	{"chpt":4,"type":1,"researchID":"unqID4_0000","researchName":"Unlock research","customData":{"completion":100,"chapter":2},"xPos":0,"yPos":0,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/researchD.png","child":[""],"parent":[""],"sibling":[""],"description":"Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.","quote":""}, 
	//CHAPTER 5
	{"chpt":5,"type":1,"researchID":"unqID5_0000","researchName":"Unlock research","customData":{"completion":100,"chapter":2},"xPos":0,"yPos":0,"MaxLvl":1,"curLvl":0,"imgURL":"./website/tools/researchD.png","child":[""],"parent":[""],"sibling":[""],"description":"Unlock the ability to research new technologies. Use the research tree to view new technologies available for research.","quote":""}, 
	];
	longtime=30000;
    InitVar1 = {
		version:currentVersion,
		numberformat:0,
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
		BuildingrProd:[[0,50000,0.02,0]],
		BuildingrStore:[[0,50000,1,0]]
		
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
	RealResearchPointscap:0,
	DisplayedResearchChpt:1
} 
InitVar4 = {
	  
}
	IsLocalStorageAvailable = storageAvailable("localStorage");
	
	createResearchLvlSave();
	InitResearchLVL=ResearchLvlSave; 
 
if(IsLocalStorageAvailable){
	var presence=0;
	presence += localStorage.hasOwnProperty("Var1")?1:0;
	presence += localStorage.hasOwnProperty("Var2")?1:0;
	presence += localStorage.hasOwnProperty("Var3")?1:0;
	presence += localStorage.hasOwnProperty("Var4")?1:0;
	presence += localStorage.hasOwnProperty("ResearchLVL")?1:0;
	if(presence==0){
		//none;new 
		setLocalStorage("Var1",InitVar1);
		setLocalStorage("Var2",InitVar2);
		setLocalStorage("Var3",InitVar3);
		setLocalStorage("Var4",InitVar4);
		setLocalStorage("ResearchLVL",InitResearchLVL);
	}else if(presence<5){
		//only some is there
		var r = confirm("Your save file is invalid! Would you like to resolve it?");
		if(r==1){
			errorreset();	
		}
		throw new Error('Something went badly wrong.');
	}else if(presence==5){
		//all is there
	}
	//loading of data 
	validity=0;
	validity=validity+loadLocalStorage("Var1","1");
	validity=validity+loadLocalStorage("Var2","2");
	validity=validity+loadLocalStorage("Var3","3");
	validity=validity+loadLocalStorage("Var4","4");
	validity=validity+loadLocalStorage("ResearchLVL","5");
	if(validity<5){
		//variables are there but wrong
		var r = confirm("Your save file is invalid! Would you like to resolve it?");
		if(r==1){
			errorreset();	
		}
	}
}else{
	var presence=0;
	presence += isCookie("Var1")?1:0;
	presence += isCookie("Var2")?1:0;
	presence += isCookie("Var3")?1:0;
	presence += isCookie("Var4")?1:0;
	presence += isCookie("ResearchLVL")?1:0;
	if(presence==0){
		setCookieJson("Var1",InitVar1);
		setCookieJson("Var2",InitVar2);
		setCookieJson("Var3",InitVar3);
		setCookieJson("Var4",InitVar4);
		setCookieJson("ResearchLVL",InitResearchLVL);
	}else if(presence<5){
		var r = confirm("Your save file is invalid! Would you like to resolve it?");
		if(r==1){
			errorreset();	
		}
		throw new Error('Something went badly wrong.');
	}else{
		
	}
	validity=0;
	validity=validity+loadCookies("Var1","1");
	validity=validity+loadCookies("Var2","2");
	validity=validity+loadCookies("Var3","3");
	validity=validity+loadCookies("Var4","4");
	validity=validity+loadCookies("ResearchLVL","5");
	if(validity<5){
		var r = confirm("Your save file is invalid! Would you like to resolve it?");
		if(r==1){
			errorreset();	
		}
	}
}//end of inital loading
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
	 return 1;
	}else{ 
		return 0;
	}
}

function loadLocalStorage(LocalStorageName,variableName){
	LocalStorageResult = localStorage.getItem(LocalStorageName);
	if(LocalStorageResult!=""){
	 if(variableName=="1"){
	  loadedVar1=JSON.parse(LZString.decompressFromBase64(LocalStorageResult));
	 }
	 if(variableName=="2"){
	  loadedVar2=JSON.parse(LZString.decompressFromBase64(LocalStorageResult));
	 }
	 if(variableName=="3"){
	  loadedVar3=JSON.parse(LZString.decompressFromBase64(LocalStorageResult));
	 }
	 if(variableName=="4"){
	  loadedVar4=JSON.parse(LZString.decompressFromBase64(LocalStorageResult));
	 }
	 if(variableName=="5"){
	  ResearchLVL=JSON.parse(LZString.decompressFromBase64(LocalStorageResult));
	 }
	 return 1;
	}else{ 
		return 0;
	}
}

if(loadedVar1.version!=currentVersion){
	var r = confirm("Your version "+loadedVar1.version+" is not supported, current supported is version "+currentVersion+". Sorry about that. Resolve?");
	if(r==1){
		 errorreset();
	}
}
function errorreset(){
	var r2 = confirm("Would you like to reset the data and generate an error log?");
	if(r2==1){
		errorlog = "Error Log\n\n";
		errorlog += "Local Storage Availability:"+IsLocalStorageAvailable+"\n\n";
		errorlog += "Cookie data\n"
		if(isCookie("Var1")){
			errorlog += "Var1: " + getCookie("Var1")+"\n";
		}else{
			errorlog += "Var1: Non-existent\n"
		}
		if(isCookie("Var2")){
			errorlog += "Var2: " + getCookie("Var2")+"\n";
		}else{
			errorlog += "Var2: Non-existent\n"
		} 
		if(isCookie("Var3")){
			errorlog += "Var3: " + getCookie("Var3")+"\n";
		}else{
			errorlog += "Var3: Non-existent\n"
		}
		if(isCookie("Var4")){
			errorlog += "Var4: " + getCookie("Var4")+"\n";
		}else{
			errorlog += "Var4: Non-existent\n"			
		}
		if(isCookie("ResearchLVL")){
			errorlog += "ResearchLVL: " + getCookie("ResearchLVL")+"\n";
		}else{
			errorlog += "ResearchLVL: Non-existent\n"
		}
		errorlog += "LocalStorage data\n";
		if(localStorage.hasOwnProperty("Var1")){
			errorlog += "Var1: " + localStorage.getItem("Var1")+"\n";
		}else{
 			errorlog += "Var1: Non-existent\n";
		}
		if(localStorage.hasOwnProperty("Var2")){
			errorlog += "Var2: " + localStorage.getItem("Var2")+"\n";
		}else{
 			errorlog += "Var2: Non-existent\n";
		}
		if(localStorage.hasOwnProperty("Var3")){
			errorlog += "Var3: " + localStorage.getItem("Var3")+"\n";
		}else{
 			errorlog += "Var3: Non-existent\n";
		}
		if(localStorage.hasOwnProperty("Var4")){
			errorlog += "Var4: " + localStorage.getItem("Var4")+"\n";
		}else{
 			errorlog += "Var4: Non-existent\n";
		}
		if(localStorage.hasOwnProperty("ResearchLVL")){
			errorlog += "ResearchLVL: " + localStorage.getItem("ResearchLVL")+"\n";
		}else{
 			errorlog += "ResearchLVL: Non-existent\n";
		}
		errorlog += "\nEnd";
		download("errorlog.txt", errorlog);
		
		setTimeout(function(){hardreset(); }, 1000)
	}

}
function download(filename, texts) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(texts));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}
 varTovar();
 function varTovar(){
	version=loadedVar1.version;
	numberformat=loadedVar1.numberformat;
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
	DisplayedResearchChpt=loadedVar3.DisplayedResearchChpt;
/////////////////////////////////////////////////////////////////////	
 
	convertResearchLvlSave(ResearchLVL);
 }
 //others
 
 //GLOBAL VALUES INITIALIZE
 function setSaveVar(){
	saveVar1 = {
		version:version,
		numberformat:numberformat,
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
	RealResearchPointscap:RealResearchPointscap,
	DisplayedResearchChpt:DisplayedResearchChpt
	
 }
 saveVar4 = {
 
 }
 createResearchLvlSave();
 saveResearchLVL=ResearchLvlSave; 
 }
 
function savegame(){
	setSaveVar();
	if(IsLocalStorageAvailable){
		setLocalStorage("Var1",saveVar1);
		setLocalStorage("Var2",saveVar2);
		setLocalStorage("Var3",saveVar3);
		setLocalStorage("Var4",saveVar4);
		setLocalStorage("ResearchLVL",saveResearchLVL);
	}else{
		setCookieJson("Var1",saveVar1);
		setCookieJson("Var2",saveVar2);
		setCookieJson("Var3",saveVar3);
		setCookieJson("Var4",saveVar4);
		setCookieJson("ResearchLVL",saveResearchLVL);
	}
	notify("Game saved",0);
}
setTimeout(function() {
  setInterval(savegame, 30000);
}, 5000);

 $( "#savebox").click(function() {
savegame();
 });
notificationID = 0;
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
	$("#bottomcontainer").append("<div id=\"notification"+ notificationID +"\" class=\"notificationclass\" style=\"display:none;\">"+ data + "\<span id=\"notificationRemove"+notificationID+"\"class=\"remove\" style=\"float:right; margin-right:5px;cursor:pointer;\"\">&times;</span></div>")
	if(priority==0){
	$("#notification" + notificationID).show("fast").delay(2000).hide("fast").queue(function(next) {active_notifications=active_notifications-1;removeallNotificationUpdater();$(this).remove();next();});
	}else{ 
	$("#notification" + notificationID).show("fast").delay(longtime).hide("fast").queue(function(next) {active_notifications=active_notifications-1;removeallNotificationUpdater();$(this).remove();next();});	
	}
	$("#notificationRemove" + notificationID).on('click', removeNotification);
	notificationID = notificationID + 1;
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
if (e.ctrlKey && e.keyCode==83) {savegame();e.preventDefault();}
});
//setNumberFormat
setNumberFormat(numberformat);
if(numberformat==1){
	$("#numberformat").html("Scientific Notation");
}else if(numberformat==0){
	$("#numberformat").html("Default");
}
$( "#numberformat" ).click(function() {
	if(numberformat==0){
		$("#numberformat").html("Scientific Notation");
		numberformat=1;
	}else if(numberformat==1){
		$("#numberformat").html("Default");
		numberformat=0;
	}
	setNumberFormat(numberformat);
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
	document.getElementById("ImportExportField").focus();
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
				if(IsLocalStorageAvailable){
					setLocalStorage("Var1",revived[0]);
					setLocalStorage("Var2",revived[1]);
					setLocalStorage("Var3",revived[2]);
					setLocalStorage("Var4",revived[3]);
					setLocalStorage("ResearchLVL",revived[4]);
				}else{
					setCookieJson("Var1",revived[0]);
					setCookieJson("Var2",revived[1]);
					setCookieJson("Var3",revived[2]);
					setCookieJson("Var4",revived[3]);
					setCookieJson("ResearchLVL",revived[4]);
				}
				location.reload();
			}else{
				alert("Save file version "+revived[0].version+" not supported use verison "+currentVersion+" instead.");
			}
		}else{
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
	var string = '[' + JSON.stringify(saveVar1) + ',' + JSON.stringify(saveVar2) + ',' + JSON.stringify(saveVar3) + ',' + JSON.stringify(saveVar4) + ',' + JSON.stringify(ResearchLvlSave) + ']';
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
//workersbot elements should not change
E_workerbotsT1 = document.getElementById("workerbotsT1");
E_workerbotsT2 = document.getElementById("workerbotsT2");
E_workerbotsT3 = document.getElementById("workerbotsT3");
E_workerbotsT4 = document.getElementById("workerbotsT4");
E_workerbotsINACTIVE = document.getElementsByClassName("workerbotsINACTIVE");
E_totalworkerbots = document.getElementsByClassName("totalworkerbots");

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
	 
	for(var i = 0; i < E_workerbotsINACTIVE.length; i++) {E_workerbotsINACTIVE[i].textContent=workerbotsINACTIVE;}
	for(var i = 0; i < E_totalworkerbots.length; i++) {E_totalworkerbots[i].textContent=totalworkerbots;}
	E_workerbotsT1.textContent=workerbotsENERGYPRODUCTION;
	E_workerbotsT2.textContent=workerbotsENERGYSTORAGE;
	E_workerbotsT3.textContent=workerbotsRESEARCHPRODUCTION;
	E_workerbotsT4.textContent=workerbotsRESEARCHSTORAGE;
}
function calcrProd(){
	rProdgain=((BuildingrProd[0][2]*BuildingrProd[0][0]))*rProdmultiplytotal*workerbotsrProd;
    rProdgain = Math.round(rProdgain * 1000) / 1000;
}
function calcrStore(){
	RealResearchPointscap=((BuildingrStore[0][2]*BuildingrStore[0][0]))*rStoremultiplytotal*workerbotsrStore;
    RealResearchPointscap = Math.round(RealResearchPointscap * 10000) / 10000;
}
E_estoreplus1 = document.getElementById("estoreplus1");
E_estoreplus2 = document.getElementById("estoreplus2");
E_estoreplus3 = document.getElementById("estoreplus3");
E_estoreplus4 = document.getElementById("estoreplus4");

E_estoretotal1 = document.getElementById("estoretotal1");
E_estoretotal2 = document.getElementById("estoretotal2");
E_estoretotal3 = document.getElementById("estoretotal3");
E_estoretotal4 = document.getElementById("estoretotal4");

E_estorepercentage1 = document.getElementById("estorepercentage1");
E_estorepercentage2 = document.getElementById("estorepercentage2");
E_estorepercentage3 = document.getElementById("estorepercentage3");
E_estorepercentage4 = document.getElementById("estorepercentage4");
 
function calcestorebuildings(){
	calcB1 = (BuildingEstoreOrginalValue0000*estoremultiply[0])*estoremultiplytotal*workerbotsStore;
	calcB2 = (BuildingEstoreOrginalValue0001*estoremultiply[1])*estoremultiplytotal*workerbotsStore;
	calcB3 = (BuildingEstoreOrginalValue0002*estoremultiply[2])*estoremultiplytotal*workerbotsStore;
	calcB4 = (BuildingEstoreOrginalValue0003*estoremultiply[3])*estoremultiplytotal*workerbotsStore;
	
	E_estoreplus1.textContent=formatNumber(calcB1);
	E_estoreplus2.textContent=formatNumber(calcB2);
	E_estoreplus3.textContent=formatNumber(calcB3);
	E_estoreplus4.textContent=formatNumber(calcB4);
 
//////////////////////////////////////////////////////////////////////////////////////////////
	estoretotal1 = (BuildingEstoreOrginalValue0000*BuildingEstoreNumber0000*estoremultiply[0])*estoremultiplytotal*workerbotsStore;
	estoretotal2 = (BuildingEstoreOrginalValue0001*BuildingEstoreNumber0001*estoremultiply[1])*estoremultiplytotal*workerbotsStore;
	estoretotal3 = (BuildingEstoreOrginalValue0002*BuildingEstoreNumber0002*estoremultiply[2])*estoremultiplytotal*workerbotsStore;
	estoretotal4 = (BuildingEstoreOrginalValue0003*BuildingEstoreNumber0003*estoremultiply[3])*estoremultiplytotal*workerbotsStore;
	
	E_estoretotal1.textContent=formatNumber(estoretotal1);
	E_estoretotal2.textContent=formatNumber(estoretotal2);
	E_estoretotal3.textContent=formatNumber(estoretotal3);
	E_estoretotal4.textContent=formatNumber(estoretotal4);
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
	
	E_estorepercentage1.textContent=estorepercentage1;
	E_estorepercentage2.textContent=estorepercentage2;
	E_estorepercentage3.textContent=estorepercentage3;
	E_estorepercentage4.textContent=estorepercentage4;
  
	/////	
	energycap = estoretotalgainfrombuildings;
	energycap = Math.round(energycap * 1000) / 1000;
}

E_epsplus1 = document.getElementById("epsplus1");
E_epsplus2 = document.getElementById("epsplus2");
E_epsplus3 = document.getElementById("epsplus3");
E_epsplus4 = document.getElementById("epsplus4");

E_epstotal1 = document.getElementById("epstotal1"); 
E_epstotal2 = document.getElementById("epstotal2"); 
E_epstotal3 = document.getElementById("epstotal3"); 
E_epstotal4 = document.getElementById("epstotal4"); 

E_autopercentage1 = document.getElementById("autopercentage1");
E_autopercentage2 = document.getElementById("autopercentage2");
E_autopercentage3 = document.getElementById("autopercentage3");
E_autopercentage4 = document.getElementById("autopercentage4");
 
function calceprodbuildings(){
	var anotherMultipler=1;
	calcB1 = (BuildingAutoOrginalValue0000*egmultiply[0])*emultiplytotal*anotherMultipler*workerbotsEFF;
	calcB2 = (BuildingAutoOrginalValue0001*egmultiply[1])*emultiplytotal*anotherMultipler*workerbotsEFF;
	calcB3 = (BuildingAutoOrginalValue0002*egmultiply[2])*emultiplytotal*anotherMultipler*workerbotsEFF;
	calcB4 = (BuildingAutoOrginalValue0003*egmultiply[3])*emultiplytotal*anotherMultipler*workerbotsEFF;
	
	E_epsplus1.textContent=formatNumber(calcB1);
	E_epsplus2.textContent=formatNumber(calcB2);
	E_epsplus3.textContent=formatNumber(calcB3);
	E_epsplus4.textContent=formatNumber(calcB4);
//////////////////////////////////////////////////////////////////////////////////////////////
	epstotal1 = (BuildingAutoOrginalValue0000*BuildingAutoNumber0000*egmultiply[0])*emultiplytotal*anotherMultipler*workerbotsEFF;
	epstotal2 = (BuildingAutoOrginalValue0001*BuildingAutoNumber0001*egmultiply[1])*emultiplytotal*anotherMultipler*workerbotsEFF;
	epstotal3 = (BuildingAutoOrginalValue0002*BuildingAutoNumber0002*egmultiply[2])*emultiplytotal*anotherMultipler*workerbotsEFF;
	epstotal4 = (BuildingAutoOrginalValue0003*BuildingAutoNumber0003*egmultiply[3])*emultiplytotal*anotherMultipler*workerbotsEFF;
	
	E_epstotal1.textContent=formatNumber(epstotal1);
	E_epstotal2.textContent=formatNumber(epstotal2);
	E_epstotal3.textContent=formatNumber(epstotal3);
	E_epstotal4.textContent=formatNumber(epstotal4);
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
	
	E_autopercentage1.textContent=autopercentage1;
	E_autopercentage2.textContent=autopercentage2;
	E_autopercentage3.textContent=autopercentage3;
	E_autopercentage4.textContent=autopercentage4;
}
E_rProdpercentage1 = document.getElementById("rProdpercentage1");
E_rStorepercentage1 = document.getElementById("rStorepercentage1");
function researchpercentagetotal(){
	rProdtotal1 = (BuildingrProd[0][2]*BuildingrProd[0][0]*rProdmultiply[0])*rProdmultiplytotal*workerbotsrProd;
	
    rProdtotal1 = Math.round(rProdtotal1 * 1000) / 1000;
 
	rProdtotalgainfrombuildings = rProdtotal1;
	rProdtotalgainfrombuildings = Math.round(rProdtotalgainfrombuildings * 1000) / 1000;
	
	rProdpercentage1 = (BuildingrProd[0][0] > 0 && rProdtotalgainfrombuildings>0)?(rProdtotal1/rProdtotalgainfrombuildings)*100:0;
	rProdpercentage1 = Math.round(rProdpercentage1 * 1000) / 1000;

	E_rProdpercentage1.textContent=rProdpercentage1; 
	///////
	rStoretotal1 = (BuildingrStore[0][2]*BuildingrStore[0][0]*rStoremultiply[0])*rStoremultiplytotal*workerbotsrStore;
	
    rStoretotal1 = Math.round(rStoretotal1 * 1000) / 1000;
 
	rStoretotalgainfrombuildings = rStoretotal1;
	rStoretotalgainfrombuildings = Math.round(rStoretotalgainfrombuildings * 1000) / 1000;
	
	rStorepercentage1 = (BuildingrStore[0][0] > 0 && rStoretotalgainfrombuildings>0)?(rStoretotal1/rStoretotalgainfrombuildings)*100:0;
	rStorepercentage1 = Math.round(rStorepercentage1 * 1000) / 1000;

	E_rStorepercentage1.textContent=rStorepercentage1; 
	
}

E_rProdplus1 = document.getElementById("rProdplus1");
E_rProdtotal1 = document.getElementById("rProdtotal1");

E_rStoreplus1 = document.getElementById("rStoreplus1");
E_rStoretotal1 = document.getElementById("rStoretotal1");

function calcresearchplustotal(){
	rProdplus1=((BuildingrProd[0][2]))*rProdmultiplytotal*workerbotsrProd;
    rProdplus1 = Math.round(rProdplus1 * 1000) / 1000;

	rProdtotal1=((BuildingrProd[0][2]*BuildingrProd[0][0]))*rProdmultiplytotal*workerbotsrProd;
    rProdtotal1 = Math.round(rProdtotal1 * 1000) / 1000;
	E_rProdplus1.textContent=formatNumber(rProdplus1);
	E_rProdtotal1.textContent=formatNumber(rProdtotal1);
////////////////////////////////////////////////////////////////////////////////////////////////////
	rStoreplus1=((BuildingrStore[0][2]))*rStoremultiplytotal*workerbotsrStore;
    rStoreplus1 = Math.round(rStoreplus1 * 1000) / 1000;

	rStoretotal1=((BuildingrStore[0][2]*BuildingrStore[0][0]))*rStoremultiplytotal*workerbotsrStore;
    rStoretotal1 = Math.round(rStoretotal1 * 1000) / 1000;
	E_rStoreplus1.textContent=formatNumber(rStoreplus1);
	E_rStoretotal1.textContent=formatNumber(rStoretotal1);	
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
E_TotalMultiplyBonus=document.getElementById("TotalMultiplyBonus");
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
	
    E_TotalMultiplyBonus.textContent=TotalMultiplyBonus;
	
	estoremultiplytotal=(1+getlvl("unqID0001")*getcustomDataaddmultiplier("unqID0001")+getlvl("unqID0002")*getcustomDataaddmultiplier("unqID0002")+getlvl("unqID0003")*getcustomDataaddmultiplier("unqID0003")+getlvl("unqID0004")*getcustomDataaddmultiplier("unqID0004")+getlvl("unqID0005")*getcustomDataaddmultiplier("unqID0005"))*TotalMultiply;
	emultiplytotal=(1+getlvl("unqID0001")*getcustomDataaddmultiplier("unqID0001")+getlvl("unqID0002")*getcustomDataaddmultiplier("unqID0002")+getlvl("unqID0003")*getcustomDataaddmultiplier("unqID0003")+getlvl("unqID0004")*getcustomDataaddmultiplier("unqID0004")+getlvl("unqID0005")*getcustomDataaddmultiplier("unqID0005"))*TotalMultiply;
	rStoremultiplytotal=(1)*TotalMultiply;
	rProdmultiplytotal=(1)*TotalMultiply;
}
function costAutofunctions(ID){
	eval("BuildingAutoCostMultiplier"+ID+" = Math.pow(1.15, BuildingAutoNumber"+ID+");\
	BuildingAutoCost"+ID+" = BuildingAutoOriginalCost"+ID+" * BuildingAutoCostMultiplier"+ID+"; \
	BuildingAutoCost"+ID+"  = Math.round(BuildingAutoCost"+ID+" * 1000) / 1000;	\
	document.getElementById(\"egcost"+ID+"\").textContent=formatNumber(BuildingAutoCost"+ID+");\
	");
}
function costEstorefunctions(ID){
	eval("BuildingEstoreCostMultiplier"+ID+" = Math.pow(1.15, BuildingEstoreNumber"+ID+");\
	BuildingEstoreCost"+ID+" = BuildingEstoreOriginalCost"+ID+" * BuildingEstoreCostMultiplier"+ID+"; \
	BuildingEstoreCost"+ID+"  = Math.round(BuildingEstoreCost"+ID+" * 1000) / 1000;	\
	document.getElementById(\"Estorecost"+ID+"\").textContent=formatNumber(BuildingEstoreCost"+ID+");\
	");
}
E_workerbotsRcost0000 = document.getElementById("workerbotsRcost0000");
E_workerbotsEcost0000 = document.getElementById("workerbotsEcost0000");
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
	E_workerbotsRcost0000.textContent=formatNumber(workerbotsRcost0000);
	E_workerbotsEcost0000.textContent=formatNumber(workerbotsEcost0000);	
}
E_rProdcost0000 = document.getElementById("rProdcost0000");
E_rStorecost0000 = document.getElementById("rStorecost0000");
function cost(){
costAutofunctions("0000");
costAutofunctions("0001");
costAutofunctions("0002");
costAutofunctions("0003");

costEstorefunctions("0000");
costEstorefunctions("0001");
costEstorefunctions("0002");
costEstorefunctions("0003");

var BuildingrProdCostMultiplier = Math.pow(5, BuildingrProd[0][0]);
    BuildingrProd[0][3] = BuildingrProd[0][1]*BuildingrProdCostMultiplier;
	BuildingrProd[0][3] = Math.round(BuildingrProd[0][3]  * 1000) / 1000;	
	E_rProdcost0000.textContent=formatNumber(BuildingrProd[0][3]);
	
var BuildingrStoreCostMultiplier = Math.pow(5, BuildingrStore[0][0]);
    BuildingrStore[0][3] = BuildingrProd[0][1]*BuildingrStoreCostMultiplier;
	BuildingrStore[0][3] = Math.round(BuildingrStore[0][3]  * 1000) / 1000;	
	E_rStorecost0000.textContent=formatNumber(BuildingrStore[0][3]);
	
costworkerbotsfunctions();
} 

E_egnum0000 = document.getElementById("egnum0000");
E_egnum0001 = document.getElementById("egnum0001");
E_egnum0002 = document.getElementById("egnum0002");
E_egnum0003 = document.getElementById("egnum0003");

E_Estorenum0000 = document.getElementById("Estorenum0000");
E_Estorenum0001 = document.getElementById("Estorenum0001");
E_Estorenum0002 = document.getElementById("Estorenum0002");
E_Estorenum0003 = document.getElementById("Estorenum0003");

E_rProdnum0000 = document.getElementById("rProdnum0000");
E_rStorenum0000 = document.getElementById("rStorenum0000");

function acquried(){
	E_egnum0000.textContent=BuildingAutoNumber0000;
	E_egnum0001.textContent=BuildingAutoNumber0001;
	E_egnum0002.textContent=BuildingAutoNumber0002;
	E_egnum0003.textContent=BuildingAutoNumber0003;

	Estorenum0000.textContent=BuildingEstoreNumber0000;
	Estorenum0001.textContent=BuildingEstoreNumber0001;
	Estorenum0002.textContent=BuildingEstoreNumber0002;
	Estorenum0003.textContent=BuildingEstoreNumber0003;
	
	E_rProdnum0000.textContent=BuildingrProd[0][0];
	E_rStorenum0000.textContent=BuildingrStore[0][0];
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
	//display a maximum of 5 energy goal target at once
	generate_goal_target("goal0");
	generate_goal_target("goal1");
    generate_goal_target("goal2");
	generate_goal_target("goal3");
	generate_goal_target("goal4");
function multiply(a,b){
	var factor = 2.75;
	return a*Math.pow(factor,b);  
}
E_nextEnergyGoal = document.getElementById("nextEnergyGoal");
E_nextEnergyGoal1 = document.getElementById("nextEnergyGoal1");
E_nextEnergyGoalLvl = document.getElementById("nextEnergyGoalLvl");
E_nextEnergyGoalLvl1 = document.getElementById("nextEnergyGoalLvl1");
E_nextEnergyGoalReward = document.getElementById("nextEnergyGoalReward");
E_nextEnergyGoalReward1 = document.getElementById("nextEnergyGoalReward1");
E_EnergyGoalLevel = document.getElementsByClassName("EnergyGoalLevel");
function doEnergyGoals(){
	rewardfactor1 = 0.5;
	rewardcalculatedvalue1 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+1)/2),2));
	calculatedvalue1 = multiply(EnergyGoalStart,EnergyGoalLevel)*(1-getlvl("unqID2_0001")*getcustomDataaddmultiplier("unqID2_0001")-getlvl("unqID2_0002")*getcustomDataaddmultiplier("unqID2_0002"));
	calculatedvalue2 = multiply(EnergyGoalStart,EnergyGoalLevel+1);
	calculatedvalue3 = multiply(EnergyGoalStart,EnergyGoalLevel+2);
	calculatedvalue4 = multiply(EnergyGoalStart,EnergyGoalLevel+3);
	calculatedvalue5 = multiply(EnergyGoalStart,EnergyGoalLevel+4);
	calculatedvalue1percentage = limit(calculatedvalue1/energycap*100,100);
	calculatedvalue2percentage = limit(calculatedvalue2/energycap*100,100);
	calculatedvalue3percentage = limit(calculatedvalue3/energycap*100,100);
	calculatedvalue4percentage = limit(calculatedvalue4/energycap*100,100);
	calculatedvalue5percentage = limit(calculatedvalue5/energycap*100,100);
	if(calculatedvalue1percentage<100){adjust_goal_target1(1,calculatedvalue1percentage);}else{adjust_goal_target1(0,0);}
	if(calculatedvalue2percentage<100){adjust_goal_target2(1,calculatedvalue2percentage);}else{adjust_goal_target2(0,0);}
	//if(calculatedvalue3percentage<100){adjust_goal_target("goal2",1,calculatedvalue3percentage);}else{adjust_goal_target("goal2",0,0);}		
	//if(calculatedvalue4percentage<100){adjust_goal_target("goal3",1,calculatedvalue4percentage);}else{adjust_goal_target("goal3",0,0);}
	//if(calculatedvalue5percentage<100){adjust_goal_target("goal4",1,calculatedvalue5percentage);}else{adjust_goal_target("goal4",0,0);}
	if(thetotal>=calculatedvalue1){
		EnergyGoalLevel = EnergyGoalLevel+1;
		ResearchPoints = ResearchPoints+rewardcalculatedvalue1;
		notify("Energy Goal ("+formatNumber(calculatedvalue1)+") acquried! Reward: "+formatNumber(rewardcalculatedvalue1)+" Research Points",1);
	}
	
	 
	rewardcalculatedvalue1 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+1)/2),2));
	rewardcalculatedvalue2 = Math.ceil(Math.pow(rewardfactor1*((EnergyGoalLevel+2)/2),2));
	
	E_nextEnergyGoal.textContent=formatNumber(calculatedvalue1);
	E_nextEnergyGoal1.textContent=formatNumber(calculatedvalue2);
	E_nextEnergyGoalLvl.textContent=EnergyGoalLevel+1;
	E_nextEnergyGoalLvl1.textContent=EnergyGoalLevel+2;
	E_nextEnergyGoalReward.textContent=rewardcalculatedvalue1;
	E_nextEnergyGoalReward1.textContent=rewardcalculatedvalue2;

	for(var i = 0; i < E_EnergyGoalLevel.length; i++) {E_EnergyGoalLevel[i].textContent=EnergyGoalLevel;}
	
} 
function generate_goal_target(goal_id){
	goal_content="<div class=\"bar_goal\" id=\""+goal_id+"\"></div>";
	$("#bar1container").append(goal_content);
}
E_goal0 = document.getElementById("goal0");
E_goal1 = document.getElementById("goal1");
function adjust_goal_target1(display,percentage){
	E_goal0.style.left=percentage+"%";
	if(display==0){
	E_goal0.style.display="none";	
	}else{
	E_goal0.style.display="block";	
	}
}
function adjust_goal_target2(display,percentage){
	E_goal1.style.left=percentage+"%";
	if(display==0){
	E_goal1.style.display="none";	
	}else{
	E_goal1.style.display="block";	
	}
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
E_bar1 = document.getElementById("bar1");
E_bar2 = document.getElementById("bar2");
E_epsgain = document.getElementById("epsgain");
E_rProdgain =  document.getElementById("rProdgain");

E_energystatus = document.getElementsByClassName("energystatus");
E_energycap = document.getElementsByClassName("energycap");
E_thetotal = document.getElementsByClassName("energycap");	
E_researchpoint = document.getElementsByClassName("researchpoint");	
E_RealResearchPoints = document.getElementsByClassName("RealResearchPoints");	
E_RealResearchPointscap = document.getElementsByClassName("RealResearchPointscap");	
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
 
    if(energycap>0){bar1width=bound((thetotal/energycap)*100,0,100);}else{bar1width=0;}
	if(RealResearchPointscap>0){bar2width=bound((RealResearchPoints/RealResearchPointscap)*100,0,100);}else{bar2width=0;}
	E_bar1.style.width=bar1width + '%';
	E_bar2.style.width=bar2width + '%';
	E_epsgain.textContent=formatNumber(epsgain);
	E_rProdgain.textContent=formatNumber(rProdgain);
	
	Val_energystatus=formatNumber(thetotal)+"/"+formatNumber(energycap);
	for(var i = 0; i < E_energystatus.length; i++) {E_energystatus[i].textContent=Val_energystatus;}
	Val_energycap=formatNumber(energycap);
	for(var i = 0; i < E_energycap.length; i++) {E_energycap[i].textContent=Val_energystatus;}
	Val_thetotal=formatNumber(thetotal);
	for(var i = 0; i < E_thetotal.length; i++) {E_thetotal[i].textContent=Val_thetotal;}
	Val_researchpoint=formatNumber(ResearchPoints);
	for(var i = 0; i < E_researchpoint.length; i++) {E_researchpoint[i].textContent=Val_researchpoint;}
	Val_RealResearchPoints=formatNumber(RealResearchPoints);
	for(var i = 0; i < E_RealResearchPoints.length; i++) {E_RealResearchPoints[i].textContent=Val_RealResearchPoints;}
	Val_RealResearchPointscap=formatNumber(RealResearchPointscap);
	for(var i = 0; i < E_RealResearchPointscap.length; i++) {E_RealResearchPointscap[i].textContent=Val_RealResearchPointscap;}
	
	doEnergyGoals();
}
//DELETE SAVE
	$( "#hardreset" ).click(function() {
		document.getElementById("hardresetdialog").style.display = "block";
	});
	$( "#canceldialog" ).click(function() {
		document.getElementById("hardresetdialog").style.display = "none";
	});
	$( "#no" ).click(function() {
		document.getElementById("hardresetdialog").style.display = "none";	   
	});
	$( "#yes" ).click(function() {
		document.getElementById("hardresetdialog").style.display = "none";	
		hardreset();
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
 
E_createdenergy=document.getElementById("createdenergy");
E_totalachievements=document.getElementById("totalachievements");
E_totalbuildings=document.getElementById("totalbuildings");
E_totalresearch=document.getElementById("totalresearch");
E_TotalMultiply=document.getElementById("TotalMultiply");
E_currentVersionSettings=document.getElementById("currentVersionSettings");
E_version=document.getElementById("version");
function stats(){
	E_createdenergy.textContent=formatNumber(totalenergyed); 
	E_totalachievements.textContent=totalachievements;
	E_totalbuildings.textContent=totalbuildings;
	E_totalresearch.textContent=totalresearch;
	E_TotalMultiply.textContent="x"+TotalMultiply;
	E_currentVersionSettings.textContent="Current version: "+version;
    E_version.textContent=version;
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
        if(i!=5){
			tabs[i].className = tabs[i].className.replace(/(?:^|\s)isOn(?!\S)/g, " notOn");
		} 
    }

	if(tabID!="menuF"){
		$('#'+tabID+'').addClass('isOn');
		$('#'+tabID+'').removeClass('notOn');
	}
    //document.getElementById(tabID).className += " isOn";
	 
}
//addTabClass CODE
tabsName=["Home","Research","Bot Factory","Deals","Achievements"];
function fillTabsName(){
	if(tabsunlocked[0]==1){menuA=$("#menuA"); menuA.addClass("tabUnlocked");}else{}
	if(tabsunlocked[1]==1){menuB=$("#menuB"); menuB.addClass("tabUnlocked");}else{}
	if(tabsunlocked[2]==1){menuC=$("#menuC"); menuC.addClass("tabUnlocked");}else{}
	if(tabsunlocked[3]==1){menuD=$("#menuD"); menuD.addClass("tabUnlocked");}else{}
	if(tabsunlocked[4]==1){menuE=$("#menuE"); menuE.addClass("tabUnlocked");}else{}
	if(tabsunlocked[5]==1){menuF=$("#menuF"); menuF.addClass("tabUnlocked");}else{}
}
fillTabsName();
tabs = document.getElementsByClassName("tabs");
var x = document.getElementsByClassName("tabClass");
for (i = 0; i < x.length; i++) {
        if(i!=5){
			tabs[i].className = tabs[i].className += " notOn";
		}
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
if(gameState==0){
	//generate startgame screen only when need to
	
}
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
$( "#startgameButton" ).click(function() {
	if(gameState[0]==0){
	gamestate1();
	gameState[0]=1;
	}
});
function checkGamestate(){
	if(totalenergyed>=50&&gameState[0]==1){tabsunlocked[4]=1;gameState[0]=2;fillTabsName(); notify("Tab \""+tabsName[4]+"\" unlocked",1);}
	if(totalenergyed>=750&&gameState[0]==2){tabsunlocked[3]=1;gameState[0]=3;fillTabsName(); notify("Tab \""+tabsName[3]+"\" unlocked",1);}
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
function skipCheck(){
	//skip game
	if(skip==1){ //head start
	BuildingEstoreNumber0000=100;
	BuildingEstoreNumber0001=100;
	BuildingEstoreNumber0002=100;
	BuildingEstoreNumber0003=30;
	BuildingAutoNumber0000=100;
	BuildingAutoNumber0001=100;	
	BuildingAutoNumber0002=100;
	BuildingAutoNumber0003=30;
	BuildingrProd[0][0]=3;
	BuildingrStore[0][0]=3;
	workerbots[0]=0;
	workerbots[1]=1;
	workerbots[2]=1;
	workerbots[3]=1;
	workerbots[4]=1;
	skip=0;
	}
	if(skip==2){ //unbalanced start
	BuildingEstoreNumber0000=100;
	BuildingEstoreNumber0001=100;
	BuildingEstoreNumber0002=100;
	BuildingEstoreNumber0003=80;
	BuildingAutoNumber0000=100;
	BuildingAutoNumber0001=100;	
	BuildingAutoNumber0002=100;
	BuildingAutoNumber0003=60;
	BuildingrProd[0][0]=6;
	BuildingrStore[0][0]=6;
	workerbots[0]=0;
	workerbots[1]=1;
	workerbots[2]=1;
	workerbots[3]=1;
	workerbots[4]=1;
	skip=0;
	}
 }
 setInterval(skipCheck,1000);
 setInterval(calculateEverything,100);
 setInterval(addResource,100);
 
 //RESEARCH SECTION
	zoom1=100;
	padding = 5;
	yoffset = 0;
	xoffset = 0;
	createResearchIcons();
	createResearchLinks();
	linkIcon("unqID0000",2); 
	linkIcon("unqID0020",2); 
	autoResearchHighlights();
	function createResearchIcons(){
		for (i in researchData)
		{	
			if(researchData[i].type==0){
			drawIcon(researchData[i].chpt,researchData[i].type,researchData[i].xPos,researchData[i].yPos,50,50,40,40,researchData[i].imgURL,researchData[i].researchID,researchData[i].researchID+"cost",researchData[i].researchName,researchData[i].description,researchData[i].quote);
			$("#"+researchData[i].researchID+"costE").text(formatNumber(researchData[i].Ecost));
			$("#"+researchData[i].researchID+"costR").text(formatNumber(researchData[i].Rcost));
			}else{
			drawIconUnlock(researchData[i].chpt,researchData[i].type,researchData[i].xPos,researchData[i].yPos,50,50,40,40,researchData[i].imgURL,researchData[i].researchID,researchData[i].researchName,researchData[i].description,researchData[i].quote);
			$("#"+researchData[i].researchID+"completion").text(researchData[i].customData.completion);
			$("#"+researchData[i].researchID+"chapter").text(researchData[i].customData.chapter);
			}
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
	function calculatechaptercompletion(chapterid){
		lvlcountinchpt=0;
		lvlmaxcountinchpt=0;
		for (i in researchData)
		{	
			if(researchData[i].chpt==chapterid){
				lvlcountinchpt = lvlcountinchpt + researchData[i].curLvl;
			}
		}
		for (i in researchData)
		{	
			if(researchData[i].chpt==chapterid){
				lvlmaxcountinchpt = lvlmaxcountinchpt + researchData[i].MaxLvl;
			}
		} 
		if(lvlmaxcountinchpt==0){lvlmaxcountinchpt=1;}
		chaptercompletionpercentage = lvlcountinchpt/lvlmaxcountinchpt*100;
		chaptercompletionpercentage = Math.round(chaptercompletionpercentage * 100) / 100;
		return chaptercompletionpercentage;
	}
	function autoResearchHighlights(){
		for (i in researchData)
		{
			if(researchData[i].curLvl<researchData[i].MaxLvl){
				maxedparent=1;
			for(researchparent in researchData[i].parent){ //checking if parents are maxed
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
			if(researchData[i].type==1){ //if type is the unlock one, display it
				linkIcon(researchData[i].researchID,2);
			}
			$("#"+researchData[i].researchID+"lvl").text(researchData[i].curLvl+ maxed);
		}	
	}
	function researchClick(id,type){
		for (iresearchClick in researchData)
		{	
			if(researchData[iresearchClick].researchID==id){
					maxedparent=1;
			for(researchparent in researchData[iresearchClick].parent){
				if(researchData[iresearchClick].parent[researchparent]!=""){
				if(lookIfIDMaxedLvl(researchData[iresearchClick].parent[researchparent])==0){
					maxedparent=0;
				}
				}	
			}
			if(maxedparent==1){//parents are maxed then unlock child
				if(researchData[iresearchClick].curLvl>=researchData[iresearchClick].MaxLvl){
					//bought already
				}else if(researchData[iresearchClick].curLvl>=0){
					if(type==0){
					if(thetotal>=researchData[iresearchClick].Ecost&&RealResearchPoints>=researchData[iresearchClick].Rcost){
					thetotal=thetotal-researchData[iresearchClick].Ecost;
					RealResearchPoints=RealResearchPoints-researchData[iresearchClick].Rcost;
					//successfully purchased upgrade
					researchData[iresearchClick].curLvl=researchData[iresearchClick].curLvl+1;
						autoResearchHighlights();
						createResearchLvlSave();
						updateresearchchaptercompletion();
					}else{
					//do not meet requirement
					researchFail(researchData[iresearchClick].researchID);	
					}
					}else if(type==1){
						if(calculatechaptercompletion(researchData[iresearchClick].customData.chapter)>=researchData[iresearchClick].customData.completion){
						//successfully purchased upgrade
						researchData[iresearchClick].curLvl=researchData[iresearchClick].curLvl+1;
						autoResearchHighlights();
						createResearchLvlSave();	
						updateresearchchaptercompletion();
						}else{
						//do not meet requirement
						researchFail(researchData[iresearchClick].researchID); 
						}
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
	function researchGrid(pos){
		return pos*70;
	}
	function drawIcon(chpt,type,x,y,boxw,boxh,imgw,imgh,url,unqID,costID,title,desc,caption){
		var content="<p style=\"font-size:26px;position: relative;\">"+title+"</p><p>Cost:&nbsp<b><span id=\""+costID+"E\" class=\"cur_energy\"></span></b><b><span id=\""+costID+"R\" class=\"cur_research\"></span></b><p style=\"padding-left:5px;padding-right:5px;\">"+desc+"</p><p style=\"color:#dedede; font-size:18px;\">\""+caption+"\"</p><div id=\""+unqID+"upgrade\" class=\"upgradeBuy buyButton\"><b>Buy</b></div></p></div>"
		drawImageBox(chpt,x,y,boxw,boxh,imgw,imgh,url,unqID,content);
		document.getElementById(unqID+"upgrade").addEventListener('click',function(){researchClick(unqID, type);},false);
	}
	function drawIconUnlock(chpt,type,x,y,boxw,boxh,imgw,imgh,url,unqID,title,desc,caption){
		var content="<p style=\"font-size:26px;position: relative;\">"+title+"</p><p>Requires:&nbsp <b><span id=\""+unqID+"completion\"></span></b>% completion in chapter <b><span id=\""+unqID+"chapter\"></span></b><b><p style=\"padding-left:5px;padding-right:5px;\">"+desc+"</p><p style=\"color:#dedede; font-size:18px;\">\""+caption+"\"</p><div id=\""+unqID+"upgrade\" class=\"upgradeBuy buyButton\"><b>Unlock</b></div></p></div>"
		drawImageBox(chpt,x,y,boxw,boxh,imgw,imgh,url,unqID,content);
		document.getElementById(unqID+"upgrade").addEventListener('click',function(){researchClick(unqID, type);},false);
	}
 
	function drawImageBox(chpt,x,y,boxw,boxh,imgw,imgh,url,unqID,content){
		border = 6;
		calc1 = ((boxw-imgw-border)/2);
		calc2 = ((boxh-imgh-border)/2);	
		x = researchGrid(x)+(chpt-1)*2000;
		y = researchGrid(y);
		
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
	function updateresearchchaptercompletion(){
		$("#researchprogressbar1").width( calculatechaptercompletion(1) + '%');
		$("#researchprogressbar2").width( calculatechaptercompletion(2) + '%');
		$("#researchprogressbar3").width( calculatechaptercompletion(3) + '%');
		$("#researchprogressbar4").width( calculatechaptercompletion(4) + '%');
		$("#researchprogressbar5").width( calculatechaptercompletion(5) + '%');
	}
	updateresearchchaptercompletion();

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
	
	function realWidth(obj){
    var clone = obj.clone();
    clone.css("visibility","hidden");
    $('body').append(clone);
    var width = clone.outerWidth();
    clone.remove();
    return width;
	}
	function realHeight(obj){
    var clone = obj.clone();
    clone.css("visibility","hidden");
    $('body').append(clone);
    var height = clone.outerHeight();
    clone.remove();
    return height;
	}
	//each chapter has a width of 1000
    initialx = realWidth($('#upgradeboxcontainer'))/2;
	initialy = realHeight($('#overlay2zoom'))/2-50;
	$('#overlay2research').css('transform','translate(' + initialx + 'px, ' + initialy + 'px)');
	$('#overlay2research').data('lastTransform', {dx: initialx, dy: initialy }); 
	 
	document.getElementById('overlay2leftarrow').addEventListener("click", function() {researchleftarrow();});
	document.getElementById('overlay2rightarrow').addEventListener("click", function() {researchrightarrow();});
	
	function researchleftarrow(){
		if(DisplayedResearchChpt>1){DisplayedResearchChpt=DisplayedResearchChpt-1;}
		DisplayResearchChpt();
	}
	function researchrightarrow(){
		if(DisplayedResearchChpt<5){DisplayedResearchChpt=DisplayedResearchChpt+1;}
		DisplayResearchChpt();
	}
	function DisplayResearchChpt(){
		newinitialx = initialx + (DisplayedResearchChpt-1)*(-2000);
		document.getElementById("DisplayResearchChpt").innerHTML=DisplayedResearchChpt;
		$('#overlay2research').qaddclass("transitionease").delay(500).qremoveclass("transitionease");
		$('#overlay2research').css('transform','translate(' +newinitialx + 'px, ' + initialy + 'px)');
		$('#overlay2research').data('lastTransform', {dx: newinitialx, dy: initialy }); 
	}
	DisplayResearchChpt();
	overlay2contents.on("mousedown touchstart",function(me){
		 if (me.target === this) {
    var move = $('#overlay2research');
    var lastOffset = move.data('lastTransform');
    var lastOffsetX = lastOffset ? lastOffset.dx : 0,
        lastOffsetY = lastOffset ? lastOffset.dy : 0;
    var startX=0;
	var startY=0;
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
		newDy = bound(newDy,0,initialy*2);
		newDx = bound(newDx,(DisplayedResearchChpt-1)*(-2000),initialx*2+(DisplayedResearchChpt-1)*(-2000));
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
		var marginLeftpx = ""+marginLeft+"px";
		overlay2zoom.css("transform", scaling);
		overlay2contents.css("marginLeft", marginLeftpx);
	}  
      sliderrange1.on('input', function(){
		zoom1 = sliderrange1.val(); 
		setZoom();
      });
	  overlay2contents.bind('wheel', function (e) {
		zoom1=zoom1/1;
		if (e.originalEvent.deltaY > 0) {
			zoom1=zoom1+10;
			zoom1=bound(zoom1,70,200);
		} else {
			zoom1=zoom1-10;
			zoom1=bound(zoom1,70,200);
		}
	  	setZoom();
	  });
 
//Main Graphics
scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 10000 );
camera.rotation.order = "YXZ";
renderer = new THREE.WebGLRenderer();
clock = new THREE.Clock();
clock.start();
var loader = new THREE.TextureLoader();
home_graphics = document.getElementById("home_graphics");
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
composer = new THREE.EffectComposer(renderer);
renderPass = new THREE.RenderPass( scene, camera );
composer.addPass(renderPass);
outlinePass = new THREE.OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), scene, camera );
//outline settings
outlinePass.edgeStrength = 5;
outlinePass.edgeGlow = 0.1;
outlinePass.edgeThickness = 2;
composer.addPass(outlinePass);

outputPass = new THREE.ShaderPass( THREE.CopyShader );
outputPass.renderToScreen = true;
composer.addPass( outputPass );
home_graphics.appendChild( renderer.domElement );

camera.position.set(0,200,0);
camera.rotation.x = THREE.Math.degToRad(-45);
camera.rotation.y = THREE.Math.degToRad(180);
window.addEventListener('resize',function(){
	width = window.innerWidth;
	height = window.innerHeight;
	renderer.setSize(width,height);
	composer.setSize(width,height);
	camera.aspect = width/height;
	camera.updateProjectionMatrix();
});
//gridHelper = new THREE.GridHelper( 1000, 10 );
//scene.add( gridHelper );

createLights();
function createLights() {
	// A hemisphere light is a gradient colored light; 
	// the first parameter is the sky color, the second parameter is the ground color, 
	// the third parameter is the intensity of the light
	hemisphereLight = new THREE.HemisphereLight(0xaaaaaa,0x000000, 3)
	
	// A directional light shines from a specific direction. 
	// It acts like the sun, that means that all the rays produced are parallel. 
	shadowLight = new THREE.DirectionalLight(0xffffff, 3);

	// Set the direction of the light  
	shadowLight.position.set(-2000, 1000, 2000);
	
	// Allow shadow casting 
	shadowLight.castShadow = true;

	// define the visible area of the projected shadow
	shadowLight.shadow.camera.left = -2000;
	shadowLight.shadow.camera.right = 4000;
	shadowLight.shadow.camera.top = 300;
	shadowLight.shadow.camera.bottom = -300;
	shadowLight.shadow.camera.near = 10;
	shadowLight.shadow.camera.far = 4000;

	// define the resolution of the shadow; the higher the better, 
	// but also the more expensive and less performance
	shadowLight.shadow.mapSize.width = 1024;
	shadowLight.shadow.mapSize.height = 1024;
	
	// to activate the lights, just add them to the scene
	scene.add(hemisphereLight);  
	scene.add(shadowLight);
}


function initProton(){
	proton = new Proton();
        emitter1 = createEmitter({
            p: {
                x: 0,
                y: 1,
				z: 120
            },
            Body: createMesh("cube")
        })
		emitter1.stopEmit();
        proton.addEmitter(emitter1);
		emitter2=createProton();
		proton.addEmitter(emitter2);	
		//proton.addRender(new Proton.SpriteRender(scene));
        proton.addRender(new Proton.MeshRender(scene));
}

initProton();
function createMesh(geo) {
        if (geo == "sphere") {
            var geometry = new THREE.SphereGeometry(10, 8, 8);
            var material = new THREE.MeshLambertMaterial({
                color: "#454545"
            });
        } else {
            var geometry = new THREE.BoxGeometry(10, 10, 10);
            var material = new THREE.MeshLambertMaterial({
                color: "#454545"
            });
        }
        var mesh = new THREE.Mesh(geometry, material);
        return mesh;
    }
function createEmitter(obj) {
    var emitter = new Proton.Emitter();
    emitter.rate = new Proton.Rate(1, 0.3);
    emitter.addInitialize(new Proton.Mass(1));
    emitter.addInitialize(new Proton.Radius(100));
    emitter.addInitialize(new Proton.Life(0.5,1));
    emitter.addInitialize(new Proton.Body(obj.Body));
    emitter.addInitialize(new Proton.Velocity(400, new Proton.Vector3D(0, 1, 0), 50));
    emitter.addBehaviour(new Proton.RandomDrift(50, 50, 50, .05));
    emitter.addBehaviour(new Proton.Rotate("random", "random"));
    emitter.addBehaviour(new Proton.Scale(new Proton.Span(0.8, 1.2)));
    // emitter.addBehaviour(new Proton.Alpha(1, 0, Infinity, Proton.easeInQuart));
    var zone = new Proton.BoxZone(0,150,100,300,300,300);
    emitter.addBehaviour(new Proton.CrossZone(zone, "dead"));
	emitter.addBehaviour(new Proton.Gravity(10));
    emitter.p.x = obj.p.x;
    emitter.p.y = obj.p.y;
	emitter.p.z = obj.p.z;
    return emitter;
}
    function createSprite() {
        var map = new THREE.TextureLoader().load("./website/tools/particle.png");
        var material = new THREE.SpriteMaterial({
            map: map,
            color: 0xff0000,
            blending: THREE.AdditiveBlending,
            fog: true
        });
        return new THREE.Sprite(material);
    }
    function createProton(image) {
  emitter = new Proton.Emitter();
        emitter.rate = new Proton.Rate(new Proton.Span(10, 15), new Proton.Span(.05, .1));
        emitter.addInitialize(new Proton.Body(createSprite()));
        emitter.addInitialize(new Proton.Mass(1));
        emitter.addInitialize(new Proton.Life(0.5, 1));
        emitter.addInitialize(new Proton.Position(new Proton.SphereZone(20)));
        emitter.addInitialize(new Proton.V(new Proton.Span(20, 20), new Proton.Vector3D(0, 0.1, 0), 30));
        emitter.addBehaviour(new Proton.RandomDrift(15, 15, 15, .01));
        //emitter.addBehaviour(new Proton.Alpha(1, 0.1));
        emitter.addBehaviour(new Proton.Scale(new Proton.Span(75, 100), 0));
        emitter.addBehaviour(new Proton.G(-0.1));
        emitter.addBehaviour(new Proton.Color('#FF0026', ['#ffff00', '#ffff11'], Infinity, Proton.easeOutSine));
        emitter.p.x = 0;
        emitter.p.y = 50;
        emitter.p.z = 110;
        return emitter;
        }
plane_length=3200;
geom_plane = new THREE.BoxGeometry( 500, plane_length, 10);
mat_plane = new THREE.MeshPhongMaterial( { color: 0x454545 ,flatShading:true} );
plane = new THREE.Mesh( geom_plane, mat_plane );
//plane.castShadow = true;
plane.receiveShadow = true;
plane.rotation.x = THREE.Math.degToRad(90);
plane.position.set(0,-1,plane_length*0.46);
loader.load("./website/tools/plane.png", function(texture) {
 mat_plane.map = texture;
 scene.add(plane);
});

function set_plane_distance(percentage){
	plane.position.z=plane_length*0.46-plane_length*percentage/386;
}
//t-time,b-initial,c-change,d-duration
function easeInOutQuad(t, b, c, d) {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};
function linearTween(t, b, c, d) {
	return c*t/d + b;
};
function generateExplosion(explosion_x,explosion_y, explosion_z, explosion_strength){
	emitter1.p.x=explosion_x;
	emitter1.p.y=explosion_y;
	emitter1.p.z=explosion_z;
	emitter2.p.x=explosion_x;
	emitter2.p.y=explosion_y;
	emitter2.p.z=explosion_z;
	emitter1.rate=new Proton.Rate(Math.ceil(Math.log(explosion_strength) / Math.log(1.5)), 0.3);
	emitter1.emit("once");
	emitter2.emit("once");	
}
counter=0;
move=0;
entity_move=0;
attack_level=0;
attack_level_counter=0;
prev_attack_level_counter=0;
level_movement_speed=33;
function update_attack_level(attacklvl){
	attack_level_counter=attacklvl*100;
}

function nearestCubeSide(mynumber){
	cuberoot=Math.cbrt(mynumber);
	cuberoot=Math.ceil(cuberoot);
	return cuberoot;
}	
selectedObject = [];
unitsize=10;
BasicEntity = function(type){
	this.mesh = new THREE.Object3D();
	geom_BasicEntity = new THREE.BoxGeometry(unitsize,unitsize,unitsize);
	mat_BasicEntity = new THREE.MeshLambertMaterial( { color: 0x454545, flatShading:true} );
	//mat_BasicEntity.transparent = true;
	base_generator_BasicEntity = new THREE.Mesh(geom_BasicEntity, mat_BasicEntity); 
	base_generator_BasicEntity.castShadow = true;

	//base_generator_BasicEntity.receiveShadow = true;
	
	geom_outline_BasicEntity = new THREE.EdgesGeometry2(geom_BasicEntity);
	mat_outline_BasicEntity = new THREE.LineMaterial( { color:0xffffff, linewidth:2} );
	mat_outline_BasicEntity.resolution.set( window.innerWidth, window.innerHeight );  
	base_generator_outline_BasicEntity_mesh = new THREE.Wireframe( geom_outline_BasicEntity, mat_outline_BasicEntity); 
	cuberoot = nearestCubeSide(type);
	cubearea = cuberoot*cuberoot;
	myheight = Math.ceil(type/cubearea)
	for(var unityt=0; unityt<myheight;unityt++){
		filledarea = 0;
		if(unityt==myheight-1){
			filledarea=type-cubearea*(myheight-1);
		}else{
			filledarea=cubearea;
		}
		filledx=Math.ceil(filledarea/cuberoot);
		
		for(var unitx=0; unitx<=filledx-1; unitx++){
			filledz = 0;
			if(unitx==filledx-1){
				filledz=filledarea-cuberoot*(filledx-1);
			}else{
				filledz=cuberoot;
			}
			for(var unitz=0; unitz<filledz; unitz++){
			generator_BasicEntity=base_generator_BasicEntity.clone();
			generator_BasicEntity.position.set(unitx*(unitsize+2)-cuberoot*(unitsize+2)/2,unityt*(unitsize+2)+unitsize/2,unitz*(unitsize+2)-cuberoot*(unitsize+2)/2);
			this.mesh.add(generator_BasicEntity);
		
			generator_outline_BasicEntity_mesh=base_generator_outline_BasicEntity_mesh.clone();
			generator_outline_BasicEntity_mesh.position.set(unitx*(unitsize+2)-cuberoot*(unitsize+2)/2,unityt*(unitsize+2)+unitsize/2,unitz*(unitsize+2)-cuberoot*(unitsize+2)/2);
			generator_outline_BasicEntity_mesh.computeLineDistances();

			this.mesh.add(generator_outline_BasicEntity_mesh);
			}
		}
	}
} 
BasicEntity.prototype.set_entity_distance = function(distance_percentage){
	this.mesh.position.z=plane_length*0.46-plane_length*0.16-plane_length*distance_percentage/386;
}
BasicEntity.prototype.set_entity_x = function(x){
	this.mesh.position.x=x;
}
//BasicEntity.prototype.opacity = function(myOpacity){
//	for (var i=0; i<this.mesh.children.length; i+=1) {
//            this.mesh.children[i].material.opacity = myOpacity;  
//   }
//}
BasicEntity.prototype.wireframe_visibility = function(myVisibility){
	for (var i=0; i<this.mesh.children.length; i+=1) {
		if(i%2==1){
            this.mesh.children[i].visible = myVisibility;  
		}
    }
}
BasicEntity.prototype.remove = function(){
	for (var i=0; i<this.mesh.children.length; i+=1) {
            this.mesh.children[i].geometry.dispose(); 
			this.mesh.children[i].material.dispose(); 
        }

	scene.remove(this.mesh);
}
outlinePass.selectedObjects.push(plane);

 //controls = new THREE.OrbitControls( camera );
	entities1 = new BasicEntity(2);scene.add(entities1.mesh);
	entities2 = new BasicEntity(50);scene.add(entities2.mesh);
	entities3 = new BasicEntity(128);scene.add(entities3.mesh);
	entities1.set_entity_x(-100);
	entities2.set_entity_x(0);
	entities3.set_entity_x(100);
	counter2=0; 
function animate(){
    requestAnimationFrame(animate);
    delta = clock.getDelta();
	counter+=delta*50;
	counter2++;
	//controls.update();
	//attack_level_counter+=delta*50
	if(attack_level_counter>prev_attack_level_counter){
		prev_attack_level_counter=prev_attack_level_counter+level_movement_speed*delta;
	}
	if(attack_level_counter<prev_attack_level_counter){
		prev_attack_level_counter=prev_attack_level_counter-level_movement_speed*delta;
	}
	if(attack_level_counter>prev_attack_level_counter-0.5&&attack_level_counter<prev_attack_level_counter+0.5){
		prev_attack_level_counter=attack_level_counter; 
	}
	if(counter>100){counter=0;generateExplosion(0,50,110,64);} //generateExplosion(-100,50,110,2); generateExplosion(100,50,110,128); }
	actual_move=easeInOutQuad(prev_attack_level_counter%100,0,100,100);
	set_plane_distance(actual_move);
 
	if(counter2%300==0){
		update_attack_level(Math.ceil(counter2/300));
	}
	//entities = new BasicEntity(128);
	//scene.add(entities.mesh); 
	entities1.set_entity_distance(actual_move+counter);
	entities2.set_entity_distance(actual_move+counter);
	entities3.set_entity_distance(actual_move+counter);
	//}else{
	//entities.remove(); 
	
	proton.update();
	composer.render();
}
animate();
/*function loadImage(url, context, x, y, w, h) {
   
}

count=0;
var canvas = document.getElementById("mainCanvas");
var ctx = canvas.getContext("2d");
myimgs = {bot:"./website/tools/bot.png"}; //object
loadedImgs={}; 
loadCanavas(myimgs,startcanvas);
function loadCanavas(imgs,action){
	totalimg=0;
	for (var i in imgs) {
        loadedImgs[i] = new Image();
        loadedImgs[i].onload =  function(){totalimg=totalimg+1; if(totalimg==Object.keys(imgs).length){action();}};
        loadedImgs[i].src = imgs[i];
    }
}
function startcanvas(){
	window.requestAnimationFrame(render);
}
function render(){
	ctx.clearRect(0,0,200,500);
	ctx.drawImage(loadedImgs.bot,count,0,60,60)
	count=count+1;
	window.requestAnimationFrame(render);
}  
	 */
});