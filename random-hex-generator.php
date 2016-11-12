<?php
error_reporting(E_ALL & ~E_NOTICE);
include_once($_SERVER['DOCUMENT_ROOT']."/website/addview.php");
include_once($_SERVER['DOCUMENT_ROOT']."/website/connection.php");		

if($_POST['length']) {
	$length = mysqli_real_escape_string($dbCon,$_POST['length']);
	$bytes = random_bytes($length);
	$hex = bin2hex($bytes);
	$hexlength = strlen($hex);
} else {
	$length = "256"; 
}
?>
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<title>Random hex generator</title>
		<link href="<?php echo $host;?>/website/style.css" rel="stylesheet">
		<style>
	nav li a:hover {
		background: #DADADA;
		color: #454545;
	}
#generator{
	width:100%;
	background:#6B6B6B;
	height:auto;
	padding:10px;
} 

#generator label.field {
	text-align: right;
	width: 250px;
	float: left;
	font-weight:bold;
}
#generator form{
	float:none;
	margin:0 0;
	font-size:23px;
	width:100%;
	height:auto;
}
#generatebutton {
	margin-top:5px;
	width:100%;
	height:30px;
}
#result {
	border-width:1px;
	border-color:#FFFFFF;
	border-style:solid;
	background:#737373;
	height:auto;
	min-height: 150px;
	margin-top:15px;
	width:100%;
	padding:5px;
	word-break: break-all;
}
</style>
	</head>
<body>

<div style="background-image: url('<?php echo $host;?>/website/img/hx2003.png'); width:350px; height:200px; background-repeat:no-repeat; margin-bottom:50px;"></div>

<?php include_once($_SERVER['DOCUMENT_ROOT']."/website/searchbar.php");?>

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


<fieldset id="generator">
<form action="<?php echo $host?>/website/tools/random-hex-generator.php" method='post'>
 <label class="length" for="Length">Byte Length:</label><input type="number" name="length" min="1" max="8096" style="height:25px;" value="<?php echo htmlspecialchars($length);?>"/>(Max 8096) | Hex length: <?php echo htmlspecialchars($hexlength);?><br>
  <input type="submit" id="generatebutton" value="Generate random hex">
</form>
<div id="result">
<?php echo $hex;?>
</fieldset>


<div class="clear"></div>

<?php include_once($root."/website/comment.php");?>

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
</body>
</html>