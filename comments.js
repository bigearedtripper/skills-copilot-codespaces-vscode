// Create web server
var express = require('express');
var router = express.Router();

// Create route for /comments
router.get('/', function(req, res, next) {
  res.send('Comments');
});


// Export module
module.exports = router;