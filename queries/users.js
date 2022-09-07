const pgPromisse = require('pg-promise')()
const { Pool, Client } = require("pg");
const dotenv = require('dotenv');
dotenv.config();
const pg = require('pg');

const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });


client.connect();

client.query('SELECT * FROM users;', (err, res) => {
    if (err) throw err;
    for (let row of res.rows) {
      console.log(JSON.stringify(row));
    }
    client.end();
  });