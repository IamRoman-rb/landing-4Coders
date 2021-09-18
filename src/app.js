const express = require("express");
const path = require("path");
const app = express();


//Server
app.listen(process.env.PORT || 3700, function(){
    console.log("Servidor corriendo en el puerto 3700")
})

//Public Access
app.use(express.static(path.resolve(__dirname,"../public")));

//App Middlewares
//Middlewares Customs

//app settings
// app.set("view engine","ejs")
app.set('views', path.resolve(__dirname, "./views")); 

//Websites Routes Requires
const main = require("./routers/main");
app.use(main);
const user = require("./routers/user");
app.use(user);

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/error.html"))
})
//npm init -y
//npm i express