CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

DROP TABLE IF EXISTS burger;

CREATE TABLE burger 
(
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);