const express = require("express")
const app = express()

app.get("/api",(req,res)=>{
    res.json({"users":["HELLO","Sigma","Joe"]})
})

app.listen(5000,() => {
    console.log("Server start work 5000")
})