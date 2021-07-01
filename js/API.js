// ---------- Este modulo se hara cargo de todas las consultas a la API

export const getEquipos = async pais => {

    const { codigo, idLiga, season } = pais;

    try {
        const resultado = await fetch(`https://v3.football.api-sports.io/teams?country=${codigo}&league=${idLiga}&season=${season}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "efd55eb98315611f1d32717b2a7e8345"
            }
        });

        const respuesta = await resultado.json();
        return respuesta;

    } catch (error) {
        console.error(error)
    }

}


export const datosEquipo = async equipo => {

    const { idTeam, idLiga, season } = equipo;
    
    try {
        const datos = await fetch(`https://v3.football.api-sports.io/teams/statistics?season=${season}&team=${idTeam}&league=${idLiga}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "v3.football.api-sports.io",
                "x-rapidapi-key": "efd55eb98315611f1d32717b2a7e8345"
            }
        }); 

        const resultado = await datos.json();

        return resultado;
    }
    catch (error) {
        console.error(error)
    }
}



