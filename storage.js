const listUsers = require('./routes/listUsers')

const sqlite3 = require('sqlite3').verbose()
let sql

const db = new sqlite3.Database('./database.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        return console.error(err.message)
    }
})

sql = `CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT,
    password TEXT
)`
db.run(sql)

module.exports = {
    listUsers: () => {
        return new Promise((resolve, reject) => {
            sql = `SELECT * FROM users`
            db.all(sql, [], (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    },
    getUser: (id) => {
        return new Promise((resolve, reject) => {
            sql = `SELECT * FROM users WHERE id = ?`
            db.all(sql, [id], (err, rows) => {
                if (err) {
                    reject(err)
                } else {
                    resolve(rows[0])
                }
            })
        })
    },
    createUser: (user) => {
        sql = `INSERT INTO users (username, password) VALUES (?, ?)`
        db.run(sql, [user['username'], user['password']], (err) => {
            if (err) {
                throw err
            }
        })
    },
    updateUser: (id, user) => {
        sql = `UPDATE users SET username = ?, password = ? WHERE id = ?`
        db.run(sql, [user['username'], user['password'], id], (err) => {
            if (err) {
                throw err
            }
        })
    },
    deleteUser: (id) => {
        sql = `DELETE FROM users WHERE id = ?`
        db.run(sql, [id], (err) => {
            if (err) {
                throw err
            }
        })
    }
}

