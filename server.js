import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import config from './webpack.config';
import Member from "./model/members";

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler));
app.use(require('webpack-hot-middleware')(compiler));

var mongoDB = 'mongodb://admin:admin123@ds135537.mlab.com:35537/nincompoops';

mongoose.connect(mongoDB, { useMongoClient: true })
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router.route('/members')
  .get(function (req, res) {
    Member.find(function (err, members) {
      if (err)
        res.send(err);
      res.json(members)
    }).sort({name: 1});
  })

app.use('/api', router);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    // open(`http://localhost:${port}`);
  }
})

