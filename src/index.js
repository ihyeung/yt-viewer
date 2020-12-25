const puppeteer = require('puppeteer');
const moment = require('moment');

const { loadVideo, sleep } = require('./browser');
const { VIDEO_URL, LOOP_COUNT, SLEEP_MS } = require('../config');

const MAX_VIDEO_COUNT = 5;
const run = async () => {
    // Throw an error if LOOP_COUNT is higher than the max, watching too many
    // videos simultaneously uses up a significant amount of RAM
    if (LOOP_COUNT > MAX_VIDEO_COUNT) {
        throw Error('loop count exceeds max allowable video count');
    }
    console.log(`running script`);
    const browser = await puppeteer.launch({headless: false, timeout: 60000});

    let loopCount = 0;
    while (loopCount < LOOP_COUNT) {
        await loadVideo(VIDEO_URL, browser);
        loopCount++;
    }
    console.log('sleeping . . . ' + moment.now());
    await sleep(SLEEP_MS);
    console.log('sleep complete: ' + moment.now());
    await browser.close();
};

run()
    .then(_ => console.log('script complete'))
    .catch(err => console.log(err));
