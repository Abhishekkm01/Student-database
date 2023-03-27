const express=require("express");
const app=express();
app.get('/',(req,res)=>{
res.send("hello")
})
app.get('/products',(req,res)=>{
    res.send("products")
})

app.listen(8000)