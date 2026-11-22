
// =====================================
// REPRODUCTOR INDEPENDIENTE DE GENERALES
// =====================================

const musicaGenerales = {

    usa: [
        "music - USA Battle theme 1(MP3_160K).mp3",
        "Soundtrack - Usa Battle 2 Theme(MP3_160K).mp3",
        "USA Soundtrack - Theme 3(MP3_160K).mp3"
    ],

    china: [
        "Soundtrack - China Battle 3 Theme(MP3_160K).mp3",
        "Soundtrack - China Battle 4 Theme(MP3_160K).mp3",
        "audios/china/china3.mp3"
    ],

    gla: [
        "Zero Hour - 04. GLA Anthem(MP3_160K).mp3",
        "Glory(MP3_160K).mp3",
        "GLA Battle Theme 3(MP3_160K).mp3"
    ]

};


// Variables independientes
let faccionGeneral = null;
let indiceMusicaGeneral = 0;

const audioGeneral = new Audio();


// =====================================
// INICIAR REPRODUCTOR
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // Obtener facción guardada por generales.js
    faccionGeneral = localStorage.getItem("faccionMusica");

    if (!musicaGenerales[faccionGeneral]) {
        console.log("No se encontró la facción del general.");
        return;
    }

    indiceMusicaGeneral = 0;

    actualizarNombreMusicaGeneral();

    // Intentar iniciar la primera canción
    reproducirMusicaGeneral();

    // Botones
    const botonReproducir = document.getElementById("btnMusica");
    const botonPausar = document.getElementById("btnPausa");
    const botonSiguiente = document.getElementById("btnSiguiente");
    const botonAnterior = document.getElementById("btnAnterior");

    if (botonReproducir) {
        botonReproducir.addEventListener(
            "click",
            reproducirMusicaGeneral
        );
    }

    if (botonPausar) {
        botonPausar.addEventListener("click", function () {
            audioGeneral.pause();
        });
    }

    if (botonSiguiente) {
        botonSiguiente.addEventListener(
            "click",
            siguienteMusicaGeneral
        );
    }

    if (botonAnterior) {
        botonAnterior.addEventListener(
            "click",
            anteriorMusicaGeneral
        );
    }

});


// =====================================
// REPRODUCIR MÚSICA
// =====================================

function reproducirMusicaGeneral() {

    if (!faccionGeneral) return;

    const lista = musicaGenerales[faccionGeneral];

    const ruta = lista[indiceMusicaGeneral];

    if (audioGeneral.getAttribute("src") !== ruta) {
        audioGeneral.src = ruta;
    }

    audioGeneral.play().catch(error => {
        console.log("No se pudo reproducir la música:", error);
    });

    actualizarNombreMusicaGeneral();
}


// =====================================
// SIGUIENTE CANCIÓN
// =====================================

function siguienteMusicaGeneral() {

    if (!faccionGeneral) return;

    indiceMusicaGeneral++;

    if (indiceMusicaGeneral >= musicaGenerales[faccionGeneral].length) {
        indiceMusicaGeneral = 0;
    }

    reproducirMusicaGeneral();
}


// =====================================
// CANCIÓN ANTERIOR
// =====================================

function anteriorMusicaGeneral() {

    if (!faccionGeneral) return;

    indiceMusicaGeneral--;

    if (indiceMusicaGeneral < 0) {
        indiceMusicaGeneral = musicaGenerales[faccionGeneral].length - 1;
    }

    reproducirMusicaGeneral();
}


// =====================================
// ACTUALIZAR NOMBRE
// =====================================

function actualizarNombreMusicaGeneral() {

    const nombre = document.getElementById("nombreCancion");

    if (!nombre || !faccionGeneral) return;

    nombre.textContent =
        "Canción " + (indiceMusicaGeneral + 1) +
        " de " + musicaGenerales[faccionGeneral].length;
}


// =====================================
// REPRODUCCIÓN AUTOMÁTICA
// =====================================

audioGeneral.addEventListener("ended", siguienteMusicaGeneral);
