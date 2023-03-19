const express = require('express');
const app = express();
const port = 8000;

//needed to connect to the db
require('./config/mongoose.config');


//needed when dealing with post requrest
app.use(express.json(), express.urlencoded({ extended: true }));



//short hand version of lines
// require('./routes/movie.routes')(app);

const MovieRoutes = require('./routes/movie.routes')
MovieRoutes(app);


//required to set port
app.listen(port, () => console.log(`Listening on port: ${port}`));