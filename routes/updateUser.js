const storage = require('../storage')

module.exports = async (req, res) => {
    id = req.params.id
    const data = req.body

    storage.updateUser(id, data)
    const user = await storage.getUser(id)
    res.status(200).json(user)
}