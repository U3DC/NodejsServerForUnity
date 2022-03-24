'use strict';
var express = require("express");
var path = require("path");
var app = express();
const PORT = process.env.PORT  || 3000
app.listen(PORT,(err) => {
    if(err)
    {
       console.log("连接出错！");
    }
    console.log("连接正常","http://127.0.0.1:" + PORT);
    } );

    
app.use("/",express.static(path.join(process.cwd(),"www_root")));

app.get("/uploadData",function(req,res){
    res.send("hello unity");
});


var fs = require("fs");
app.put("/UploadImgFile",function(req,res){
    var fd = fs.openSync("./upload/unity2022.gif","w");
    req.on("data",function(data){
        fs.write(fd,data,0,data.length,function(){});
    });
    req.on("end",function(){
        res.send("UploadSucess!");
        fs.close(fd,function(){});
    });
});