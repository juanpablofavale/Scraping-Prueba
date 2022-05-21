const express = require('express');
const colors = require('colors');
const listaPlacas = require('./placas.js');

//usando express para crear e iniciar el server
const server = express();

//PENDIENTE probar de pasar la consulta de datos al momento de recibir peticion al server

async function cargarDatos(){
    const placas = await listaPlacas.consultaPlacas();
    const txtPagina = '<center><h1>Placas de video</h1><table style="width: 1000px ; border: 1px solid black;"><thead><tr><td style="width: 600px ; border: 1px solid black;">Descripcion</td><td style="width: 100px ; border: 1px solid black;">Precio</td><td style="width: 200px ; border: 1px solid black;">Mayorista</td></tr></thead><tbody style="border: 1px solid black;">' + placas + '</tbody></table></div></center>'
    // <thead><tr><td style="width: 600px ; border: 1px solid black;">GEFORCE MSI G210 1GB DDR3 LOW PROFILE</td><td style="width: 100px ; border: 1px solid black;">6200</td><td style="width: 200px ; border: 1px solid black;">COMPRA GAMER</td></tr></thead>
    server.get('/', (rep, res) =>{
        res.send(txtPagina);
        res.end();
    });
    
    server.listen(3000, () => {
        console.log('server On puerto 3000' .yellow);
    })
};

cargarDatos();
/*(async () => {
    const txtPagina = '<center><h1>Placas de video</h1><div>' + placas + '</div></center>'
    
    server.get('/', (rep, res) =>{
        res.send(txtPagina);
        res.end();
    });
    
    server.listen(3000, () => {
        console.log('server On puerto 3000' .yellow);
    })
});*/

/*
const placas = listaPlacas.consultaPlacas.toString();
const txtPagina = '<center><h1>Placas de video</h1><div>' + placas + '</div></center>'

server.get('/', (rep, res) =>{
    res.send(txtPagina);
    res.end();
});

server.listen(3000, () => {
    console.log('server On puerto 3000' .yellow);
})
*/