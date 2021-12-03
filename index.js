const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const db = require('./services/db');
const runesRouter = require('./routes/runes');
const statsRouter = require('./routes/stats');
const findingsRouter = require('./routes/findings');
const holyGrailFindingsRouter = require('./routes/holy_grail_findings');
const formidableMiddleware = require('express-formidable');

app.get('/', (req, res) => {
  const runes = db.instance.prepare(`SELECT rune_name FROM rune ORDER BY rune_value ASC`).all([]);
  const holy_grail_items = db.instance.prepare(`SELECT item_name FROM holy_grail_item ORDER BY item_name ASC`).all([]);
  res.render('add_finding', {
    runes: runes,
    holy_grail_items: holy_grail_items
  });
});

app.use(formidableMiddleware());
app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('fonts'));
app.use(express.json());
app.set('view engine', 'pug');
app.use('/runes', runesRouter);
app.use('/stats', statsRouter);
app.use('/findings', findingsRouter);
app.use('/holy_grail_findings', holyGrailFindingsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});