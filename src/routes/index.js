const { Router } = require('express');
const router = Router();


router.use('/user', require('./userApi'));

module.exports = router ;