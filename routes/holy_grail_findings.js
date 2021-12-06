const express = require('express');
const router = express.Router();
const db = require('../services/db');

const results_query = `
SELECT
holy_grail_item.item_name,
GROUP_CONCAT(DISTINCT(player_name)) as 'player',
GROUP_CONCAT(DISTINCT(holy_grail_item_finding.player_id)) as 'player_id',
GROUP_CONCAT(finding_location,'||') as 'locations',
GROUP_CONCAT(date(finding_date), '||') as 'dates'
FROM holy_grail_item
LEFT OUTER JOIN holy_grail_item_finding ON
holy_grail_item.holy_grail_item_id = holy_grail_item_finding.holy_grail_item_id
LEFT OUTER JOIN player ON
player.player_id = holy_grail_item_finding.player_id
GROUP BY 
holy_grail_item.holy_grail_item_id,
holy_grail_item_finding.player_id
ORDER BY
holy_grail_item.holy_grail_item_id,
finding_date
ASC
`

get_holy_grail_data = function () {
    const players = db.instance.prepare(`SELECT player_name FROM player ORDER BY player_id`)
        .all([])
        .map(x => x.player_name);

    let holy_grail_results = {};

    const item_results = db.instance.prepare(results_query).all([]);

    item_results.forEach(function (element) {
        element.item_name in holy_grail_results || (holy_grail_results[element.item_name] = Array(players.length));

        const location = (element.locations || "").split('||')[0]
        const date_ = (element.dates || "").split('||')[0]

        holy_grail_results[element.item_name][element.player_id - 1] = {
            "location": location,
            "date": date_,
        }
    });

    return {
        "players": players,
        "holy_grail_results": holy_grail_results
    }
}

/* GET findings. */
router.get('/', function (req, res, next) {
    try {
        res.render('holy_grail_stats',
            get_holy_grail_data()
        );
    } catch (err) {
        console.error(`Error while getting runes `, err.message);
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
            res.render('holy_grail_stats', get_holy_grail_data());
        } else {
            res.json('Error in creating holy grail item finding');
        }

    } catch (err) {
        console.error(`Error while inserting finding `, err.message);
        next(err);
    }
});


module.exports = router;