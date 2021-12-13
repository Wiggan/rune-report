const express = require('express');
const router = express.Router();
const db = require('../services/db');

router.get('/', (req, res) => {
    const runes = db.instance.prepare(`SELECT rune_name FROM rune ORDER BY rune_value ASC`).all([]);
    const holy_grail_items = db.instance.prepare(`SELECT item_name FROM holy_grail_item ORDER BY item_name ASC`).all([]);
    res.render('add_finding', {
        runes: runes,
        holy_grail_items: holy_grail_items
    });
});


module.exports = router;