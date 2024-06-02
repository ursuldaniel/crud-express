const storage = require('../storage')

module.exports = async (req, res) => {
    const users = await storage.listUsers()
    res.status(200).json(users)
}