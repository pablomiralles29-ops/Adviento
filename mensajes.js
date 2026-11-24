/* =====================================================================
   ✏️  AQUÍ EDITAS TODO EL CONTENIDO DEL CALENDARIO
   ---------------------------------------------------------------------
   Cada día puede llevar (todo opcional menos "titulo"):
     titulo : texto corto que sale arriba
     texto  : el mensaje (puedes hacer saltos de línea con \n)
     foto   : nombre de una foto que subas al repo, p. ej. "fotos/dia2.jpg"
     enlace : { texto: "Escúchala", url: "https://open.spotify.com/..." }
     vale   : texto de un cupón, p. ej. "Un desayuno en la cama"
     icono  : emoji que se ve detrás de la puerta al abrirla

   Truco: si escribes {vernos} en un texto, se cambia solo por los días
   que faltan ESE día para veros (p. ej. el 21 → 5).

   👉 Lo que está entre [corchetes] es para que lo completes tú.
   ⚠️ Respeta las comillas y las comas del final de cada línea.
   ===================================================================== */

const CALENDARIO = {
  nombre: "Jurdana",             // su nombre, sale en la portada
  firma: "Te quiero, tu chico",  // cómo firmas los mensajes
  anio: 2026,                    // año del diciembre en que se abre
  fechaVernos: "2026-12-26",     // cuándo os volvéis a ver (año-mes-día)

  // 🔓 MODO PRUEBA: con true se pueden abrir TODAS las puertas ya mismo.
  // ⚠️ Cámbialo a false ANTES de mandarle el enlace a ella.
  abrirTodo: true,

  // Estilo de las puertas: "clasico", "regalo", "sobre" o "bola"
  estilo: "clasico",

  // Días que salen como churros con chocolate 🍫 (pon [] para ninguno)
  churros: [],

  // Otra forma de ver todas las puertas sin tocar lo de arriba:
  //   https://TU-USUARIO.github.io/adviento/?probar
  clavePrueba: "probar",

  dias: {
    1:  { icono: "🎄", titulo: "Empieza la cuenta atrás",
          texto: "Hola, Jurdana ❤️\nLo he hecho para que, aunque estemos a 800 km, cada día de diciembre tengas un trocito de mí.\n24 puertas, una por día. No vale hacer trampas (sé que lo vas a intentar 😏)." },

    2:  { icono: "🏔️", titulo: "Donde empezó todo",
          texto: "Bulnes, Picos de Europa.\nDe todos los sitios del mundo, nos fuimos a encontrar en un pueblo al que solo se llega andando o en funicular.\nYo digo que fue el destino. O las montañas, que tienen muy buen gusto.",
          foto: "fotos/bulnes.jpg" },

    3:  { icono: "🎬", titulo: "Vale por…",
          vale: "Una noche de peli elegida por ti, sin protestar ni una sola vez (ni aunque sea de las tuyas 🙄)" },

    4:  { icono: "🍫", titulo: "Nuestros churros",
          texto: "Cada vez que vienes, te espero con churros. Es nuestra cosa.\nHoy no estás aquí, pero que sepas que la próxima vez te estarán esperando calentitos. Y yo también." },

    5:  { icono: "🍣", titulo: "Vale por…",
          vale: "Una cena de sushi a lo grande. Tú pides y yo no digo nada de cuántas piezas te comes 🍣" },

    6:  { icono: "💆‍♀️", titulo: "La ruleta del masaje",
          texto: "Gira la ruleta y descubre cuántos minutos de masaje relajante te debo.\nLo que salga, va a misa (aunque salga 60 😅).",
          // valores: los números de la ruleta · unidad: lo que se dice después del número
          ruleta: { valores: [10, 15, 20, 25, 30, 40, 45, 60], unidad: "minutos de masaje relajante" } },

    7:  { icono: "💌", titulo: "Una cosa que me encanta de ti",
          texto: "[Escribe aquí algo que te encante de ella: un gesto, una manía, cómo se ríe…]" },

    8:  { icono: "🚗", titulo: "800 km",
          texto: "De Zorrotza a Elche hay unos 800 km.\nParece mucho, pero te prometo que merece la pena cada uno de ellos.\nY ya sabes: cuantos más kilómetros, más churros 🍫." },

    9:  { icono: "🎵", titulo: "Nuestra canción",
          texto: "[Cuéntale por qué es vuestra canción o qué te recuerda]",
          enlace: { texto: "Escúchala", url: "https://open.spotify.com/" } },

    10: { icono: "📅", titulo: "27 de junio",
          texto: "El día que empezamos a salir.\nY sigo igual de tonto contigo que el primer día." },

    11: { icono: "🍫", titulo: "Vale por…",
          vale: "Churros con chocolate nada más llegar la próxima vez que vengas. Como siempre, pero con más ganas que nunca" },

    12: { icono: "🍿", titulo: "Maratón de pelis",
          vale: "Un maratón de pelis navideñas con manta y palomitas (aunque te quedes dormida en la segunda)" },

    13: { icono: "📸", titulo: "¿Te acuerdas de esto?",
          texto: "Nieve, sol, montañas y tú.\nNo se me ocurre un plan mejor… bueno, sí: repetirlo contigo 🏔️",
          foto: "fotos/dia13.jpg" },

    14: { icono: "⛰️", titulo: "Plan pendiente",
          texto: "Volver a los Picos de Europa juntos.\nEsta vez sabiendo lo que pasó la primera vez 😌\n¿Subimos a ver el Naranjo de Bulnes?" },

    15: { icono: "🔮", titulo: "Tu horóscopo de hoy",
          texto: "Amor: un chico de Elche piensa en ti más de lo normal.\nSalud: de diez, sobre todo después de entrenar.\nSuerte: altísima, tienes un novio que te recoge con churros.\nConsejo: no dejes de abrir la puerta de mañana 😉" },

    16: { icono: "🇳🇴", titulo: "Próxima parada: Lofoten",
          texto: "Nos conocimos entre montañas… y vamos a celebrar nuestro primer año entre montañas otra vez, pero esta vez saliendo del mar.\nCasitas de pescadores, rutas para patear y un sol que en junio no se pone ni de noche.\nYo ya estoy deseando que llegue ☀️" },

    17: { icono: "🍫", titulo: "Dato científico",
          texto: "Está demostrado que los churros saben mejor cuando los compartes conmigo.\n\n(Estudio realizado en Elche con una muestra de 2 personas. Margen de error: cero.)" },

    18: { icono: "💪", titulo: "Vale por…",
          vale: "Un día de deporte juntos: tú eliges qué hacemos y yo prometo no quejarme… mucho" },

    19: { icono: "🍣", titulo: "Vale por…",
          vale: "Una noche haciendo sushi casero juntos. Quedará feo, pero nos lo vamos a comer igual" },

    20: { icono: "💭", titulo: "Algo que nunca te he dicho",
          texto: "[Escribe aquí algo que nunca le hayas dicho]" },

    21: { icono: "🧳", titulo: "Cuenta atrás para vernos",
          texto: "Lo peor de la distancia es esperar. Lo mejor, el momento en que por fin te veo llegar.\nY eso es el 26: solo quedan {vernos} días.\nYa sabes lo que te espera cuando llegues 🍫" },

    22: { icono: "🍫", titulo: "Vale por…",
          vale: "Una docena de churros solo para ti, sin que yo te robe ninguno (bueno, uno)" },

    23: { icono: "🕯️", titulo: "Ya casi",
          texto: "Mañana es la última puerta.\nY dentro de {vernos} días, por fin, nos vemos ❤️" },

    24: { icono: "❤️", titulo: "Feliz Nochebuena",
          texto: "Jurdana:\nPasado mañana por fin nos vemos, y no sabes las ganas que tengo.\nNos conocimos entre montañas, vivimos a 800 km y aun así eres lo mejor de mi año.\nGracias por cada viaje, cada peli, cada entreno y cada churro.\nY esto solo acaba de empezar: en verano, Lofoten 🇳🇴\n[Añade aquí tu mensaje más personal]\nFeliz Navidad, mi amor." },
  },
};
