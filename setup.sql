--
-- File generated with SQLiteStudio v3.3.3 on Wed Dec 1 17:52:46 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = off;
BEGIN TRANSACTION;

-- Table: finding
CREATE TABLE finding (finding_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, player_id INT REFERENCES player (player_id), rune_id INT REFERENCES rune (rune_id), finding_date DATETIME DEFAULT (CURRENT_TIMESTAMP) NOT NULL);

-- Table: player
CREATE TABLE player (player_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, player_name TEXT NOT NULL, player_password TEXT);

-- Table: rune
CREATE TABLE rune (rune_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, rune_name TEXT NOT NULL, rune_value REAL, rune_image BLOB);

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
