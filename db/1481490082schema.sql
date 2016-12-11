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
-- Name: files; Type: TABLE; Schema: public; Owner: alilseman
--

CREATE TABLE files (
    id integer NOT NULL,
    name character varying,
    path character varying,
    hash character(32)
);


ALTER TABLE files OWNER TO alilseman;

--
-- Name: files_id_seq; Type: SEQUENCE; Schema: public; Owner: alilseman
--

CREATE SEQUENCE files_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE files_id_seq OWNER TO alilseman;

--
-- Name: files_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alilseman
--

ALTER SEQUENCE files_id_seq OWNED BY files.id;


--
-- Name: pups; Type: TABLE; Schema: public; Owner: alilseman
--

CREATE TABLE pups (
    id integer NOT NULL,
    name character varying,
    breed character varying,
    age integer,
    sex character varying
);


ALTER TABLE pups OWNER TO alilseman;

--
-- Name: pups_id_seq; Type: SEQUENCE; Schema: public; Owner: alilseman
--

CREATE SEQUENCE pups_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE pups_id_seq OWNER TO alilseman;

--
-- Name: pups_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: alilseman
--

ALTER SEQUENCE pups_id_seq OWNED BY pups.id;


--
-- Name: things; Type: TABLE; Schema: public; Owner: alilseman
--

CREATE TABLE things (
    id integer,
    name character varying(255),
    color character varying(255)
);


ALTER TABLE things OWNER TO alilseman;

--
-- Name: files id; Type: DEFAULT; Schema: public; Owner: alilseman
--

ALTER TABLE ONLY files ALTER COLUMN id SET DEFAULT nextval('files_id_seq'::regclass);


--
-- Name: pups id; Type: DEFAULT; Schema: public; Owner: alilseman
--

ALTER TABLE ONLY pups ALTER COLUMN id SET DEFAULT nextval('pups_id_seq'::regclass);


--
-- Name: files files_pkey; Type: CONSTRAINT; Schema: public; Owner: alilseman
--

ALTER TABLE ONLY files
    ADD CONSTRAINT files_pkey PRIMARY KEY (id);


--
-- Name: pups pups_pkey; Type: CONSTRAINT; Schema: public; Owner: alilseman
--

ALTER TABLE ONLY pups
    ADD CONSTRAINT pups_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

