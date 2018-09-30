var express = require('express');
var router = express.Router();

import Personal from '../controller/personal/personal'

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond of Personal -- get');
});

router.post('/', function(req, res, next) {
  res.send('respond of Personal -- post');
});

router.post('/updateUserInfo', Personal.updateUserInfo);

module.exports = router;
