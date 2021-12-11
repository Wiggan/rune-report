const express = require('express');
const router = express.Router();
const db = require('../services/db');

get_stats_data = function () {
    const all_runes = db.instance.prepare(`SELECT player_name, rune_name, finding_date as 'finding_date'
    FROM finding JOIN rune ON rune.rune_id = finding.rune_id JOIN player ON player.player_id = finding.player_id
    ORDER BY date(finding_date) DESC`).all([]);

    const runometer_value = db.instance.prepare(`
    SELECT sum(rune_value) as 'runometer_value'
    FROM finding
    JOIN rune ON rune.rune_id = finding.rune_id
    WHERE finding.finding_date >= datetime('now', '-72 Hour');
    `).all([]).map(x => x.runometer_value);

    return {
        'all_runes': all_runes,
        'runometer_value': runometer_value
    };
}

router.get('/', function (req, res, next) {
    try {
        res.render('stats',
            get_stats_data()
        );
    } catch (err) {
        console.error(`Error while getting runes`, err.message);
        next(err);
    }
});


router.post('/', function (req, res, next) {
    try {
        console.log(req.fields);
        const { player_name, player_password, rune_name } = req.fields;
        const player_id = db.instance.prepare(`SELECT player_id FROM player WHERE lower(player_name) = lower(?) AND lower(player_password) = lower(?)`).get([player_name, player_password]);
        const rune_id = db.instance.prepare(`SELECT rune_id FROM rune WHERE rune_name = ?`).get(rune_name);
        console.log("Inserting new rune for player_id:" + JSON.stringify(player_id) + ", rune_id:" + JSON.stringify(rune_id));
        const result = db.instance.prepare(`INSERT INTO finding (player_id, rune_id) VALUES (?, ?)`).run(player_id.player_id, rune_id.rune_id);
        if (result.changes) {
            res.render('stats', get_stats_data());
        } else {
            res.json('Error in creating quote');
        }

    } catch (err) {
        console.error(`Error while inserting finding `, err.message);
        next(err);
    }
});


module.exports = router;