--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.1
-- Dumped by pg_dump version 9.6.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: tracks; Type: TABLE; Schema: public; Owner: alilseman
--

CREATE TABLE tracks (
    id integer NOT NULL,
    path character varying,
    title character varying,
    artist character varying,
    album character varying,
    tracknum smallint,
    hash character(32),
    url character varying
);


ALTER TABLE tracks OWNER TO alilseman;

--
-- Name: tracks_id_seq; Type: SEQUENCE; Schema: public; Owner: alilseman
--

CREATE SEQUENCE tracks_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE tracks_id_seq OWNER TO alilseman;

--
-- Name: tracks_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alilseman
--

ALTER SEQUENCE tracks_id_seq OWNED BY tracks.id;


--
-- Name: tracks id; Type: DEFAULT; Schema: public; Owner: alilseman
--

ALTER TABLE ONLY tracks ALTER COLUMN id SET DEFAULT nextval('tracks_id_seq'::regclass);


--
-- Name: tracks tracks_pkey; Type: CONSTRAINT; Schema: public; Owner: alilseman
--

ALTER TABLE ONLY tracks
    ADD CONSTRAINT tracks_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

