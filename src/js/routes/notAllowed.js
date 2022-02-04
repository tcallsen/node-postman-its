var express = require('express');
var router = express.Router();

// return 405 for non GET requests
router.all('*', function(req, res, next) {
  res.sendStatus(405)
})

module.exports = router;
