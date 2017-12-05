var express = require('express');
var modelCtrl = require('../controllers/modelCtrl');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/new', modelCtrl.new);

module.exports = router;
