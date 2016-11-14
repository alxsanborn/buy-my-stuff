var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var User = require('../../models/user');

pry = require('pryjs')

//Gets all users
router.get('/', function(req, res){
  debugger
  User.find(function(err, users) {
           if (err)
               res.send(err);

           res.json(users);
       });
});

//Add new user
router.post('/', function(req, res){
  eval(pry.it)
  var newFirstName = req.query.first_name;
  var newLastName = req.query.last_name;
  var newBusinessName = req.query.business_name;
  var newEmail = req.query.email;
  var newPassword = req.query.password


  var newUser = new User ({
    first_name: newFirstName,
    last_name: newLastName,
    business_name: newBusinessName,
    email: newEmail,
    password: newPassword
 });

    newUser.save(function(err, users) {
            if (err)
                res.send(err);

            res.json(users);
        });
      });


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
