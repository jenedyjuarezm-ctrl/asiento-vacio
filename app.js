// ==========================================================================
// CONFIGURACIÓN DE SUPABASE (Corregido el conflicto de nombres)
// ==========================================================================
const SUPABASE_URL = 'https://jntyotrddlrzccoauram.supabase.co';
const SUPABASE_KEY = 'sb_publishable_H8uhN5DbCWLslwo4uJlDuw_jdAjE67K';
// Usamos 'supabaseClient' para no chocar con la librería global 'supabase'
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// ==========================================================================
// DATOS Y RESOLUCIONES
// ==========================================================================
const COUNTRIES = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Guyana", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia del Norte", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];

const RESOLUTIONS = [
    { id: "R2334", titulo: "Asentamientos en Palestina", contexto: "Un momento histórico: por primera vez en décadas, el Consejo logra un consenso sobre el conflicto.", a_favor: "Declarar ilegales los asentamientos.", en_contra: "Evitar la resolución unilateral.", voto_real: { "Estados Unidos": "abstencion", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 14-0-1", consecuencia: "EE.UU. rompió su tradición de veto.", impacto_global: 75, tension_potencias: 60, fuente: "https://www.un.org/press/en/2016/sc12657.doc.htm" },
    { id: "R1973", titulo: "Zona de exclusión aérea en Libia", contexto: "Gadafi amenaza con masacrar a los rebeldes. El mundo exige intervención.", a_favor: "Proteger a la población civil.", en_contra: "Riesgo de escalada militar.", voto_real: { "Estados Unidos": "favor", "Rusia": "abstencion", "China": "abstencion", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 10-0-5", consecuencia: "Abrió la puerta a la intervención de la OTAN.", impacto_global: 50, tension_potencias: 85, fuente: "https://www.un.org/press/en/2011/sc10200.doc.htm" },
    { id: "R1929", titulo: "Sanciones a Irán", contexto: "Irán acelera su enriquecimiento de uranio. Occidente teme una carrera nuclear.", a_favor: "Frenar la proliferación nuclear.", en_contra: "Las sanciones asfixian a la población civil.", voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 12-2-1", consecuencia: "Brasil y Turquía votaron en contra buscando la paz.", impacto_global: 60, tension_potencias: 40, fuente: "https://www.un.org/press/en/2010/sc9948.doc.htm" },
    { id: "R2397", titulo: "Sanciones a Corea del Norte", contexto: "Pionyang lanza un misil sobre Japón. La provocación es extrema.", a_favor: "Bloquear exportaciones para asfixiar su programa.", en_contra: "El aislamiento podría desatar una respuesta militar.", voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 15-0-0", consecuencia: "Unanimidad histórica contra el régimen.", impacto_global: 85, tension_potencias: 10, fuente: "https://www.un.org/press/en/2017/sc13115.doc.htm" },
    { id: "R2249", titulo: "Acción contra el terrorismo (ISIS)", contexto: "El Estado Islámico controla territorio y publica ejecuciones masivas.", a_favor: "Coordinar esfuerzos militares globales contra el ISIS.", en_contra: "Riesgo de violaciones de derechos humanos.", voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 15-0-0", consecuencia: "Mandato de fuerza sin precedentes.", impacto_global: 90, tension_potencias: 20, fuente: "https://www.un.org/press/en/2015/sc12128.doc.htm" },
    { id: "R2286", titulo: "Protección de hospitales", contexto: "Bombardeos han destruido hospitales de Médicos Sin Fronteras.", a_favor: "Condenar ataques a instalaciones médicas.", en_contra: "Temor a limitar la capacidad de atacar.", voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 15-0-0", consecuencia: "Refuerza la protección del personal sanitario.", impacto_global: 95, tension_potencias: 5, fuente: "https://www.un.org/press/en/2016/sc12364.doc.htm" },
    { id: "R2222", titulo: "Protección de periodistas", contexto: "En las guerras modernas, los periodistas son el primer objetivo.", a_favor: "Garantizar la libertad de prensa en conflictos.", en_contra: "Países autoritarios alegan violación de soberanía.", voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 15-0-0", consecuencia: "Marco legal establecido.", impacto_global: 85, tension_potencias: 15, fuente: "https://www.un.org/press/en/2015/sc12029.doc.htm" },
    { id: "R2202", titulo: "Crisis en Ucrania y Crimea", contexto: "Rusia ha anexado Crimea. Occidente exige condenar la acción.", a_favor: "Reafirmar la soberanía de Ucrania.", en_contra: "Rusia considera legítima la autodeterminación.", voto_real: { "Estados Unidos": "favor", "Rusia": "contra", "China": "abstencion", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Vetada por Rusia (13-1-1)", consecuencia: "Rusia usó su poder de veto.", impacto_global: 40, tension_potencias: 100, fuente: "https://www.un.org/press/en/2014/sc11349.doc.htm" },
    { id: "R2532", titulo: "Alto el fuego en Gaza", contexto: "Escalada de violencia en Gaza. Se exige un alto el fuego humanitario.", a_favor: "Detener la ofensiva militar.", en_contra: "EE.UU. argumenta que Israel tiene derecho a defenderse.", voto_real: { "Estados Unidos": "contra", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "abstencion" }, mayoria: "favor", resultado: "Vetada por EE.UU. (14-1-0)", consecuencia: "La crisis humanitaria se agravó tras el veto.", impacto_global: 20, tension_potencias: 95, fuente: "https://www.un.org/press/en/2024/sc15554.doc.htm" },
    { id: "R2620", titulo: "Cambio Climático y Seguridad", contexto: "Las sequías causan conflictos armados. Se busca declarar el clima como amenaza.", a_favor: "Integrar la crisis climática en la seguridad global.", en_contra: "Rusia y China temen que sea una excusa para intervenir.", voto_real: { "Estados Unidos": "favor", "Rusia": "contra", "China": "contra", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Vetada por Rusia y China (12-2-1)", consecuencia: "El Consejo se fracturó sobre cómo abordar el clima.", impacto_global: 30, tension_potencias: 90, fuente: "https://www.un.org/press/en/2021/sc14786.doc.htm" }
];

const MISSIONS = [
    { id: "M1", titulo: "Operación Tormenta de Fuego", desc: "Has desafiado a las superpotencias. Tu misión es infiltrarte en las reuniones del G7 y filtrar sus planes de expansión militar." },
    { id: "M2", titulo: "El Pacificador Ciego", desc: "Te has abstenido demasiado. Tu misión es viajar a la zona de conflicto y mediar un acuerdo de paz imposible entre facciones radicales." },
    { id: "M3", titulo: "La Sombra del Secretario", desc: "Tus votos fueron 100% alineados. Tu misión es sabotear desde adentro la próxima resolución que intente congelar los fondos de ayuda humanitaria." },
    { id: "M4", titulo: "Escudo Humanitario", desc: "Has votado buscando salvar vidas. Tu misión es liderar un convoy de la ONU hacia una zona sitiada por el fuego cruzado sin armas." },
    { id: "M5", titulo: "Protocolo Génesis", desc: "Eres impredecible. Tu misión es hackear los servidores de la Asamblea General para cambiar un voto histórico y reescribir el futuro de la humanidad." }
];

const P5 = ["Estados Unidos", "Rusia", "China", "Francia", "Reino Unido"];
let state = { 
    agentName: "", country: null, currentResolutions: [], 
    index: 0, matchesCountry: 0, matchesMajority: 0, 
    rebelPoints: 0, humanImpact: 0, abstentions: 0,
    historyImpact: [], historyTension: [],
    sessionId: null
};
let myChart = null;
let trendChart = null;

const $ = (sel) => document.querySelector(sel);
const show = (id) => { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); $(id).classList.add('active'); };

// ==========================================================================
// LÓGICA DE INICIO Y JUEGO
// ==========================================================================
const searchInput = $('#country-search');
const agentInput = $('#agent-name');
const countryList = $('#country-list');
const btnStart = $('#btn-start');

function checkForm() {
    // Ahora exigimos que state.country tenga un valor (seleccionado de la lista)
    if (state.country && agentInput.value.trim() !== "") {
        btnStart.disabled = false; btnStart.classList.remove('disabled');
    } else {
        btnStart.disabled = true; btnStart.classList.add('disabled');
    }
}

agentInput.addEventListener('input', checkForm);

searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    state.country = null; // Resetea el país si el usuario vuelve a escribir
    checkForm(); // Deshabilita el botón hasta que seleccione de nuevo
    
    countryList.innerHTML = '';
    if (val.length === 0) { countryList.classList.add('hidden'); return; }
    
    const filtered = COUNTRIES.filter(c => c.toLowerCase().includes(val));
    if (filtered.length > 0) {
        countryList.classList.remove('hidden');
        filtered.slice(0, 5).forEach(c => {
            const li = document.createElement('li');
            li.textContent = c;
            li.addEventListener('click', () => {
                searchInput.value = c; 
                state.country = c; // Aquí se guarda el país
                countryList.classList.add('hidden'); 
                checkForm(); // Habilita el botón
            });
            countryList.appendChild(li);
        });
    } else { countryList.classList.add('hidden'); }
});

// Ocultar lista si se hace clic fuera
document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !countryList.contains(e.target)) {
        countryList.classList.add('hidden');
    }
});

btnStart.addEventListener('click', () => {
    if(!state.country || !agentInput.value) return;
    state.currentResolutions = [...RESOLUTIONS].sort(() => 0.5 - Math.random()).slice(0, 7);
    state.agentName = agentInput.value;
    state.index = 0; state.matchesCountry = 0; state.matchesMajority = 0; 
    state.rebelPoints = 0; state.humanImpact = 0; state.abstentions = 0;
    state.historyImpact = []; state.historyTension = [];
    state.sessionId = null;
    show('#screen-round'); renderRound();
});

function renderRound() {
    const r = state.currentResolutions[state.index];
    $('#agent-badge').textContent = `Agente: ${state.agentName}`;
    $('#progress-bar').style.width = `${(state.index / 7) * 100}%`;
    $('#round-counter').textContent = `Archivo ${state.index + 1}/7`;
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
        const r = state.currentResolutions[state.index];
        const isP5 = P5.includes(state.country);
        const realCountryVote = isP5 ? r.voto_real[state.country] : r.mayoria;

        if (realCountryVote === choice) state.matchesCountry++;
        if (r.mayoria === choice) { state.matchesMajority++; state.humanImpact += r.impacto_global; } 
        else { state.humanImpact += (100 - r.impacto_global) / 2; }
        if (choice === "abstencion") state.abstentions++;

        let rebelText = "";
        if (r.voto_real["Estados Unidos"] !== choice && choice !== "abstencion") { state.rebelPoints += 15; rebelText = "Desafiaste a EE.UU."; }
        if (r.voto_real["Rusia"] !== choice && choice !== "abstencion") { state.rebelPoints += 15; rebelText = "Desafiaste a Rusia."; }

        let impactPoint = r.impacto_global;
        if (choice === "contra" && r.mayoria === "favor") impactPoint = 100 - r.impacto_global;
        if (choice === "abstencion") impactPoint = 50;
        state.historyImpact.push(impactPoint);
        state.historyTension.push(r.tension_potencias);

        $('#reveal').classList.remove('hidden');
        let resultText = `Tú votaste <strong>${choice.toUpperCase()}</strong>. `;
        resultText += isP5 ? `Tu país votó <strong>${realCountryVote.toUpperCase()}</strong>.` : `Como miembro rotativo, tu voto no tiene veto.`;
        $('#reveal-text').innerHTML = resultText;

        let analysisHTML = `<span>📊 IMPACTO GLOBAL: ${r.impacto_global}%</span><span>🔥 TENSIÓN: ${r.tension_potencias}%</span>`;
        if(rebelText) analysisHTML += `<span class="text-bad">⚠️ ALERTA: ${rebelText}</span>`;
        else analysisHTML += `<span class="text-good">✅ ALINEACIÓN: Votaste con el consenso.</span>`;
        $('#reveal-analysis').innerHTML = analysisHTML;
        $('#reveal-consequence').textContent = `// CONSECUENCIA: ${r.consecuencia}`;
        $('#reveal-source').href = r.fuente;
        
        document.querySelectorAll('.btn-vote').forEach(b => b.disabled = true);
    });
});

$('#btn-next').addEventListener('click', () => {
    state.index++;
    if (state.index >= 7) { triggerScanner(); } else { renderRound(); }
});

function triggerScanner() {
    $('#reveal').classList.add('hidden');
    const scanner = $('#laser-scanner');
    scanner.classList.remove('hidden');
    setTimeout(() => { scanner.classList.add('hidden'); finishGame(); }, 2500);
}

// ==========================================================================
// FINAL: GRÁFICOS, RANGOS Y SUPABASE
// ==========================================================================
async function finishGame() {
    $('#progress-bar').style.width = '100%';
    const total = 7;
    const pctMajority = Math.round((state.matchesMajority / total) * 100);
    
    let availableMissions = MISSIONS.filter(m => m.id !== state.sessionId);
    let assignedMission = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    state.sessionId = assignedMission.id;

    let rank = "Agente de Campo";
    if (state.rebelPoints > 60) rank = "Agente de Élite";
    else if (state.humanImpact > 500) rank = "Diplomático Humanitario";
    else if (state.abstentions >= 3) rank = "Observador Neutral";
    else if (state.matchesCountry >= 5) rank = "Operativo del Sistema";

    $('#res-agent').textContent = state.agentName.toUpperCase();
    $('#res-country').textContent = state.country.toUpperCase();
    $('#res-rank').textContent = rank;
    $('#mission-title').textContent = assignedMission.titulo;
    $('#mission-desc').textContent = assignedMission.desc;
    $('#result-text').innerHTML = `Índice de Rebeldía: <strong>${state.rebelPoints} pts</strong>.<br>Coincidencia Global: <strong>${pctMajority}%</strong>.`;

    drawCharts(pctMajority);
    show('#screen-result');

    await saveAndSubscribeToLeaderboard();
}

function drawCharts(pctMajority) {
    try {
        const ctxRadar = $('#radarChart').getContext('2d');
        if (myChart) myChart.destroy();
        myChart = new Chart(ctxRadar, {
            type: 'radar',
            data: { labels: ['Humanitario', 'Consenso', 'Rebeldía', 'Estabilidad'], datasets: [{ data: [Math.min(state.humanImpact / 5, 100), pctMajority, Math.min(state.rebelPoints * 1.5, 100), 100 - Math.min(state.rebelPoints * 1.5, 100)], backgroundColor: 'rgba(0, 240, 255, 0.2)', borderColor: '#00f0ff', borderWidth: 2, pointBackgroundColor: '#fff' }] },
            options: { scales: { r: { angleLines: { color: 'rgba(255, 255, 255, 0.1)' }, grid: { color: 'rgba(255, 255, 255, 0.1)' }, pointLabels: { color: '#94a3b8', font: { size: 10, family: 'Share Tech Mono' } }, ticks: { display: false, min: 0, max: 100 } } }, plugins: { legend: { display: false } } }
        });

        const ctxTrend = $('#trendChart').getContext('2d');
        if (trendChart) trendChart.destroy();
        trendChart = new Chart(ctxTrend, {
            type: 'line',
            data: {
                labels: ['1', '2', '3', '4', '5', '6', '7'],
                datasets: [
                    { label: 'Impacto Humanitario', data: state.historyImpact, borderColor: '#10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', borderWidth: 2, tension: 0.4, fill: true, pointBackgroundColor: '#fff' },
                    { label: 'Tensión Geopolítica', data: state.historyTension, borderColor: '#ef4444', backgroundColor: 'rgba(239, 68, 68, 0.1)', borderWidth: 2, tension: 0.4, fill: true, pointBackgroundColor: '#fff' }
                ]
            },
            options: { 
                responsive: true, maintainAspectRatio: false,
                animation: { duration: 2000, easing: 'easeOutQuart' }, 
                plugins: { legend: { labels: { color: '#94a3b8', font: { size: 10 } } } }, 
                scales: { y: { beginAtZero: true, max: 100, grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8', font: {size: 9} } }, x: { grid: { display: false }, ticks: { color: '#94a3b8', font: {size: 9} } } } 
            }
        });
    } catch (e) { console.warn("Chart error", e); }
}

// ==========================================================================
// CONEXIÓN CON SUPABASE (TIEMPO REAL)
