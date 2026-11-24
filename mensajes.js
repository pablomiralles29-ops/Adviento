/* =====================================================================
   ✏️  AQUÍ EDITAS TODO EL CONTENIDO DEL CALENDARIO
   ---------------------------------------------------------------------
   Cada día puede llevar (todo opcional menos "titulo"):
     titulo : texto corto que sale arriba
     texto  : el mensaje (puedes hacer saltos de línea con \n)
     foto   : nombre de una foto que subas al repo, p. ej. "fotos/dia1.jpg"
     enlace : { texto: "Escúchala", url: "https://open.spotify.com/..." }
     vale   : texto de un cupón, p. ej. "Un desayuno en la cama"
     icono  : emoji que se ve detrás de la puerta al abrirla

   ⚠️ Respeta las comillas y las comas del final de cada línea.
   ===================================================================== */

const CALENDARIO = {
  nombre: "Jurdana",          // su nombre, sale en la portada
  firma: "Te quiero, tu chico", // cómo firmas los mensajes
  anio: 2026,                  // año del diciembre en que se abre

  // Para que TÚ puedas ver todas las puertas antes de tiempo, abre:
  //   https://TU-USUARIO.github.io/adviento/?probar
  // (cambia la palabra si quieres que sea más secreta)
  clavePrueba: "probar",

  dias: {
    1:  { icono: "🎄", titulo: "Empieza la cuenta atrás",
          texto: "Cada día de aquí a Nochebuena tienes una puerta nueva.\nNo vale hacer trampas. 😏" },

    2:  { icono: "🎵", titulo: "Nuestra canción",
          texto: "Ponla, cierra los ojos y acuérdate de cuándo la escuchamos juntos por primera vez.",
          enlace: { texto: "Escúchala", url: "https://open.spotify.com/" } },

    3:  { icono: "🎟️", titulo: "Vale por…",
          vale: "Un desayuno en la cama (tú eliges el día)" },

    4:  { icono: "📸", titulo: "¿Te acuerdas de esto?",
          texto: "Escribe aquí el recuerdo de esta foto.",
          foto: "" },

    5:  { icono: "💌", titulo: "Una cosa que me encanta de ti",
          texto: "Escribe aquí algo que te encanta de ella." },

    6:  { icono: "🍿", titulo: "Plan de peli",
          vale: "Una noche de peli con manta, palomitas y tú eliges la película" },

    7:  { icono: "✨", titulo: "Día 7",
          texto: "Escribe aquí tu mensaje." },

    8:  { icono: "☕", titulo: "Día 8",
          texto: "Escribe aquí tu mensaje." },

    9:  { icono: "🎟️", titulo: "Vale por…",
          vale: "Un masaje de 20 minutos sin quejarme" },

    10: { icono: "📸", titulo: "Día 10",
          texto: "Escribe aquí tu mensaje.",
          foto: "" },

    11: { icono: "💭", titulo: "Día 11",
          texto: "Escribe aquí tu mensaje." },

    12: { icono: "🎵", titulo: "Otra canción",
          texto: "Esta me recuerda a ti.",
          enlace: { texto: "Escúchala", url: "https://open.spotify.com/" } },

    13: { icono: "🌙", titulo: "Día 13",
          texto: "Escribe aquí tu mensaje." },

    14: { icono: "🎟️", titulo: "Vale por…",
          vale: "Una cena donde tú quieras" },

    15: { icono: "📸", titulo: "Día 15",
          texto: "Escribe aquí tu mensaje.",
          foto: "" },

    16: { icono: "💌", titulo: "Día 16",
          texto: "Escribe aquí tu mensaje." },

    17: { icono: "🍫", titulo: "Día 17",
          texto: "Escribe aquí tu mensaje." },

    18: { icono: "🎟️", titulo: "Vale por…",
          vale: "Un día entero sin móviles, solo tú y yo" },

    19: { icono: "📸", titulo: "Día 19",
          texto: "Escribe aquí tu mensaje.",
          foto: "" },

    20: { icono: "⭐", titulo: "Día 20",
          texto: "Escribe aquí tu mensaje." },

    21: { icono: "❄️", titulo: "Día 21",
          texto: "Escribe aquí tu mensaje." },

    22: { icono: "🎁", titulo: "Día 22",
          texto: "Escribe aquí tu mensaje." },

    23: { icono: "🕯️", titulo: "Ya casi",
          texto: "Mañana es la última puerta…" },

    24: { icono: "❤️", titulo: "Feliz Nochebuena",
          texto: "Escribe aquí el mensaje final, el más especial de todos." },
  },
};
