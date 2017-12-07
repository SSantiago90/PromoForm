var express = require('express');
var modelCtrl = require('../controllers/modelCtrl');
var router = express.Router();

var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Supermercado 207 - Sorteo de Navidad' });
});

router.get('/new', function(req, res, next) {
  res.render('index', { title: 'Supermercado 207 - Sorteo de Navidad' });
});

router.post('/new', bodyParser.urlencoded({extended : false}), modelCtrl.crear);

module.exports = router;


