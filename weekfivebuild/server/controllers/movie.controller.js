const Movie = require('../models/movie.model');

module.exports.findAllMovies = (req, res) => {
    Movie.find()
        .then(allMovies => res.json({ movies: allMovies }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.create = (req, res) => {
//gives more options
    // const { title, genre, releaseYear } = req.body;
    // Movie.create({
    //     title,
    //     genre,
    //     releaseYear
    // })
    Movie.create(req.body)
        .then(newMovie => res.json({ movie: newMovie }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

