// eslint-disable-next-line new-cap
const router = require('express').Router();

const kakao = require('./kakao');

router.use('/kakao', kakao);

module.exports = router;
