const loadVideo = async (url, browser) => {
    console.log(`navigating to ${url}`);

    const page = await browser.newPage();
    await page.goto(url, {waitUntil: 'domcontentloaded'})
        .then(() => page.content())
        .then(async _ => {
            console.log(`video page content loaded`);

            await page.keyboard.type(' ');

            await page.waitForSelector('span.view-count');
            let element = await page.$('span.view-count');
            let viewCount = await page.evaluate(el => el.textContent, element);
            console.log(`current view count: ${viewCount}`);
        });
};

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
};

module.exports = {
    loadVideo: loadVideo,
    sleep: sleep,
};
