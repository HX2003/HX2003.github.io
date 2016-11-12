<?php
//error_reporting(E_ALL & ~E_NOTICE);
//include_once($_SERVER['DOCUMENT_ROOT']."/website/addview.php");
include_once($_SERVER['DOCUMENT_ROOT']."/website/connection.php");		
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Minigame</title>
		<!--
		<link href="<?php echo $host;?>/website/style.css" rel="stylesheet">
		 !-->
		 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.js"></script>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css">

<style>
@import url(https://fonts.googleapis.com/css?family=Josefin+Sans:400,600,700);
* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
}
	nav li a:hover {
		background: #DADADA;
		color: #454545;
	}
.clear { clear:both; }
html {
    height: 100%;
}
body {
	background:#454545;
	padding:5px;
	margin:0px;
	font-family: 'Josefin Sans', sans-serif;
	font-size: 20px;
	color: #FAFAFA;
	height:100%;
	line-height:115%;
	text-align:justify;
	position:relative;
}
#gamearea {
	padding:5px;
	height:100%;
	position:relative;
}
#progress1 {
  width: 90%;
  height: 30px;
  background-color: #ddd;
}

#bar1 {
  width: 1%;
  height: 100%;
  background-color: #4CAF50;
}
#click1,#click2 {
	cursor: pointer;
	width:9%;
	float:left;
	background-color:#c6c6c6;
	height: 30px;
	text-align:center;
}

#amount,#amount2{
	height: 30px;
	text-align:left;
	margin-top:8px;
}
.achievementbox {
	background-color:#666666;
	color:#808080;
	border-width:1px;
	border-style:solid;
	border-color:#FFFFFF;
	position: relative;
    display: inline-block;
	width:300px;
}

.achievementbox .achievementtooltiptext {
    visibility: hidden;
    width: 300px;
    background-color: black;
    color: #fff;
	margin-bottom:5px;
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
	font-size:18px;
    position: absolute;
    z-index: 1;
}
.achievementbox:hover .achievementtooltiptext {
    visibility: visible;
}
.achievementbox .achievementtooltiptext {
    width: 300px;
    bottom: 100%;
    left: 50%; 
    margin-left: calc(300px/-2);
}
.achievementachieved {
	color:#FFFFFF;
}


.clickbuy .buytooltiptext {
    visibility: hidden;
    width: 100%;
    background-color: black;
    color: #fff;
	margin-bottom:5px;
    padding: 5px 0;
    border-radius: 6px;
	font-size:18px;
 
    position: absolute;
    z-index: 1;
}
.clickbuy:hover .buytooltiptext {
    visibility: visible;
	transition-delay:0.25s;

}
.clickbuy .buytooltiptext {
    width: 100%;
    bottom: 100%;
    left: 50%; 
    margin-left: calc(100%/-2);
	

}
#clickbuy1,#clickbuy2{
	cursor: pointer;
	float:left;
	background-color:#c6c6c6;
	height: 30px;
	margin-top:5px;
}

.clickbuy {
	position: relative;
    display: inline-block;
	width:277px;
	}

.autobuy .buytooltiptext {
    visibility: hidden;
    width: 100%;
    background-color: black;
    color: #fff;
	margin-bottom:5px;
    padding: 5px 0;
    border-radius: 6px;
	font-size:18px;
 
    position: absolute;
    z-index: 1;
}
.autobuy:hover .buytooltiptext {
    visibility: visible;
	transition-delay:0.25s;

}
.autobuy .buytooltiptext {
    width: 100%;
    bottom: 100%;
    left: 50%; 
    margin-left: calc(100%/-2);
	

}

.autobuy {
	position: relative;
    display: inline-block;
	cursor: pointer;
	width:auto;
	float:left;
	text-align:left;
	background-color:#c6c6c6;
	height: 30px;
	margin-top:5px;
	width:277px;
	}
.details {
	padding-top:8px;
	display: inline-block;
	margin-left:5px;
	font-size:20px;
}	
#achievementhead, #statshead, #settingshead, #unlockedupgradeshead {
	font-size:29px;
	
}

#left {
	float:left;  clear: both; display:inline-block;
	width:auto;
}
#right {
	float:right;  display:inline-block;
}
#bottom {
	width:100%;
	min-height:250px;
	border-width:1px;
	border-style:solid;
	border-color:#FFFFFF;
	margin-top:5px;
	
}
<!-- upgrades !-->
#upgrades {
	border-width:1px;
	border-style:solid;
	border-color:#FFFFFF;
	height:200px;
}
#upgradeboxcontainer {
	padding:5px;
	  position: relative;
}
.upgradeIcon:hover{
    transition: border-color 0.3s ease;
	}

.upgradeIcon .upgradetooltiptext {
    visibility: hidden;
    width: 300px;
    color: #fff;
	margin-bottom:8px; 
    text-align: center;
    padding: 5px 0;
    border-radius: 6px;
	font-size:18px;
    position: absolute;
    z-index: 1;
	-webkit-transition-delay: 0.1s; /* Safari */
    transition-delay: 0.1s;
}
.upgradeBuy{
	width:280px;
	height:25px;
	margin-left:10px;
	margin-bottom:5px;
	margin-top:10px;
	font-size:22px;
	cursor:pointer;
}
.notLinked {
	background-color:#919191;
}
.isLinked{
	background-color:#f7f7f7;
}
.notLinkedTooltip{
	background-color:#919191;
}
.isLinkedTooltip{
	background-color:#000000;
}
.buyButton{
	background-color:#c7c7c7;
	color:#000000;
}
.boughtButton{
	background-color:#000000;
	color:#FFFFFF;
}
.IconnotLinked{
	border-Color:#919191;border-Style:solid;border-Width:3px;background-color:#919191;
}
.IconisLinked{
	border-Color:#000000;border-Style:solid;border-Width:3px;background-color:#f7f7f7;
}
.upgradeLevel{
	position:absolute;
	top:-5px;
	left:5px;
	color:#000000;
	font-size:13px;
}
.upgradeIcon .upgradebridge {
    visibility: hidden;
	top:-15px;
	left:-3px;
    width: 50px;
	height: 11px;
    color: #fff;
    text-align: center;
	font-size:18px;
    position: absolute;
    z-index: 1;
	-webkit-transition-delay: 0.1s; /* Safari */
    transition-delay: 0.1s;
}
.upgradeIcon:hover .upgradetooltiptext {
    visibility: visible;
}
.upgradeIcon:hover .upgradebridge {
    visibility: visible;
}
.upgradeIcon .upgradetooltiptext {
    width: 300px;
    bottom: 100%;
    left: 0%; 
	margin-left:-3px;
    <!--margin-left: calc(300px/-2); use this for center aligned!-->
}
.redborder {
	border-color:#FF0000 !important;
}
.errorcost {
	 margin-left:5px;color:#FF0000; display:none;	height:21.8px;
}
#achievementmenu {
	float:left;
	height:30px;
	width:240px;
	background-color:#5f5f5f;
	margin-bottom:5px;
	font-size:25px;
	cursor:pointer;
	text-align:center;
	vertical-align: middle;
	padding-top:3px;
	color: #999;
    text-shadow: 0px 1px 0px #444,0px 0px 4px #000;

}
#achievementmenu:hover {
color: #fff;
text-shadow: 0px 1px 0px #999,0px 0px 4px #000;
}
#settingsmenu {
	float:right;
	height:30px;
	width:240px;
	background-color:#5f5f5f;
	margin-bottom:5px;
	font-size:25px;
	cursor:pointer;
	text-align:center;
	vertical-align: middle;
	padding-top:3px;
	color: #999;
    text-shadow: 0px 1px 0px #444,0px 0px 4px #000;

}
#settingsmenu:hover {
color: #fff;
text-shadow: 0px 1px 0px #999,0px 0px 4px #000;
}
#statsmenu {
	float:left;
	height:30px;
	width:240px;
	background-color:#5f5f5f;	
	margin-bottom:5px;
	font-size:25px;
	cursor:pointer;
	text-align:center;
	vertical-align: middle;
	padding-top:3px;
	color: #999;
    text-shadow: 0px 1px 0px #444,0px 0px 4px #000;

	}
#statsmenu:hover {
color: #fff;
text-shadow: 0px 1px 0px #999,0px 0px 4px #000;
}
#unlockedupgradesmenu {
	float:right;
	height:30px;
	width:240px;
	background-color:#5f5f5f;
	margin-bottom:5px;
	font-size:25px;
	cursor:pointer;
	text-align:center;
	vertical-align: middle;
	padding-top:3px;
	color: #999;
    text-shadow: 0px 1px 0px #444,0px 0px 4px #000;

}
#unlockedupgradesmenu:hover {
color: #fff;
text-shadow: 0px 1px 0px #999,0px 0px 4px #000;
}
.highlighted{
color: #fff !important;
text-shadow: 0px 1px 0px #999,0px 0px 4px #000 !important;
}
#achievement {
	display:block;
	padding:5px;
}
#stats {
	display:none;
	padding:5px;
}
#settings {
	display:none;
	padding:5px;
}
#unlockedupgrades {
	display:none;
	padding:5px;
}
#savebox {
	background-color:#535353;
	width:auto;
	height:30px;
    display: inline-block;
	text-align:center;	
	font-size:24px;
	vertical-align: middle;
	padding:3px;
	border-width:2px;
	border-style:solid;
	border-color:#535353;
	cursor:pointer;
}
#savebox:hover {
	border-width:2px;
	border-style:solid;
	border-color:#FFFFFF;
}
#centernotify {
	width:75%;
	text-align:center;
	position:absolute;
	left:0;
	right:0;
	top: 10%;
	margin-left: auto;
 	margin-right: auto;
	font-size:19px;
	}
#menucontainer {
	width:100%;
	position: relative;
	overflow:hidden;
}
#deleteallcookies {
	background-color:#535353;
	width:auto;
	height:30px;
    display: inline-block;
	text-align:center;	
	font-size:24px;
	vertical-align: middle;
	padding:3px;
	border-width:2px;
	border-style:solid;
	border-color:#535353;
	cursor:pointer;
	color:#FF0000;
}
#deleteallcookies:hover {
	border-width:2px;
	border-style:solid;
	border-color:#FF0000;
}
#cover{ position:fixed; top:0; left:0; background:rgba(0,0,0,0.6); z-index:5; width:100%; height:100%; display:none; } 

#deleteallcookiesdialog{
   position: fixed;
    top: 50%;
    left: 50%;
    width: 300px;
    height: 200px;
    margin-left: -150px;
    margin-top: -100px;
    background-color: #f2f2f2;
    text-align: center;
	display:none;
	border-radius: 5px;
    /* needed styles for the overlay */
    z-index: 10; /* keep on top of other elements on the page */
    outline: 9999px solid rgba(0,0,0,0.5);
} 
#canceldialog { 
	cursor:pointer;
	display:block; 
	position:absolute;
	top:3px;
	right:2px; 
	color:black; 
	height:30px; 
	width:35px;
	font-size:30px;
	text-decoration:none; 
	text-align:center;
	font-weight:bold; 
	}
.canceldialogCSS{
	cursor:pointer;
	display:block; 
	right:0px;
	position:absolute;
	margin-right:5px;
	color:#FFFFFF; 
	height:30px; 
	width:35px;
	font-size:30px;
	text-decoration:none; 
	text-align:center;
	font-weight:bold; 	
	
}
#yes {
	width:100px;
	padding:0px;
	background-color:#d9d9d9; 
	font-weight:bold;
	text-decoration:none;
	color:#000000;
	height:25px;
	border-radius:5px;
	cursor:pointer;
	float:left;
	margin-left:30px;
}
#no:hover {
	border-color:#FFFFFF;
	border-width:2px;
	border-style:solid;
}
#yes:hover {
	border-color:#FF0000;
	border-width:2px;
	border-style:solid;	
}
#no {
	width:100px;
	padding:0px;
	background-color:#d9d9d9; 
	font-weight:bold;
	text-decoration:none;
	color:#000000;
	height:25px;
	border-radius:5px;
	cursor:pointer;
	float:right;
	margin-right:30px;
}
#infobox{
	color:#FF0000;
	margin-top:25px;
}
.tabbar { list-style: none; }
.tabbar { display: inline; }
.tabbar li:nth-child(1) p{
    border-width:1px;
	border-color:#000000;
	border-right-style:solid;
}
.tabbar li:nth-child(2) p{
    border-width:1px;
	border-color:#000000;
	border-right-style:solid;
}
.tabbar  p { 
 color: black; 
 display: block;
 padding: 4px 10px; 
 position: relative; 
 width:33.33%;
 text-decoration: none; 
 transition: all 0.1s ease-in-out;
 float:left;
 font-size:24px;
 }
.notOn:hover { background-color: #ccc; }
.isOn:hover { background-color: #ff2121; }
.isOn{
	background-color: #f44842;
	color:#FFFFFF;
}
.notOn{
	background-color: #FFFFFF;
}
#overlay {

}
</style>
 
<script type="text/javascript" src="<?php echo $host;?>/website/tools/minigame2.js"></script>
 
	</head>

<body>
<!--
<div style="background-image: url('<?php echo $host;?>/website/img/hx2003.png'); width:350px; height:200px; background-repeat:no-repeat; margin-bottom:50px;"></div>

<?php //include_once($_SERVER['DOCUMENT_ROOT']."/website/searchbar.php");?>

<nav>
	<ul>

		<li class='home'><a href="<?php echo $host;?>/website/">Home</a></li>
	    <li class='blogs'><a href="<?php echo $host;?>/website/theblogs.php">Blogs</a></li>
	    <li class='about'><a href="<?php echo $host;?>/website/about.php">About</a></li>
		<li class='tools'><a href="<?php echo $host;?>/website/tools.php">Tools</a></li>
		<li class='#'><a href="#">#</a></li>
		<li class='info'><a href="<?php echo $host;?>/website/info.php">More Info</a></li>
	</ul>
</nav>
<div id="banner">
	<img src="<?php echo $host;?>/website/img/banner2.png">
</div>
!-->
<div id="gamearea">
<div id="deleteallcookiesdialog">
<div id="canceldialog">&times;</div>
<div id="infobox">
Do you really want to delete this save?
<p style="font-size:18px;color:#cccccc; ">"What's done can't be undone."<p>
<br>
<div id="yes">Yes</div>
<div id="no">No</div>
</div>
</div>

<!-- TABS -->
<ul class="tabbar">
  <li><p id="menuA" class="tabs"><b>Buildings</b></p></li>
  <li><p id="menuB" class="tabs"><b>Research</b></p></li>
  <li><p id="menuC" class="tabs"><b>Energy Goals</b></p></li>
</ul>
<div class="clear"></div>
<div id="tabA" class="tabClass">
<br>
  <h2>Buildings</h2>
  <p>Build more buildings to gain more energy</p>

<div id="click1">Click</div><div id="progress1" style="float:right;">
  <div id="bar1"></div>
</div>
<div class="clear"></div>
<div id="left">

<span>Energy per click (epc): </span><span id="gain"></span>
<br>
<span>Energy per second (eps): </span><span id="epsgain"></span>

<div class="clear"></div><br>
<table style="font-size:22px;"><tr><td><div style="">Total Energy: </div></td><td><div id="thetotal" style=""></div></td></tr></table>
<table style="font-size:22px;"><tr><td><div style="">Total Rese: </div></td><td><div id="thetotal" style=""></div></td></tr></table>
<div class="clear"></div>
<div id="clickbuy1" class="clickbuy">Buy More Energy Pylons T1<span class="buytooltiptext">
<span>Increases epc by </span><b><span id="epcplus1"></span></b><span> each.</span>
<br>
<span>Increases epc by </span><b><span id="epctotal1"></span></b><span> in total.</span>
<br>
<span>(</span><b><span id="clickpercentage1"></span></b><span>% of total)</span>

</span>
</div>

<span class="details"><span>Cost: </span><span id="epcost1" ></span><span id="errorcost1" class="errorcost">Not enough energy</span><span> Amount acquired:</span><span id="epnum1"></span></span>

<div class="clear"></div>

<div id="clickbuy2" class="clickbuy">Buy More Energy Pylons T2<span class="buytooltiptext">
<span>Increases epc by </span><b><span id="epcplus2"></span></b><span> each.</span>
<br>
<span>Increases epc by </span><b><span id="epctotal2"></span></b><span> in total.</span>
<br>
<span>(</span><b><span id="clickpercentage2"></span></b><span>% of total)</span>

</span>
</div>

<span class="details"><span>Cost: </span><span id="epcost2" ></span><span id="errorcost2" class="errorcost">Not enough energy</span><span> Amount acquired:</span><span id="epnum2"></span></span>

<div class="clear"></div>
<br>
<hr style="margin-right:3px;">
<br>

<div id="autobuy1" class="autobuy">Buy More Energy Generator T1 <span class="buytooltiptext">
<span>Increases eps by </span><b><span id="epsplus1"></span></b><span> each.</span>
<br>
<span>Increases eps by </span><b><span id="epstotal1"></span></b><span> in total.</span>
<br>
<span>(</span><b><span id="autopercentage1"></span></b><span>% of total)</span>
</span>
</div>
<span class="details"><span>Cost: </span><span id="egcost1" ></span><span id="autoerrorcost1" class="errorcost">Not enough energy</span><span> Amount acquired:</span><span id="egnum1"></span></span>

<div class="clear"></div>

<div id="autobuy2" class="autobuy">Buy More Energy Generator T2<span class="buytooltiptext">
<span>Increases eps by </span><b><span id="epsplus2"></span></b><span> each.</span>
<br>
<span>Increases eps by </span><b><span id="epstotal2"></span></b><span> in total.</span>
<br>
<span>(</span><b><span id="autopercentage2"></span></b><span>% of total)</span>
</span>
</div>
<span class="details"><span>Cost: </span><span id="egcost2" ></span><span id="autoerrorcost2" class="errorcost">Not enough energy</span><span> Amount acquired:</span><span id="egnum2"></span></span>


<div class="clear"></div>

<div id="autobuy3" class="autobuy">Buy More Energy Generator T3<span class="buytooltiptext">
<span>Increases eps by </span><b><span id="epsplus3"></span></b><span> each.</span>
<br>
<span>Increases eps by </span><b><span id="epstotal3"></span></b><span> in total.</span>
<br>
<span>(</span><b><span id="autopercentage3"></span></b><span>% of total)</span>
</span>
</div>
<span class="details"><span>Cost: </span><span id="egcost3" ></span><span id="autoerrorcost3" class="errorcost">Not enough energy</span><span> Amount acquired:</span><span id="egnum3"></span></span>






<br>
<div id="a" style="display:none;"></div>
<div id="auto" style="display:none;">Auto click</div>

<div id="won" style="font-size:40px; display:none;"><b>Congrats, you won the game!</b></div>
</div>
</div>
<div id="tabB" class="tabClass">
  <br>
  <h2>Research</h2>
  <p>Research new technogoly to unlock and improve your buildings an others</p>
  
  
<div id="upgradehead">Upgrades:</div>
<div id="upgrades">
<div id="upgradeboxcontainer">
<div class="clear"></div>
<canvas id="myCanvas" width="500px" height="300px"></canvas>
<div id="overlay">

</div>

<!--
<div class="upgradebox" id="upgradeenergy1"><img src="<?php echo $host;?>/website/img/energy1.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradeenergy1cost"></span><br><span>Increase energy multiplyier by <b>0.05</b></span></span></div>
<div class="upgradebox" id="upgradeenergy2"><img src="<?php echo $host;?>/website/img/energy2.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradeenergy2cost"></span><br><span>Increase energy multiplyier by <b>0.05</b></span></span></div>
<div class="clear"></div>
<div class="upgradebox" id="upgradeprobarenergy1"><img src="<?php echo $host;?>/website/img/probarenergy1.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradeprobarenergy1cost"></span><br><span>Reduce progress bar operation time by <b>40ms</b>.</span></span></div>
<div class="upgradebox" id="upgradeprobarenergy2"><img src="<?php echo $host;?>/website/img/probarenergy2.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradeprobarenergy2cost"></span><br><span>Reduce progress bar operation time by <b>60ms</b>.</span></span></div>
<div class="clear"></div>
<div class="upgradebox" id="upgradet1energypylon1"><img src="<?php echo $host;?>/website/img/pylon/t1energypylon1.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradet1energypylon1cost"></span><br><span>Energy Pylons T1 will be <b>twice</b> as efficent.</span></span></div>
<div class="upgradebox" id="upgradet1energypylon2"><img src="<?php echo $host;?>/website/img/pylon/t1energypylon2.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradet1energypylon2cost"></span><br><span>Energy Pylons T1 will be <b>twice</b> as efficent.</span></span></div>
<div class="clear"></div>
<div class="upgradebox" id="upgradet2energypylon1"><img src="<?php echo $host;?>/website/img/pylon/t2energypylon1.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradet2energypylon1cost"></span><br><span>Energy Pylons T2 will be <b>twice</b> as efficent.</span></span></div>
<div class="upgradebox" id="upgradet2energypylon2"><img src="<?php echo $host;?>/website/img/pylon/t2energypylon2.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradet2energypylon2cost"></span><br><span>Energy Pylons T2 will be <b>twice</b> as efficent.</span></span></div>
<div class="clear"></div>
<div class="upgradebox" id="upgradet1generator1"><img src="<?php echo $host;?>/website/img/generator/t1generator1.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradet1generator1cost"></span><br><span>Generator T1 will be <b>twice</b> as efficent.</span></span></div>
<div class="upgradebox" id="upgradet1generator2"><img src="<?php echo $host;?>/website/img/generator/t1generator2.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradet1generator2cost"></span><br><span>Generator T1 will be <b>twice</b> as efficent.</span></span></div>
<div class="clear"></div>
<div class="upgradebox" id="upgradet2generator1"><img src="<?php echo $host;?>/website/img/generator/t2generator1.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradet2generator1cost"></span><br><span>Generator T2 will be <b>twice</b> as efficent.</span></span></div>
<div class="upgradebox" id="upgradet2generator2"><img src="<?php echo $host;?>/website/img/generator/t2generator2.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradet2generator2cost"></span><br><span>Generator T2 will be <b>twice</b> as efficent.</span></span></div>
<div class="clear"></div>
<div class="upgradebox" id="upgradet3generator1"><img src="<?php echo $host;?>/website/img/generator/t3generator1.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradet3generator1cost"></span><br><span>Generator T3 will be <b>twice</b> as efficent.</span></span></div>
<div class="upgradebox" id="upgradet3generator2"><img src="<?php echo $host;?>/website/img/generator/t3generator2.png" style="width: 100%;"><span class="upgradetooltiptext"><span>Cost: </span><span id="upgradet3generator2cost"></span><br><span>Generator T3 will be <b>twice</b> as efficent.</span></span></div>
!-->
<div class="clear"></div>
 </div>
</div>
</div>
<div id="tabC" class="tabClass">
  <br>
  <h2>Energy Goals</h2>
  <p>See your your energy goals, reach energy goals in order to earn research points</p>
</div>
<div class="clear"></div>
<!--
BOTTOM
!-->
<div id="bottom">
<div id="menucontainer">
<div id="achievementmenu" class="menubutton menubutton1">
Achievements
</div>
<div id="centernotify"></div>
<div id="settingsmenu" class="menubutton menubutton3">
Settings n Stuff
</div>
<div class="clear"></div>
<div id="statsmenu" class="menubutton menubutton2">
Stats
</div>
<div id="unlockedupgradesmenu" class="menubutton menubutton4">
Upgrades Unlocked
</div>
</div>
<div class="clear"></div>

<hr>
<div id="achievement" class="menu1 menu">
<div id="achievementnotice"></div>
<div id="achievementhead"><b>Achievements:</b></div>
<table>
<tr><td><div id="achievement1" class="achievementbox">Acquire 5 Energy Pylons T1 <span class="achievementtooltiptext">Energy progress bar operation will be reduced by 100ms</span></div></a></td><td><div id="achievement2" class="achievementbox">Acquire 10 Energy Pylons T1<span class="achievementtooltiptext">Energy multiplyier for Energy Pylon will be increased to 1.5</span></div><td></tr>

<tr><td><div id="achievement3" class="achievementbox">Click 10 times<span class="achievementtooltiptext">Energy multiplyier increased by 0.05</span></div></a></td><td><div id="achievement4" class="achievementbox">Click 100 times<span class="achievementtooltiptext">Energy multiplyier increased by 0.05</span></div></td></tr>

<tr><td><div id="achievement5" class="achievementbox">Gain 50 energy from clicking<span class="achievementtooltiptext">Energy multiplyier increased by 0.05</span></div></td><td><div id="achievement6" class="achievementbox">Gain 500 energy from clicking<span class="achievementtooltiptext">Energy multiplyier increased by 0.05</span></div></td></tr>
</table>
</div>

<div id="stats" class="menu2 menu">
<div id="statshead"><b>Stats:</b></div>
<div id="statscontainer" style="font-size:18px;">
<table>
<tr><td>Energy created (all time):</td><td><div id="createdenergy"></div></td></tr>
<tr><td>Energy created by clicking (all time):</td><td><div id="createdenergyclicking"></div></td></tr>
<tr><td>Times clicked:</td><td><div id="timesclicked"></div></td></tr>
<tr><td>Times progress bar completed:</td><td><div id="timesprobarcompleted"></div></td></tr>
<tr><td>Progress bar time taken:</td><td><div id="probartime"></div></td></tr>
<tr><td>Total buildings:</td><td><div id="totalbuildings"></div></td></tr>
<tr><td><p style="font-size:20px;">Energy multiplyier:<p></td><td><div id="emultiply"></div></td></tr>
</table>
</div>
</div>

<div id="settings" class="menu3 menu">
<div id="settingshead"><b>Settings n Stuff</b></div>
<br>
<div id="savebox">Save game</div><label style="margin-left:5px;	vertical-align: middle;">Save manually (The game autosaves every 30 seconds; Shortcut : ctrl+S)</label>
<br><br>
<div id="deleteallcookies" >Delete Save</div><label style="margin-left:5px;	vertical-align: middle;">Delete <b style="color:#FF0000;">ALL</b> of you progress.</label>

</div>

<div id="unlockedupgrades" class="menu4 menu">
<div id="settingshead"><b>Unlocked upgrades</b></div>
</div>

</div>
</div>
<div class="clear"></div>
 
<?php //include_once($root."/website/comment.php");?>
<!--
<footer>
	<h2>Social Stuff</h2>
	<links>
	<ul>
		<li><a href="http://www.youtube.com">My Youtube Channel</a></li>
		<li><a href="http://www.facebook.com"><img src="<?php echo $host;?>/website/img/fb.png" style="margin-right:5px;margin-bottom:-5px;"/> My Facebook</a></li>
	</ul>
	</links>
	<div class="one-third">
	<p><br><br>End of page<br><br></p>
	</div>
	<div class="one-third">
	<p><br><br>End of page <br><br>
	</p>
	</div>
	<div class="one-third">
	<p><br><br>End of page <br><br>
	  </p>
	</div>
</footer>
!-->
</body>
</html>