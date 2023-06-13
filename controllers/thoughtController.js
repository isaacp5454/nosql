const User = require('../models/Thought')
const userController={};
const allThoughts = (req, res) => {
    Thought.find()
        .then(thoughts => {
            res.status(200).json(thoughts);
        })
        .catch(error => {
            res.status(500).json({ error: 'Error retrieving thoughts' });
        });
}

module.exports = thoughtController;