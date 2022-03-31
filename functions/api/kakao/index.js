// eslint-disable-next-line new-cap
const router = require('express').Router();
const controller = require('./kakao.controller');

router.get('/', controller.running);

// actual endpoint that creates a firebase token with Kakao access token
router.post('/verifyToken', controller.verifyToken);

module.exports = router;
