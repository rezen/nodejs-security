'use strict';

const express     = require('express');
const consolidate = require('consolidate');

const app = express();

const profiles = [
  {
    username: 'Cain',
    summary: '<script>alert("muahahah!"));</script>'
  },
];


app.engine('html', consolidate.pug)

app.set('view engine', 'html')
app.set('views', __dirname + '/views')

app.get('/', function(req, res){
  res.render('index', {
    title: 'Home'
  })
});

app.get('/profile/bob', function(req, res){
  res.render('profile', {
    title: 'Platforms',
    profile: {
      username: 'bob',
      summary: 'My name is bob!'
    }
  })
});

app.get('/profile/bob', function(req, res){
  res.render('profile', {
    title: 'Platforms',
    profile: {
      username: 'Cain',
      summary: '<script>alert("muahahah!"));</script>'
    }
  })
});

app.listen(3000)
console.log('Express server listening on port 3000')