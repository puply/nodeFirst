// const fs = require('fs');
// var http = require("http");



// var server = http.createServer((req,res)=>{

//     if(req.url == "/"){
//         fs.readFile("index.html",(err,html)=>{
//             res.write(html)
//             res.end()
//         });
//     }else if (req.url == "/urunler") {

//         fs.readFile("urunler.html",(err,html)=>{
//             res.write(html)
//             res.end()
//         });
//     }else {

//         fs.readFile("error.html",(err,html)=>{
//             res.write(html)
//             res.end()
//         });
//     }


    
// })


// server.listen(3000,()=>{
//     console.log("server port 3000")
// })



const express = require('express')
const app = express()

app.use(express.static('public'))
app.use(express.static('node_modules'))

const data = [
    {id:1 , name:"iphone 11", price:1000, isActive: true ,  imgaUrl: "img1.jpg"},
    {id:2 , name:"iphone 12", price:2000, isActive: false ,  imgaUrl: "img2.jpg"},
    {id:3 , name:"iphone 13", price:3000, isActive: false , imgaUrl: "img3.jpg"}
]

app.set("view engine","ejs")


app.use("/urunler/:id", function(req,res){
    const urun = data.find(u => u.id == req.params.id);
    res.render("urundetay", urun)
});

app.use("/urunler", function(req,res){
    res.render("urunler",{
        urunler: data})
});

app.use("/", function(req,res){
    res.render("index")
})


app.listen(3000,()=>{
console.log("express 3000 ")
})