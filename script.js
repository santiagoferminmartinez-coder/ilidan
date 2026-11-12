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
            {
                texto: "Tecnología avanzada y aviación",
                faccion: "usa"
            },
            {
                texto: "Grandes ejércitos y tanques",
                faccion: "china"
            },
            {
                texto: "Movilidad, túneles y camuflaje",
                faccion: "gla"
            }
        ]
    },


    {
        pregunta: "¿Qué tipo de ejército preferís?",

        respuestas: [
            {
                texto: "Un ejército pequeño pero tecnológico",
                faccion: "usa"
            },
            {
                texto: "Una fuerza grande y poderosa",
                faccion: "china"
            },
            {
                texto: "Un ejército rápido y flexible",
                faccion: "gla"
            }
        ]
    },


    {
        pregunta: "¿Qué te interesa más?",

        respuestas: [
            {
                texto: "Aviones y tecnología",
                faccion: "usa"
            },
            {
                texto: "Tanques y artillería",
                faccion: "china"
            },
            {
                texto: "Ataques sorpresa y movilidad",
                faccion: "gla"
            }
        ]
    }

];


function iniciarTest() {

    preguntaActual = 0;

    puntos = {
        usa: 0,
        china: 0,
        gla: 0
    };

    document.getElementById("test").classList.remove("oculto");

    document.getElementById("resultado").classList.add("oculto");

    mostrarPregunta();
}


function mostrarPregunta() {

    const pregunta = preguntas[preguntaActual];

    document.getElementById("pregunta").textContent =
        pregunta.pregunta;


    const respuestas =
        document.getElementById("respuestas");

    respuestas.innerHTML = "";


    pregunta.respuestas.forEach(respuesta => {

        const boton = document.createElement("button");

        boton.textContent = respuesta.texto;

        boton.onclick = () => elegirRespuesta(respuesta.faccion);

        respuestas.appendChild(boton);

    });

}


function elegirRespuesta(faccion) {

    puntos[faccion]++;

    preguntaActual++;


    if (preguntaActual < preguntas.length) {

        mostrarPregunta();

    } else {

        mostrarResultado();

    }

}


function mostrarResultado() {

    let faccionFinal = "usa";

    if (
        puntos.china > puntos.usa &&
        puntos.china >= puntos.gla
    ) {
        faccionFinal = "china";
    }

    else if (
        puntos.gla > puntos.usa &&
        puntos.gla > puntos.china
    ) {
        faccionFinal = "gla";
    }


    const nombres = {
        usa: "USA 🇺🇸",
        china: "CHINA 🇨🇳",
        gla: "GLA ☠"
    };


    const descripcion = {

        usa:
        "Tu resultado coincide con un estilo basado en tecnología avanzada, aviación y unidades especializadas.",

        china:
        "Tu resultado coincide con un estilo basado en grandes fuerzas terrestres, tanques y tecnología pesada.",

        gla:
        "Tu resultado coincide con un estilo basado en movilidad, túneles, camuflaje y ataques rápidos."

    };


    const resultado =
        document.getElementById("resultado");


    resultado.innerHTML = `

        <h2>Tu facción es:</h2>

        <h3>${nombres[faccionFinal]}</h3>

        <p>
            ${descripcion[faccionFinal]}
        </p>

        <br>

        <a
            href="${faccionFinal}.html"
            class="boton"
        >
            EXPLORAR ${nombres[faccionFinal]}
        </a>

    `;


    document.getElementById("test").classList.add("oculto");

    resultado.classList.remove("oculto");

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
