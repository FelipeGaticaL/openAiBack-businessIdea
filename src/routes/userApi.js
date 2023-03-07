const { Router } = require('express');
const router = Router();
const apiController = require('../controller/apiController')

router.post('/',  apiController.postApi )

module.exports = router ;