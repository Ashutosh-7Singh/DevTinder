const express = require("express");
const  app= express();

app.use("/",(req,res)=>{
    res.send("Namaste Dev Tinder")
})

app.use("/test",(req,res)=>{
    res.send("Hai Moni this is test!");
});

app.use("/hello", (req,res)=>{
    res.send("this is Heloo Moni")
})


app.listen(9632, ()=>{
    console.log("Sercer is Successfully runnig on prot 9632");
    
});