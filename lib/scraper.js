import axios from 'axios';
import cheerio from 'cheerio'

async function getHTML(url) {
    const { data:html } = await axios.get(url);
    return html
}

async function getTwitterFollowers(html){
    const $ = cheerio.load(html);
    const span = $('[data-nav="followers"] .ProfileNav-value');
    return (span.data('count'));
}

async function getInstagramFollowers(html){
    const $ = cheerio.load(html);
    const dataInString = ($('script[type="application/ld+json"]').html());
    const pageObject = JSON.parse(dataInString);
    const meOfPage = (pageObject.mainEntityofPage);
    const igCount =parseInt((meOfPage).interactionStatistic.userInteractionCount);
}

export { getHTML, getTwitterFollowers, getInstagramFollowers };