"use strict";
exports.__esModule = true;
var persona_js_1 = require("./persona.js");
var episodio_js_1 = require("./episodio.js");
var planprecio_js_1 = require("./planprecio.js");
var plataforma_js_1 = require("./plataforma.js");
var serie_js_1 = require("./serie.js");
// Directores 
var director1 = new persona_js_1.Persona('Adam Sandler', 'adamsandler.jpg', 'Adam Sandler es un gran director en el cual participo como actor en grandes peliculas');
var director2 = new persona_js_1.Persona('Wilson Urbano', 'wilsonurbano.jpg', 'Wilson Urbano fue un gran director en los años 87, grabando grandes peliculas como La Familia Yak');
// Actores
var actor1 = new persona_js_1.Persona('Laura Perez', 'lauraperez.jpg', 'Laura Perez es una grande actriz, siendo reconocida por su atractiva sonrisa y su actuación en escena');
var actor2 = new persona_js_1.Persona('Erick Santiago', 'ericksantiago.jpg', 'Erick Santiago es un gran actor frances, siendo reconocido por su explendida puesta en escena con grandes actrices como Laura Perez');
// Episodios
var episodio1 = new episodio_js_1.Episodio('Banco y vatar', 'vatar encuentra un plato lleno de carne de cerdo encima del comedor', 50);
var episodio2 = new episodio_js_1.Episodio('Banco y vatar', 'Banco se da cuenta que su compañero de aventura vatar encuentra un jugoso filete de cerdo y deciden competir por el', 60);
// Plataforma
var catflix = new plataforma_js_1.Plataforma('catflix', 'www.catflix.com', [
    new planprecio_js_1.PlanPrecio('Plan básico', 20.000),
    new planprecio_js_1.PlanPrecio('Plan medio', 30.000),
]);
var Gatuberflex = new plataforma_js_1.Plataforma('Gatuberflex', 'www.gatuberflex.com', [
    new planprecio_js_1.PlanPrecio('Plan básico', 12.000),
    new planprecio_js_1.PlanPrecio('Plan medio', 36.000),
]);
var serie1 = new serie_js_1.Serie('La hormiga gigante', 'lahormigagigante.jpg', ['Acción, drama, suspenso'], [director1], [actor1], [episodio1], catflix);
var serie2 = new serie_js_1.Serie('Bancas y medias', 'bancasymedias.jpg', ['drama, suspenso, emocionante'], [director2], [actor2], [episodio2], Gatuberflex);
function obtenerInformacionSerie(serie) {
    console.log('Nombre: ' + serie.nombre);
    console.log('Imagen: ' + serie.imagen);
    console.log('Categorias: ' + serie.categorias.join(''));
    console.log('Directores: ');
    serie.directores.forEach(function (director) {
        console.log('- Nombre: ' + director.nombre);
        console.log('- Foto: ' + director.foto);
        console.log('- Descripcion: ' + director.descripcion);
    });
    console.log("Actores:");
    serie.actores.forEach(function (actor) {
        console.log("- Nombre: " + actor.nombre);
        console.log("- Foto: " + actor.foto);
        console.log("- Descripción: " + actor.descripcion);
    });
    console.log("Episodios:");
    serie.episodios.forEach(function (episodio) {
        console.log("- Nombre: " + episodio.nombre);
        console.log("- Resumen: " + episodio.resumen);
        console.log("- Duración: " + episodio.duracion + " minutos");
    });
    console.log("Plataforma:");
    console.log("- Nombre: " + serie.plataforma.nombre);
    console.log("- Sitio web: " + serie.plataforma.sitioWeb);
    console.log("Planes y precios:");
    serie.plataforma.planesPrecios.forEach(function (planPrecio) {
        console.log("- Plan: " + planPrecio.plan);
        console.log("- Precio: $" + planPrecio.precio);
    });
}
obtenerInformacionSerie(serie1);
obtenerInformacionSerie(serie2);
