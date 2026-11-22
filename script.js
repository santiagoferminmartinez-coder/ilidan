/* =====================================
   SISTEMA: DESCUBRIR MI FACCION
===================================== */

let preguntaActual = 0;

let puntos = {
    usa: 0,
    china: 0,
    gla: 0
};

const preguntas = [

    {
        pregunta: "¿Qué estilo de juego te llama más la atención?",
        respuestas: [
            { texto: "Tecnología avanzada y aviación", faccion: "usa", icono: "✈️" },
            { texto: "Grandes ejércitos y tanques", faccion: "china", icono: "🚩" },
            { texto: "Movilidad, túneles y camuflaje", faccion: "gla", icono: "☠️" }
        ]
    },

    {
        pregunta: "¿Qué tipo de ejército preferís?",
        respuestas: [
            { texto: "Un ejército pequeño pero tecnológico", faccion: "usa", icono: "🛰️" },
            { texto: "Una fuerza numerosa y poderosa", faccion: "china", icono: "🛡️" },
            { texto: "Un ejército rápido y flexible", faccion: "gla", icono: "⚡" }
        ]
    },

    {
        pregunta: "¿Qué unidad elegirías para dominar el campo de batalla?",
        respuestas: [
            { texto: "Aviones de combate y unidades especializadas", faccion: "usa", icono: "🛩️" },
            { texto: "Tanques pesados y artillería", faccion: "china", icono: "🚜" },
            { texto: "Vehículos ligeros y unidades móviles", faccion: "gla", icono: "🏴" }
        ]
    },

    {
        pregunta: "¿Qué estrategia se parece más a tu forma de jugar?",
        respuestas: [
            { texto: "Atacar con precisión y superioridad tecnológica", faccion: "usa", icono: "🎯" },
            { texto: "Avanzar con fuerza y controlar el territorio", faccion: "china", icono: "⚔️" },
            { texto: "Sorprender al rival y cambiar de posición", faccion: "gla", icono: "🌪️" }
        ]
    },

    {
        pregunta: "¿Qué ventaja considerás más importante?",
        respuestas: [
            { texto: "Superioridad aérea y tecnología", faccion: "usa", icono: "🔵" },
            { texto: "Resistencia y potencia de fuego", faccion: "china", icono: "🔴" },
            { texto: "Adaptabilidad y movilidad", faccion: "gla", icono: "🟢" }
        ]
    }

];


/* =====================================
   INICIAR TEST
===================================== */

function iniciarTest() {

    preguntaActual = 0;

    puntos = {
        usa: 0,
        china: 0,
        gla: 0
    };

    const test = document.getElementById("test");
    const resultado = document.getElementById("resultado");

    test.classList.remove("oculto");
    resultado.classList.add("oculto");

    // Crear el panel de progreso si todavía no existe
    if (!document.getElementById("progreso-test")) {

        const progreso = document.createElement("div");

        progreso.id = "progreso-test";
        progreso.className = "progreso-test";

        progreso.innerHTML = `
            <div class="progreso-info">
                <span id="numero-pregunta"></span>
                <span id="porcentaje-test"></span>
            </div>

            <div class="progreso-fondo">
                <div id="progreso-barra"></div>
            </div>
        `;

        test.prepend(progreso);
    }

    mostrarPregunta();

    test.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}


/* =====================================
   MOSTRAR PREGUNTA
===================================== */

function mostrarPregunta() {

    const pregunta = preguntas[preguntaActual];

    const titulo = document.getElementById("pregunta");
    const respuestas = document.getElementById("respuestas");

    titulo.textContent = pregunta.pregunta;

    respuestas.innerHTML = "";

    // Actualizar progreso
    const numero = document.getElementById("numero-pregunta");
    const porcentaje = document.getElementById("porcentaje-test");
    const barra = document.getElementById("progreso-barra");

    const numeroActual = preguntaActual + 1;
    const totalPreguntas = preguntas.length;
    const avance = (numeroActual / totalPreguntas) * 100;

    numero.textContent =
        "PREGUNTA " + numeroActual + " / " + totalPreguntas;

    porcentaje.textContent =
        Math.round(avance) + "% COMPLETADO";

    barra.style.width = avance + "%";

    // Animación de entrada
    titulo.classList.remove("animacion-pregunta");

    void titulo.offsetWidth;

    titulo.classList.add("animacion-pregunta");

    // Crear respuestas
    pregunta.respuestas.forEach((respuesta, indice) => {

        const boton = document.createElement("button");

        boton.type = "button";
        boton.className =
            "respuesta-opcion respuesta-" + respuesta.faccion;

        boton.innerHTML = `
            <span class="respuesta-icono">${respuesta.icono}</span>
            <span class="respuesta-texto">${respuesta.texto}</span>
            <span class="respuesta-flecha">➜</span>
        `;

        boton.style.animationDelay = (indice * 0.08) + "s";

        boton.onclick = () => {

            // Evitar seleccionar más de una respuesta
            if (boton.disabled) return;

            const botones = respuestas.querySelectorAll("button");

            botones.forEach(b => b.disabled = true);

            boton.classList.add("respuesta-seleccionada");

            setTimeout(() => {
                elegirRespuesta(respuesta.faccion);
            }, 250);
        };

        respuestas.appendChild(boton);

    });

}


/* =====================================
   REGISTRAR RESPUESTA
===================================== */

function elegirRespuesta(faccion) {

    puntos[faccion]++;

    preguntaActual++;

    if (preguntaActual < preguntas.length) {

        mostrarPregunta();

    } else {

        mostrarResultado();

    }

}


/* =====================================
   MOSTRAR RESULTADO FINAL
===================================== */

function mostrarResultado() {

    const resultado = document.getElementById("resultado");

    // Encontrar la puntuación más alta
    const puntuacionMaxima = Math.max(
        puntos.usa,
        puntos.china,
        puntos.gla
    );

    // Detectar si hay empate
    const empatadas = Object.keys(puntos).filter(
        faccion => puntos[faccion] === puntuacionMaxima
    );

    // Si hay empate, seleccionar una de las facciones empatadas
    const faccionFinal = empatadas[
        Math.floor(Math.random() * empatadas.length)
    ];

    const datos = {

        usa: {
            nombre: "UNITED STATES OF AMERICA",
            bandera: "🇺🇸",
            color: "usa",
            lema: "TECNOLOGÍA. PRECISIÓN. SUPERIORIDAD.",
            descripcion:
                "Tu perfil se identifica con la tecnología avanzada, la aviación y las unidades especializadas. Preferís la precisión y la superioridad tecnológica para dominar el campo de batalla.",
            caracteristicas: [
                "Tecnología avanzada",
                "Superioridad aérea",
                "Unidades especializadas",
                "Ataques de precisión"
            ]
        },

        china: {
            nombre: "PEOPLE'S REPUBLIC OF CHINA",
            bandera: "🇨🇳",
            color: "china",
            lema: "PODER. RESISTENCIA. DOMINIO.",
            descripcion:
                "Tu perfil coincide con una fuerza militar poderosa, basada en grandes ejércitos, tanques y potencia de fuego. Preferís avanzar con determinación y controlar el territorio.",
            caracteristicas: [
                "Grandes fuerzas terrestres",
                "Tanques pesados",
                "Artillería poderosa",
                "Potencia de fuego"
            ]
        },

        gla: {
            nombre: "GLOBAL LIBERATION ARMY",
            bandera: "☠️",
            color: "gla",
            lema: "MOVILIDAD. ASTUCIA. ADAPTACIÓN.",
            descripcion:
                "Tu perfil coincide con una estrategia flexible y sorprendente. Preferís la movilidad, el camuflaje y aprovechar distintas oportunidades durante la partida.",
            caracteristicas: [
                "Movilidad estratégica",
                "Túneles",
                "Camuflaje",
                "Unidades versátiles"
            ]
        }

    };

    const datosFinales = datos[faccionFinal];

    const listaCaracteristicas = datosFinales.caracteristicas
        .map(caracteristica => `<li>${caracteristica}</li>`)
        .join("");

    resultado.className =
        "resultado resultado-" + faccionFinal;

    resultado.innerHTML = `

        <div class="resultado-contenido">

            <span class="resultado-etiqueta">
                INFORME DE SELECCIÓN COMPLETADO
            </span>

            <p class="resultado-bandera">
                ${datosFinales.bandera}
            </p>

            <h2>TU FACCION ES</h2>

            <h3>${datosFinales.nombre}</h3>

            <p class="resultado-lema">
                ${datosFinales.lema}
            </p>

            <p class="resultado-descripcion">
                ${datosFinales.descripcion}
            </p>

            <h4>CARACTERÍSTICAS PRINCIPALES</h4>

            <ul class="resultado-caracteristicas">
                ${listaCaracteristicas}
            </ul>

            <div class="resultado-puntuacion">

                <span>USA: ${puntos.usa}</span>
                <span>CHINA: ${puntos.china}</span>
                <span>GLA: ${puntos.gla}</span>

            </div>

            <a
                href="${faccionFinal}.html"
                class="boton resultado-boton"
            >
                EXPLORAR ${faccionFinal.toUpperCase()} →
            </a>

            <button
                type="button"
                class="boton-repetir"
                onclick="iniciarTest()"
            >
                ↻ REPETIR TEST
            </button>

        </div>

    `;

    document.getElementById("test").classList.add("oculto");

    resultado.classList.remove("oculto");

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

}



/* =====================================
   COMPARADOR DE UNIDADES
===================================== */

const unidadesComparacion = [

    /* =========================
       USA
    ========================= */

    {
        nombre: "Ranger",
        faccion: "USA",
        tipo: "infanteria",
        resistencia: 2,
        dano: 2,
        infanteria: 4,
        vehiculos: 1
    },

    {
        nombre: "Missile Defender",
        faccion: "USA",
        tipo: "infanteria",
        resistencia: 2,
        dano: 4,
        infanteria: 2,
        vehiculos: 5
    },

    {
        nombre: "Humvee",
        faccion: "USA",
        tipo: "vehiculo",
        resistencia: 3,
        dano: 3,
        infanteria: 4,
        vehiculos: 3
    },

    {
        nombre: "Crusader Tank",
        faccion: "USA",
        tipo: "tanque",
        resistencia: 4,
        dano: 4,
        infanteria: 3,
        vehiculos: 4
    },

    {
        nombre: "Avenger",
        faccion: "USA",
        tipo: "antiaereo",
        resistencia: 3,
        dano: 3,
        infanteria: 2,
        vehiculos: 2
    },


    /* =========================
       CHINA
    ========================= */

    {
        nombre: "Red Guard",
        faccion: "CHINA",
        tipo: "infanteria",
        resistencia: 2,
        dano: 2,
        infanteria: 4,
        vehiculos: 1
    },

    {
        nombre: "Tank Hunter",
        faccion: "CHINA",
        tipo: "infanteria",
        resistencia: 2,
        dano: 4,
        infanteria: 1,
        vehiculos: 5
    },

    {
        nombre: "Gattling Tank",
        faccion: "CHINA",
        tipo: "antiaereo",
        resistencia: 3,
        dano: 4,
        infanteria: 5,
        vehiculos: 2
    },

    {
        nombre: "Battle Master",
        faccion: "CHINA",
        tipo: "tanque",
        resistencia: 4,
        dano: 4,
        infanteria: 3,
        vehiculos: 4
    },

    {
        nombre: "Overlord",
        faccion: "CHINA",
        tipo: "tanque",
        resistencia: 5,
        dano: 5,
        infanteria: 4,
        vehiculos: 5
    },


    /* =========================
       GLA
    ========================= */

    {
        nombre: "Rebel",
        faccion: "GLA",
        tipo: "infanteria",
        resistencia: 2,
        dano: 2,
        infanteria: 3,
        vehiculos: 1
    },

    {
        nombre: "RPG Trooper",
        faccion: "GLA",
        tipo: "infanteria",
        resistencia: 2,
        dano: 4,
        infanteria: 1,
        vehiculos: 5
    },

    {
        nombre: "Technical",
        faccion: "GLA",
        tipo: "vehiculo",
        resistencia: 2,
        dano: 3,
        infanteria: 4,
        vehiculos: 2
    },

    {
        nombre: "Scorpion Tank",
        faccion: "GLA",
        tipo: "tanque",
        resistencia: 3,
        dano: 4,
        infanteria: 3,
        vehiculos: 4
    },

    {
        nombre: "Quad Cannon",
        faccion: "GLA",
        tipo: "antiaereo",
        resistencia: 3,
        dano: 4,
        infanteria: 4,
        vehiculos: 2
    },

    {
        nombre: "Marauder Tank",
        faccion: "GLA",
        tipo: "tanque",
        resistencia: 4,
        dano: 5,
        infanteria: 3,
        vehiculos: 5
    }

];


/* =====================================
   MOSTRAR UNIDADES
===================================== */

function mostrarUnidadesComparacion(filtro = "todas") {

    const tabla =
        document.getElementById("tabla-unidades");

    if (!tabla) return;

    tabla.innerHTML = "";


    const unidadesFiltradas =
        filtro === "todas"
        ? unidadesComparacion
        : unidadesComparacion.filter(
            unidad => unidad.tipo === filtro
        );


    unidadesFiltradas.forEach(unidad => {

        const fila =
            document.createElement("tr");


        fila.innerHTML = `

            <td>
                <strong>${unidad.nombre}</strong>
            </td>

            <td class="faccion-${unidad.faccion.toLowerCase()}">
                ${unidad.faccion}
            </td>

            <td>
                ${unidad.tipo.toUpperCase()}
            </td>

            <td>
                ${crearBarras(unidad.resistencia)}
            </td>

            <td>
                ${crearBarras(unidad.dano)}
            </td>

            <td>
                ${crearBarras(unidad.infanteria)}
            </td>

            <td>
                ${crearBarras(unidad.vehiculos)}
            </td>

        `;

        tabla.appendChild(fila);

    });

}


/* =====================================
   CREAR BARRAS
===================================== */

function crearBarras(valor) {

    let resultado = "";

    for (let i = 1; i <= 5; i++) {

        if (i <= valor) {

            resultado += "●";

        } else {

            resultado += "○";

        }

    }

    return `<span class="nivel">${resultado}</span>`;
}


/* =====================================
   FILTRAR
===================================== */

function filtrarUnidades(tipo) {

    mostrarUnidadesComparacion(tipo);

}


/* =====================================
   CARGAR AL INICIAR
===================================== */

document.addEventListener("DOMContentLoaded", function() {

    mostrarUnidadesComparacion("todas");

});



// =====================================
// REPRODUCTOR DE MÚSICA POR FACCIONES
// =====================================

const musicaFacciones = {
    usa: [
        "music - USA Battle theme 1(MP3_160K).mp3",
        "Soundtrack - Usa Battle 2 Theme(MP3_160K).mp3",
        "USA Soundtrack - Theme 3(MP3_160K).mp3"
    ],

    china: [
        "Soundtrack - China Battle 3 Theme(MP3_160K).mp3",
        "Soundtrack - China Battle 4 Theme(MP3_160K).mp3",
        "C_C generals Soundtrack - China Battle 1 Theme(MP3_160K).mp3"
    ],

    gla: [
        "Zero Hour - 04. GLA Anthem(MP3_160K).mp3",
        "Glory(MP3_160K).mp3",
        "GLA Battle Theme 3(MP3_160K).mp3"
    ]
};

let faccionActual = null;
let indiceCancion = 0;

const reproductorMusica = new Audio();


// Detectar la facción de la página
document.addEventListener("DOMContentLoaded", function () {

    const faccionPagina = document.body.dataset.faccion;

    // Este reproductor funciona SOLAMENTE en las páginas de facciones
    if (!musicaFacciones[faccionPagina]) return;

    faccionActual = faccionPagina;

    actualizarNombreCancion();

    reproducirMusica();

    // Botones del reproductor
    const botonReproducir = document.getElementById("btnMusica");
    const botonPausar = document.getElementById("btnPausa");
    const botonSiguiente = document.getElementById("btnSiguiente");
    const botonAnterior = document.getElementById("btnAnterior");

    if (botonReproducir) {
        botonReproducir.addEventListener("click", reproducirMusica);
    }

    if (botonPausar) {
        botonPausar.addEventListener("click", detenerMusica);
    }

    if (botonSiguiente) {
        botonSiguiente.addEventListener("click", siguienteCancion);
    }

    if (botonAnterior) {
        botonAnterior.addEventListener("click", anteriorCancion);
    }

});


// Reproducir canción actual
function reproducirMusica() {

    if (!faccionActual) return;

    const lista = musicaFacciones[faccionActual];
    const ruta = lista[indiceCancion];

    if (reproductorMusica.getAttribute("src") !== ruta) {
        reproductorMusica.src = ruta;
    }

    reproductorMusica.play().catch(error => {
        console.log("No se pudo reproducir el audio:", error);
    });

    actualizarNombreCancion();
}


// Pausar música
function detenerMusica() {
    reproductorMusica.pause();
}


// Siguiente canción
function siguienteCancion() {

    if (!faccionActual) return;

    indiceCancion++;

    if (indiceCancion >= musicaFacciones[faccionActual].length) {
        indiceCancion = 0;
    }

    reproducirMusica();
}


// Canción anterior
function anteriorCancion() {

    if (!faccionActual) return;

    indiceCancion--;

    if (indiceCancion < 0) {
        indiceCancion = musicaFacciones[faccionActual].length - 1;
    }

    reproducirMusica();
}


// Actualizar nombre mostrado
function actualizarNombreCancion() {

    const nombre = document.getElementById("nombreCancion");

    if (!nombre || !faccionActual) return;

    nombre.textContent =
        "Canción " + (indiceCancion + 1) +
        " de " + musicaFacciones[faccionActual].length;
}


// Pasar automáticamente a la siguiente al terminar
reproductorMusica.addEventListener("ended", siguienteCancion);
