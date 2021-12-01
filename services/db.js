const instance = require('better-sqlite3')('runes.db', { fileMustExist: true, verbose: console.log });

module.exports = {
    instance
}