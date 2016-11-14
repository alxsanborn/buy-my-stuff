var express = require ('express')
    morgan = require('morgan')
    bodyParser = require('body-parser')
    app = express()

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://alex:1234@ds151917.mlab.com:51917/buymystufftest');


var users = require('./routes/api/users');
var searches = require('./routes/api/search');

app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(function(req,res, next){
  console.log("this is middleware")
  next() //tells the application to proceed in the order in which it was called (i.e. runs app.get...)
}) //runs middleware

app.get('/', function(req, res){
    res.json({message: 'Welcome to Buy My Stuff API!'});
  })

app.use('/api/users', users)

app.listen(3000, function(err){
    if (err) console.log("could not start server")
    if (!err) console.log("Server is running on port 3000")
  })
