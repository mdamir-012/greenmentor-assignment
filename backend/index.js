const express=require("express");
const { connection } = require("./config/db");
const app=express();

app.use(express.json());

app.get("/",(req,res)=>{
    res.send("welcome to greenmentor Api");
})

app.listen(8000, async()=>{
    try{
        await connection;
        console.log("connected to mongoDB !")

    }
    catch(error){
        console.log(error)
        console.log("error while connecting to mongoDB")
    }
    console.log("listening on port 8000");
})