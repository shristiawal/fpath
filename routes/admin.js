const path =require('path');

const express = require('express');

const rootDir =require('../util/path');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.status(404).sendFile(path.join(rootDir,'views','add-production.html'));
});

router.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
