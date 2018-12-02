//实现精品推荐左右移动
var cnum=0;
var move=0;
function prePro(){
	var carousel2=document.getElementById('carousel2');
	cnum--;
	if(cnum<0){
		cnum=0;
		return;
	}else{
		move += 226;
		carousel2.style.transform='translate('+move+'px,0)';
	}
}
function nextPro(){
	var carousel2=document.getElementById('carousel2');
	cnum++;
	if(cnum>5){
		cnum=5;
		return;
	}else{
		move -= 226;
		carousel2.style.transform='translate('+move+'px,0)';
	}
}
//控制侧边栏显示/隐藏
function showAside(a){
	var phonelook=document.getElementById('phonelook');
	var notelook=document.getElementById('notelook');
	var watchlook=document.getElementById('watchlook');
	var homelook=document.getElementById('homelook');
	var commonlook=document.getElementById('commonlook');
	var selflook=document.getElementById('selflook');
	var conleftbody=document.getElementsByName('con_leftbody');
	for(var i=0;i<conleftbody.length;i++){
		conleftbody[i].style.display='none';
	}
	conleftbody[a].style.display='block';
	if(a==0){
		phonelook.style.display='block';
		notelook.style.display='none';
		watchlook.style.display='none';
		homelook.style.display='none';
		commonlook.style.display='none';
		selflook.style.display='none';
	}else if(a==1){
		phonelook.style.display='none';
		notelook.style.display='block';
		watchlook.style.display='none';
		homelook.style.display='none';
		commonlook.style.display='none';
		selflook.style.display='none';
	}else if(a==2){
		phonelook.style.display='none';
		notelook.style.display='none';
		watchlook.style.display='block';
		homelook.style.display='none';
		commonlook.style.display='none';
		selflook.style.display='none';
	}else if(a==3){
		phonelook.style.display='none';
		notelook.style.display='none';
		watchlook.style.display='none';
		homelook.style.display='block';
		commonlook.style.display='none';
		selflook.style.display='none';
	}else if(a==4){
		phonelook.style.display='none';
		notelook.style.display='none';
		watchlook.style.display='none';
		homelook.style.display='none';
		commonlook.style.display='block';
		selflook.style.display='none';
	}else if(a==5){
		phonelook.style.display='none';
		notelook.style.display='none';
		watchlook.style.display='none';
		homelook.style.display='none';
		commonlook.style.display='none';
		selflook.style.display='block';
	}
}
function hideAside(a){
	var conleftbody=document.getElementsByName('con_leftbody');
	conleftbody[a].style.display='none';
}

