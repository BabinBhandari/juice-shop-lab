const express = require('express')
const sqlite3 = require('sqlite3')

const app = express()
const db = new sqlite3.Database(':memory:')
const dbPassword = process.env.DB_PASSWORD

app.get('/lab/user', (req, res) => {
  const name = String(req.query.name || '')
  db.all('SELECT * FROM Users WHERE name = ?', [name], (err, rows) => {
    res.json({ name, rows })
  })
})