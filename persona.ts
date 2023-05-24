
import { Serie } from "./serie";

export class Persona {
    public nombre: string;
    public foto: string;
    public descripcion: string;
    public seriesParticipadas: Serie[];

    constructor(nombre: string, foto: string, descripcion: string) {
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.seriesParticipadas = [];
    }
}