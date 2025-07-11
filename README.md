# 📡 Constelaciones del Zodiaco

Un proyecto web interactivo que te permite explorar las 12 constelaciones del Zodiaco con un fondo estrellado animado y ventanas emergentes (pop-ups) de información. Además incorpora un cliente de **Socket.io** para “abrir” remotamente cada constelación desde un servidor.

---

## 🔍 Descripción

Al cargar la página, verás un cielo estrellado generado dinámicamente y una cuadrícula de tarjetas, una por cada constelación zodiacal.  
• Recibiendo el evento `open-constellation` vía Socket.io se abre un **modal** con:
  - Nombre y fotografía de la constelación  
  - Lista de sus estrellas principales  
  - Una breve descripción histórica/astronómica  

---

## 🚀 Tecnologías

- **HTML5**: estructura semántica  
- **CSS3**: diseño responsivo, animaciones y modales  
- **JavaScript (ES6+)**: generación de estrellas, gestión de modales  
- **Socket.io (cliente)**: `socket.io.min.js` CDN para recibir eventos de apertura  
- **Imágenes estáticas**: carpeta `img/` con los JPG de cada constelación  

---

## 📁 Estructura del proyecto
├── .vscode/ ← configuración de tu editor (opcional)
├── img/ ← fotografías de las 12 constelaciones + extra
│ ├── Aries.jpg
│ ├── Tauro.jpg
│ └── …
├── index.html ← página principal
├── script.js ← lógica de fondo de estrellas, modales y Socket.io
└── styles.css ← estilos globales, grid y modales

---

## ⚙️ Instalación y puesta en marcha

1. **Clona este repositorio**  
   ```bash
   git clone https://tu-repo/constelaciones-zodiaco.git
   cd constelaciones-zodiaco
