const { Pool } = require('pg')

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST?process.env.DB_HOST:'localhost',
  database: process.env.DB_SCHEME,
  password: process.env.DB_PASSWORD?process.env.DB_PASSWORD:'',
  post: process.env.DB_PORT ? process.env.DB_PORT:'5432'
})

module.exports = pool
