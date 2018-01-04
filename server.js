import express from 'express';
import webpack from 'webpack';
import path from 'path';
import open from 'open';
import { MongoClient } from 'mongodb';
import bodyParser from 'body-parser';

import config from './webpack.config';

const app = express();
const router = express.Router();
const port = process.env.PORT || 3000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler));
app.use(require('webpack-hot-middleware')(compiler));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var mongoDB = 'mongodb://admin:admin123@ds135537.mlab.com:35537/nincompoops';

var db

MongoClient.connect(mongoDB, (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

router.route('/members')
  .get((req, res) => {
    db.collection('members').find().sort({ name: 1 }).toArray((err, result) => {
      if (err) return console.log(err)
      res.json({ members: result })
    })
  })

app.use('/api', router);

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});
