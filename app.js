var cookie = require('cookie');
//引入express模块
const express=require('express');
//引入第三方中间件
const bodyparser=require('body-parser');
//引入路由器
const login=require('./routers/login.js');
const list=require('./routers/list.js');
//创建web服务器
var app=express();
//设置监听端口
app.listen(3000,()=>{
	console.log('success');
});
//托管静态资源
app.use(express.static('./public'));
app.use(bodyparser.urlencoded({
	extended:false
}));
//挂载
app.use('/vmall',login);
app.use('/vmall',list);