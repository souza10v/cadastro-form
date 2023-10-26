CREATE DATABASE cadastroFormAppDB

CREATE TABLE users (
    user_id VARCHAR(255) PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    date_of_birth DATE,
    gender VARCHAR(10),
    city VARCHAR(255),
    state VARCHAR(255),
    country VARCHAR(255),
    registration_date TIMESTAMP DEFAULT current_timestamp,
    last_login_date TIMESTAMP,
    account_status VARCHAR(20) DEFAULT 'active',
    permissions VARCHAR(255),
);