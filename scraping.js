//modulo que devuelve en un array el resultado del scraping de las paginas web que se le pasan en el argumento paginas
//dicho argumento es un array de objetos que contiene los datos necesarios para hacer dicho scraping

const puppeteer = require('puppeteer');

async function scrap (paginas) {

        const browser = await puppeteer.launch({headless: false});
    
        const page = await browser.newPage();

        let listaPlacas = [];

        for (let pagina of paginas){
        
            try{
                await page.goto(pagina.url, page.setDefaultTimeout(5000));
            }catch{}
    
            await page.waitForSelector(pagina.wait);
    
            const listaPla = await page.evaluate((all, desc, precio, vend) => {
                const elements = document.querySelectorAll(all);
    
                let placas = [];
                for (let element of elements){
                    const placa = {};
                    placa.desc = ((element.querySelector(desc).innerText).toUpperCase()).replace(/PLACA DE VIDEO/, '').trim();
                    placa.precio = ((element.querySelector(precio).innerText)).toUpperCase().replace(/[^\d]/g, '');
                    placa.vendedor = vend.toUpperCase();  
                    placas.push(placa);
                }
                return placas;
            }, pagina.all, pagina.desc, pagina.precio, pagina.vend)

            //concatena la lista de la nueva pagina
            //a la lista general existente
            listaPlacas = [...listaPlacas, ...listaPla];
            
        }

        await browser.close();

        return listaPlacas;
    };

    exports.scrap = scrap;