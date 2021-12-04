const express = require('express');
const router = express.Router();
const db = require('../services/db');

/* GET findings. */
router.get('/', function (req, res, next) {
    try {

    } catch (err) {
        console.error(`Error while getting holy grail items `, err.message);
        next(err);
    }
});

/* INSERT finding. */
router.post('/', function (req, res, next) {
    try {
        console.log(req.fields);
        const { player_name, player_password, holy_grail_item_name, holy_grail_item_location } = req.fields;
        const player_id = db.instance.prepare(`SELECT player_id FROM player WHERE lower(player_name) = lower(?) AND player_password = ?`).get([player_name, player_password]);
        const holy_grail_item_id = db.instance.prepare(`SELECT holy_grail_item_id FROM holy_grail_item WHERE item_name = ?`).get(holy_grail_item_name);
        console.log("Inserting new holy grail item finding for player_id:" + JSON.stringify(player_id) + ", item id:" + JSON.stringify(holy_grail_item_id) + ", location:" + JSON.stringify(holy_grail_item_location));

        const result = db.instance.prepare(`INSERT INTO holy_grail_item_finding (player_id, holy_grail_item_id, finding_date, finding_location) VALUES (?, ?, datetime('now'), ?)`).run(player_id.player_id, holy_grail_item_id.holy_grail_item_id, holy_grail_item_location);
        if (result.changes) {
            const rune_data = db.instance.prepare(`SELECT rune_name, date(finding_date) FROM finding JOIN player ON finding.player_id = player.player_id JOIN rune ON finding.rune_id = rune.rune_id WHERE finding.player_id = ?`).all([player_id.player_id]);
            const holy_grail_item_data = db.instance.prepare(`SELECT item_name, date(finding_date) FROM holy_grail_item_finding JOIN player ON holy_grail_item_finding.player_id = player.player_id JOIN holy_grail_item ON holy_grail_item_finding.holy_grail_item_id = holy_grail_item.holy_grail_item_id WHERE holy_grail_item_finding.player_id = ?`).all([player_id.player_id]);
            res.render('stats', { player_name: player_name, runes: rune_data, holy_grail_items: holy_grail_item_data });
        } else {
            res.json('Error in creating holy grail item finding');
        }

    } catch (err) {
        console.error(`Error while inserting finding `, err.message);
        next(err);
    }
});


module.exports = router;