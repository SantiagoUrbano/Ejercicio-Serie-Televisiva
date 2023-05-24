import { Episodio } from "./episodio";
import { Persona } from "./persona";
import { Plataforma } from "./plataforma";


export class Serie {
    public nombre: string;
    public imagen: string;
    public categorias: string[];
    public directores: Persona[];
    public actores: Persona[];
    public episodios: Episodio[];
    public plataforma: Plataforma;

    constructor(nombre: string, imagen: string, categorias: string[], directores: Persona[], actores: Persona[], episodios: Episodio[], plataforma: Plataforma) {
        this.nombre = nombre;
        this.imagen = imagen;
        this.categorias = categorias;
        this.directores = directores;
        this.actores = actores;
        this.episodios = episodios;
        this.plataforma = plataforma;
    }
}