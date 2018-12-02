//首页图片轮播
var indi=document.getElementById('indicate');
var timer2=setInterval(()=>{carousel();},3500);
indi.onclick=function(e){
	stopCarLoop();
	var indicate=document.querySelector('#indicate>li.initcolor');
	var indi=e.target;
	indicate.className='';
	if(e.target.nodeName=='LI'){
		indi.className='initcolor';
		var carousels=document.querySelectorAll('#carousel a>img');
		for(var ca of carousels){
			ca.className='';
		}
		for(var ca of carousels){
			if(ca.dataset.id==indi.dataset.id){
				ca.className='show';
			}
		}
	}
	startCarLoop();
}
/*function carousel(a,b){
	var carousel=document.getElementById('carousel');
	var indicate=document.getElementById('indicate');
	var carli=indicate.getElementsByTagName('li');
	if(a!=undefined && b!=undefined){
		count=a;
		num=b;
	}else{
		count -=20;
		num++;
	}
	if(count==-100) count=0;
	if(num==5) num=0;
	carousel.style.transform='translate('+count+'%,0)';
	for(var i in carli){
		carli[i].className='';
	}
	carli[num].className='initcolor';
}*/
function carousel(){
	//var indi=document.getElementById('indicate');
	caro=document.getElementById('carousel');
	carousels=document.querySelector('#carousel a>img.show');
	indicate=document.querySelector('#indicate>li.initcolor');
	carousels.className='';
	indicate.className='';
	if(carousels.parentNode.nextElementSibling!=undefined){
		carousels.parentNode.nextElementSibling.children[0].className='show';
		indicate.nextElementSibling.className='initcolor';
	}else{
		caro.children[0].children[0].className='show';
		indi.children[0].className='initcolor';
	}
}
//鼠标悬停停止轮播
function stopCarLoop(){
	clearInterval(timer2);
}
//鼠标离开开始轮播
function startCarLoop(){
	timer2=setInterval(()=>{carousel();},3000);
}

