const functions = require('firebase-functions');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// configure api router
app.use('/api', require('./api'));
app.use('/', function(req, res, next) {
  res.status(200).send('빈 페이지 /api/kakao 로 이동');
});

exports.app = functions.https.onRequest(app);
