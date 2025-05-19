//导入express模块
const express = require('express');

//导入path模块
const path = require('path');

//创建Web服务器实例对象
const app = express();

//设置静态资源托管
app.use(express.static(path.join(__dirname,'public')));

//注册中间件自动解析application/json格式的POST请求参数
app.use(express.json());

//创建GET请求方式路由
app.get('/user',(req,res) => {
    const params = req.query;
    for(let i in params){
        console.log(`参数：${i}  参数值：${params[i]}`);
    }
    res.send('GET请求参数已被处理');
});

//创建POST请求方式路由
app.post('/user',(req,res) => {
    const params = req.body;
    for(let i in params){
        console.log(`参数：${i} 参数值：${params[i]}`);
    }
    res.send('POST请求参数已被处理');
});

//监听3000端口
app.listen(3000,() => {
    console.log('服务器已启动...');
});