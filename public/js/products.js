//控制购买数量
function buyNum(flag){
	var buynum=document.getElementById('buynum');
	var addnum=document.getElementById('addnum');
	var cutnum=document.getElementById('cutnum');
	if(flag==1){
		buynum.value=parseInt(buynum.value)+1;
	}else if(flag==2 && buynum.value>1){
		buynum.value=parseInt(buynum.value)-1;
	}
	if(buynum.value>1){
		cutnum.style.color='#333';
	}else{
		cutnum.style.color='#999';
	}
}
//清除原本样式
function clearInit(arr){
	for(var i=0;i<arr.length;i++){
		arr[i].className='';
	}
}
//选择颜色、版本、套餐
function chooseColor(f,a){
	var desc4=document.getElementById('desc4');
	var desc4a=desc4.getElementsByTagName('a');
	var desc5=document.getElementById('desc5');
	var desc5a=desc5.getElementsByTagName('a');
	var desc6=document.getElementById('desc6');
	var desc6a=desc6.getElementsByTagName('a');
	var pcolor=document.getElementsByName('pcolor');
	var selcol=document.getElementById('selcol');
	var selver=document.getElementById('selver');
	var selcon=document.getElementById('selcon');
	if(f==1){
		clearInit(desc4a);
		desc4a[a].className='ahover';
		selcol.innerHTML=pcolor[a].innerHTML;
	}else if(f==2){
		clearInit(desc5a);
		desc5a[a].className='ahover';
		selver.innerHTML=desc5a[a].innerHTML;
	}else if(f==3){
		clearInit(desc6a);
		desc6a[a].className='ahover';
		selcon.innerHTML=desc6a[a].innerHTML;
	}
}
//保障服务二选一
function hideService(flag){
	var ser1_inp1=document.getElementById('ser1_inp1');
	var ser1_np2=document.getElementById('ser1_inp2');
	var ser2_inp1=document.getElementById('ser2_inp1');
	var ser2_np2=document.getElementById('ser2_inp2');
	var ser1=document.getElementById('ser1');
	var ser2=document.getElementById('ser2');
	var serv1=document.getElementById('serv1');
	var serv2=document.getElementById('serv2');
	if(flag==1 && ser1_inp1.checked==true){
		ser1_inp2.checked=false;
		ser1.innerHTML=ser1_inp1.value;
		serv1.style.border='1px solid #ca141d';
	}else if(flag==2 && ser1_inp2.checked==true){
		ser1_inp1.checked=false;
		ser1.innerHTML=ser1_inp2.value;
		serv1.style.border='1px solid #ca141d';
	}else if(ser1_inp1.checked==false && ser1_inp2.checked==false){
		serv1.style.border='1px solid #ccc';
	}
	if(flag==3 && ser2_inp1.checked==true){
		ser2_inp2.checked=false;
		ser2.innerHTML=ser2_inp1.value;
		serv2.style.border='1px solid #ca141d';
	}else if(flag==4 && ser2_inp2.checked==true){
		ser2_inp1.checked=false;
		ser2.innerHTML=ser2_inp2.value;
		serv2.style.border='1px solid #ca141d';
	}else if(ser2_inp1.checked==false && ser2_inp2.checked==false){
		serv2.style.border='1px solid #ccc';
	}
}
//鼠标移动到缩略图上，切换图片并增加红色外边框
function lookDetail(a){
	var look=document.getElementById('lookdetail');
	var show=document.getElementById('showdetail');
	var lookimg=look.getElementsByTagName('img');
	var bigimg=document.getElementById("bigimg");
	var arrImg=['img/showdetail.jpg','img/showdetail2.jpg','img/showdetail3.jpg','img/showdetail4.jpg','img/showdetail5.jpg','img/showdetail6.jpg','img/showdetail7.jpg']
	show.src=arrImg[a];
	bigimg.src=arrImg[a];
	clearInit(lookimg);
	lookimg[a].className='ahover';
}
//选购推荐搭配
function selectBuy(){
	var sel=document.getElementsByName('sel');
	var num=document.getElementById('num');
	var money=document.getElementById('addbuy_span');
	var mon=document.getElementsByName('mon');
	var numb=0,sum=2299;
	for(var i=0;i<sel.length;i++){
		if(sel[i].checked==true){
			numb++;
			var m=mon[i].innerHTML;
			m=parseFloat(m.slice(m.indexOf('￥')+1));
			sum+=m;
		}
	}
	num.innerHTML=numb;
	money.innerHTML=sum+'.00';
}
//控制div随着鼠标移动
function goMove(){
		document.onmousemove=function(e){
		var video=document.getElementById('video');
		if(video.style.display=='block'){
			return;
		}
		var div=document.getElementById("div1");
		var dd=document.getElementById("dd");
		var changeimg=document.getElementById("changeimg");
		var bigimg=document.getElementById("bigimg");
		var x=e.clientX;
		var y=e.clientY;
		var divx1 = dd.getBoundingClientRect().left;
		var divy1 = dd.getBoundingClientRect().top;
		var divx2 = divx1+ dd.offsetWidth;
		var divy2 = divy1 + dd.offsetHeight;
		if( x < divx1 || x > divx2 || y < divy1 || y > divy2){
			document.onmousemove=null;
			div.style.display='none';
			changeimg.style.display='none';
		}else if(((x<=divx1+100)||(x>=divx2-100)) && (y>=divy1+100 && y<=divy2-100)){
			changeimg.style.display='block';
			div.style.display='block';
			div.style.top=y-divy1-100+"px";
			bigimg.style.top=-(y-divy1-100)*(810/450)+"px";
		}else if(((y<=divy1+100)||(y>=divy2-100)) && (x>=divx1+100 && x<=divx2-100)){
			changeimg.style.display='block';
			div.style.display='block';
			div.style.left=x-divx1-100+"px";
			bigimg.style.left=-(x-divx1-100)*(810/450)+"px";
		}else if(((x<=divx1+100)||(x>=divx2-100)) && (y<=divy1+100 || y>=divy2-100)){
			changeimg.style.display='block';
			div.style.display='block';
		}else if(((y<=divy1+100)||(y>=divy2-100)) && (x<=divx1+100 || x>=divx2-100)){
			changeimg.style.display='block';
			div.style.display='block';
		}else{
			changeimg.style.display='block';
			div.style.display='block';
			div.style.left=x-divx1-100+"px";
			bigimg.style.left=-(x-divx1-100)*(810/450)+"px";
			div.style.top=y-divy1-100+"px";
			bigimg.style.top=-(y-divy1-100)*(810/450)+"px";
		}
	}
}	
//显示/隐藏视频
function showVideo(){
	var video=document.getElementById('video');
	video.play();
	video.style.display='block';
}
function closeVideo(){
	var video=document.getElementById('video');
	video.pause();
	video.style.display='none';
}
function hideChange(){
	var changeimg=document.getElementById("changeimg");
	changeimg.style.display='none';
}
