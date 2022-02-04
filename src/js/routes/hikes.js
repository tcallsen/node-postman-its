var express = require('express');
var router = express.Router();

// load sample hike data
const hikes = require('../../../data/hike_sample.json');

// GET hike details
router.get('/:hike_id?', function(req, res, next) {
  
  // validate hide id param is supplied and exists, otherwise return 400
  if (!req.params.hike_id || !hikes[req.params.hike_id]) {
    res.send(400);
  }
  
  res.send(hikes[req.params.hike_id]);
});

module.exports = router;
