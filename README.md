# Installation

## Database
    sudo apt install sqlite3
    sqlite3 runes.db
    .load setup.sql

## Node
    sudo apt install nodejs npm
In the repo, run
    npm install
If on server, instead run
    npm install --production

# Starting the webapp
    node index.js