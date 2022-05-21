//no sirve
//seguir investigando

const puppeteer = require('puppeteer');
const fs = require('fs');

async function mapear(){

    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();

    try{
        await page.goto('https://compragamer.com/index.php?seccion=3&destacados=1&nro_max=50&cate=6&sort=lower_price', page.setDefaultTimeout(5000));
    }catch{}

    const mapPagina = await page.evaluate(() => {
        const elements = document.querySelector('.layout-theme');
        return document.querySelector('.layout-theme').innerHTML;
    })

    // $7.890,00

    var etiqueta = '';

//    var pos = mapPagina.indexOf("$7.890,00");
    var pos = mapPagina.indexOf("6200");
    
    console.log(pos);

    var i = pos;
    do{
        i--;
        if (mapPagina.charAt(i)=='<'){
            var j = i;
            do{
                j++;
                if (mapPagina.charAt(j)!='>'){
                    etiqueta = etiqueta + mapPagina.charAt(j);
                }else{
                    j=pos;
                    i=0;
                }
            }while(j!=pos);
        }
    }while(i!=0);
    
    /*    do{
        i++;
        if (etiqueta.charAt(i)!=' '){
            clase = clase + etiqueta.charAt(i);
        }else{
            i=mapPagina.length;
        }
    }while(i!=mapPagina.length);*/

    
    var pos = etiqueta.indexOf("class") + 7;
    clase = hastaEspacio(etiqueta, pos).replace(/\"/g, '');
    
    identificacion = hastaEspacio(etiqueta, 0);

    console.log(identificacion + '.' + clase);

/*    fs.writeFile('map.txt', mapPagina, (err) => {
        if (err){
            console.log(err)
        }
    }); */
        
    browser.close();
};

function hastaEspacio(cadena, pos){

    i=pos-1;

    var corte = '';

    do{
        i++;
        if (cadena.charAt(i)!=' '){
            corte = corte + cadena.charAt(i);
        }else{
            i=cadena.length;
        }
    }while(i!=cadena.length);
    return corte;
}

mapear();

exports.mapear = mapear;