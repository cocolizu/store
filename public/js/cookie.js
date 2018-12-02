//获取cookie的值
function getCookie(){
	if(document.cookie!=''){
		var init=document.getElementById('init');
		var init2=document.getElementById('init2');
		var wellogin=document.getElementById('wellogin');
		var wellogin2=document.getElementById('wellogin2');
		var arr=document.cookie.split(';');
		var info=arr[0].split('=');
		if(info[1]!=''){
			wellogin.style.display='none';
			wellogin2.style.display='block';
			init.style.display='block';
			init2.style.display='none';
			document.getElementById('userinfo2').innerHTML='欢迎,'+info[1];
		}
	}	
}
//退出时删除cookie
function delCookie(){
	var msg=confirm('您确定要退出当前用户吗？');
	if(msg){
		var xhr=null;
		var un='';
		if(window.XMLHttpRequest){
			xhr=new XMLHttpRequest();
		}else{
			xhr=new ActiveXObject('Microsoft.XMLHTTP');
		}
		xhr.onreadystatechange=function (){
			if(xhr.readyState==4 && xhr.status==200){
				window.location.href='../index.html';
			}
		}
		xhr.open('get','/vmall/delcookie?u='+un,true);
		xhr.send();
	}else{
		return;
	}
}