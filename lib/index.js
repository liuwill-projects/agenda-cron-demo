import path from 'path'
import './config'
import { crossDomain,agendash } from './middlewares'

const env = process.env.NODE_ENV || 'development'
var express = require('express');
var app = express();
var router = express.Router();

app.set("view engine","ejs"); 
app.set('views', './views')
app.set("view options",{  
   "open":"{{",  
   "close":"}}"  
});  

app.use(express.static('public'));
app.use(crossDomain);

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
})

//app.use('/agenda-ui', agendaUI(agenda, {poll: 1000}));
app.use('/agendash', agendash);

app.use(function(err, req, res, next) {
  try {
    next()
  } catch (err) {
    //if (env === 'development') {
    console.error(err.stack)
    //} else {
    //console.error()
    //}
    res.status(500).send(err.message);
  }
});

const PORT = process.env.PORT || 8080
const HOST = process.env.HOST || '0.0.0.0'

app.listen(PORT, HOST)

console.log(`url: http://${HOST}:${PORT}`)
