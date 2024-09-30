const express = require("express");
const app=express();

app.post("/user",(req,res)=>{
//Route Handler 
res.send("Route Handler 1!");
})

app.listen(7777,()=>{    console.log('Server is listning on port 777..... ')
})