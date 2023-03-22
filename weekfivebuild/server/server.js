const express = require('express');
const app = express();
const cors = require('cors');
require('./config/mongoose.config')
const port = 8000;


app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));



// require('./config/mongoose.config')(app);

app.listen(port, () => console.log(`Listening on port: ${port}`));