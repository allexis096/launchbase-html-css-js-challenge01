const express = require('express')
const nunjucks = require('nunjucks')

const app = express()
app.use(express.static('public'))

app.set('view engine', 'njk')

nunjucks.configure('views', {
  express: app
})

app.get('/about', function(req, res) {
  return res.render('about')
})

app.get('/courses', function(req, res) {
  return res.render('courses')
})

app.use(function(req, res) {
  res.status(404).render('not-found')
})

app.listen(5000)