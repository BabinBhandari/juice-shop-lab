const express = require('express')
const sqlite3 = require('sqlite3')

const app = express()
const db = new sqlite3.Database(':memory:')
const dbPassword = 'P@ssw0rd123!'

app.get('/lab/user', (req, res) => {
  const name = req.query.name
  db.all(`SELECT * FROM Users WHERE name = '${name}'`, (err, rows) => {
    res.send('<h1>Hello ' + name + '</h1>' + JSON.stringify(rows))
  })
})