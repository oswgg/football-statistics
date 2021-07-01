// ---------- Este modulo se hara cargo de los eventos en la pagina principal

import { getEquipos } from "./API.js";
import { obtenerInfoEquipo } from "./mostrarInfoEquipo.js";
import { mostrarEquipos } from "./funciones.js";

(function() {
    const pais = document.getElementById('pais');
    const listaEquipos = document.getElementById('equipo');
    
    document.addEventListener('DOMContentLoaded', () => {

        pais.addEventListener('change',  async () => { 
            const objPais = {
                codigo: pais.value,
                idLiga: pais.children[pais.selectedIndex].dataset.league,
                season: 2020
            }

            const equipos = await getEquipos(objPais);

            mostrarEquipos(equipos);
        });    

        listaEquipos.addEventListener('change', () => {

            // Crea un objeto con la informacion del equipo a mostrar
            const objEquipo = {
                idLiga: pais.children[pais.selectedIndex].dataset.league,
                idTeam: listaEquipos.children[listaEquipos.selectedIndex].dataset.id,
                season: 2020,
            }

            obtenerInfoEquipo(objEquipo)
        })
    })
 
})();