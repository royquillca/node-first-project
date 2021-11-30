// const http = require('http')
// http.createServer(function (req, res){
//     res.end("Hello World")
// }).listen(3000)

const express = require('express')
const app = express()


// app.use((req, res, next) => {
    // console.log('Nuevo visitante')
//     console.log(req.url)
//     next()
// })

// app.use(function (req, res) {
    // res.send('Hello World')
    // console.log(__dirname)
    // res.sendFile(__dirname + '/mipagina.html')
// })

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/mipagina.html')
})

app.get('/muestra-imagen', (req, res) => {
    res.sendFile(__dirname + '/js-logo.png')
})

app.get('/about', (req, res) =>{
    res.send("About")
})

app.get('/habilidades', (req, res) => {
    res.send("Habilidades")
})

app.get('/new', (req, res) => {
    res.sendFile("Nueva Página")
})
app.listen(process.env.PORT || 3000)






