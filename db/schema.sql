### Schema

CREATE DATABASE sandwhich_db;
USE sandwich_db;

CREATE TABLE sandwhich
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
