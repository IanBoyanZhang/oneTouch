var db = require('../db');
var paypal = require('../paypal');

module.exports = function createUser(req, res) {
  var newUsername = req.body.username;
  var newUserPassword = req.body.password;
  var newUserInfo = req.body.userInfo;
  var newUserCreditCard = req.body.creditCard;
  var newUser = {
    info: newUserInfo,
    creditCard: null,
    preferences: []
  };

  paypal.storeCreditCard(db.paypalServerAuth.token, newUsername, newUserCreditCard)
  .then(function(response) {
    console.log(response);
    // db.merchants[newUsername]
    //  res.send(db.merchants[newUsername]);
  });


};