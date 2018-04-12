var express = require('express');
var router = express.Router();
const {signUp, signIn} =require('../controllers/userController')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', signUp)
router.post('/signin', signIn)

module.exports = router;
