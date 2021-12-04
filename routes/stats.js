const express = require('express');
const router = express.Router();
const db = require('../services/db');

router.get('/', function (req, res, next) {
    try {
        const player_name = 'Erik';
        const rune_data = db.instance.prepare(`SELECT rune_name, date(finding_date) FROM finding JOIN player ON finding.player_id = player.player_id JOIN rune ON finding.rune_id = rune.rune_id WHERE finding.player_id = ?`).all([player_name]);
        const holy_grail_item_data = db.instance.prepare(`SELECT item_name, date(finding_date) FROM holy_grail_item_finding JOIN player ON holy_grail_item_finding.player_id = player.player_id JOIN holy_grail_item ON holy_grail_item_finding.holy_grail_item_id = holy_grail_item.holy_grail_item_id WHERE holy_grail_item_finding.player_id = ?`).all([player_name]);
        res.render('stats', { player_name: player_name, runes: rune_data, holy_grail_items: holy_grail_item_data });
    } catch (err) {
        console.error(`Error while getting runes `, err.message);
        next(err);
    }
});

module.exports = router;