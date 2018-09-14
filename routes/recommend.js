

import recommend from '../controller/recommend/recommend'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("recommendRouter");
  recommend.getrecommendData(req, res, next);
});

module.exports = router;
