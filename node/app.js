const express = require('express')
const fs = require('fs');
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
app.use(express.static('storage'));

app.get('/',(req,res)=>{
    fs.readdir('storage',(err,data)=>{
        if(err) return err;
        res.send(data) 
    })
})

app.get('/:name/info',(req,res)=>{
    param = req.params.name
    console.log(param);
    fs.stat(`./storage/${param}`,(err,stat)=>{
        if (err) {
            return err
        }
        res.send(stat)
    })
})
app.listen(5002,()=>{
    console.log('listining');
})