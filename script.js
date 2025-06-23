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
  // Reutilizamos el mismo código que usamos en el click de la card:
  const info = constellationData[name];
  if (!info) {
    console.warn(`No hay datos para: ${name}`);
    return;
  }

  // Rellenar modal
  modalTitle.textContent = name;
  modalImage.src = info.img;
  modalImage.alt = `Imagen de ${name}`;
  modalDesc.textContent = info.data;
  infoModal.style.display = "flex";
});

// constellationData.js

const constellationData = {
  ari: {
    data: "Aries, el carnero, es una constelación del hemisferio norte. Su estrella más brillante es Hamal. Es visible principalmente durante la primavera en el hemisferio norte y el otoño en el sur. Simboliza el comienzo y la energía.",
    img: "img/Aries.jpg",
  },
  tau: {
    data: "Tauro, el toro, es una constelación grande y prominente. Contiene el cúmulo estelar de las Pléyades y la estrella gigante roja Aldebarán. Se asocia con la fuerza y la determinación.",
    img: "img/Tauro.jpg",
  },
  gem: {
    data: "Géminis representa a los gemelos Cástor y Pólux, que son sus dos estrellas más brillantes. Es fácil de encontrar en el cielo invernal del hemisferio norte. Simboliza la dualidad y la comunicación.",
    img: "img/Geminis.jpg",
  },
  can: {
    data: "Cáncer, el cangrejo, es una de las constelaciones más tenues del zodiaco. Contiene el cúmulo abierto del Pesebre (M44), visible a simple vista en cielos oscuros. Se asocia con la sensibilidad y el hogar.",
    img: "img/Cancer.jpg",
  },
  leo: {
    data: "Leo, el león, es una de las constelaciones más reconocibles, con una forma que recuerda a un león agazapado. Su estrella más brillante es Regulus. Es un símbolo de poder y nobleza.",
    img: "img/Leo.jpg",
  },
  vir: {
    data: "Virgo es la segunda constelación más grande del cielo. Su estrella más brillante es Spica. Alberga una gran cantidad de galaxias, incluido el Cúmulo de Virgo. Representa la pureza y la agricultura.",
    img: "img/Virgo.jpg",
  },
  lib: {
    data: "Libra, la balanza, es la única constelación del zodiaco que no representa a un ser vivo. Originalmente, sus estrellas formaban parte de las pinzas de Escorpio. Simboliza el equilibrio y la justicia.",
    img: "img/Libra.jpg",
  },
  esc: {
    data: "Escorpio, el escorpión, es una constelación brillante y fácil de identificar por su forma de gancho. Su corazón es la supergigante roja Antares. Se asocia con la pasión y la transformación.",
    img: "img/Escorpio.jpg",
  },
  sag: {
    data: "Sagitario, el arquero, se encuentra en la parte más densa de la Vía Láctea, hacia el centro de nuestra galaxia. Tiene una forma que recuerda a una tetera. Simboliza la aventura y la filosofía.",
    img: "img/Sagitario.jpg",
  },
  cap: {
    data: "Capricornio, la cabra marina, es una de las constelaciones más antiguas identificadas. Aunque es relativamente tenue, tiene una forma triangular distintiva. Representa la ambición y la disciplina.",
    img: "img/Capricornio.jpg",
  },
  acu: {
    data: "Acuario, el portador de agua, es una constelación grande pero con estrellas poco brillantes. Se encuentra en una región del cielo a menudo llamada 'el Mar' por la cantidad de constelaciones acuáticas. Simboliza la innovación y la humanidad.",
    img: "img/Acuario.jpg",
  },
  pis: {
    data: "Piscis, los peces, es una constelación tenue que representa a dos peces unidos por una cuerda. Se encuentra entre Acuario y Aries. Se asocia con la intuición, la compasión y el arte.",
    img: "img/Piscis.jpg",
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

//--------------------------------------
// 3. Control del modal de información
//--------------------------------------
// Referencias a elementos del DOM
const infoModal = document.getElementById("infoModal");
const closeModal = document.getElementById("closeModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalDesc = document.getElementById("modalDescription");

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
// 4. Eventos de click en las cartas
//--------------------------------------
// Asigna un listener a cada .card para abrir el modal con la info correspondiente

// document.querySelectorAll(".card").forEach((card) => {
//   card.addEventListener("click", () => {
//     const name = card.dataset.name; // nombre de la constelación
//     const info = constellationData[name]; // datos del objeto correspondiente

//     if (!info) {
//       console.warn(`Info no disponibleeee para: ${name}`);
//       return;
//     }

//     // Rellenar modal
//     modalTitle.textContent = name;
//     modalImage.src = info.img;
//     modalImage.alt = `Imagen de ${name}`;
//     modalDesc.textContent = info.data;

//     // Mostrar modal en flex para centrar contenido
//     infoModal.style.display = "flex";
//   });
// });

function showConstellation(name) {
  const info = constellationData[name];
  if (!info) {
    console.warn(`No hay datos para "${name}"`);
    return;
  }
  modalTitle.textContent = name;
  modalImage.src = info.img;
  modalImage.alt = `Imagen de ${name}`;
  modalDesc.textContent = info.data;
  infoModal.style.display = "flex";
}

//--------------------------------------
// 5. Inicialización al cargar la página
//--------------------------------------
window.addEventListener("DOMContentLoaded", () => {
  initStarPattern(150); // Genera 150 estrellas de fondo
});
