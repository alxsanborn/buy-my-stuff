var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var mongoose = require('mongoose'),
    db = mongoose.createConnection('localhost', 'buyMyStuffTest');
    db.on('error', console.error.bind(console, 'connection error:'));

var User = require('../models/user.js');
/* GET /users listing. */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, user) {
    if (err) return next(err);
    res.render(`/users/${req.params.id}`);
  });
});

router.post('/', function(req, res, next) {
  var newUser = new User(req.body.user)
  newUser.save(function(err, user){
    res.render(`/users/${req.params.id}`)
  })
});


router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
