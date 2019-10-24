import axios from 'axios';
import cheerio from 'cheerio';
import db from './db';

export async function getHTML(url) {
    const { data:html } = await axios.get(url);
    return html
}

export async function getTwitterFollowers(html){
    const $ = cheerio.load(html);
    const span = $('[data-nav="followers"] .ProfileNav-value');
    return (span.data('count'));
}

export async function getInstagramFollowers(html){
    const $ = cheerio.load(html);
    const dataInString = ($('script[type="application/ld+json"]').html());
    const pageObject = JSON.parse(dataInString);
    const meOfPage = (pageObject.mainEntityofPage);
    const igFollowers =parseInt((meOfPage).interactionStatistic.userInteractionCount);
    return igFollowers;
}

export async function getInstagramCount() {
    const html = await getHTML('https://instagram.com/wesbos');
    const igCount = await getInstagramFollowers(html);
    return igCount;
}

export async function getTwitterCount() {
    const html = await getHTML('https://twitter.com/wesbos');
    const twitCount = await getTwitterFollowers(html);
    return twitCount;
}

export async function runCron() {
  const [ iCount, tCount ] = await Promise.all([
      getInstagramCount(),
      getTwitterCount(),
  ]);

  console.log(iCount, tCount);

  db.get('twitter')
    .push({
      date: Date.now(),
      count: tCount,
    })
    .write();
  db.get('instagram')
    .push({
      date: Date.now(),
      count: iCount,
    })
    .write();
  console.log('done');
};
