const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');
	
// GET /movies/new
router.get('/', flightsCtrl.index);
router.get('/new', flightsCtrl.new);
router.post('/new', flightsCtrl.create);

module.exports = router;