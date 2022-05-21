const puppeteer = require('puppeteer');

    (async () => {

        const browser = await puppeteer.launch({headless: true});

        const page = await browser.newPage();

        try{
            await page.goto('https://compragamer.com/index.php?seccion=3&destacados=1&nro_max=50&cate=6&sort=lower_price');
        }catch{}

        await page.waitForSelector('.theme_nombreProducto');

        const listaPlacas = await page.evaluate(() =>{
            const elements = document.querySelectorAll('.contenidoPrincipal');

            const placas = [];
            for (let element of elements){
                const placa = {};
                placa.desc = element.querySelector('.theme_nombreProducto').innerText;
                placa.precio = element.querySelector('.theme_precio').innerText;
                placas.push(placa);
            }
            return placas;
        })

        console.log(listaPlacas);

        await browser.close();

    })();