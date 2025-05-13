// 导入http模块
const http=require('http');
// 导入url模块
const url=require('url');
// 导入path模块
const path=require('path')
// 导入path模块
const fs=require('fs')
// 导入mime模块
const mime=require('mime');

//实例化对象 
const app=http.createServer();

// 监听客户端请求的信息
app.on('request',(req,res)=>{
    let pathname=url.parse(req.url).pathname;
    pathname=pathname=='/'?'/default.html':pathname;
    let realPath=path.join(__dirname,'public'+pathname);
    let type=mime.getType(realPath);
    
    fs.readFile(realPath,(err,data)=>{
        if(err)
        {
            res.writeHead(404,{'content-type':'text/plain;charset=utf8'})
            res.end('未找到该资源');
        }
        else
        {
            res.writeHead(200,{'content-type':type})
            res.end(data);
        }
    })
});

// 监听3000端口
app.listen(3000,()=>{
    console.log('服务器已启动...')
});
