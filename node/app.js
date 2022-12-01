const express = require('express')
const fs = require('fs');
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())
// app.use(express.static('storage'));

app.get('/', (req, res) => {
    fs.readdir('storage', (err, data) => {
        if (err) return err;
        res.send(data)
    })
})

app.get('/:name/info', (req, res) => {
    param = req.params.name
    console.log(param);
    fs.stat(`./storage/${param}`, (err, stat) => {
        if (err) {
            return err
        }
        res.send(stat)
    })
})
app.get('/:name/show', (req, res) => {
    param = req.params.name
    fs.readFile(`./storage/${param}`, (err, data) => {
        if (err) {
            console.log(err);
        } res.send(data.toString())

    })
})
app.delete('/:name/delete', (req, res) => {
    param = req.params.name
    fs.unlink(`./storage/${param}`, (err, data) => {
        if (err) {
            console.log(err);
        } res.send('completed')

    })
})

app.put('/:name/rename', (req, res) => {
    let param = req.params.name
    let newName = req.body.name
    fs.rename(`./storage/${param}`, `./storage/${newName}`, (err) => {
        if (err) {
            return err
        }
        res.send('completed')
    })
})
app.post('/:name/copy', (req, res) => {
    let param = req.params.name
    let newName = param.split('.')
    let num
    fs.copyFile(`./storage/${param}`, `./storage/${newName[0]}(1).${newName[1]}`, (err) => {
        console.log(err);
    })
})
app.listen(5002, () => {
    console.log('listining');
})