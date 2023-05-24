import { PlanPrecio } from "./planprecio.js";

export class Plataforma {
    public nombre: string;
    public sitioWeb: string;
    public planesPrecios: PlanPrecio[];

    constructor(nombre: string, sitioWeb: string, planesPrecios: PlanPrecio) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planesPrecios = [];
    }
}