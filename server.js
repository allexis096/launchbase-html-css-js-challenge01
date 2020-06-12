const express = require('express')
const nunjucks = require('nunjucks')

const data = require('./data')

const app = express()
app.use(express.static('public'))

app.set('view engine', 'njk')

nunjucks.configure('views', {
  express: app,
  autoescape: false
})

app.get('/', function(req, res) {
  const info = {
    company: 'Rocketseat',
    description: 'A empresa que decola os programadores!',
    techs:[
      { name: 'JavaScript' },
      { name: 'NodeJS' },
      { name: 'React' },
      { name: 'React Native' }
    ],
    links: [
      { link_url: 'https://www.facebook.com/rocketseat', name: 'Facebook' },
      { link_url: 'https://www.instagram.com/rocketseat_oficial', name: 'Instagram' },
      { link_url: 'https://github.com/rocketseat', name: 'Github' }
    ]
  }

  return res.render('about', { info })
})

app.get('/courses', function(req, res) {  
  return res.render('courses', { courses: data })
})

app.use(function(req, res) {
  res.status(404).render('not-found')
})

app.listen(5000)