import path from 'path'
import './config'
import { crossDomain,agendash } from './middlewares'

const env = process.env.NODE_ENV || 'development'
var express = require('express')
var bodyParser = require('body-parser')
var app = express();
var router = express.Router()

var apiRouter = require('./routers')

// parse application/json
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

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

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'liuwill' });
});

app.use('/notify', function(req, res) {
  res.status(200).json({ name: 'SUCCESS' });
  console.log(req.headers,req.query);

  if(req.query,req.body){
    console.log(JSON.stringify(req.body))
  }
});

app.use('/api', apiRouter);

//app.use('/agenda-ui', agendaUI(agenda, {poll: 1000}));
if(process.env.HTTP_AUTH_MODE === "basic"){
  // Authentication module.
  var auth = require('http-auth');
  var basic = auth.basic({
    realm: "AGENADA-CRON-DEMO."
  }, (username, password, callback) => { 
    // Custom authentication
    // Use callback(error) if you want to throw async error.
    const defaultUsername = process.env.AUTH_USER_NAME?process.env.AUTH_USER_NAME:"liuwill"
    const defaultPassword = process.env.AUTH_PASSWORD?process.env.AUTH_PASSWORD:"123456"
    callback(username === defaultUsername && password === defaultPassword);
  });
  app.use('/agendash', auth.connect(basic), agendash);
}else{
  app.use('/agendash', agendash);
}

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

process.env.UNIT_TEST === "mocha" || app.listen(PORT, HOST)

if(module && module.exports){
  module.exports = app
}

console.log(`url: http://${HOST}:${PORT}`)
