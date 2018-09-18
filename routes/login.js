var express = require('express');
var router = express.Router();

import Login from '../controller/login/login'

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond of login -- get');
});

// router.get('/account', function(req, res, next) {  //添加子路由
//   res.send('respond of login -- get -- account');
// });

router.post('/', Login.login);

module.exports = router;
