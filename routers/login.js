//引入express模块
const express=require('express');
//引入地址池
var pool=require('../pool.js');
//创建路由器
var router=express.Router();
//往路由中添加路由
//登录路由
router.post('/login',(req,res)=>{
	var data=req.body;
	//console.log(data);
	res.cookie('username',data.uname);
	var sql ='SELECT * FROM vmall_user WHERE uname=? and upwd=?';
	pool.query(sql,[data.uname,data.upwd],(err,result)=>{
		if(err) throw err;
		if(result.length>0){
			res.send('1');
		}else{
			res.send('用户名或密码错误！');
		}
	});
});
router.get('/delcookie',(req,res)=>{
	var data=req.query.u;
	res.cookie('username',data);
	res.send('1');
});
//导出路由器
module.exports=router;