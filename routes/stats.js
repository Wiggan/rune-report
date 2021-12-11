const express = require('express');
const router = express.Router();
const db = require('../services/db');

router.get('/', function (req, res, next) {
    try {
        const all_runes = db.instance.prepare(`SELECT player_name, rune_name, finding_date as 'finding_date' FROM finding JOIN rune ON rune.rune_id = finding.rune_id JOIN player ON player.player_id = finding.player_id ORDER BY date(finding_date) DESC`).all([]);
        res.render('stats',
            // { player_name: player_name, runes: rune_data, holy_grail_items: holy_grail_item_data }
            { all_runes: all_runes }
        );
    } catch (err) {
        console.error(`Error while getting runes`, err.message);
        next(err);
    }
});

module.exports = router;