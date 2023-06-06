const express = require('express')
const app = express()
const data = require('./LockerData.json')

app.get('/',(req,res) =>{
    res.send('welcome to the locker database')
})

app.get('/lockerData', (req,res) =>{
    res.send(data)
})

app.listen(3000,() => console.log('listening...'))