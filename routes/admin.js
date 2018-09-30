

import admin from '../controller/admin/admin'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("adminJS");
  admin.getUserInfo(req, res, next);
});

/* GET home page. */
router.post('/', function(req, res, next) {
  console.log("adminJS==>post");
  admin.getUserInfo(req, res, next);
});

module.exports = router;
