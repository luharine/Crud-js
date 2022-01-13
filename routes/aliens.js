

var express = require('express')
var app = express()
const router = express.Router()
const Alien = require('../models/alien')


router.get('/get',async (req,res)=>{
    
    try{
        const aliens = await Alien.find()
        res.json(aliens)
        res.send("get request")
    }
    catch(err)
    {
        res.send("error"+ err)
    }
})

router.post('/post',async(req,res)=>
{
    let alien = new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })    


        try{
            const a1 = await alien.save()
            res.json(a1)
        }
        catch(err)
        {
            res.send('Error')
        } 
})

module.exports = router;