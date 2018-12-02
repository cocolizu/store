//实现首页中间部分的banner切换
var timer3=setInterval(()=>{turnImg();},2500);
function turnImg(){
	var showimg=document.getElementById('showimg').src;
	var url=showimg.substring(showimg.indexOf('img'));
	//alert(url);
	if(url=='img/show_phone.jpg'){
		document.getElementById('showimg').src='img/show_phone2.jpg';
	}else if(url=='img/show_phone2.jpg'){
		document.getElementById('showimg').src='img/show_phone3.jpg';
	}else if(url=='img/show_phone3.jpg'){
		document.getElementById('showimg').src='img/show_phone4.jpg';
	}else if(url=='img/show_phone4.jpg'){
		document.getElementById('showimg').src='img/show_phone.jpg';
	}
}
//鼠标悬停时，停止切换
function stopTurn(){
	clearInterval(timer3);
}
//鼠标离开时，开始切换
function startTurn(){
	timer3=setInterval(()=>{turnImg();},2500);
}