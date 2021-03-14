const express = require('express')
const server = express()

server.set('view/engine','ejs')
server.get('/',(req,res)=>{
    res.render('init.ejs')
})

server.get('/registro',(req,res)=>{
    res.render('registro.ejs')
})

server.listen(3000)