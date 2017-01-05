<?php
$qualifications= "$_POST[qualifications]";
if($qualifications=="A"){
	$qualifications="本科";
}elseif($qualifications=="B"){
	$qualifications="硕士";
}elseif($qualifications=="C"){
	$qualifications="博士";
}else{
	$qualifications="博士";
}


$partake= "$_POST[partake]";
if($partake=="Y"){
	$partake="是";
}elseif($partake=="N"){
	$partake="否";
}else{
	$partake="否";
}

$car= "$_POST[car]";
if($car=="A"){
	$car="A.无需接送";
}elseif($car=="B"){
	$car="B.北京航空航天大学";
}elseif($car=="C"){
	$car="C.北京邮电大学";
}elseif($car=="D"){
	$car="D.北京大学";
}elseif($car=="E"){
	$car="E.清华大学罗姆楼";
}elseif($car=="F"){
	$car="F.清华大学东主楼";
}elseif($car=="G"){
	$car="G.清华大学9003大楼";
}else{
	$car="";
}
$infoFull="";
$infoA= "$_POST[infoA]";
if($infoA=="Y"){
	$infoA="A.蓝剑计划";
	$infoFull=$infoFull."A";
}else{
	$infoA="";
}

$infoB= "$_POST[infoB]";
if($infoB=="Y"){
	$infoB="B.公司战略";
	$infoFull=$infoFull."B";
}else{
	$infoB="";
}

$infoC= "$_POST[infoC]";
if($infoC=="Y"){
	$infoC="C.成长发展";
	$infoFull=$infoFull."C";
}else{
	$infoC="";
}

$infoD= "$_POST[infoD]";
if($infoD=="Y"){
	$infoD="D.人才理念";
	$infoFull=$infoFull."D";
}else{
	$infoD="";
}

$infoE= "$_POST[infoE]";
if($infoE=="Y"){
	$infoE="E.薪酬福利";
	$infoFull=$infoFull."E";
}else{
	$infoE="";
}

$infoF= "$_POST[infoF]";
$infoOther= "$_POST[infoOther]";
if($infoF=="Y"){
	$infoF="F.其他";
	$infoFull=$infoFull."F";
}else{
	$infoF="";
	$infoOther= "";
	
}


$con = mysql_connect("localhost","ztebj","ztebj1234");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }mysql_select_db("ztebj", $con);$sql="INSERT INTO information 
  (name, phone,school, major,qualifications,
  partake,car,info,infoA,infoB,infoC,infoD,infoE,infoF,infoOther)
VALUES
('$_POST[name]','$_POST[phone]','$_POST[school]','$_POST[major]','$qualifications',
'$partake','$car','$infoFull','$infoA','$infoB','$infoC','$infoD','$infoE','$infoF','$infoOther')";

if (!mysql_query($sql,$con))
  {
  die('Error: ' . mysql_error());
  }
echo "1 record added";mysql_close($con)
?>