const express = require('express');
const router = express.Router();
const aulasPendentesController = require('../controllers/aulasController');

router.use('/', aulasPendentesController);

module.exports =  router;