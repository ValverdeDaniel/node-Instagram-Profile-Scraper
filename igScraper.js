const request = require('request-promise');

const { getMetadata } = require('page-metadata-parser');
const domino = require('domino');

//here you can replace the image id from the website for any image you would like to get the profile from
const igImgId = 'B6G1gislVyQ';
//const igImgId = 'B6GOuCsAUkU';
const BASE_URL = `https://www.instagram.com/p/${igImgId}/`;
let username;
// / Create the base function to be ran /
(async () => {
try {
    let html = await request(BASE_URL);
    const doc = domino.createWindow(html).document;
    const metadata = getMetadata(doc, BASE_URL);
    if (metadata != null && metadata.description != null) {
      username=metadata.description.match(/\(([^)]+)\)/)[1];
      console.log('metadata is', metadata.description.match(/\(([^)]+)\)/)[1]);
      console.log(username);
    } else {
      console.log('either metadata is undefined or it does not contains the description name')
    }
    debugger;
} catch {
    console.log('something went wrong with the scraper probably that multiphoto for private user scenario')
} finally {
    console.log('username outside of tryCatch: ' + username)
}

})() 

