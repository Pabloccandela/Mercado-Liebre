const express = require('express');
const path = require('path');
const app = express();
const mainRouters = require('./routers/mainRouters');

//config
const PORT= process.env.PORT || 3000;

// routers
app.use(mainRouters)

//Carpeta public
app.use(express.static(path.join(__dirname,"../public")))

//Listen
app.listen(PORT,()=>{
    console.log("Server start on http://localhost:"+PORT);   
})

