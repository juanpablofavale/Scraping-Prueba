const scrap = require('./scraping.js')
const fs = require('fs');

var paginas = [
    {
        url: 'https://compragamer.com/index.php?seccion=3&destacados=1&nro_max=50&cate=6&sort=lower_price',
        wait: '.theme_nombreProducto',
        all: '.contenidoPrincipal',
        desc: '.theme_nombreProducto',
        precio: '.theme_precio',
        vend: 'Compra Gamer'
    },
    {
        url: 'https://compragamer.com/index.php?seccion=3&destacados=1&nro_max=50&cate=62&sort=lower_price',
        wait: '.theme_nombreProducto',
        all: '.contenidoPrincipal',
        desc: '.theme_nombreProducto',
        precio: '.theme_precio',
        vend: 'Compra Gamer'
    },
    {
        url: 'https://www.logg.com.ar/PRODUCTOS/PLACA-DE-VIDEO',
        wait: '.card-body',
        all: '.card-body',
        desc: '.d-none.d-lg-block.card-title a',
        precio: '.d-lg-block.card-price',
        vend: 'LOGG'
    },
    {
        url: 'https://www.newdeviceargentina.com/categoria-producto/hardware/placasdevideo/',
        wait: '.woocommerce',
        all: '.astra-shop-summary-wrap',
        desc: '.ast-loop-product__link',
        precio: '.woocommerce-Price-amount bdi',
        vend: 'New Device ARG'
    },
    {
        url: 'https://www.venex.com.ar/componentes-de-pc/placas-de-video?limit=96',
        wait: '.product-box-body',
        all: '.product-box-body.clearfix',
        desc: 'h3 a',
        precio: '.current-price',
        vend: 'Venex'
}];

(async() => {
    const placas = await scrap.scrap(paginas);
    placas.sort((a,b) => {return (parseInt(a.precio) - parseInt(b.precio));});

    /* Guardar en archivo de texto la lista de placas de videos

    var txtPlacas = '';

    for (let placa of placas){
        txtPlacas = txtPlacas.concat(placa.desc.toString() + ',' + placa.precio.toString() + ',' + placa.vendedor.toString() + '\n');
    };

    fs.writeFile('./placas.txt', txtPlacas.toString(), (err) => {
        if (err){
            console.log(err)
        }
    });*/

    console.log(placas);
    console.log('');
    console.log(placas.length);

})();