import express from 'express';

import {
    getInstagramCount,
    getTwitterCount
} from './lib/scraper';
import db from './lib/db';
import './lib/cron';

const app = express();

app.get('/scrape', async(req, res, next) => {
    console.log('scraping');
    const [ iCount, tCount ] = await Promise.all([
        getInstagramCount(),
        getTwitterCount()
    ]);
    res.json({ iCount, tCount });
});

app.get('/data', async(req, res, next) => {
  //get data scrape
  const twitter = db.value();
  //respond with json
  res.json(twitter);
})

app.listen(3000, () => {
  console.log(`example app running http://localhost:3000`)
});
