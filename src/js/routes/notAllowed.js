var express = require('express');
var router = express.Router();

// return 405 for non GET requests
router.all('*', function(req, res, next) {
  res.send(405)
})

module.exports = router;
