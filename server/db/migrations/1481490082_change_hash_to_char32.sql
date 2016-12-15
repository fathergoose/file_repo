\c file_repo

DELETE FROM files;

ALTER TABLE files
ALTER hash TYPE CHAR(32);
