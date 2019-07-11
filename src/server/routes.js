var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.get('/movies', getMovies);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getMovies(req, res, next) {
  res.status(200).send(data);
}
