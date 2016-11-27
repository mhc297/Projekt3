BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS events;

CREATE TABLE users (
  userid SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  password VARCHAR NOT NULL
);

CREATE TABLE events (
  eventid SERIAL PRIMARY KEY,
  tixid VARCHAR NOT NULL,
  url VARCHAR NOT NULL,
  comments VARCHAR
);

CREATE TABLE likes (
  videoid SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL
);

COMMIT;
