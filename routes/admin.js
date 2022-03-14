const express = require('express');
const produtController = require('../controllers/myController')

const router = express.Router();

router.get('/add-product',produtController.getAddProduct);

//router.post('/product',(req,res,next) => {  });


module.exports = router;
