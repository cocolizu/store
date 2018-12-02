function getList(p,c){
	if(p===undefined) p=1;
	if(c===undefined) c=20;
	var xhr=null;
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.onreadystatechange=function(){
		if(xhr.readyState==4 &&　xhr.status==200){
			var listb=document.getElementById('listb');
			var listli=listb.getElementsByTagName('li');
			var listimg=document.getElementsByName('listimg');
			var listdesc=document.getElementsByName('listdesc');
			var listprice=document.getElementsByName('listprice');
			var listoper=document.getElementsByName('listoper');
			var listcom=document.getElementsByName('listcom');
			var listdata=xhr.responseText;
			listdata=JSON.parse(listdata);
			//console.log(listdata);
			if(listli.length>listdata.length){
				for(var k=listdata.length;k<listli.length;k++){
					listli[k].style.display='none';
				}
			}
			for(var i=0;i<listdata.length;i++){
				listli[i].style.display='block';
				listimg[i].src=listdata[i].limg;
				listdesc[i].innerHTML=listdata[i].lname;
				listprice[i].innerHTML='￥'+listdata[i].lprice;
				listoper[i].innerHTML=listdata[i].bType;
				listcom[i].innerHTML=listdata[i].lcomment+'人评价';
			}	
		}
	}
	xhr.open('get','/vmall/list?page='+p+'&count='+c,true);
	xhr.send();
}
//清除原本样式
function clearInit(arr,arr2){
	for(var i=0;i<arr.length;i++){
		arr[i].className='';
		arr2[i].style.border='1px solid #999';
	}
}
//选中修改样式
function changeStyle(a){
	var page=document.getElementById('page');
	var pageli=page.getElementsByTagName('li');
	var pagea=page.getElementsByTagName('a');
	clearInit(pagea,pageli);
	pageli[a].style.border=0;
	pagea[a].className='pageactive';
	
}
