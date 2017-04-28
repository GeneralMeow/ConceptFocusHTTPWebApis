DROP DATABASE IF EXISTS travel_app;
CREATE DATABASE travel_app;
\c travel_app
DROP TABLE IF EXISTS travel;
DROP TABLE IF EXISTS suitcase;

CREATE TABLE travel (
  id SERIAL PRIMARY KEY,
  airline VARCHAR,
  hotel VARCHAR,
  budget INTEGER
);

CREATE TABLE suitcase (
  id SERIAL PRIMARY KEY,
  item VARCHAR
);
