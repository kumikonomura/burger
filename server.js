const express = require('express')
const exphbs = require('express-handlebars')
const { join } = require('path')
const app = express()

const routes = require('./routes')

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.engine('.hbs', require('express-handlebars')({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', '.hbs')

app.use(routes)

app.listen(3000, () => {
  console.log('server listening on port: 3000')
})
