// DATOS VERIFICADOS
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

let state = { country: null, index: 0, matchesCountry: 0, matchesMajority: 0 };

const $ = (sel) => document.querySelector(sel);
const show = (id) => {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    $(id).classList.add('active');
};

$('#btn-start').addEventListener('click', () => {
    state.country = $('#country-select').value;
    state.index = 0;
    state.matchesCountry = 0;
    state.matchesMajority = 0;
    show('#screen-round');
    renderRound();
});

function renderRound() {
    const r = RESOLUTIONS[state.index];
    
    // Barra de progreso
    $('#progress-bar').style.width = `${((state.index) / RESOLUTIONS.length) * 100}%`;
    $('#round-counter').textContent = `Ronda ${state.index + 1} de ${RESOLUTIONS.length}`;
    
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
        const realCountry = r.voto_real[state.country];

        if (realCountry === choice) state.matchesCountry++;
        if (r.mayoria === choice) state.matchesMajority++;

        // Mostrar revelación
        $('#reveal').classList.remove('hidden');
        
        let resultText = `Tú votaste <strong>${choice.toUpperCase()}</strong>.<br>`;
        resultText += `Tu país (${state.country}) votó <strong>${realCountry.toUpperCase()}</strong>.<br>`;
        resultText += `La mayoría votó <strong>${r.mayoria.toUpperCase()}</strong>. (${r.resultado})`;
        
        $('#reveal-text').innerHTML = resultText;
        $('#reveal-consequence').textContent = `💡 ${r.consecuencia}`;
        $('#reveal-source').href = r.fuente;
        
        document.querySelectorAll('.btn-vote').forEach(b => b.disabled = true);
    });
});

$('#btn-next').addEventListener('click', () => {
    state.index++;
    if (state.index >= RESOLUTIONS.length) {
        finishGame();
    } else {
        renderRound();
    }
});

function finishGame() {
    $('#progress-bar').style.width = '100%';
    const total = RESOLUTIONS.length;
    const pctCountry = Math.round((state.matchesCountry / total) * 100);
    const pctMajority = Math.round((state.matchesMajority / total) * 100);
    
    let finalText = `Coincidiste con <strong>${state.country}</strong> en <strong>${state.matchesCountry}/${total}</strong> votos (${pctCountry}%).<br><br>`;
    finalText += `Coincidiste con la <strong>mayoría global</strong> en <strong>${state.matchesMajority}/${total}</strong> votos (${pctMajority}%).`;
    
    $('#result-text').innerHTML = finalText;
    show('#screen-result');
}

$('#btn-share').addEventListener('click', () => {
    const text = `He jugado "El Asiento Vacío". Como ${state.country}, coincidí con mi gobierno en el ${Math.round((state.matchesCountry / RESOLUTIONS.length) * 100)}% de los votos de la ONU. ¿Tú qué habrías votado?`;
    
    if (navigator.share) {
        navigator.share({ title: 'El Asiento Vacío', text: text, url: window.location.href });
    } else {
        navigator.clipboard.writeText(text + ' ' + window.location.href);
        $('#btn-share').textContent = '¡Copiado!';
        setTimeout(() => { $('#btn-share').textContent = '📋 Copiar para compartir'; }, 2000);
    }
});

$('#btn-restart').addEventListener('click', () => {
    show('#screen-start');
});
