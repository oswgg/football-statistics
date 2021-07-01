import { datosEquipo } from "./API.js";
import { mostrarInfo } from "./funciones.js";

export async function obtenerInfoEquipo(equipo) {

    const respuesta = await datosEquipo(equipo);
    
    mostrarInfo(respuesta);
}