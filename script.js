// --- Data for each constellation ---

/**SOCKET IO */
// —– Socket.io Cliente —–
// Conéctate a tu servidor (ajusta el host/puerto si no es localhost:3000)
const socket = io("https://panelistas.onrender.com");

// Opcional: aviso en consola al conectar
socket.on("connect", () => {
  console.log("🔌 Conectado a Socket.io con id:", socket.id);
});

// Cuando llegue la orden de abrir una constelación...
socket.on("open-constellation", ({ name }) => {
  console.log(name);

  // Reutilizamos el mismo código que usamos en el click de la card:
  const info = constellationData[name];
  if (!info) {
    console.warn(`No hay datos para: ${name}`);
    name = "desc";

    // return;
  }

  if (name != "desc") {
    const estrellasPrincipales = info.estrellas_principales.join(", ") + ".";

    infoModalInfo.classList.add("hidden");
    infoModal.classList.remove("hidden");
    // Rellenar modal
    modalTitle.textContent = info.nombre;
    modalImage.src = info.img;
    modalImage.alt = `Imagen de ${info.nombre}`;
    modalEstrellas.textContent = estrellasPrincipales;
    modalDesc.textContent = info.data;
    infoModalInfo.style.display = "flex";
  } else {
    infoModal.classList.add("hidden");
    infoModalInfo.classList.remove("hidden");

    infoModalInfo.style.display = "flex";
  }
});

// constellationData.js

const constellationData = {
  ari: {
    nombre: "Aries",
    img: "img/Aries.jpg",
    otros_nombres: ["Carnero"],
    ubicacion: "hemisferio norte",
    estrellas_principales: ["Alpha Arietis", "Beta Arietis", "Gamma Arietis"],
    data: "Situada entre Piscis y Tauro, asociada al liderazgo, la energía y la iniciativa. Es una constelación de tamaño medio con un total de 67 estrellas, incluyendo dos galaxias interesantes. El Sol la atraviesa aproximadamente entre el 19 de abril y el 13 de mayo.",
  },
  tau: {
    nombre: "Tauro",
    img: "img/Tauro.jpg",
    otros_nombres: ["Toro"],
    ubicacion: "hemisferio norte",
    estrellas_principales: ["Aldebarán", "Elnath", "Alcíone", "Tianguan"],
    data: "Conocida por sus lluvias de meteoritos, situada entre Aries y Géminis con un total de 223 estrellas. La 'V' de Tauro se forma por varias estrellas prominentes. Tiene muchos objetos interesantes, entre ellos una colección de cientos de estrellas.",
  },
  gem: {
    nombre: "Géminis",
    img: "img/Geminis.jpg",
    otros_nombres: ["Gemelos"],
    ubicacion: "hemisferio norte",
    estrellas_principales: [
      "Cástor",
      "Pollux",
      "Alhena",
      "Mebsuta",
      "Tejat Posterior",
      "Tejat Prior",
      "Alzirr",
      "Wasat",
    ],
    data: "Representa a dos gemelos, con sus estrellas más brillantes marcando las cabezas. Tiene 119 estrellas y está entre Tauro y Cáncer. El Sol pasa frente a ella entre el 21 de junio y el 20 de julio.",
  },
  cnc: {
    nombre: "Cáncer",
    img: "img/Cancer.jpg",
    otros_nombres: ["Cangrejo"],
    ubicacion: "hemisferio norte",
    estrellas_principales: [
      "Alpha Cancri",
      "Beta Cancri",
      "Delta Cancri",
      "Lota Cancri",
      "Zeta Cancri",
    ],
    data: "La más tenue de las 12 constelaciones. Tiene forma de 'Y' invertida y está entre Géminis y Leo con 104 estrellas. Se ve mejor en invierno, desde finales de otoño hasta primavera.",
  },
  leo: {
    nombre: "Leo",
    img: "img/Leo.jpg",
    otros_nombres: ["León"],
    ubicacion: "hemisferio norte",
    estrellas_principales: ["Regulus", "Denébola"],
    data: "Contiene muchas galaxias y está entre Cáncer y Virgo. Tiene 123 estrellas. El Sol la ocupa entre el 23 de julio y el 22 de agosto. Se la clasifica como signo de fuego y de baja calidad.",
  },
  vir: {
    nombre: "Virgo",
    img: "img/Virgo.jpg",
    otros_nombres: ["Virgen"],
    ubicacion: "mayormente en el hemisferio sur",
    estrellas_principales: ["Spica", "Zavijaba", "Porrima"],
    data: "La constelación más grande del zodiaco, ubicada entre Leo y Libra. Tiene 169 estrellas y se la asocia con la diosa griega de la justicia.",
  },
  lib: {
    nombre: "Libra",
    img: "img/Libra.jpg",
    otros_nombres: ["Balanza"],
    ubicacion: "hemisferio sur",
    estrellas_principales: ["Alpha Librae", "Beta Librae", "Gamma Librae"],
    data: "Poco luminosa, sin estrellas de primera magnitud. Está entre Virgo y Escorpio, con 83 estrellas. Se consideraba la balanza de la diosa de la justicia representada por Virgo.",
  },
  sco: {
    nombre: "Escorpio",
    img: "img/Escorpio.jpg",
    otros_nombres: ["Escorpión"],
    ubicacion: "hemisferio sur",
    estrellas_principales: [
      "Graffias",
      "Dschubba",
      "Alniyat",
      "Antares",
      "Sargas",
      "Lesath",
      "Shaula",
    ],
    data: "Famosa por estrellas brillantes como Antares. Situada entre Libra y Sagitario con 27 estrellas. Su forma curva se asemeja a un anzuelo.",
  },
  sgr: {
    nombre: "Sagitario",
    img: "img/Sagitario.jpg",
    otros_nombres: ["Arquero"],
    ubicacion: "hemisferio sur",
    estrellas_principales: [
      "Kaus Australis",
      "Rukbat",
      "Arkab",
      "Arkab Prior",
      "Arkab Posterior",
      "Gamma Sagittari",
    ],
    data: "Contiene el centro galáctico. Entre Escorpio y Capricornio con solo 8 estrellas. Ayuda a determinar el centro de rotación del sistema solar.",
  },
  cap: {
    nombre: "Capricornio",
    img: "img/Capricornio.jpg",
    otros_nombres: ["Cabra"],
    ubicacion: "hemisferio sur",
    estrellas_principales: ["Deneb Algedi", "Dabih", "Algedi"],
    data: "La segunda constelación más tenue. Entre Sagitario y Acuario, tiene 81 estrellas. Representa un ser mitad cabra, mitad pez.",
  },
  aqr: {
    nombre: "Acuario",
    img: "img/Acuario.jpg",
    otros_nombres: ["Portador de agua"],
    ubicacion: "hemisferio sur",
    estrellas_principales: [
      "Sadalsud",
      "Sadalmelik",
      "Sadalachbiah",
      "Albala",
      "Ancha",
      "Situla",
    ],
    data: "El Sol entra el 16 de febrero y sale el 11 de marzo. Está entre Capricornio y Piscis con 56 estrellas. Ha sido identificado con varios personajes históricos.",
  },
  psc: {
    nombre: "Piscis",
    img: "img/Piscis.jpg",
    otros_nombres: ["Peces"],
    ubicacion: "hemisferio norte",
    estrellas_principales: ["Alrescha", "Gamma Piscium", "Kullat Nunu"],
    data: "Representa dos peces unidos por una cuerda. Entre Acuario y Aries, con 45 estrellas. Aunque es antigua y grande, tiene pocas estrellas con nombres propios.",
  },
};

//--------------------------------------
// 2. Generación de patrón de estrellas
//--------------------------------------
/**
 * Crea 'count' divs aleatorios que simulan estrellas en el fondo.
 * @param {number} count - Número de estrellas a generar.
 */
function initStarPattern(count = 100) {
  const container = document.getElementById("starPattern");
  const W = window.innerWidth;
  const H = window.innerHeight;

  for (let i = 0; i < count; i++) {
    const star = document.createElement("div");
    const size = Math.random() * 2 + 1; // Tamaño entre 1px y 3px
    star.style.cssText = `
      position: absolute;
      top: ${Math.random() * H}px;
      left: ${Math.random() * W}px;
      width: ${size}px;
      height: ${size}px;
      background: #fff;
      border-radius: 50%;
      opacity: 0.8;
    `;
    container.appendChild(star);
  }
}

function createShootingStar() {
  const container = document.getElementById("starPattern");
  const W = window.innerWidth;
  const H = window.innerHeight;

  const startX = Math.random() * W;
  const startY = Math.random() * H * 0.4;

  const angleDeg = Math.random() * 30 + 20;
  const angleRad = (angleDeg * Math.PI) / 180;
  const distance = Math.random() * 300 + 300;
  const dx = distance * Math.cos(angleRad);
  const dy = distance * Math.sin(angleRad);

  // Duración aleatoria: entre 800 ms y 2000 ms
  const duration = Math.random() * (2000 - 800) + 800;

  const star = document.createElement("div");
  star.style.cssText = `
    position: absolute;
    top: ${startY}px;
    left: ${startX}px;
    width: ${distance}px;
    height: 2px;
    background: linear-gradient(to left, rgba(255,255,255,0.9), rgba(255,255,255,0));
    transform: rotate(${angleDeg}deg);
    transform-origin: top left;
    pointer-events: none;
    opacity: 0.8;
  `;
  container.appendChild(star);

  star.animate(
    [
      { transform: `translate(0, 0) rotate(${angleDeg}deg)`, opacity: 0.8 },
      {
        transform: `translate(${dx}px, ${dy}px) rotate(${angleDeg}deg)`,
        opacity: 0,
      },
    ],
    {
      duration, // uso de la duración aleatoria
      easing: "ease-out",
    }
  ).onfinish = () => star.remove();
}

function startShootingStars() {
  const delay = Math.random() * 5000 + 10000;
  setTimeout(() => {
    createShootingStar();
    startShootingStars();
  }, delay);
}

initStarPattern(100);
startShootingStars();

/**
 * Genera una estrella estática (igual que en initStarPattern)
 * pero con una animación infinita de deriva horizontal.
 */
function createDriftingStar() {
  const container = document.getElementById("starPattern");
  const W = window.innerWidth;
  const H = window.innerHeight;

  const size = Math.random() * 2 + 1; // 1px–3px
  const startY = Math.random() * H; // posición vertical aleatoria
  const startX = -size; // arrancamos justo fuera del borde izquierdo
  const endX = W + size; // terminamos fuera del borde derecho

  // crear el div
  const star = document.createElement("div");
  star.style.cssText = `
    position: absolute;
    top: ${startY}px;
    left: ${startX}px;
    width: ${size}px;
    height: ${size}px;
    background: #fff;
    border-radius: 50%;
    opacity: 0.8;
    pointer-events: none;
  `;
  container.appendChild(star);

  // animar de izquierda a derecha (y repetir infinitamente)
  const duration = Math.random() * 60000 + 30000; // 30–90s para que unas sean más lentas
  star.animate(
    [
      { transform: `translateX(0)` },
      { transform: `translateX(${endX - startX}px)` },
    ],
    {
      duration,
      iterations: Infinity,
      easing: "linear",
    }
  );
}

// Primero pinta tus 100 estrellas estáticas…
initStarPattern(100);
// …y luego pon en marcha la que se mueve despacito
createDriftingStar();

//--------------------------------------
// 3. Control del modal de información
//--------------------------------------
// Referencias a elementos del DOM
const infoModal = document.getElementById("infoModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDesc = document.getElementById("modalDescription");

const infoModalInfo = document.getElementById("infoModal-info");

// Cierra el modal al hacer click en la X\
closeModal.addEventListener("click", () => {
  infoModal.style.display = "none";
});

// Cierra el modal al hacer click fuera del contenido
window.addEventListener("click", (event) => {
  if (event.target === infoModal) {
    infoModal.style.display = "none";
  }
});

//--------------------------------------
// 5. Inicialización al cargar la página
//--------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  initStarPattern(150); // Genera 150 estrellas de fondo
});
