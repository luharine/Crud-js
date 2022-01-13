const express = require('express')
const mongoose =require('mongoose')
const app = express()

const url = "mongodb://localhost/AlienDbex"
mongoose.connect(url,{useNewUrlParser:"true"})
const con = mongoose.connection
con.on("open",()=>
{
    console.count("mongo connected...")
})
app.use(express.json())
const alienRouter = require('./routes/aliens')
app.use("/aliens",alienRouter)




    app.listen(8080,
    
        ()=>{
    console.log("server is running...")
             }
    
)






