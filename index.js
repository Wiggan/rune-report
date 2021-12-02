const express = require('express');
const app = express();
const port = 3000 || process.env.PORT;
const db = require('./services/db');
const runesRouter = require('./routes/runes');
const findingsRouter = require('./routes/findings');
const formidableMiddleware = require('express-formidable');

app.get('/', (req, res) => {
    const runes = db.instance.prepare(`SELECT rune_name FROM rune ORDER BY rune_value ASC`).all([]);
    res.render('add_finding', {runes: runes});
});

app.use(formidableMiddleware());
app.use(express.static('css'));
app.use(express.static('images'));
app.use(express.static('fonts'));
app.use(express.json());
app.set('view engine', 'pug');
app.use('/runes', runesRouter);
app.use('/findings', findingsRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});