

import admin from '../controller/admin/admin'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("adminJS");
  admin.login(req, res, next);
});

module.exports = router;
