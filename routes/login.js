var express = require('express');
var router = express.Router();

import formidable from 'formidable';  //序列化form表单，第三方插件
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
