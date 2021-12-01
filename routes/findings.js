const express = require('express');
const router = express.Router();
const db = require('../services/db');

/* GET findings. */
router.get('/', function (req, res, next) {
    try {
        const data = db.instance.prepare(`SELECT player_name, rune_name, date(finding_date) FROM finding JOIN player ON finding.player_id = player.player_id JOIN rune ON finding.rune_id = rune.rune_id`).all([]);
        res.json(data);
    } catch (err) {
        console.error(`Error while getting runes `, err.message);
        next(err);
    }
});

/* INSERT finding. */
router.post('/', function (req, res, next) {
    try {
        console.log(req.body);
        const { player_name, player_password, rune_name } = req.body;
        const player_id = db.instance.prepare(`SELECT player_id FROM player WHERE lower(player_name) = lower(?) AND player_password = ?`).get([player_name, player_password]);
        const rune_id = db.instance.prepare(`SELECT rune_id FROM rune WHERE rune_name = ?`).get(rune_name);
        console.log("Inserting new rune for player_id:" + JSON.stringify(player_id) + ", rune_id:" + JSON.stringify(rune_id));
        const result = db.instance.prepare(`INSERT INTO finding (player_id, rune_id) VALUES (?, ?)`).run(player_id.player_id, rune_id.rune_id);
        let message = 'Error in creating quote';
        if (result.changes) {
            message = 'Quote created successfully';
        }

        res.json(message);
    } catch (err) {
        console.error(`Error while inserting finding `, err.message);
        next(err);
    }
});


module.exports = router;