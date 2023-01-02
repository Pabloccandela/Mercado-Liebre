const express = require('express');
const app = express();

//config
const PORT=3000;

//Carpeta public
const path = require('path');
app.use(express.static(path.join(__dirname,"../public")))



//Get
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/index.html"));
})

app.get("/register",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/register.html"));
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/login.html"));
})

app.get("/mantenimiento",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../views/nodisponible.html"));
})


//Listen
app.listen(PORT,()=>{
    console.log("Server start on http://localhost:"+PORT);   
})

