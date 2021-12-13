const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const db = require('./services/db');
const findingsRouter = require('./routes/findings');
const holyGrailRouter = require('./routes/holy_grail_findings');
const reportRouter = require('./routes/report_router')
const formidableMiddleware = require('express-formidable');


app.use(function (req, res, next) {
  const latest_rune = db.instance.prepare(`SELECT player_name, rune_name, finding_date as 'finding_date'
  FROM finding JOIN rune ON rune.rune_id = finding.rune_id JOIN player ON player.player_id = finding.player_id
  ORDER BY date(finding_date) DESC LIMIT 1`).all([]);

  res.locals.latest_rune = latest_rune[0];
  next();
});


app.use(formidableMiddleware());
app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('fonts'));
app.use(express.json());
app.set('view engine', 'pug');
app.use('/', reportRouter)
app.use('/stats', findingsRouter);
app.use('/findings', findingsRouter);
app.use('/holy_grail_stats', holyGrailRouter);
app.use('/holy_grail_findings', holyGrailRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});