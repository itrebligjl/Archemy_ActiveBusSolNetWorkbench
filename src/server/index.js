const express = require('express');
const os = require('os');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
const mongoose = require('mongoose');
const routes = require('./routes/');

const app = express();
const router = express.Router();

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/archemyuser';

/** connect to MongoDB datastore */
try {
  mongoose.connect(url, {
  // useMongoClient: true
  });
} catch (error) {
  console.log('Error: could not start up MongoDB.');
}

const port = 8080 || process.env.PORT;

/** st up routes {API Endpoints} */
routes(router);
app.use(cors());
app.use(bodyParser.json());
app.use(helmet());
app.use('/api', router);

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(port, () => { console.log(`Listening on port: ${port}!`); });
