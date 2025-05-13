// 导入express模块
const express=require('express')
// 导入express-session模块
const expressSession=require('express-session')
// 导入path模块
const path=require('path');
// 构建服务器实例对象
const app=express()
// 注册中间件创建session对象
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(expressSession({
    secret:'node.js',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:10000
    }
}));

app.post('/login',(req,res)=>{
    const params=req.body;
    const username=params.username;
    const password=params.password;
    if(!(username=='xiaoming' && password=='123456'))
    {
        res.send({msg:'failure',str:'登陆失败'});
    }
    else
    {
        req.session.username=username;
        res.send({msg:'success',str:'登陆成功'});
    }
});

app.get('/visit',(req,res)=>{
    if(req.session.username!='xiaoming')
    {
        res.send({msg:'failure',str:'请先登陆'});
    }
    else
    {
        res.send({msg:'success',str:`登陆的用户:${req.session.username}`});
    }
});

app.listen(3000,()=>{
    console.log('服务器已启动...')
});