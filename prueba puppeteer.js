const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();

    await page.goto('https://www.google.com.ar/');
    await page.screenshot({path: 'g.jpg'});

    await page.waitForTimeout('1000');

    await page.type('input.gLFyf.gsfi', 'pepe');
    await page.screenshot({path: 'g1.jpg'});

    await page.waitForTimeout('1000');

    await page.click('.gNO89b');
    await page.waitForSelector('.g');
    await page.screenshot({path: 'g2.jpg'});

    await page.waitForTimeout('1000');

    await browser.close();

})();
