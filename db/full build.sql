DROP DATABASE IF EXISTS chirpy_db;
CREATE DATABASE chirpy_db;
USE chirpy_db;

CREATE TABLE chirp
(
	id int NOT NULL AUTO_INCREMENT,
	author varchar(255) NOT NULL,
    chirp varchar(255) NOT NULL,
	time DATETIME NOT NULL,
	PRIMARY KEY (id)
);

INSERT INTO chirp (author, chirp) VALUES ('BLT', 'oh my gosh');
INSERT INTO chirp (author, chirp) VALUES ('Chicken and Provolone', 'oh my');
INSERT INTO chirp (author, chirp) VALUES ('Roast Beef', 'im yummy');
