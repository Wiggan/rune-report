--
-- File generated with SQLiteStudio v3.3.3 on Wed Dec 1 17:52:46 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = on;
BEGIN TRANSACTION;

INSERT INTO holy_grail_item_finding(player_id, holy_grail_item_id, finding_date, finding_location)
VALUES (1, 5, '2020-01-01 10:00:00', 'The pit!');

INSERT INTO holy_grail_item_finding(player_id, holy_grail_item_id, finding_date, finding_location)
VALUES (2, 6, '2020-01-02 10:00:00', 'Map!');

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
