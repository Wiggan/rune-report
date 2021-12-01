const express = require('express');
const router = express.Router();
const db = require('../services/db');

/* GET quotes listing. */
router.get('/', function(req, res, next) {
  try {
    const data = db.instance.prepare(`SELECT rune_name FROM rune`).all([]);
    res.json(data);
  } catch(err) {
    console.error(`Error while getting runes `, err.message);
    next(err);
  }
});

module.exports = router;