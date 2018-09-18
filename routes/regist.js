var express = require('express');
var router = express.Router();

import Regist from '../controller/regist/regist'

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond of Regist -- get');
});

router.post('/', Regist.regist);

module.exports = router;
