const User = require('../models/User')
const userController = {};
userController.getUserId = (req, res) => {
    const userId = req.params.id;

    User.findById(userId)
        .then(user => {
            if (!user) {
                res.status(404).json({ error: 'User not found' });
            } else {
                res.status(200).json(user);
            }
        })
        .catch(error => {
            res.status(500).json({ error: 'Error retrieving user' });
        });
}

module.exports=userController;