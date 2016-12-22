\c file_repo;

DROP TABLE IF EXISTS tracks;

CREATE TABLE tracks (
	id SERIAL PRIMARY KEY,
	path VARCHAR,
	title VARCHAR,
    artist VARCHAR,
    album VARCHAR,
    tracknum SMALLINT,
	hash CHAR(32)
);