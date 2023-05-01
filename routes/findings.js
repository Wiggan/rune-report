const express = require('express');
const router = express.Router();
const db = require('../services/db');

const current_season = 7;

get_runes_for_season = function (season_id, season_start_date) {

    const runes = db.instance.prepare(`SELECT rune.rune_value as 'rune_value', julianday(finding_date) - julianday(?) as 'time_delta',
    julianday(finding_date) as 'finding_date_julianday',
    rune.rune_name as 'rune_name'
    FROM finding JOIN rune ON rune.rune_id = finding.rune_id JOIN player ON player.player_id = finding.player_id
    WHERE season = ?
    ORDER BY datetime(finding_date) ASC`).all([season_start_date, season_id]);

    return runes;
}

get_frequency_table_column = function (season_id) {

    const runes = db.instance.prepare(`SELECT rune.rune_name as 'rune_name', COUNT(rune.rune_name) as 'rune_count', rune.rune_value as 'rune_value'
    FROM finding JOIN rune ON rune.rune_id = finding.rune_id JOIN player ON player.player_id = finding.player_id
    WHERE season = ?
    GROUP BY rune_name
    ORDER BY rune_value DESC`).all([season_id]);

    return runes;
}


get_runometer_value = function () {
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

    return runometer_value;
}


get_all_runes = function () {
    const all_runes = db.instance.prepare(`SELECT player_name, rune_name, finding_date as 'finding_date',
    finding.finding_date >= datetime('now', '-72 Hour') as 'runometer_finding'
    FROM finding JOIN rune ON rune.rune_id = finding.rune_id JOIN player ON player.player_id = finding.player_id
    WHERE season = ?
    ORDER BY datetime(finding_date) DESC`).all([current_season]);

    return all_runes;
}

get_runometer_high_score = function () {

    high_score = 0;

    runes_per_season[current_season].forEach(function (element, index) {
        current_value = 0;
        for (let i = index; i >= 0; i--) {
            const time_diff = (runes_per_season[current_season][index].finding_date_julianday -
                runes_per_season[current_season][i].finding_date_julianday)
            if (time_diff <= 3.0) {
                current_value += runes_per_season[current_season][i].rune_value;
            } else {
                high_score = Math.max(current_value, high_score);
                break;
            }
        }
        high_score = Math.max(current_value, high_score);
    })

    return high_score.toFixed(2);
}

get_stats_data = function () {

    const days_into_season = db.instance.prepare(`SELECT julianday(datetime('now')) - julianday(start_date) as 'days_passed' FROM season WHERE season.season_id = ?`)
        .all([current_season])
        .map(x => Math.max(1, x.days_passed))

    const seasons = db.instance.prepare('SELECT season_id, start_date FROM season').all([])

    runes_per_season = {}
    runes_table = []
    seasons.forEach(function (element) {
        runes_per_season[element.season_id] = get_runes_for_season(element.season_id, element.start_date);
    })


    let current_season_rune_value = 0;

    if (runes_per_season[current_season].length > 0) {
        current_season_rune_value = runes_per_season[current_season]
            .map(x => x.rune_value)
            .reduce(function (x, y) { return x + y; }).toFixed(2);
    }


    return {
        'all_runes': get_all_runes(),
        'runes_table': get_frequency_table_column(current_season),
        'runometer_value': get_runometer_value(),
        'runometer_high_score': get_runometer_high_score(),
        'runes_per_season': runes_per_season,
        'days_into_season': days_into_season,
        'current_season_rune_value': current_season_rune_value
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
        const result = db.instance.prepare(`INSERT INTO finding (player_id, rune_id, season) VALUES (?, ?, ?)`).run(player_id.player_id, rune_id.rune_id, current_season);
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