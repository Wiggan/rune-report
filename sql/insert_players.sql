--
-- File generated with SQLiteStudio v3.3.3 on Wed Dec 1 17:52:46 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = on;
BEGIN TRANSACTION;

INSERT INTO player(player_name, player_password) VALUES ('Erik', 'Erik');
INSERT INTO player(player_name, player_password) VALUES ('Olof', 'Olof');
INSERT INTO player(player_name, player_password) VALUES ('Fredrik', 'Fredrik');

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;
