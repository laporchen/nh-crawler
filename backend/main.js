import express, { urlencoded, json } from 'express';
import axios from 'axios';
import { parse } from 'node-html-parser';
import nhentai from 'nhentai-js';
import cors from 'cors';
const app = express();
const port = 3000;

const sleep = ms => new Promise(r => setTimeout(r, ms));

app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());
app.get('/random', (req, res) => {
    getRandom().then(dougin => {
        res.send(dougin);
    });
});

app.get('/search', (req, res) => {
    console.log(req.query)
    search(req.query.id).then(dougin => {
        res.send(dougin);
    });
});
async function search(id) {
    const response = await nhentai.exists(id);
    if (response) {
        sleep(2000);
        const doujin = await nhentai.getDoujin(id);
        doujin.id = id;
        doujin.exists = true;
        doujin.pages;
        return doujin;
    }
    else {
        return {
            id: id,
            exists: false
        }
    }
}
async function getRandom() {
    const response = await axios.get("https://nhentai.net/random");
    if (response.status === 200) {
        sleep(2000);
        const html = response.data;
        const root = parse(html);
        const content = root.querySelector('#content').querySelector('#bigcontainer');
        const id = content.querySelector("#info-block").querySelector("#gallery_id").innerText.replace("#", "");
        const doujin = await nhentai.getDoujin(id);
        doujin.id = id;
        doujin.pages;
        return doujin;
    }
    return null;
}




app.listen(port, () => console.log(`listening on port ${port}`));
