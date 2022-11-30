--
-- File generated with SQLiteStudio v3.3.3 on Wed Dec 1 17:52:46 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = on;
BEGIN TRANSACTION;

--ALTER TABLE finding
--ADD season INTEGER; 

--UPDATE finding
--SET season = 4
--WHERE 1;

--CREATE TABLE season (season_id INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE NOT NULL, start_date DATETIME DEFAULT (CURRENT_TIMESTAMP) NOT NULL);

INSERT INTO season(season_id, start_date) VALUES (6, '2022-06-25 19:00:00');
--INSERT INTO season(season_id, start_date) VALUES (5, '2022-06-24 19:00:00');
--INSERT INTO season(season_id, start_date) VALUES (4, '2021-12-03 19:00:00');

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
