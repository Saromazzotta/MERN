const Joke = require('../models/jokes.model');

// How we get all jokes
module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => res.json(allJokes))
        .catch((err) => res.json({ message: "Something went wrong.", error: err }));
}             // ^ don't techincally need argument in parthesis if there is only one argument in an arrow function

// Get one joke
module.exports.findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })  //first _id comes from mongodb, id comes from whatever we call our route
        .then((oneJoke) => res.json(oneJoke))
        .catch((err) => res.json({ message: "Something went wrong.", error: err }));
}


//create a new joke
module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => res.json(newJoke))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

// Update an existing joke
module.exports.updateJoke = (req, res) => {
    Joke.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then((updatedJoke) => res.json(updatedJoke))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
}

// Delete an existing joke
module.exports.deleteJoke = (req, res) => {
    Joke.findByIdAndDelete(req.params.id)
        .then((result) => res.json(result))
        .catch((err) => res.json({ message: "Something went wrong", error: err }));
}