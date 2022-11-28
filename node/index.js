// const express = require('express')
// const fs = require('fs');
// const app = express()
// const path = require('path');
// const cors = require('cors')
// app.use(express.json())
// app.use(cors())
// app.use(express.static('storage'));
 

// app.get('*', (req, res) => {
//     fs.readdir(`storage${req.url}`, (err, data) => {
//         if (err) {
//             res.status(404).json({msg:"not found"})
//             return
//         }
//         res.json(data.map(item => {
//             return {stat:fs.statSync(`./storage${req.url}${item}`),name:item,path:`${req.url}${item}`}
//         }))
//     })
// })
// app.get('/:filename', (req, res) => {
//     const url = req.params.filename
//     console.log(url);
//     fs.stat(`/storage/${url}`, (err, stat) => {
//         if (err) {
//             console.log(err);
//         }
//         console.log('found!!');
//     })
// })

// app.listen(process.env.PORT || 5002);