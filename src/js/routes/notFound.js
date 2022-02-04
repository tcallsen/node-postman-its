var express = require('express');
var router = express.Router();

// return 404 for all other requests
router.get('*', function(req, res, next) {
  res.sendStatus(404)
})

module.exports = router;
