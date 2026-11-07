// ==========================================================================
// DATOS (Nuevas resoluciones añadidas para que no sea siempre igual)
// ==========================================================================
const COUNTRIES = ["Afganistán", "Albania", "Alemania", "Andorra", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaiyán", "Bahamas", "Bangladés", "Barbados", "Baréin", "Bélgica", "Belice", "Benín", "Bielorrusia", "Bolivia", "Bosnia y Herzegovina", "Botsuana", "Brasil", "Brunéi", "Bulgaria", "Burkina Faso", "Burundi", "Bután", "Cabo Verde", "Camboya", "Camerún", "Canadá", "Catar", "Chad", "Chile", "China", "Chipre", "Colombia", "Comoras", "Corea del Norte", "Corea del Sur", "Costa de Marfil", "Costa Rica", "Croacia", "Cuba", "Dinamarca", "Dominica", "Ecuador", "Egipto", "El Salvador", "Emiratos Árabes Unidos", "Eritrea", "Eslovaquia", "Eslovenia", "España", "Estados Unidos", "Estonia", "Etiopía", "Filipinas", "Finlandia", "Fiyi", "Francia", "Gabón", "Gambia", "Georgia", "Ghana", "Granada", "Grecia", "Guatemala", "Guinea", "Guinea-Bisáu", "Guinea Ecuatorial", "Guyana", "Haití", "Honduras", "Hungría", "India", "Indonesia", "Irak", "Irán", "Irlanda", "Islandia", "Islas Marshall", "Islas Salomón", "Israel", "Italia", "Jamaica", "Japón", "Jordania", "Kazajistán", "Kenia", "Kirguistán", "Kiribati", "Kuwait", "Laos", "Lesoto", "Letonia", "Líbano", "Liberia", "Libia", "Liechtenstein", "Lituania", "Luxemburgo", "Macedonia del Norte", "Madagascar", "Malasia", "Malaui", "Maldivas", "Malí", "Malta", "Marruecos", "Mauricio", "Mauritania", "México", "Micronesia", "Moldavia", "Mónaco", "Mongolia", "Montenegro", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Nicaragua", "Níger", "Nigeria", "Noruega", "Nueva Zelanda", "Omán", "Países Bajos", "Pakistán", "Palaos", "Panamá", "Papúa Nueva Guinea", "Paraguay", "Perú", "Polonia", "Portugal", "Reino Unido", "República Centroafricana", "República Checa", "República del Congo", "República Democrática del Congo", "República Dominicana", "Ruanda", "Rumania", "Rusia", "Samoa", "San Cristóbal y Nieves", "San Marino", "San Vicente y las Granadinas", "Santa Lucía", "Santo Tomé y Príncipe", "Senegal", "Serbia", "Seychelles", "Sierra Leona", "Singapur", "Siria", "Somalia", "Sri Lanka", "Suazilandia", "Sudáfrica", "Sudán", "Sudán del Sur", "Suecia", "Suiza", "Surinam", "Tailandia", "Tanzania", "Tayikistán", "Timor Oriental", "Togo", "Tonga", "Trinidad y Tobago", "Túnez", "Turkmenistán", "Turquía", "Tuvalu", "Ucrania", "Uganda", "Uruguay", "Uzbekistán", "Vanuatu", "Venezuela", "Vietnam", "Yemen", "Yibuti", "Zambia", "Zimbabue"];

const RESOLUTIONS = [
    { id: "R2334", titulo: "Asentamientos en Palestina", contexto: "Un momento histórico: por primera vez en décadas, el Consejo logra un consenso sobre el conflicto. La presión internacional es máxima.", a_favor: "Declarar ilegales los asentamientos (Derecho Internacional).", en_contra: "Evitar la resolución unilateral y priorizar la negociación.", voto_real: { "Estados Unidos": "abstencion", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 14-0-1", consecuencia: "EE.UU. rompió su tradición de veto. Un golpe diplomático.", impacto_global: 75, tension_potencias: 60, fuente: "https://www.un.org/press/en/2016/sc12657.doc.htm" },
    { id: "R1973", titulo: "Zona de exclusión aérea en Libia", contexto: "Gadafi amenaza con masacrar a los rebeldes. El mundo exige una intervención inmediata para proteger civiles.", a_favor: "Proteger a la población civil de ataques inminentes.", en_contra: "Riesgo de escalada militar y ocupación extranjera.", voto_real: { "Estados Unidos": "favor", "Rusia": "abstencion", "China": "abstencion", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 10-0-5", consecuencia: "Abrió la puerta a la intervención de la OTAN.", impacto_global: 50, tension_potencias: 85, fuente: "https://www.un.org/press/en/2011/sc10200.doc.htm" },
    { id: "R1929", titulo: "Sanciones a Irán", contexto: "Irán acelera su enriquecimiento de uranio. Occidente teme una carrera nuclear secreta. Se requiere mano dura.", a_favor: "Frenar la proliferación nuclear con sanciones económicas.", en_contra: "Las sanciones asfixian a la población civil.", voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 12-2-1", consecuencia: "Brasil y Turquía votaron en contra buscando la paz.", impacto_global: 60, tension_potencias: 40, fuente: "https://www.un.org/press/en/2010/sc9948.doc.htm" },
    { id: "R2397", titulo: "Sanciones a Corea del Norte", contexto: "Pionyang lanza un misil sobre Japón. La provocación es extrema y las potencias están unidas.", a_favor: "Bloquear exportaciones para asfixiar su programa armamentístico.", en_contra: "El aislamiento total podría desatar una respuesta militar.", voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 15-0-0", consecuencia: "Unanimidad histórica contra el régimen de Kim Jong-un.", impacto_global: 85, tension_potencias: 10, fuente: "https://www.un.org/press/en/2017/sc13115.doc.htm" },
    { id: "R2249", titulo: "Acción contra el terrorismo (ISIS)", contexto: "El Estado Islámico controla territorio y publica videos de ejecuciones masivas. El pánico global exige respuesta.", a_favor: "Coordinar esfuerzos militares globales para aplastar al ISIS.", en_contra: "Riesgo de violaciones de derechos humanos y ataques indiscriminados.", voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 15-0-0", consecuencia: "Mandato de fuerza sin precedentes en Siria e Irak.", impacto_global: 90, tension_potencias: 20, fuente: "https://www.un.org/press/en/2015/sc12128.doc.htm" },
    { id: "R2286", titulo: "Protección de hospitales", contexto: "Bombardeos han destruido hospitales de Médicos Sin Fronteras. El mundo exige respeto por la Cruz Roja.", a_favor: "Condenar ataques a instalaciones médicas en zonas de guerra.", en_contra: "Temor a limitar la capacidad de atacar objetivos enemigos.", voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 15-0-0", consecuencia: "Refuerza la protección del personal sanitario.", impacto_global: 95, tension_potencias: 5, fuente: "https://www.un.org/press/en/2016/sc12364.doc.htm" },
    { id: "R2222", titulo: "Protección de periodistas", contexto: "En las guerras modernas, los periodistas son el primer objetivo. Se busca un marco legal internacional.", a_favor: "Garantizar la libertad de prensa en zonas de conflicto.", en_contra: "Países autoritarios alegan violación de soberanía.", voto_real: { "Estados Unidos": "favor", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Aprobada 15-0-0", consecuencia: "Marco legal establecido, aunque con impunidad persistente.", impacto_global: 85, tension_potencias: 15, fuente: "https://www.un.org/press/en/2015/sc12029.doc.htm" },
    { id: "R2202", titulo: "Crisis en Ucrania y Crimea", contexto: "Rusia ha anexado Crimea. Occidente exige condenar la acción y reafirmar la integridad territorial de Ucrania.", a_favor: "Reafirmar la soberanía de Ucrania y no reconocer el referéndum.", en_contra: "Rusia tiene poder de veto y considera legítima la autodeterminación.", voto_real: { "Estados Unidos": "favor", "Rusia": "contra", "China": "abstencion", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Vetada por Rusia (13-1-1)", consecuencia: "Rusia usó su poder de veto por primera vez en el conflicto.", impacto_global: 40, tension_potencias: 100, fuente: "https://www.un.org/press/en/2014/sc11349.doc.htm" },
    { id: "R2532", titulo: "Alto el fuego en Gaza", contexto: "Escalada de violencia en Gaza. Se exige un alto el fuego humanitario inmediato para permitir el paso de ayuda.", a_favor: "Detener la ofensiva militar y abrir corredores humanitarios.", en_contra: "EE.UU. y aliados argumentan que Israel tiene derecho a defenderse.", voto_real: { "Estados Unidos": "contra", "Rusia": "favor", "China": "favor", "Francia": "favor", "Reino Unido": "abstencion" }, mayoria: "favor", resultado: "Vetada por EE.UU. (14-1-0)", consecuencia: "La crisis humanitaria se agravó tras el veto estadounidense.", impacto_global: 20, tension_potencias: 95, fuente: "https://www.un.org/press/en/2024/sc15554.doc.htm" },
    { id: "R2620", titulo: "Cambio Climático y Seguridad", contexto: "Las sequías y desastres naturales causan conflictos armados. Se busca declarar el clima como amenaza a la paz mundial.", a_favor: "Integrar la crisis climática en la agenda de seguridad global.", en_contra: "Rusia y China temen que sea una excusa para intervenir en países.", voto_real: { "Estados Unidos": "favor", "Rusia": "contra", "China": "contra", "Francia": "favor", "Reino Unido": "favor" }, mayoria: "favor", resultado: "Vetada por Rusia y China (12-2-1)", consecuencia: "El Consejo se fracturó sobre cómo abordar el clima.", impacto_global: 30, tension_potencias: 90, fuente: "https://www.un.org/press/en/2021/sc14786.doc.htm" }
];

// MISIONES SECRETAS
const MISSIONS = [
    { id: "M1", titulo: "Operación Tormenta de Fuego", desc: "Has desafiado a las superpotencias. Tu misión es infiltrarte en las reuniones secretas del G7 y filtrar sus planes de expansión militar." },
    { id: "M2", titulo: "El Pacificador Ciego", desc: "Te has abstenido demasiado. Tu misión es viajar a la zona de conflicto y mediar un acuerdo de paz imposible entre facciones radicales." },
    { id: "M3", titulo: "La Sombra del Secretario", desc: "Tus votos fueron 100% alineados. Tu misión es sabotear desde adentro la próxima resolución que intente congelar los fondos de ayuda humanitaria." },
    { id: "M4", titulo: "Escudo Humanitario", desc: "Has votado buscando salvar vidas. Tu misión es liderar un convoy de la ONU hacia una zona sitiada por el fuego cruzado sin armas." },
    { id: "M5", titulo: "Protocolo Génesis", desc: "Eres impredecible. Tu misión es hackear los servidores de la Asamblea General para cambiar un voto histórico y reescribir el futuro de la humanidad." }
];

const P5 = ["Estados Unidos", "Rusia", "China", "Francia", "Reino Unido"];
let state = { agentName: "", country: null, currentResolutions: [], index: 0, matchesCountry: 0, matchesMajority: 0, rebelPoints: 0, humanImpact: 0, abstentions: 0 };
let myChart = null;

const $ = (sel) => document.querySelector(sel);
const show = (id) => { document.querySelectorAll('.screen').forEach(s => s.classList.remove('active')); $(id).classList.add('active'); };

// ==========================================================================
// LÓGICA DE SELECCIÓN (País y Agente)
// ==========================================================================
const searchInput = $('#country-search');
const agentInput = $('#agent-name');
const countryList = $('#country-list');
const btnStart = $('#btn-start');

function checkForm() {
    if (searchInput.value && agentInput.value.trim() !== "") {
        btnStart.disabled = false; btnStart.classList.remove('disabled');
    } else {
        btnStart.disabled = true; btnStart.classList.add('disabled');
    }
}

agentInput.addEventListener('input', checkForm);

searchInput.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase();
    countryList.innerHTML = '';
    if (val.length === 0) { countryList.classList.add('hidden'); checkForm(); return; }

    const filtered = COUNTRIES.filter(c => c.toLowerCase().includes(val));
    if (filtered.length > 0) {
        countryList.classList.remove('hidden');
        filtered.slice(0, 5).forEach(c => { // Solo mostramos 5 para no saturar
            const li = document.createElement('li');
            li.textContent = c;
            li.addEventListener('click', () => {
                searchInput.value = c; state.country = c;
                countryList.classList.add('hidden');
                checkForm();
            });
            countryList.appendChild(li);
        });
    } else { countryList.classList.add('hidden'); }
});

// ==========================================================================
// INICIO DEL JUEGO (Aleatoriedad)
// ==========================================================================
btnStart.addEventListener('click', () => {
    if(!state.country || !agentInput.value) return;
    
    // Mezclar resoluciones y tomar 7 al azar
    state.currentResolutions = [...RESOLUTIONS].sort(() => 0.5 - Math.random()).slice(0, 7);
    
    state.agentName = agentInput.value;
    state.index = 0; state.matchesCountry = 0; state.matchesMajority = 0; 
    state.rebelPoints = 0; state.humanImpact = 0; state.abstentions = 0;
    
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

        // Sistema de rebeldía
        let rebelText = "";
        if (r.voto_real["Estados Unidos"] !== choice && choice !== "abstencion") { state.rebelPoints += 15; rebelText = "Desafiaste a EE.UU."; }
        if (r.voto_real["Rusia"] !== choice && choice !== "abstencion") { state.rebelPoints += 15; rebelText = "Desafiaste a Rusia."; }

        $('#reveal').classList.remove('hidden');
        let resultText = `Tú votaste <strong>${choice.toUpperCase()}</strong>. `;
        resultText += isP5 ? `Tu país votó <strong>${realCountryVote.toUpperCase()}</strong>.` : `Como miembro rotativo, tu voto no tiene veto.`;
        $('#reveal-text').innerHTML = resultText;

        let analysisHTML = `<span>📊 IMPACTO GLOBAL: ${r.impacto_global}%</span>`;
        analysisHTML += `<span>🔥 TENSIÓN CON POTENCIAS: ${r.tension_potencias}%</span>`;
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
    state.index >= 7 ? triggerScanner() : renderRound();
});

// ==========================================================================
// FINAL: SCANNER, SATÉLITE Y MISIÓN SECRETA
// ==========================================================================
function triggerScanner() {
    // 1. Mostrar animación de láser
    const scanner = $('#laser-scanner');
    scanner.classList.remove('hidden');
    
    // 2. Esperar a que el láser termine (2 segundos) y mostrar resultados
    setTimeout(() => {
        scanner.classList.add('hidden');
        finishGame();
    }, 2000);
}

function finishGame() {
    $('#progress-bar').style.width = '100%';
    const total = 7;
    const pctMajority = Math.round((state.matchesMajority / total) * 100);
    
    // Asignar Misión Secreta según comportamiento
    let assignedMission = MISSIONS[0]; // Por defecto (Rebelde)
    if (state.rebelPoints > 40) assignedMission = MISSIONS[0];
    else if (state.abstentions >= 3) assignedMission = MISSIONS[1];
    else if (state.matchesCountry >= 5) assignedMission = MISSIONS[2];
    else if (state.humanImpact > 400) assignedMission = MISSIONS[3];
    else assignedMission = MISSIONS[4];

    // Rellenar Dossier
    $('#res-agent').textContent = state.agentName.toUpperCase();
    $('#res-country').textContent = state.country.toUpperCase();
    $('#mission-title').textContent = assignedMission.titulo;
    $('#mission-desc').textContent = assignedMission.desc;

    let finalText = `Índice de Rebeldía: <strong>${state.rebelPoints} pts</strong>.<br>`;
    finalText += `Coincidencia Global: <strong>${pctMajority}%</strong>.`;
    $('#result-text').innerHTML = finalText;

    // Gráfico
    try {
        const ctx = $('#radarChart').getContext('2d');
        if (myChart) myChart.destroy();
        myChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: ['Humanitario', 'Consenso', 'Rebeldía', 'Estabilidad'],
                datasets: [{
                    label: 'Gestión',
                    data: [Math.min(state.humanImpact / 5, 100), pctMajority, Math.min(state.rebelPoints * 1.5, 100), 100 - Math.min(state.rebelPoints * 1.5, 100)],
                    backgroundColor: 'rgba(0, 240, 255, 0.2)', borderColor: '#00f0ff', borderWidth: 2, pointBackgroundColor: '#fff'
                }]
            },
            options: { scales: { r: { angleLines: { color: 'rgba(255, 255, 255, 0.1)' }, grid: { color: 'rgba(255, 255, 255, 0.1)' }, pointLabels: { color: '#94a3b8', font: { size: 10, family: 'Share Tech Mono' } }, ticks: { display: false, min: 0, max: 100 } } }, plugins: { legend: { display: false } } }
        });
    } catch (e) { console.warn("Chart error", e); }

    show('#screen-result');
}

$('#btn-share').addEventListener('click', () => {
    const text = `🕵️‍♂️ El sistema me ha asignado el nombre clave: ${state.agentName}. Representé a ${state.country} en la ONU y obtuve la misión secreta: "${$('#mission-title').textContent}". ¿Te atreves a descubrir la tuya? ${window.location.href}`;
    navigator.share ? navigator.share({ title: 'Misión Secreta ONU', text }) : navigator.clipboard.writeText(text).then(()=>alert("Dossier copiado. ¡Pégalo en tus historias!"));
});

$('#btn-restart').addEventListener('click', () => {
    searchInput.value = ''; agentInput.value = ''; state.country = null;
    btnStart.disabled = true; btnStart.classList.add('disabled');
    show('#screen-start');
});
