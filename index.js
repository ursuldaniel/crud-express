const express = require('express')
const router = require('./router')
const app = express()

const PORT = 8080

app.use(express.json())
app.use('/', router)

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})