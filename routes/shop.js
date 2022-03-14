const express = require('express');

const produtController = require('../controllers/myController')

const router = express.Router();

router.get('/',produtController.getProducts);

module.exports = router;
