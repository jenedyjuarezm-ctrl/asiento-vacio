// ==========================================================================
// DATOS Y ANÁLISIS
// ==========================================================================
const COUNTRIES = [
    "Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Antigua y Barbuda", "Arabia Saudita", "Argelia", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán",
    "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután",
    "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba",
    "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía",
    "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Guyana",
    "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia",
    "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo",
    "Macedonia del Norte", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Myanmar",
    "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal",
    "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", "Rusia",
    "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam",
    "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán",
    "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"
];

const RESOLUTIONS = [
    {
        id: "R2334", titulo: "Asentamientos en Palestina",
        contexto: "Un momento histórico: por primera vez en décadas, el Consejo logra un consenso sobre el conflicto israelí-palestino. La presión internacional es máxima.",
        a_favor: "Declarar ilegales los asentamientos en Cisjordania (Derecho Internacional).",
        en_contra: "Evitar la resolución unilateral y priorizar la negociación bilateral.",
        voto_real: { "Estados Unidos": "abstencion", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 14-0-1",
        consecuencia: "EE.UU. rompió su tradición de veto. Un golpe diplomático a su aliado Israel.",
        impacto_global: 75, // 0 a 100 (qué tan favorable fue para el mundo)
        tension_potencias: 60, // 0 a 100 (cuánta fricción causó con las superpotencias)
        fuente: "https://www.un.org/press/en/2016/sc12657.doc.htm"
    },
    {
        id: "R1973", titulo: "Zona de exclusión aérea en Libia",
        contexto: "La primavera árabe está en su punto álgido. Gadafi amenaza con masacrar a los rebeldes en Bengasi. El mundo exige una intervención inmediata.",
        a_favor: "Proteger a la población civil de ataques inminentes del régimen.",
        en_contra: "Riesgo de escalada militar y ocupación extranjera.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "abstencion", "China": "abstencion", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 10-0-5",
        consecuencia: "Abrió la puerta a la intervención de la OTAN, que terminó derrocando a Gadafi.",
        impacto_global: 50, // El resultado final fue caótico, pero la intención fue humanitaria
        tension_potencias: 85, // Cabreó muchísimo a Rusia y China
        fuente: "https://www.un.org/press/en/2011/sc10200.doc.htm"
    },
    {
        id: "R1929", titulo: "Sanciones a Irán",
        contexto: "Irán acelera su enriquecimiento de uranio. Occidente teme una carrera nuclear secreta en Oriente Medio. Se requiere una mano dura.",
        a_favor: "Frenar la proliferación nuclear con sanciones económicas severas.",
        en_contra: "Las sanciones asfixian a la población civil y cierran la vía diplomática.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 12-2-1",
        consecuencia: "Sanciones más duras; Brasil y Turquía (miembros no permanentes) votaron en contra buscando la paz.",
        impacto_global: 60,
        tension_potencias: 40,
        fuente: "https://www.un.org/press/en/2010/sc9948.doc.htm"
    },
    {
        id: "R2397", titulo: "Sanciones a Corea del Norte",
        contexto: "Pionyang lanza un misil que sobrevuela Japón. La provocación es extrema y las potencias están inusualmente unidas ante la amenaza nuclear.",
        a_favor: "Bloquear las exportaciones norcoreanas para asfixiar su programa armamentístico.",
        en_contra: "El aislamiento total podría desatar una respuesta militar desesperada.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 15-0-0",
        consecuencia: "Unanimidad histórica. El Consejo mostró los dientes contra el régimen de Kim Jong-un.",
        impacto_global: 85,
        tension_potencias: 10, // Todos de acuerdo
        fuente: "https://www.un.org/press/en/2017/sc13115.doc.htm"
    },
    {
        id: "R2249", titulo: "Acción contra el terrorismo (ISIS)",
        contexto: "El Estado Islámico controla territorio en Irak y Siria y publica videos de ejecuciones masivas. El pánico global exige una respuesta coordinada.",
        a_favor: "Coordinar esfuerzos militares y de inteligencia globales para aplastar al ISIS.",
        en_contra: "Riesgo de violaciones de derechos humanos y ataques aéreos indiscriminados.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 15-0-0",
        consecuencia: "Mandato de fuerza sin precedentes para combatir al ISIS en Siria e Irak.",
        impacto_global: 90,
        tension_potencias: 20,
        fuente: "https://www.un.org/press/en/2015/sc12128.doc.htm"
    },
    {
        id: "R2286", titulo: "Protección de hospitales",
        contexto: "Bombardeos aéreos han destruido hospitales de Médicos Sin Fronteras en zonas de conflicto. El mundo exige que se respete la Cruz Roja.",
        a_favor: "Condenar enérgicamente los ataques a instalaciones médicas en zonas de guerra.",
        en_contra: "Algunos países temen que se limite su capacidad de atacar objetivos enemigos ocultos en hospitales.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 15-0-0",
        consecuencia: "Refuerza la protección del personal sanitario, aunque en la práctica las violaciones continúan.",
        impacto_global: 95, // Es puramente humanitario
        tension_potencias: 5,
        fuente: "https://www.un.org/press/en/2016/sc12364.doc.htm"
    },
    {
        id: "R2222", titulo: "Protección de periodistas",
        contexto: "En las guerras modernas, los periodistas son el primer objetivo. Se busca crear un marco legal internacional para protegerlos.",
        a_favor: "Garantizar la libertad de prensa y proteger a los reporteros en zonas de conflicto.",
        en_contra: "Los países autoritarios argumentan que viola su soberanía y que los periodistas pueden ser espías.",
        voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" },
        mayoria: "favor", resultado: "Aprobada 15-0-0",
        consecuencia: "Marco legal establecido, aunque los ataques a la prensa siguen impunes en muchos países.",
        impacto_global: 85,
        tension_potencias: 15,
        fuente: "https://www.un.org/press/en/2015/sc12029.doc.htm"
    }
];

const P5 = ["Estados Unidos", "Rusia", "China", "Francia", "Reino Unido"];
let state = { 
    country: null, index: 0, 
    matchesCountry: 0, matchesMajority: 0, 
    rebelPoints: 0, humanImpact: 0 
};
let myChart = null;

const $ = (sel) => document.querySelector(sel);
const show = (id) => { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); $(id).classList.add('active'); };

// BUSCADOR
const searchInput = $('#country-search');
const countryList = $('#country-list');
const btnStart = $('#btn-start');

searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    countryList.innerHTML = '';
    if (val.length === 0) { countryList.classList.add('hidden'); return; }

    const filtered = COUNTRIES.filter(c => c.toLowerCase().includes(val));
    if (filtered.length > 0) {
        countryList.classList.remove('hidden');
        filtered.forEach(c => {
            const li = document.createElement('li');
            li.textContent = c;
            li.addEventListener('click', () => {
                searchInput.value = c; state.country = c;
                countryList.classList.add('hidden');
                btnStart.disabled = false; btnStart.classList.remove('disabled'); btnStart.focus();
            });
            countryList.appendChild(li);
        });
    } else { countryList.classList.add('hidden'); }
});

// JUEGO
btnStart.addEventListener('click', () => {
    if(!state.country) return;
    state.index = 0; state.matchesCountry = 0; state.matchesMajority = 0; state.rebelPoints = 0; state.humanImpact = 0;
    show('#screen-round'); renderRound();
});

function renderRound() {
    const r = RESOLUTIONS[state.index];
    $('#country-badge').textContent = `Agente: ${state.country}`;
    $('#progress-bar').style.width = `${(state.index / RESOLUTIONS.length) * 100}%`;
    $('#round-counter').textContent = `Resolución ${state.index + 1}/${RESOLUTIONS.length}`;
    
    $('#res-title').textContent = r.titulo;
    $('#res-context').textContent = r.contexto;
    $('#arg-pro').textContent = r.a_favor;
    $('#arg-con').textContent = r.en_contra;
    
    $('#reveal').classList.add('hidden');
    document.querySelectorAll('.btn-vote').forEach(b => b.disabled = false);
}

document.querySelectorAll('.btn-vote').forEach(btn => {
    btn.addEventListener('click', () => {
        const choice = btn.dataset.vote;
        const r = RESOLUTIONS[state.index];
        const isP5 = P5.includes(state.country);
        
        const realCountryVote = isP5 ? r.voto_real[state.country] : r.mayoria;

        if (realCountryVote === choice) state.matchesCountry++;
        if (r.mayoria === choice) {
            state.matchesMajority++;
            state.humanImpact += r.impacto_global;
        } else {
            state.humanImpact += (100 - r.impacto_global) / 2; // Impacto parcial si va en contra de la mayoría
        }

        // Lógica de rebeldía (si va en contra de EEUU/Rusia/China)
        let rebelText = "";
        if (r.voto_real["Estados Unidos"] !== choice && choice !== "abstencion") {
            state.rebelPoints += 10;
            rebelText = "Has desafiado la postura de Estados Unidos.";
        }
        if (r.voto_real["Rusia"] !== choice && choice !== "abstencion") {
            state.rebelPoints += 10;
            rebelText = "Has desafiado la postura de Rusia.";
        }

        // UI de Revelación
        $('#reveal').classList.remove('hidden');
        let resultText = `Tú votaste <strong>${choice.toUpperCase()}</strong>. `;
        resultText += isP5 ? `Tu país votó <strong>${realCountryVote.toUpperCase()}</strong>.` : `Como miembro rotativo, tu voto no tiene veto.`;
        $('#reveal-text').innerHTML = resultText;

        // Análisis Brutal
        let analysisHTML = `<span>📊 IMPACTO GLOBAL: ${r.impacto_global}%</span>`;
        analysisHTML += `<span>🔥 TENSIÓN CON POTENCIAS: ${r.tension_potencias}%</span>`;
        if(rebelText) analysisHTML += `<span class="text-bad">⚠️ ALERTA: ${rebelText}</span>`;
        else analysisHTML += `<span class="text-good">✅ ALINEACIÓN DIPLOMÁTICA: Has votado con el consenso.</span>`;
        
        $('#reveal-analysis').innerHTML = analysisHTML;
        $('#reveal-consequence').textContent = `// CONSECUENCIA HISTÓRICA: ${r.consecuencia}`;
        $('#reveal-source').href = r.fuente;
        
        document.querySelectorAll('.btn-vote').forEach(b => b.disabled = true);
    });
});

$('#btn-next').addEventListener('click', () => {
    state.index++;
    state.index >= RESOLUTIONS.length ? finishGame() : renderRound();
});

function finishGame() {
    $('#progress-bar').style.width = '100%';
    const total = RESOLUTIONS.length;
    const pctCountry = Math.round((state.matchesCountry / total) * 100);
    const pctMajority = Math.round((state.matchesMajority / total) * 100);
    
    $('#result-subtitle').textContent = `Dossier Final: ${state.country}`;
    
    let finalText = `Coincidiste con la mayoría global en el <strong>${pctMajority}%</strong> de las resoluciones.<br>`;
    finalText += `Tu Índice de Rebeldía contra las superpotencias es de <strong>${state.rebelPoints} pts</strong>.<br>`;
    if(state.rebelPoints > 30) finalText += `<span class="text-bad">Eres un diplomático de alto riesgo.</span>`;
    else finalText += `<span class="text-good">Eres un diplomático predecible y seguro.</span>`;

    $('#result-text').innerHTML = finalText;

    // Gráfico Radar (Telaraña)
    try {
        const ctx = $('#radarChart').getContext('2d');
        if (myChart) myChart.destroy();
        
        myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Impacto Humanitario', 'Coincidencia Global', 'Rebeldía (Potencias)', 'Estabilidad'],
                datasets: [{
                    label: 'Tu Gestión',
                    data: [
                        Math.min(state.humanImpact / total, 100), 
                        pctMajority, 
                        Math.min(state.rebelPoints * 2, 100),
                        100 - Math.min(state.rebelPoints * 2, 100) // A más rebeldía, menos estabilidad
                    ],
                    backgroundColor: 'rgba(0, 240, 255, 0.2)',
                    borderColor: 'rgba(0, 240, 255, 1)',
                    pointBackgroundColor: '#fff',
                    pointBorderColor: '#00f0ff',
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    r: {
                        angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
                        grid: { color: 'rgba(255, 255, 255, 0.1)' },
                        pointLabels: { color: '#94a3b8', font: { size: 10, family: 'Share Tech Mono' } },
                        ticks: { display: false, min: 0, max: 100 }
                    }
                },
                plugins: { legend: { display: false } }
            }
        });
    } catch (e) { console.warn("Chart error", e); }

    show('#screen-result');
}

$('#btn-share').addEventListener('click', () => {
    const text = `He jugado "El Asiento Vacío". Como delegado de ${state.country}, mi Índice de Rebeldía Geopolítica fue de ${state.rebelPoints} pts. ¿Te atreves a desafiar a las superpotencias? ${window.location.href}`;
    navigator.share ? navigator.share({ title: 'El Asiento Vacío', text }) : navigator.clipboard.writeText(text).then(()=>alert("Copiado"));
});

$('#btn-restart').addEventListener('click', () => {
    searchInput.value = ''; state.country = null;
    btnStart.disabled = true; btnStart.classList.add('disabled');
    show('#screen-start');
});
