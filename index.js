/* Dependencias y variables requeridas */
require('dotenv').config()
require('./src/config/bd.config')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT
const path = require('path')
const publicationsRoutes = require('./src/routes/publication.routes.js')

/* Middlewares */
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, './public')))
app.use(express.json())
app.use(cors())
app.disable('x-powered-by')
//  Establecemos EJS como nuestro motor de plantillas
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'src/views'))

/* Routes */
app.use(publicationsRoutes)

//  Puerto de escuchar
app.listen(PORT, () => { console.log('El servidor esta corriendo en el puerto: ' + PORT) })
