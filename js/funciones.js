// ---------- Este modulo se hara cargo de las funciones que modifiquen el HTML

// Muestra en los equipos en el select correspondiente
export function mostrarEquipos(equipos) {
    const listaEquipos = document.getElementById('equipo');

    limpiarHTML(listaEquipos);
    
    const { response } = equipos;

    response.forEach(equipo => {

        const { name, id } = equipo.team;
        const optEquipo = document.createElement('option');
        optEquipo.textContent = name;
        optEquipo.dataset.id = id;

        listaEquipos.appendChild(optEquipo);
    })
}





export async function mostrarInfo(info) {

    const teamContainer = document.getElementById('team-container');
    const { response ,response: { league, team } } = info;

    await Promise.all([ mostrarNombre(league, team), mostrarDatos(response) ]);
    
    teamContainer.classList.remove('d-none');
    teamContainer.classList.add('d-block');
}


function mostrarNombre(liga, equipo) {

    // Editando el nombre y el logo del equipo
    const { name, logo } = equipo;

    const teamIcon = document.getElementById('team-icon');
    teamIcon.src = logo;

    const teamName = document.getElementById('team-name');
    teamName.textContent = name;

    // Editando el nombre y la bandera del pais

    const countryIcon = document.getElementById('country-icon');
    countryIcon.src = liga.flag;

    const countryName = document.getElementById('country-name');
    countryName.textContent = document.getElementById('pais').children[document.getElementById('pais').selectedIndex].textContent;

    const ligaIcon = document.getElementById('liga-icon');
    ligaIcon.src = liga.logo
}

function mostrarDatos({ fixtures, goals, cards, clean_sheet }) {

    const pj = document.getElementById('PJ');
    const pg = document.getElementById('PG');
    const pp = document.getElementById('PP');
    const pe = document.getElementById('PE');
    const gf = document.getElementById('GF');
    const gc = document.getElementById('GC');
    const gpf = document.getElementById('GPF');
    const gpc = document.getElementById('GPC');
    const pi = document.getElementById('PI');

    const { played, wins, draws, loses } = fixtures;
    pj.textContent = played.total;
    pg.textContent = wins.total;
    pp.textContent = loses.total;
    pe.textContent = draws.total;

    gf.textContent = goals.for.total.total;
    gc.textContent = goals.against.total.total;
    gpf.textContent = goals.for.average.total;
    gpc.textContent = goals.against.average.total;

    pi.textContent = clean_sheet.total;
}


// Limpia el html previo
function limpiarHTML(target) {
    while( target.children.length > 1 ) {
        target.removeChild(target.children[1]);
    }
}
