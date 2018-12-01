require('dotenv').config();
/** const path = require('path'); */
const express = require('express');
const os = require('os');
const cors = require('cors');
const bodyParser = require('body-parser');
const helmet = require('helmet');
/** const environmentDecorator = require('./environment'); */
/** const mongoose = require('mongoose'); */
/** const jre = require('node-jre'); */
const routes = require('./routes/');

const app = express();
const router = express.Router();

/** const url = process.env.MONGODB_URI || 'mongodb://localhost:27017/archemyuser'; */

/** connect to MongoDB datastore */
/**
try {
  mongoose.connect(url, {
  // useMongoClient: true
  });
} catch (error) {
  console.log('Error: could not start up MongoDB.');
}
*/

/**
const output = jre.spawn(
  ['java/ArchemyEAMTkServer.jar'],
  'ArchemyEAMTkServer',
  [''],
  { encoding: 'utf8' }
).stdout.trim();

console.log(output === 'Testing');
*/

const port = 8080 || process.env.PORT;

/** st up routes {API Endpoints} */
routes(router);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use('/api', router);

app.use(express.static('dist'));
app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.listen(port, () => { console.log(`Server is running and listening on port: ${port}!`); });

module.exports = app;
