const puppeteer = require('puppeteer');

(async () => {

    const browser = await puppeteer.launch({headless: true});

    const page = await browser.newPage();

    await page.goto('https://www.logg.com.ar/PRODUCTOS/PLACA-DE-VIDEO');

    await page.waitForSelector('.card-body');

    const listaPlacas = await page.evaluate(() => {
        const elements = document.querySelectorAll('.card-body');

        const placas = [];
        for (let element of elements){
            const placa = {};
            placa.desc = element.querySelector('.d-none.d-lg-block.card-title a').innerText;
            placa.precio = element.querySelector('.d-lg-block.card-price').innerText;
            placas.push(placa);
        }

        return placas;
    })

    console.log(listaPlacas.length);
    console.log(listaPlacas);

    await browser.close();

})();