const storage = require('../storage')

module.exports = (req, res) => {
    const id = req.params.id
    storage.deleteUser(id)
    res.status(200).json({message: "successfully"})
}