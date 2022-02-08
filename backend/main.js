import express, { urlencoded, json } from 'express';
import axios from 'axios';
import { parse } from 'node-html-parser';
import nhentai from 'nhentai-js';
import cors from 'cors';
const app = express();
const port = 3000;


app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.get('/random', (req, res) => {
    getRandom().then(dougin => {
        res.send(dougin);
    });
});



async function getRandom() {
    const response = await axios.get("https://nhentai.net/random");
    const html = response.data;
    const root = parse(html);
    const content = root.querySelector('#content').querySelector('#bigcontainer');
    const id = content.querySelector("#info-block").querySelector("#gallery_id").innerText.replace("#", "");
    const doujin = await nhentai.getDoujin(id);
    doujin.id = id;
    return doujin;
}




app.listen(port, () => console.log(`istening on port ${port}`));
