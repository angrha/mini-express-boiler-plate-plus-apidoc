const router = require('express').Router();

/* GET index page. */
router.get('/', (req, res, next) => {
  res.send('Express, Ready');
});

module.exports = router;
