BEGIN;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS events;
DROP TABLE IF EXISTS saved;

CREATE TABLE users (
  u_id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  password VARCHAR NOT NULL,
);

CREATE TABLE events (
  e_id SERIAL PRIMARY KEY,
  tm_id VARCHAR NOT NULL,
  url VARCHAR NOT NULL
);

CREATE TABLE saved (
  user_id integer REFERENCES users (u_id),
  event_id integer REFERENCES events (e_id)
);

ALTER TABLE saved
ON DELETE CASCADE;

COMMIT;
