\c file_repo;

DROP TABLE IF EXISTS files;

CREATE TABLE files (
	id SERIAL PRIMARY KEY,
	name VARCHAR,
	path VARCHAR,
	hash BYTEA
);
