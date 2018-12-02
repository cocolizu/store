//引入express模块
const express=require('express');
//引入地址池
var pool=require('../pool.js');
//创建路由器
var router=express.Router();
//添加路由
router.get('/list',(req,res)=>{
	var data=req.query;
	var sql='SELECT * FROM vmall_list LIMIT ?,?';
	pool.query(sql,[parseInt((data.page-1)*data.count),parseInt(data.count)],(err,result)=>{
		if (err) throw err;
		if(result.length>0){
			res.send(result);
		}
	});
});
//导出路由器
module.exports=router;