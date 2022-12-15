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


//Listen
app.listen(PORT,()=>{
    console.log("Server start on http://localhost:"+PORT);   
})

