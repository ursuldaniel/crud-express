const express = require('express')
const router = express.Router()

const listUsers = require('./routes/listUsers')
const getUser = require('./routes/getUser')
const createUser = require('./routes/createUser')
const updateUser = require('./routes/updateUser')
const deleteUser = require(`./routes/deleteUser`)

router.get('/users', listUsers)
router.get('/users/:id', getUser)
router.post('/users', createUser)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

module.exports = router