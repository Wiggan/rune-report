--
-- File generated with SQLiteStudio v3.3.3 on Wed Dec 1 17:52:46 2021
--
-- Text encoding used: System
--
PRAGMA foreign_keys = on;
BEGIN TRANSACTION;

INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 3, rune.rune_id, '2021-07-27 11:53:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-07-27 11:53:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'jah';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-07-27 17:33:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-07-30 20:58:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ohm';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 3, rune.rune_id, '2021-07-31 16:00:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ist';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-01 14:53:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'lo';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-01 21:17:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ber';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-05 08:20:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-05 23:49:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'lo';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-06 16:58:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ist';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-07 00:47:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ohm';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-07 23:32:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 3, rune.rune_id, '2021-08-10 21:45:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-14 23:35:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ist';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-14 23:45:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'jah';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-15 14:09:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'sur';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-16 10:57:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ohm';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-17 00:15:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ist';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-17 09:25:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-17 12:01:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'lo';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-17 18:54:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ohm';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 3, rune.rune_id, '2021-08-18 14:44:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'jah';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 3, rune.rune_id, '2021-08-18 16:27:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ber';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-18 19:15:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'jah';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-18 23:36:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'vex';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-19 14:19:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ber';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-19 17:45:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'cham';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-20 07:54:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'vex';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-20 10:45:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'lo';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-20 21:16:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ber';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-20 23:51:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'gul';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-21 15:36:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'gul';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 3, rune.rune_id, '2021-08-22 13:06:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ist';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 3, rune.rune_id, '2021-08-22 19:30:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'lo';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-27 21:21:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-27 22:38:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ohm';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-28 07:46:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ist';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-28 20:05:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-08-28 20:05:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ist';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-28 21:19:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ist';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-29 17:35:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ohm';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-30 20:41:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ohm';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-08-31 21:37:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'gul';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-09-03 11:24:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-09-03 11:24:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'vex';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-09-04 22:06:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'vex';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-09-04 23:38:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'jah';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-09-04 23:57:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-09-05 19:20:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-09-05 23:07:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'jah';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-09-07 08:17:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ist';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-09-07 22:39:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'gul';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-09-10 16:14:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'gul';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-09-10 16:22:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'gul';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-09-10 21:20:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-09-11 17:40:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'vex';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-09-19 09:03:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-09-22 19:56:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'vex';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-09-24 12:26:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-09-25 21:49:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ohm';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-10-01 16:52:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'gul';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-10-03 18:47:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ist';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-10-03 18:47:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ohm';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-10-03 21:02:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'sur';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-10-03 21:53:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'mal';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-10-03 21:53:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'gul';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-10-04 13:26:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ohm';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-10-04 13:26:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ohm';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-10-06 15:11:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'ist';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 1, rune.rune_id, '2021-10-08 20:39:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'sur';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-10-09 10:24:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'jah';
INSERT INTO finding(player_id, rune_id,  finding_date, season) SELECT 2, rune.rune_id, '2021-10-17 07:31:00', 3 FROM rune WHERE LOWER(rune.rune_name) = 'vex';

COMMIT TRANSACTION;
PRAGMA foreign_keys = on;