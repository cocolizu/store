//控制公告自动循环
var timer=setInterval(()=>{adviseLoop();},2500);
var a=0;
function adviseLoop(){
	var advise=document.getElementById('advise');
	a=a-50;
	if(a==-200) a=0;
	advise.style.transform='translate(0px,'+a+'px)';
}
//鼠标悬停在公告上时，停止计时
function stopAdvLoop(){
	clearInterval(timer);
}
//鼠标离开在公告上时，开始计时
function startAdvLoop(){
	timer=setInterval(()=>{adviseLoop();},2500);
}