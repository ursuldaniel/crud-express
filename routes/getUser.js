const storage = require('../storage')

module.exports = async (req, res) => {
    id = req.params.id
    const user = await storage.getUser(id)
    res.status(200).json(user)
}