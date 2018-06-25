const express = require('express')
const hbs = require('hbs')

const app = express()

require('./hbs/helpers')  // Importando helpers de HBS

const port = process.env.PORT || 3000

app.use(express.static(__dirname + '/public'))  //Sirve archivos estáticos desde la carpeta 'public'

hbs.registerPartials(__dirname + '/views/partials') // Registrando parciales de Handlebars

// Express HBS engine
app.set('view engine', 'hbs')

app.get('/', (req, res) => {

//   let salida = {
//     nombre: 'Michael',
//     edad: 34,
//     url: req.url
//   }
//  res.send(salida)
res.render('home',{
  nombre: 'michael mejia mora'
})
})
app.get('/about', (req, res) => {
  res.render('about')
  })

// app.get('/data', (req, res) => {
//   res.send('Hola data')
// })

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`))