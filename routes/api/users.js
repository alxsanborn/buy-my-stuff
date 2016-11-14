var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
      mongoose.connect('mongodb://alex:1234@ds151917.mlab.com:51917/buymystufftest');

var user = require('../../models/user');

//Add new user
// router.post('/users', function(req, res){
//   var user = new User();
//   user.name = req.body.name;
//
//   user.save(function(err) {
//     if (err)
//     res.send(err);
//
//     res.json({message: 'User created!'})
//   })
//   })

router.get('/', function(req, res){
  debugger
  user.find(function(err, users) {
           if (err)
               res.send(err);

           res.json(users);
       });
});

// router.post('/', function(req, res, next) {
//   var newUser = new User(req.body.user)
//   newUser.save(function(err, user){
//     res.render(`/users/${req.params.id}`)
//   })
// });
//
// router.put('/:id', function(req, res, next) {
//   User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });
//
// router.delete('/:id', function(req, res, next) {
//   User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
//     if (err) return next(err);
//     res.json(post);
//   });
// });

module.exports = router;
