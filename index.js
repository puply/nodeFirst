const fs = require('fs');
var http = require("http");



var server = http.createServer((req,res)=>{

    if(req.url == "/"){
        fs.readFile("index.html",(err,html)=>{
            res.write(html)
            res.end()
        });
    }else if (req.url == "/urunler") {

        fs.readFile("urunler.html",(err,html)=>{
            res.write(html)
            res.end()
        });
    }else {

        fs.readFile("error.html",(err,html)=>{
            res.write(html)
            res.end()
        });
    }


    
})


server.listen(3000,()=>{
    console.log("server port 3000")
})

