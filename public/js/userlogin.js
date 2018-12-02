//验证用户名和密码
function userLogin(){
	var xhr=null;
	var user=document.getElementById('user').value;
	var pwd=document.getElementById('pwd').value;
	var loginback=document.getElementById('loginback');
	var login=document.getElementById('login');
	var errorinfo=document.getElementById('errorinfo');
	if(window.XMLHttpRequest){
		xhr=new XMLHttpRequest();
	}else{
		xhr=new ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.onreadystatechange=function (){
		if(xhr.readyState==4 && xhr.status==200){
			var obj=xhr.responseText;
			//console.log(obj);
			if(obj=='1'){
				errorinfo.innerHTML='';
				login.style.display='none';
				loginback.style.display='none';
				window.location.href='../index.html';
			}else{
				errorinfo.innerHTML=obj;
				document.getElementById('pwd').value='';
			}
		}
	}
	xhr.open('post','/vmall/login',true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	xhr.send('uname='+user+'&upwd='+pwd);
}
//检查用户名和密码是否为空
function checkLogin(){
	var user=document.getElementById('user').value;
	var pwd=document.getElementById('pwd').value;
	var errorinfo=document.getElementById('errorinfo');
	if(user==''){
		return;
	}else if(pwd==''){
		return;
	}else{
		userLogin();
	}
}
//手机号登录/扫码登录
function selectLogin(a){
	var ulogin=document.getElementById('ulogin');
	var plogin=document.getElementById('plogin');
	var logininput=document.getElementById('login_input');
	var logininput2=document.getElementById('login_input2');
	if(a==1){
		ulogin.style.color='#ca141d';
		plogin.style.color='#3a3a3a';
		logininput.style.display='block';
		logininput2.style.display='none';
	}else{
		ulogin.style.color='#3a3a3a';
		plogin.style.color='#ca141d';
		logininput.style.display='none';
		logininput2.style.display='block';
	}
}
//弹出/隐藏登录框
function showOrHideLogin(n){
	var loginback=document.getElementById('loginback');
	var login=document.getElementById('login');
	if(n==1){
		loginback.style.display='block';
		login.style.display='block';
	}else{
		loginback.style.display='none';
		login.style.display='none';
	}
}
//鼠标悬停在下载app上时,显示二维码
function showDownload(){
	var download=document.getElementById('download');
	download.style.display='block';
}
//鼠标离开在下载app上时,隐藏二维码
function hideDownload(){
	var download=document.getElementById('download');
	download.style.display='none';
}