// ==========================================================================
// 1. DATOS DE LA SIMULACIÓN
// ==========================================================================

// Lista de los 193 Estados Miembros de la ONU (orden alfabético).
const COUNTRIES = [
    "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán",
    "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután",
    "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba",
    "Dinamarca", "Dominica",
    "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía",
    "Filipinas", "Finlandia", "Fiyi", "Francia",
    "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Guyana",
    "Haití", "Honduras", "Hungría",
    "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia",
    "Jamaica", "Japón", "Jordania",
    "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait",
    "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo",
    "Macedonia del Norte", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda",
    "Omán",
    "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal",
    "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", "Rusia",
    "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam",
    "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu",
    "Ucrania", "Uganda", "Uruguay", "Uzbekistán",
    "Vanuatu", "Venezuela", "Vietnam",
    "Yemen", "Yibuti",
    "Zambia", "Zimbabue"
];

// Resoluciones del Consejo de Seguridad con datos verificados.
const RESOLUTIONS = [
    {
        id: "R2334", titulo: "Asentamientos en Palestina",
        contexto: "Resolución que declara ilegales los asentamientos israelíes en Cisjordania y Jerusalén Este.",
        a_favor: "El derecho internacional prohíbe trasladar población civil a territorio ocupado.",
        en_contra: "El conflicto debe resolverse por negociación bilateral.",
        voto_real: { "Estados Unidos": "abstencion", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 14-0-1",
        consecuencia: "Primera resolución del Consejo sobre el tema desde 1980; EE.UU. no usó veto.",
        fuente: "https://www.un.org/press/en/2016/sc12657.doc.htm"
    },
    {
        id: "R1973", titulo: "Zona de exclusión aérea en Libia",
        contexto: "Autoriza una zona de exclusión aérea para proteger civiles en la crisis libia de 2011.",
        a_favor: "Proteger a la población civil de ataques del régimen.",
        en_contra: "Riesgo de escalada militar.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "abstencion", "China": "abstencion", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 10-0-5",
        consecuencia: "Habilitó la intervención de la OTAN en Libia.",
        fuente: "https://www.un.org/press/en/2011/sc10200.doc.htm"
    },
    {
        id: "R1929", titulo: "Sanciones a Irán",
        contexto: "Amplía sanciones contra Irán por enriquecimiento de uranio.",
        a_favor: "Frenar la proliferación nuclear.",
        en_contra: "Las sanciones afectan a la población civil.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 12-2-1",
        consecuencia: "Sanciones más duras; Brasil y Turquía votaron en contra.",
        fuente: "https://www.un.org/press/en/2010/sc9948.doc.htm"
    },
    {
        id: "R2397", titulo: "Sanciones a Corea del Norte",
        contexto: "Endurece sanciones tras pruebas de misiles norcoreanas.",
        a_favor: "Contener el programa nuclear norcoreano.",
        en_contra: "El aislamiento agrava la crisis humanitaria.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 15-0-0",
        consecuencia: "Sanciones récord; unanimidad del Consejo.",
        fuente: "https://www.un.org/press/en/2017/sc13115.doc.htm"
    },
    {
        id: "R2249", titulo: "Acción contra el terrorismo (ISIS)",
        contexto: "Redobla esfuerzos contra el Estado Islámico.",
        a_favor: "Coordinar la lucha global contra el terrorismo.",
        en_contra: "Riesgo de acciones militares sin mandato claro.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 15-0-0",
        consecuencia: "Mandato para combatir al ISIS.",
        fuente: "https://www.un.org/press/en/2015/sc12128.doc.htm"
    },
    {
        id: "R2286", titulo: "Protección de hospitales",
        contexto: "Condena ataques a instalaciones médicas en zonas de guerra.",
        a_favor: "El personal médico está protegido por el derecho humanitario.",
        en_contra: "Temor a limitar operaciones militares legítimas.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 15-0-0",
        consecuencia: "Refuerza la protección de hospitales.",
        fuente: "https://www.un.org/press/en/2016/sc12364.doc.htm"
    },
    {
        id: "R2222", titulo: "Protección de periodistas",
        contexto: "Protege a periodistas en zonas de conflicto armado.",
        a_favor: "La libertad de prensa es esencial en conflictos.",
        en_contra: "Debe respetarse la soberanía nacional.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 15-0-0",
        consecuencia: "Marco de protección para periodistas.",
        fuente: "https://www.un.org/press/en/2015/sc12029.doc.htm"
    }
];

// ==========================================================================
// 2. ESTADO Y UTILIDADES
// ==========================================================================

const P5 = ["Estados Unidos", "Rusia", "China", "Francia", "Reino Unido"];

let state = { country: null, index: 0, matchesCountry: 0, matchesMajority: 0 };
let myChart = null;

const $ = (sel) => document.querySelector(sel);
const show = (id) => {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
};

// ==========================================================================
// 3. LÓGICA DEL BUSCADOR DE PAÍSES
// ==========================================================================

const searchInput = $('#country-search');
const countryList = $('#country-list');
const btnStart = $('#btn-start');

searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    countryList.innerHTML = '';
    
    if (val.length === 0) {
        countryList.classList.add('hidden');
        return;
    }

    const filtered = COUNTRIES.filter(c => c.toLowerCase().includes(val));
    
    if (filtered.length > 0) {
        countryList.classList.remove('hidden');
        filtered.forEach(c => {
            const li = document.createElement('li');
            li.textContent = c;
            li.setAttribute('role', 'option');
            li.addEventListener('click', () => {
                searchInput.value = c;
                state.country = c;
                countryList.classList.add('hidden');
                btnStart.disabled = false;
                btnStart.classList.remove('disabled');
                btnStart.focus();
            });
            countryList.appendChild(li);
        });
    } else {
        countryList.classList.add('hidden');
    }
});

// ==========================================================================
// 4. LÓGICA DEL JUEGO
// ==========================================================================

// Iniciar juego
btnStart.addEventListener('click', () => {
    if(!state.country) return;
    state.index = 0;
    state.matchesCountry = 0;
    state.matchesMajority = 0;
    show('#screen-round');
    renderRound();
});

// Renderizar la ronda actual
function renderRound() {
    const r = RESOLUTIONS[state.index];
    
    $('#country-badge').textContent = `Delegado de ${state.country}`;
    const progress = ((state.index) / RESOLUTIONS.length) * 100;
    $('#progress-bar').style.width = `${progress}%`;
    $('#progress-bar').setAttribute('aria-valuenow', progress);
    $('#round-counter').textContent = `Ronda ${state.index + 1}/${RESOLUTIONS.length}`;
    
    $('#res-title').textContent = r.titulo;
    $('#res-context').textContent = r.contexto;
    $('#arg-pro').textContent = r.a_favor;
    $('#arg-con').textContent = r.en_contra;
    
    $('#reveal').classList.add('hidden');
    document.querySelectorAll('.btn-vote').forEach(b => b.disabled = false);
}

// Lógica de votación
document.querySelectorAll('.btn-vote').forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = btn.dataset.vote;
        const r = RESOLUTIONS[state.index];
        const isP5 = P5.includes(state.country);
        
        // Determinar el voto "real" del país seleccionado.
        // Si es un miembro permanente (P5), se usa su voto registrado.
        // Si es un miembro no permanente, se asume que votó con la mayoría (simplificación para el simulador).
        const realCountryVote = isP5 ? r.voto_real[state.country] : r.mayoria;

        // Actualizar contadores
        if (realCountryVote === choice) state.matchesCountry++;
        if (r.mayoria === choice) state.matchesMajority++;

        // Mostrar panel de revelación
        $('#reveal').classList.remove('hidden');
        
        let resultText = `Tú votaste <strong>${choice.toUpperCase()}</strong>.<br>`;
        if (isP5) {
            resultText += `Tu país (${state.country}) votó <strong>${realCountryVote.toUpperCase()}</strong>.<br>`;
        } else {
            resultText += `Como ${state.country} no es miembro permanente del Consejo, tu voto se alineó con la mayoría global.<br>`;
        }
        resultText += `La mayoría votó <strong>${r.mayoria.toUpperCase()}</strong>. (${r.resultado})`;
        
        $('#reveal-text').innerHTML = resultText;
        $('#reveal-consequence').textContent = `💡 Contexto: ${r.consecuencia}`;
        $('#reveal-source').href = r.fuente;
        
        // Deshabilitar botones de voto
        document.querySelectorAll('.btn-vote').forEach(b => b.disabled = true);
    });
});

// Pasar a la siguiente ronda o finalizar
$('#btn-next').addEventListener('click', () => {
    state.index++;
    if (state.index >= RESOLUTIONS.length) {
        finishGame();
    } else {
        renderRound();
    }
});

// Finalizar el juego y mostrar resultados
function finishGame() {
    $('#progress-bar').style.width = '100%';
    $('#progress-bar').setAttribute('aria-valuenow', 100);
    const total = RESOLUTIONS.length;
    const pctCountry = Math.round((state.matchesCountry / total) * 100);
    const pctMajority = Math.round((state.matchesMajority / total) * 100);
    
    $('#result-subtitle').textContent = `Perfil de ${state.country} en el Consejo`;
    
    let finalText = `Coincidiste con la <strong>mayoría global</strong> en el <strong>${pctMajority}%</strong> de los votos.`;
    if (pctCountry > 0) {
        finalText += `<br>Coincidiste con las decisiones de tu gobierno en el <strong>${pctCountry}%</strong>.`;
    }
    $('#result-text').innerHTML = finalText;

    // Renderizar gráfico de dona (con manejo de errores si Chart.js no cargó)
    try {
        const ctx = $('#resultChart').getContext('2d');
        if (myChart) myChart.destroy(); // Destruir gráfico anterior
        
        myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Coincidencia Global', 'Diferencia'],
                datasets: [{
                    data: [pctMajority, 100 - pctMajority],
                    backgroundColor: ['#00b4d8', '#1e293b'],
                    borderWidth: 0,
                    hoverOffset: 4
                }]
            },
            options: {
                cutout: '75%',
                plugins: { legend: { display: false } }
            }
        });
    } catch (error) {
        console.warn('No se pudo renderizar el gráfico:', error);
    }

    show('#screen-result');
}

// Compartir resultado
$('#btn-share').addEventListener('click', () => {
    const text = `He jugado "El Asiento Vacío". Como delegado de ${state.country}, coincidí con la mayoría global de la ONU en el ${Math.round((state.matchesMajority / RESOLUTIONS.length) * 100)}% de los votos. ¿Tú qué habrías votado?`;
    
    if (navigator.share) {
        navigator.share({ title: 'El Asiento Vacío', text: text, url: window.location.href });
    } else {
        navigator.clipboard.writeText(text + ' ' + window.location.href).then(() => {
            $('#btn-share').textContent = '¡Copiado al portapapeles!';
            setTimeout(() => { $('#btn-share').textContent = '📋 Copiar para compartir'; }, 2000);
        }).catch(err => {
            console.error('Error al copiar el texto: ', err);
            $('#btn-share').textContent = 'No se pudo copiar';
        });
    }
});

// Reiniciar juego
$('#btn-restart').addEventListener('click', () => {
    searchInput.value = '';
    state.country = null;
    btnStart.disabled = true;
    btnStart.classList.add('disabled');
    show('#screen-start');
});
