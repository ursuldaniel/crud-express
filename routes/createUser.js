const storage = require('../storage')

module.exports = (req, res) => {
    const data = req.body

    if (data['username'] && data['password']) {
        storage.createUser(data)
        res.status(201).json({message: "successfully"})
    } else {
        res.status(400).json({message: "username and password are required"})
    }
}