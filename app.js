const express = require('express')
const axios = require('axios')
const cheerio = require("cheerio");
const cors = require('cors')


const app = express();
const PORT = 5000;
app.use(cors())

const url = 'https://www.nbcnews.com/'
app.get('/result',(req,res)=>{

    axios(url)
    .then(response => {
        
        const html = response.data;
        const $ = cheerio.load(html)
        const instaArray = []
        $('.alacarte__text-wrapper',html).each(function(){
            const title = $(this).text()
            const link = $(this).find('a').attr('href')
            instaArray.push({
                title,link
            })
            
        })
    
        res.json(instaArray);
       
        
    }).catch(err => console.log(err))
    
})
    

app.listen(PORT, () => console.log('server up'))