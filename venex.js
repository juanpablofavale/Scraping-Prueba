const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({headless: true});

    const page = await browser.newPage();

    try {
        await page.goto('https://www.venex.com.ar/componentes-de-pc/placas-de-video?limit=96', page.setDefaultTimeout(5000));
    }catch(err){}

    await page.waitForSelector('.product-box-body');

    const listaPlacas = await page.evaluate(() => {
        const elements = document.querySelectorAll('.product-box-body.clearfix');

        const placas = [];
        for (let element of elements){
            const placa = {};
            placa.desc = element.querySelector('h3 a').innerText;
            placa.precio = element.querySelector('.current-price').innerText;
            placas.push(placa);
        }

        return placas;
    })

    console.log(listaPlacas);
    console.log(listaPlacas.length);

    await browser.close();

})();