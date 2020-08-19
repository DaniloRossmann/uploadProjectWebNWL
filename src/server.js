//Inicio e configuração de servidor
const express = require('express')
const server = express()

const { 
    pageLanding, 
    pageStudy,
    pageGiveClasses, 
    saveClasses
} = require('./pages')


server
//receber od dados do req.body
.use(express.urlencoded( { extended: true} ))
//Configuração de arquivos estáticos(css, scripts, imagens)
.use(express.static("public"))

//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//Start do server
.listen(5500)

//Configuração do nunjucks (Template Engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})


