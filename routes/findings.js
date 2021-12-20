const express = require('express');
const router = express.Router();
const db = require('../services/db');


get_runes_for_season = function (season_id, season_start_date) {

    const runes = db.instance.prepare(`SELECT rune.rune_value as 'rune_value', julianday(finding_date) - julianday(?) as 'time_delta'
    FROM finding JOIN rune ON rune.rune_id = finding.rune_id JOIN player ON player.player_id = finding.player_id
    WHERE season = ?
    ORDER BY datetime(finding_date) ASC`).all([season_start_date, season_id]);

    return runes;
}

get_stats_data = function () {

    const seasons = db.instance.prepare('SELECT season_id, start_date FROM season').all([])

    const all_runes = db.instance.prepare(`SELECT player_name, rune_name, finding_date as 'finding_date',
    finding.finding_date >= datetime('now', '-72 Hour') as 'runometer_finding'
    FROM finding JOIN rune ON rune.rune_id = finding.rune_id JOIN player ON player.player_id = finding.player_id
    WHERE season = 4
    ORDER BY datetime(finding_date) DESC`).all([]);

    runes_per_season = {}
    seasons.forEach(function (element) {
        runes_per_season[element.season_id] = get_runes_for_season(element.season_id, element.start_date);
    })

    const runometer_query = db.instance.prepare(`
    SELECT sum(rune_value) as 'runometer_value'
    FROM finding
    JOIN rune ON rune.rune_id = finding.rune_id
    WHERE finding.finding_date >= datetime('now', '-72 Hour');
    `).all([]);


    var runometer_value = 0;
    console.log(runometer_query);
    if (runometer_query[0].runometer_value != undefined) {
        runometer_value = runometer_query[0].runometer_value;
    }

    return {
        'all_runes': all_runes,
        'runometer_value': runometer_value,
        'runes_per_season': runes_per_season
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
        const result = db.instance.prepare(`INSERT INTO finding (player_id, rune_id, season) VALUES (?, ?, 4)`).run(player_id.player_id, rune_id.rune_id);
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