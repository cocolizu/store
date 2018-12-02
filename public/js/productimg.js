//控制缩略图左右移动
var count=0;
var lookimg=document.getElementById('lookimg');
function preImg(){
	if(count==0) return;
	count+=75;
	lookimg.style.transform='translate('+count+'px,0px)';
}
function nextImg(){
	if(count==-150) return;
	count-=75;
	lookimg.style.transform='translate('+count+'px,0px)';
}
	