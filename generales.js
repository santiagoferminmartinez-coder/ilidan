const generales = {

    /* =========================
       USA
    ========================= */

    granger: {

        faccion: "USA",
        pagina: "usa.html",

        nombre: 'Malcolm "Ace" Granger',

        titulo: "Air Force General",

        tipo: "AVIACIÓN",

        imagen: "granger.jpeg",

        descripcion:
            "General especializado en aviación. Su ejército se centra especialmente en aeronaves avanzadas y en mejorar las capacidades de la fuerza aérea.",

        habilidades: [
            "Carpet Bombing",
            "Mayor especialización en unidades aéreas",
            "Acceso a aeronaves especializadas"
        ],

        mejoras: [
            "Stealth Comanche",
            "Countermeasures",
            "Mejoras para aeronaves"
        ],

        tacticas:
            "En el juego, Granger está orientado a aprovechar la movilidad aérea y las capacidades especiales de sus aeronaves. Su estilo favorece mantener una fuerza aérea activa y utilizar diferentes tipos de aviones y helicópteros según la situación.",

        unidades: [
            {
                nombre: "King Raptor",
                imagen: "King_Raptor.webp",
                descripcion: "Versión especializada del Raptor del Air Force General. Con un sistema defensivo de laser de punta para los misiles enemigos, con cohetes adicionales teledirigidos y puede revelar las unidades camufladas"
            },
            {
                nombre: "Combat Chinook",
                imagen: "combat chinock.jpg",
                descripcion: "Versión especializada del Chinook que permite transportar infantería que pueda atacar desde el (8 soldados)"
            },
            {
                nombre: "Stealth Comanche",
                imagen: "comanche.webp",
                descripcion: "Comanche que incorpora capacidades de sigilo."
            }
        ]
    },


    townes: {

        faccion: "USA",
        pagina: "usa.html",

        nombre: '"Pinpoint" Townes',

        titulo: "Laser General",

        tipo: "TECNOLOGÍA LÁSER",

        imagen: "townes.webp",

        descripcion:
            "General especializado en tecnología láser y sistemas de energía avanzada. Sus fuerzas sustituyen algunas unidades convencionales por variantes láser.",

        habilidades: [
            "Tecnología láser",
            "Defensas láser especializadas",
            "Mayor producción de energía"
        ],

        mejoras: [
            "Laser Tank",
            "Advanced Cold Fusion Reactor",
            "Control Rods"
        ],

        tacticas:
            "En el juego, Townes se caracteriza por combinar sus unidades láser con una buena administración de la energía. Sus fuerzas pueden ser muy eficaces mientras la infraestructura energética se mantiene funcionando.",

        unidades: [
            {
                nombre: "Laser Tank",
                imagen: "Laser_Tank.webp",
                descripcion: "Tanque equipado con un sistema de ataque láser. Sin energia no funcionan"
            },
            {
                nombre: "Laser Avenger",
                imagen: "avenger.jpeg",
                descripcion: "Una rebaja del precio del Avenger."
            },
            {
                nombre: "Laser Defense Turret",
                imagen: "torreta laser.webp",
                descripcion: "Defensa especializada basada en tecnología láser."
            }
        ]
    },


    alexander: {

        faccion: "USA",
        pagina: "usa.html",

        nombre: "Alexis Alexander",

        titulo: "Super Weapon General",

        tipo: "SUPERARMAS",

        imagen: "alexander.webp",

        descripcion:
            "General especializado en superarmas y sistemas avanzados. Su ejército utiliza versiones especiales de determinadas estructuras y aeronaves.",

        habilidades: [
            "Leaflet Drop",
            "Particle Cannon",
            "Spectre Gunship"
        ],

        mejoras: [
            "Advanced Control Rods",
            "Mejoras del Particle Cannon",
            "EMP Patriot"
        ],

        tacticas:
            "En el juego, Alexander está orientada al uso de tecnología avanzada y superarmas. Su estilo se basa en desarrollar la infraestructura necesaria para aprovechar sus capacidades especiales.",

        unidades: [
            {
                nombre: "Aurora Alpha",
                imagen: "Aurora_Alpha.webp",
                descripcion: "Variante especial del Aurora."
            },
            {
                nombre: "EMP Patriot",
                imagen: "emp patriot misile.jpg",
                descripcion: "Sistema defensivo especializado."
            },
            {
                nombre: "Avenger",
                imagen: "avenger.jpeg",
                descripcion: "Vehículo de apoyo aéreo y defensivo."
            }
        ]
    },


    /* =========================
       CHINA
    ========================= */

    kwai: {

        faccion: "CHINA",
        pagina: "china.html",

        nombre: "Ta Hun Kwai",

        titulo: "Tank General",

        tipo: "TANQUES",

        imagen: "Kwai_.webp",

        descripcion:
            "General especializado en fuerzas blindadas. Sus tanques comienzan con experiencia y algunas unidades tienen modificaciones especiales.",

        habilidades: [
            "Battle Master Training",
            "Especialización en fuerzas blindadas",
            "Tanques con mayor experiencia inicial"
        ],

        mejoras: [
            "Autoloader",
            "Battle Master Training",
            "Gattling Cannon para Emperor Overlord"
        ],

        tacticas:
            "En el juego, Ta Hun Kwai se centra en desarrollar una fuerza terrestre formada principalmente por tanques. Su ejército destaca por la importancia de las unidades blindadas.",

        unidades: [
            {
                nombre: "Emperor",
                imagen: "Emperor.webp",
                descripcion: "Versión especial del Overlord exclusiva del Tank General."
            },
            {
                nombre: "Battle Master",
                imagen: "Battlemaster_Tank.webp",
                descripcion: "Tanque principal que recibe mejoras especiales."
            },
            {
                nombre: "Gattling Tank",
                imagen: "GattlingTank.webp",
                descripcion: "Vehículo especializado en defensa contra determinadas unidades."
            }
        ]
    },


    shin: {

        faccion: "CHINA",
        pagina: "china.html",

        nombre: '"Anvil" Shin Fai',

        titulo: "Infantry General",

        tipo: "INFANTERÍA",

        imagen: "fai.webp",

        descripcion:
            "General especializado en infantería. Sus soldados comienzan con experiencia y utiliza unidades de infantería especializadas.",

        habilidades: [
            "Infantería con experiencia inicial",
            "Paradrop",
            "Frenzy"
        ],

        mejoras: [
            "Mini-Gunner Training",
            "Patriotism",
            "Capture Building"
        ],

        tacticas:
            "En el juego, Shin Fai está orientado a utilizar grandes cantidades de infantería especializada. Su estilo aprovecha la movilidad y las distintas funciones de sus soldados.",

        unidades: [
            {
                nombre: "Mini-Gunner",
                imagen: "Mini-Gunner.webp",
                descripcion: "Unidad de infantería especializada capaz de derribar la aviacion."
            },
            {
                nombre: "Super Hacker",
                imagen: "Hacker.webp",
                descripcion: "Versión especializada del Hacker."
            },
            {
                nombre: "Super Lotus",
                imagen: "Super_Lotus_Icons.webp",
                descripcion: "Versión especializada de Black Lotus."
            }
        ]
    },


    tao: {

        faccion: "CHINA",
        pagina: "china.html",

        nombre: "Tsing Shi Tao",

        titulo: "Nuke General",

        tipo: "TECNOLOGÍA NUCLEAR",

        imagen: "tao.jpeg",

        descripcion:
            "General especializado en tecnología nuclear. Sus fuerzas incorporan modificaciones especiales a tanques, aeronaves y estructuras.",

        habilidades: [
            "Nuke Bomber",
            "Tecnología nuclear",
            "Variantes especiales de aeronaves"
        ],

        mejoras: [
            "Isotope Stability",
            "Tactical Nuke MiG",
            "Nuke Bomb para Helix"
        ],

        tacticas:
            "En el juego, Tsing Shi Tao se centra en unidades y tecnología nuclear. Su ejército combina fuerzas terrestres con aeronaves modificadas para crear un estilo tecnológico muy particular.",

        unidades: [
            {
                nombre: "Nuke MiG",
                imagen: "Nuke_Mig.webp",
                descripcion: "Variante especializada del MiG. Con 2 misiles nucleares que dejan radiacion"
            },
            {
                nombre: "Nuclear Helix",
                imagen: "Helix.webp",
                descripcion: "Helix con una mejora nuclear especial. Remplazada por una bomba nuclear que puede dejar radiacion"
            },
            {
                nombre: "Nuke Cannon",
                imagen: "Nuke_Cannon.webp",
                descripcion: "Unidad de artillería especializada."
            }
        ]
    },


    /* =========================
       GLA
    ========================= */

    thrax: {

        faccion: "GLA",
        pagina: "gla.html",

        nombre: "Dr. Thrax",

        titulo: "Toxin General",

        tipo: "TOXINA",

        imagen: "dr trax.webp",

        descripcion:
            "General especializado en tecnología de toxinas. Sus unidades y algunas estructuras incorporan capacidades basadas en este tipo de tecnología.",

        habilidades: [
            "Toxin Rebels Ambush",
            "Toxin Network",
            "Especialización en toxinas"
        ],

        mejoras: [
            "Anthrax Beta",
            "Anthrax Gamma",
            "Toxin Shells"
        ],

        tacticas:
            "En el juego, Dr. Thrax se especializa en unidades relacionadas con toxinas y en aprovechar las mejoras que aumentan sus capacidades. Su ejército presenta varias modificaciones respecto a la GLA convencional.",

        unidades: [
            {
                nombre: "Toxin Rebel",
                imagen: "Toxin_Rebel.webp",
                descripcion: "Versión especializada del Rebelde.Asi como los tractores de toxinas, puede disparar un chorro de toxinas"
            },
            {
                nombre: "Toxin Terrorist",
                imagen: "terrorist.jpeg",
                descripcion: "Variante especializada del Terrorist. Puede djar rastros de toxinas luego de la explosion"
            },
            {
                nombre: "Toxin Tunnel Network",
                imagen: "Toxin_Network.webp",
                descripcion: "Variante especializada del Tunnel Network. Puede disparar un chorro de Toxinas"
            }
        ]
    },


    kassad: {

        faccion: "GLA",
        pagina: "gla.html",

        nombre: "Prince Kassad",

        titulo: "Stealth General",

        tipo: "SIGILO",

        imagen: "Kassad_1.webp",

        descripcion:
            "General especializado en camuflaje y sigilo. Sus estructuras y algunas unidades pueden incorporar capacidades de ocultamiento.",

        habilidades: [
            "GPS Scrambler",
            "Camuflaje de estructuras",
            "Especialización en unidades furtivas"
        ],

        mejoras: [
            "Camo Netting",
            "Mejoras de sigilo",
            "GPS Scrambler"
        ],

        tacticas:
            "En el juego, Kassad se centra en mantener ocultas determinadas unidades y estructuras. Su estilo gira alrededor del reconocimiento, el camuflaje y el movimiento de unidades especializadas.",

        unidades: [
            {
                nombre: "Stealth Rebel",
                imagen: "Rebel.webp",
                descripcion: "Rebelde especializado en las capacidades de sigilo."
            },
            {
                nombre: "Saboteur",
                imagen: "Saboteur.webp",
                descripcion: "Unidad especializada en sabotaje dentro del juego.Puede dejar inactivo los edificios, sin energia los reactores o robar dinero del centro de suministros"
            },
            {
                nombre: "Hijacker",
                imagen: "Hijacker.webp",
                descripcion: "Unidad especializada en capturar determinados vehículos."
            }
        ]
    },


    juhziz: {

        faccion: "GLA",
        pagina: "gla.html",

        nombre: 'Rodall "Demo" Juhziz',

        titulo: "Demolition General",

        tipo: "DEMOLICIÓN",

        imagen: "juhziz.webp",

        descripcion:
            "General especializado en unidades y estructuras relacionadas con la demolición. Algunas unidades reciben modificaciones especiales.",

        habilidades: [
            "Demolition",
            "Rebel Ambush",
            "Especialización en explosivos del juego"
        ],

        mejoras: [
            "Demolitions Ability",
            "Advanced Demo Traps",
            "Booby Trap"
        ],

        tacticas:
            "En el juego, Juhziz se especializa en utilizar unidades y estructuras modificadas para la demolición. Su ejército cambia varias características de la GLA convencional.",

        unidades: [
            {
                nombre: "Terrorist",
                imagen: "Terrorist.jpeg",
                descripcion: "Con un Aumento del daño de la explosion."
            },
            {
                nombre: "Bomb Truck",
                imagen: "Bomb_Truck.webp",
                descripcion: "Con una rebaja del precio."
            },
            {
                nombre: "SCUD Launcher",
                imagen: "Scud_launcher.webp",
                descripcion: "Con Aumento del daño de la hojiva. Sin capacidad de toxinas"
            }
        ]
    }

};


/* ==================================
   OBTENER GENERAL SELECCIONADO
================================== */

const parametros = new URLSearchParams(window.location.search);

const idGeneral = parametros.get("general");

const general = generales[idGeneral];


/* ==================================
   COMPROBAR GENERAL
================================== */

if (!general) {

    document.body.innerHTML = `
        <main class="contenido-faccion">
            <h1>General no encontrado</h1>
            <a href="index.html" class="boton">
                VOLVER A LA PORTADA
            </a>
        </main>
    `;

} else {

    document.title =
        `${general.nombre} - Generals Zero Hour`;


    document.getElementById("imagen-general").src =
        general.imagen;

    document.getElementById("imagen-general").alt =
        general.nombre;


    document.getElementById("tipo-general").textContent =
        general.tipo;


    document.getElementById("nombre-general").textContent =
        general.nombre;


    document.getElementById("titulo-general").textContent =
        general.titulo;


    document.getElementById("descripcion-general").textContent =
        general.descripcion;


    /* HABILIDADES */

    const habilidades =
        document.getElementById("habilidades");

    general.habilidades.forEach(habilidad => {

        const elemento =
            document.createElement("div");

        elemento.className = "info-item";

        elemento.textContent = habilidad;

        habilidades.appendChild(elemento);

    });


    /* MEJORAS */

    const mejoras =
        document.getElementById("mejoras");

    general.mejoras.forEach(mejora => {

        const elemento =
            document.createElement("div");

        elemento.className = "info-item";

        elemento.textContent = mejora;

        mejoras.appendChild(elemento);

    });


    /* TÁCTICAS */

    document.getElementById("tacticas-general")
        .textContent = general.tacticas;


    /* UNIDADES */

    const unidades =
        document.getElementById("unidades-especiales");

    general.unidades.forEach(unidad => {

        const tarjeta =
            document.createElement("article");

        tarjeta.className = "unidad";

        tarjeta.innerHTML = `

            <img
                src="${unidad.imagen}"
                alt="${unidad.nombre}"
            >

            <h3>${unidad.nombre}</h3>

            <p>${unidad.descripcion}</p>

        `;

        unidades.appendChild(tarjeta);

    });


    /* BOTONES */

    document.getElementById("volver-faccion").href =
        general.pagina;

    document.getElementById("volver-faccion-2").href =
        general.pagina;

}

