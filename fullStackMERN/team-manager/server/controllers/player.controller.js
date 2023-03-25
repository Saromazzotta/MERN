const Player = require('../models/player.model');

// Find all players
module.exports.findAllPlayers = (req, res) => {
    Player.find()
        .then(allPlayers => res.json({ players: allPlayers }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

//Find one player
module.exports.findOnePlayer = (req, res) => {
    Player.findById(req.params.id)
        .then(onePlayer => res.json({ player: onePlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Create Player
module.exports.createPlayer = (req, res) => {
    Player.create(req.body)
        .then(newPlayer => res.json({ player: newPlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Update player
module.exports.updatePlayer = (req, res) => {
    Player.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }) //returns new object and runs validations
        .then(updatedPlayer => res.json({ player: updatedPlayer }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}

// Delete PLayer
module.exports.deletePlayer = (req, res) => {
    Player.findByIdAndDelete(req.params.id)
        .then(results => res.json({ results: results }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
}