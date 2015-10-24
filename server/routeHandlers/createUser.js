var db = require('../db');
var paypal = require('../paypal');

module.exports = function createUser(req, res) {
  var newUsername = req.body.username;
  var newUserPassword = req.body.password;
  var newUserInfo = req.body.userInfo;
  var newUserCreditCard = req.body.creditCard;
  var newUserProfileImg = req.body.profileImg;
  var newUser = {
    info: newUserInfo,
    creditCard: null,
    preferences: [],
    profileImg: newUserProfileImg
  };

  // db.createUser(newUser);

  paypal.storeCreditCard(db.paypalServerAuth.token, newUsername, newUserCreditCard)
  .then(function(creditCardVault) {
    newUser.creditCard = creditCardVault.id;
    db.users[newUsername] = newUser;
    res.send("User created successfully");
  });
};

