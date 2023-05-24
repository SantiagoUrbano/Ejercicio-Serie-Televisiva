import { Persona } from "./persona.js";
import { Episodio } from "./episodio.js";
import { PlanPrecio } from "./planprecio.js";
import { Plataforma } from "./plataforma.js";
import { Serie } from "./serie.js";

// Directores 

const director1 = new Persona (
    'Adam Sandler',
    'adamsandler.jpg',
    'Adam Sandler es un gran director en el cual participo como actor en grandes peliculas'
);

const director2 = new Persona (
    'Wilson Urbano',
    'wilsonurbano.jpg',
    'Wilson Urbano fue un gran director en los años 87, grabando grandes peliculas como La Familia Yak'
);

// Actores

const actor1 = new Persona (
    'Laura Perez',
    'lauraperez.jpg',
    'Laura Perez es una grande actriz, siendo reconocida por su atractiva sonrisa y su actuación en escena'
);

const actor2 = new Persona (
    'Erick Santiago',
    'ericksantiago.jpg',
    'Erick Santiago es un gran actor frances, siendo reconocido por su explendida puesta en escena con grandes actrices como Laura Perez'
);

// Episodios

const episodio1 = new Episodio ('Banco y vatar','vatar encuentra un plato lleno de carne de cerdo encima del comedor',50);
const episodio2 = new Episodio ('Banco y vatar','Banco se da cuenta que su compañero de aventura vatar encuentra un jugoso filete de cerdo y deciden competir por el',60);

// Plataforma

const catflix = new Plataforma(
    'catflix',
    'www.catflix.com',
    [
        new PlanPrecio('Plan básico',20.000),
        new PlanPrecio('Plan medio',30.000),
    ] as any
);

const Gatuberflex = new Plataforma(
    'Gatuberflex',
    'www.gatuberflex.com',
    [
        new PlanPrecio('Plan básico',12.000),
        new PlanPrecio('Plan medio',36.000),
    ] as any
);

const serie1 = new Serie (
    'La hormiga gigante',
    'lahormigagigante.jpg',
    ['Acción, drama, suspenso'],
    [director1],
    [actor1],
    [episodio1],
    catflix
);

const serie2 = new Serie (
    'Bancas y medias',
    'bancasymedias.jpg',
    ['drama, suspenso, emocionante'],
    [director2],
    [actor2],
    [episodio2],
    Gatuberflex
)

function obtenerInformacionSerie(serie: Serie) {
    console.log('Nombre: ' + serie.nombre);
    console.log('Imagen: ' + serie.imagen);
    console.log('Categorias: ' + serie.categorias.join(''));

    console.log('Directores: ');
    serie.directores.forEach((director) => {
        console.log('- Nombre: ' + director.nombre);
        console.log('- Foto: ' + director.foto);
        console.log('- Descripcion: ' + director.descripcion);
    });

    console.log("Actores:");
    serie.actores.forEach((actor) => {
        console.log("- Nombre: " + actor.nombre);
        console.log("- Foto: " + actor.foto);
        console.log("- Descripción: " + actor.descripcion);
    });

    console.log("Episodios:");
    serie.episodios.forEach((episodio) => {
        console.log("- Nombre: " + episodio.nombre);
        console.log("- Resumen: " + episodio.resumen);
        console.log("- Duración: " + episodio.duracion + " minutos");  
    });

    console.log("Plataforma:");
        console.log("- Nombre: " + serie.plataforma.nombre);
        console.log("- Sitio web: " + serie.plataforma.sitioWeb);
        console.log("Planes y precios:");
    serie.plataforma.planesPrecios.forEach((planPrecio) => {
        console.log("- Plan: " + planPrecio.plan);
        console.log("- Precio: $" + planPrecio.precio);
    });
}

obtenerInformacionSerie(serie1);
obtenerInformacionSerie(serie2);
