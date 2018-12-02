//清除原本样式
function clearInit(arr){
	for(var i=0;i<arr.length;i++){
		arr[i].className='';
	}
}
//读取滚动条位置

window.onscroll=function(){
	var c=0;
	var scrollTop=document.documentElement.scrollTop;
	var movenav=document.getElementById('movenav');
	var movea=document.getElementsByName('movea');
	clearInit(movea);
	///console.log(scrollTop);
	if(scrollTop>=700 &&　scrollTop<1200){
		movenav.style.opacity=1;
		c++;
		if(c==1){
			movenav.style.transform='translate(-80px,0)';
		}
		movea[0].className='movenav_a';
	}else if(scrollTop>=1200 &&　scrollTop<1800){
		movenav.style.opacity=1;
		movea[1].className='movenav_a';
	}else if(scrollTop>=1800 &&　scrollTop<2900){
		movenav.style.opacity=1;
		movea[2].className='movenav_a';
	}else if(scrollTop>=2900 && scrollTop<3600){
		movenav.style.opacity=1;
		movea[3].className='movenav_a';
	}else if(scrollTop>=3600 && scrollTop<4200){
		movenav.style.opacity=1;
		movea[4].className='movenav_a';
	}else if(scrollTop>=4200 && scrollTop<5000){
		movenav.style.opacity=1;
		movea[5].className='movenav_a';
	}else if(scrollTop>=5000 && scrollTop<=5730){
		movenav.style.opacity=1;
		c++;
		if(c==1){
			movenav.style.transform='translate(-80px,0)';
		}
		movea[6].className='movenav_a';
	}else{
		movenav.style.opacity=0;
		c--;
		movenav.style.transform='translate(80px,0)';
	}
}