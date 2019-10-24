import { getHTML, getTwitterFollowers, getInstagramFollowers } from './lib/scraper';

async function go() {
    
    // const twitterHTML = await getHTML('https://twitter.com/wesbos');
    // const twitCount = await getTwitterFollowers(twitterHTML);
    // console.log(`wes has ${twitCount} twitter followers`);

    // const igHTML = await getHTML('https://instagram.com/wesbos');
    // const igCount = await getInstagramFollowers(igHTML);
    // console.log(`wes has ${igCount} IG followers`);

    //REFACTORED    

    const iPromise = await getHTML('https://instagram.com/wesbos');
    const tPromise = await getHTML('https://twitter.com/wesbos');
    const [igHTML, twitterHTML] = await Promise.all([ iPromise, tPromise ]);

    const igCount = await getInstagramFollowers(igHTML);
    const twitCount = await getTwitterFollowers(twitterHTML);

    console.log(`wes has ${igCount} IG followers`);
    console.log(`wes has ${twitCount} twitter followers`);
}   

go();