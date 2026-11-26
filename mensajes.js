/* =====================================================================
   ✏️  AQUÍ EDITAS TODO EL CONTENIDO DEL CALENDARIO
   ---------------------------------------------------------------------
   Cada día puede llevar (todo opcional menos "titulo"):
     titulo : texto corto que sale arriba
     texto  : el mensaje (puedes hacer saltos de línea con \n)
     foto   : nombre de una foto que subas al repo, p. ej. "dia2.jpg" (súbela junto a index.html)
     enlace : { texto: "Escúchala", url: "https://open.spotify.com/..." }
     vale   : texto de un cupón, p. ej. "Un desayuno en la cama"
     icono  : emoji que se ve detrás de la puerta al abrirla
     tipoVale: diseño del vale: "cine", "dorsal", "sushi", "churreria" o "spa"
     nota   : pósit pequeñito en la esquina de la tarjeta
     pregunta: pregunta del día, con botón para responder por WhatsApp
     rascar : true → la foto sale tapada de nieve y hay que rascarla
     juego  : "churros" o "sushi" → hay que ganar el juego para ver el vale
     postal : { fecha, texto, firma, para } → postal que se gira al tocarla

   Truco: si escribes {vernos} en un texto, se cambia solo por los días
   que faltan ESE día para veros (p. ej. el 21 → 5).

   👉 Lo que está entre [corchetes] es para que lo completes tú.
   ⚠️ Respeta las comillas y las comas del final de cada línea.
   ===================================================================== */

const CALENDARIO = {
  nombre: "Jurdana",             // su nombre, sale en la portada
  firma: "Te quiero, tu chico🩷",  // cómo firmas los mensajes
  anio: 2026,                    // año del diciembre en que se abre
  fechaVernos: "2026-12-26",     // cuándo os volvéis a ver (año-mes-día)

  // 🔓 MODO PRUEBA: con true se pueden abrir TODAS las puertas ya mismo.
  // ⚠️ Cámbialo a false ANTES de mandarle el enlace a ella.
  abrirTodo: false,

  // Estilo de las puertas: "clasico", "regalo", "sobre" o "bola"
  estilo: "clasico",

  // Días que salen como churros con chocolate 🍫 (pon [] para ninguno)
  churros: [],

  // 🆘 Botón "Necesito ánimos": sale uno al azar cada vez que lo toca
  animos: [
    "Eres más lista de lo que te crees. Y lo sabes.",
    "Respira. Un examen no define lo que vales (pero lo vas a aprobar igual).",
    "Mira el mapa: el avión está cada día un poco más cerca ✈️",
    "Si estuviera ahí te daría el abrazo más largo del mundo. Considéralo enviado 🤗",
    "Pausa obligatoria: bebe agua, estírate y sigue. Orden del entrenador 💪",
    "Te echo de menos. Mucho. Ya está, solo quería decírtelo.",
    "Acuérdate de Bulnes: subiste hasta allí. Esto no es nada 🏔️",
    "Plan para después: sushi, peli y manta. Tú céntrate en llegar ahí 🍣",
    "Estoy orgulloso de ti, aunque no siempre te lo diga.",
    "Si hoy es un mal día, mañana hay puerta nueva 🎁",
    "Churro virtual de emergencia: 🍫 (el de verdad te lo debo)",
    "Eres mi persona favorita a 800 km y a 0 km.",
  ],

  // Otra forma de ver todas las puertas sin tocar lo de arriba:
  //   https://pablomiralles29-ops.github.io/Adviento/?probar
  clavePrueba: "probar",

  dias: {
    1:  { icono: "🎄", titulo: "Empieza la cuenta atrás",
          texto: "Hola, Jurdana ❤️\nLo he hecho para que, aunque estemos a 800 km, cada día de diciembre tengas un trocito de mí.\n24 puertas, una por día. No vale hacer trampas (sé que lo vas a intentar 😏)." },

    2:  { icono: "🏔️", titulo: "Donde empezó todo",
          texto: "Bulnes, Picos de Europa.\nDe todos los sitios del mundo, nos fuimos a encontrar en un pueblo al que solo se llega andando o en funicular.\nYo digo que fue el destino. O las montañas, que tienen muy buen gusto.",
          foto: "bulnes.jpg", rascar: true },

    3:  { icono: "🎬", titulo: "Vale por…", tipoVale: "cine",
          nota: "🍀 ¡Suerte en el examen del módulo 13! Lo vas a bordar",
          vale: "Una noche de peli elegida por ti, sin protestar ni una sola vez (ni aunque sea de las tuyas 🙄)" },

    4:  { icono: "🍫", titulo: "Nuestros churros",
          texto: "Cada vez que vienes, te espero con churros. Es nuestra cosa.\nHoy no estás aquí, pero que sepas que la próxima vez te estarán esperando calentitos. Y yo también.",
          pregunta: "¿Churros solos o con chocolate? Respuesta incorrecta = sin churros 😏" },

    5:  { icono: "🍣", titulo: "Parejas de sushi", juego: "sushi", tipoVale: "sushi",
          texto: "Encuentra todas las parejas de sushi para desbloquear el vale de hoy 🍣",
          vale: "Una cena de sushi a lo grande. Tú pides y yo no digo nada de cuántas piezas te comes 🍣" },

    6:  { icono: "💆‍♀️", titulo: "La ruleta del masaje",
          texto: "Gira la ruleta y descubre cuántos minutos de masaje relajante te debo.\nLo que salga, va a misa (aunque salga 60 😅).",
          // valores: los números de la ruleta · unidad: lo que se dice después del número
          tipoVale: "spa", ruleta: { valores: [10, 15, 20, 25, 30, 40, 45, 60], unidad: "minutos de masaje relajante" } },

    7:  { icono: "💌", titulo: "Una cosa que me encanta de ti",
          texto: "[Escribe aquí algo que te encante de ella: un gesto, una manía, cómo se ríe…]",
          pregunta: "¿Qué es lo que más echas de menos de mí?" },

    8:  { icono: "🚗", titulo: "800 km",
          texto: "De Zorrotza a Elche hay unos 800 km.\nParece mucho, pero te prometo que merece la pena cada uno de ellos.\nY ya sabes: cuantos más kilómetros, más churros 🍫." },

    9:  { icono: "🎵", titulo: "Nuestra canción",
          nota: "🍀 ¡A por el módulo 5! Tú puedes",
          texto: "[Cuéntale por qué es vuestra canción o qué te recuerda]",
          enlace: { texto: "Escúchala", url: "https://open.spotify.com/" } },

    10: { icono: "📅", titulo: "27 de junio",
          texto: "El día que empezamos a salir.\nY sigo igual de tonto contigo que el primer día." },

    11: { icono: "🍫", titulo: "Atrapa los churros", juego: "churros", tipoVale: "churreria",
          texto: "Para conseguir el vale de hoy tienes que atrapar churros con la taza. Elige la dificultad:",
          vale: "Ir a recogerte al aeropuerto con churros calentitos 🍫" },

    12: { icono: "🍿", titulo: "Maratón de pelis", tipoVale: "cine",
          pregunta: "¿Qué peli vemos el 26?",
          vale: "Un maratón de pelis navideñas con manta y palomitas (aunque te quedes dormida en la segunda)" },

    13: { icono: "📸", titulo: "¿Te acuerdas de esto?",
          texto: "Nieve, sol, montañas y tú.\nNo se me ocurre un plan mejor… bueno, sí: repetirlo contigo 🏔️",
          foto: "dia13.jpg" },

    14: { icono: "⛰️", titulo: "Plan pendiente",
          texto: "Volver a los Picos de Europa juntos.\nEsta vez sabiendo lo que pasó la primera vez 😌\n¿Subimos a ver el Naranjo de Bulnes?" },

    15: { icono: "🔮", titulo: "Tu horóscopo de hoy",
          texto: "Amor: un chico de Elche piensa en ti más de lo normal.\nSalud: de diez, sobre todo después de entrenar.\nSuerte: altísima, tienes un novio que te recoge con churros.\nConsejo: no dejes de abrir la puerta de mañana 😉",
          pregunta: "Del 1 al 10, ¿cuántas ganas tienes de que llegue el 26?" },

    16: { icono: "📮", titulo: "Te ha llegado una postal",
          texto: "Viene de Noruega… y del futuro.",
          postal: {
            fecha: "Lofoten, 27 de junio de 2027",
            texto: "Jurdana del pasado:\nTe escribimos desde Lofoten. Hoy hace un año que empezamos a salir y lo estamos celebrando en el fin del mundo.\nAquí no se hace de noche: el sol se queda mirándonos toda la noche, como si tampoco quisiera irse.\nHoy hemos subido a una montaña que sale directamente del mar (tú delante, yo quejándome) y arriba nos hemos comido un bocadillo mirando las casitas rojas de pescadores.\nSpoiler: merece la pena cada kilómetro, cada examen y cada vuelo hasta aquí.",
            firma: "Firmado: nosotros del futuro ❤️",
            para: "Para: Jurdana · Zorrotza (Bilbao)" } },

    17: { icono: "🍫", titulo: "Dato científico",
          texto: "Está demostrado que los churros saben mejor cuando los compartes conmigo.\n\n(Estudio realizado en Elche con una muestra de 2 personas. Margen de error: cero.)" },

    18: { icono: "💪", titulo: "Vale por…", tipoVale: "dorsal",
          nota: "🍀 Último examen: módulo 8. ¡A por él!",
          vale: "Un día de deporte juntos: tú eliges qué hacemos y yo prometo no quejarme… mucho" },

    19: { icono: "🍣", titulo: "Vale por…", tipoVale: "sushi",
          vale: "Una noche haciendo sushi casero juntos. Quedará feo, pero nos lo vamos a comer igual" },

    20: { icono: "💭", titulo: "Algo que nunca te he dicho",
          texto: "[Escribe aquí algo que nunca le hayas dicho]",
          pregunta: "¿Qué es lo primero que hacemos cuando aterrice?" },

    21: { icono: "🧳", titulo: "Cuenta atrás para vernos",
          texto: "Lo peor de la distancia es esperar. Lo mejor, el momento en que por fin te veo llegar.\nY eso es el 26: solo quedan {vernos} días.\nYa sabes lo que te espera cuando llegues 🍫" },

    22: { icono: "🍫", titulo: "Vale por…", tipoVale: "churreria",
          vale: "Una docena de churros solo para ti, sin que yo te robe ninguno (bueno, uno)" },

    23: { icono: "🕯️", titulo: "Ya casi",
          texto: "Mañana es la última puerta.\nY dentro de {vernos} días, por fin, nos vemos ❤️",
          pregunta: "¿Cuál ha sido tu puerta favorita hasta ahora?" },

    24: { icono: "❤️", titulo: "Feliz Nochebuena",
          texto: "Jurdana:\nPasado mañana por fin nos vemos, y no sabes las ganas que tengo.\nNos conocimos entre montañas, vivimos a 800 km y aun así eres lo mejor de mi año.\nGracias por cada viaje, cada peli, cada entreno y cada churro.\nY esto solo acaba de empezar: en verano, Lofoten 🇳🇴\n[Añade aquí tu mensaje más personal]\nFeliz Navidad, mi amor." },
  },
};
