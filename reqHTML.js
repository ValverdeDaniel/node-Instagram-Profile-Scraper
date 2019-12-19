
    const axios = require('axios');



    //replace this url with any url to request the full html of a page for analysis
    //theNaughtyFork
    const url = 'https://www.instagram.com/p/B6G_44_nVrt/';

    axios(url)
      .then(response => {
        const html = response.data;
        console.log(html);
        //console.log(url);
        //console.log(meta)
      })
      .catch(console.error);