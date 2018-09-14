

import guessLike from '../controller/guessLike/guessLike'

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("GuessLikeRouter");
  guessLike.getLikeData(req, res, next);
});

module.exports = router;
