var express = require('express');
var router = express.Router();

var users = require('../models/user');

router.get('/profile', function(req, res) {
  var userId = req.params.id; //linked to sessionId, grab later
  users.userlist(userId, function(err, userInfo){
    if (!err){
      res.render('../views/user/profile', {firstName: `${user.first_name}`});
    }
  });
});

router.get('/new', function(req, res){
  res.render('../views/user/new')
  })


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
