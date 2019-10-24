import express from 'express';
import {
    getInstagramCount,
    getTwitterCount
} from './lib/scraper';

const app = express();

app.get('/scrape', async(req, res, next) => {
    console.log('scraping');
    const [ iCount, tCount ] = await Promise.all([
        getInstagramCount(),
        getTwitterCount()
    ]);
    console.log(iCount, tCount);
    res.json({iCount, tCount});
});

app.listen(2093, () => {
  console.log(`example app running 2093`)
});
