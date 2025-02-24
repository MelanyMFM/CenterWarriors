import gif1 from "./gif sentadillas.gif";
import gif2 from "./gif prensa.gif";
import gif3 from "./gif zancadas.gif";
import gif4 from "./gif dominadas.gif";
import gif5 from "./gif remo con barra.gif";
import gif6 from "./gif jalon al pecho.gif";
import gif7 from "./gif correr.gif";
import gif8 from "./gif saltar cuerda.gif";
import gif9 from "./gif burpes.gif";
import gif10 from "./gif flexiones.gif";
import gif11 from "./gif fondos en paralela.gif";
import gif12 from "./gif curl de biceps.gif";
import gif13 from "./gif press de banca.gif";
import gif14 from "./gif extensiones de triceps.gif";
import gif15 from "./gif elevacion de pelvis.gif";
import gif16 from "./gif press militar.gif";
import gif17 from "./git plancha.gif";
import gif18 from "./gif peso muerto.gif";
import gif19 from "./gif abdonimales.gif";
import gif20 from "./gif escaladores.gif";

const ejercicios = [
    { 
        id: 1, 
        nombre: "Sentadillas", 
        descripcion: "Ponte de pie con los pies al ancho de los hombros, baja lentamente flexionando las rodillas hasta que los muslos estén paralelos al suelo y luego vuelve a la posición inicial.", 
        grupoMuscular: "Piernas", 
        link: gif1 },
    { 
        id: 2, 
        nombre: "Prensa", 
        descripcion: "Siéntate en la máquina de prensa con los pies en la plataforma, empuja la carga con las piernas hasta extenderlas sin bloquear las rodillas, y luego regresa lentamente.", 
        grupoMuscular: "Piernas", 
        link: gif2 },
    { 
        id: 3, 
        nombre: "Zancadas", 
        descripcion: "Da un paso hacia adelante, flexiona ambas rodillas hasta que la trasera casi toque el suelo, y luego regresa a la posición inicial. Repite alternando las piernas.", 
        grupoMuscular: "Piernas", 
        link: gif3 },
    { 
        id: 4, 
        nombre: "Dominadas", 
        descripcion: "Agarra la barra con las palmas hacia adelante, cuelga con los brazos extendidos y luego levanta tu cuerpo hasta que la barbilla pase la barra. Baja lentamente.", 
        grupoMuscular: "Espalda", 
        link: gif4 },
    { 
        id: 5, 
        nombre: "Remo con barra", 
        descripcion: "Sujeta una barra con las manos al ancho de los hombros, inclina el torso hacia adelante y tira de la barra hacia el abdomen contrayendo la espalda. Baja lentamente.", 
        grupoMuscular: "Espalda", 
        link: gif5 },
    { 
        id: 6, 
        nombre: "Jalón al pecho", 
        descripcion: "Siéntate en la máquina, agarra la barra con las manos abiertas y tira de ella hacia el pecho, manteniendo la espalda recta. Vuelve lentamente a la posición inicial.", 
        grupoMuscular: "Espalda", 
        link: gif6 },
    { 
        id: 7, 
        nombre: "Correr", 
        descripcion: "Corre a un ritmo constante, manteniendo la postura erguida y el movimiento natural de brazos. Respira de manera controlada para mantener el rendimiento.", 
        grupoMuscular: "Cardio", 
        link: gif7 },
    { 
        id: 8, 
        nombre: "Saltar la cuerda", 
        descripcion: "Sujeta la cuerda con ambas manos, gira las muñecas para hacerla pasar por debajo de tus pies y salta con un ritmo constante.", 
        grupoMuscular: "Cardio", 
        link: gif8 },
    { 
        id: 9, 
        nombre: "Burpees", 
        descripcion: "Desde una posición de pie, baja a una sentadilla y coloca las manos en el suelo, estira las piernas hacia atrás en posición de plancha, realiza una flexión y luego salta de vuelta a la posición inicial.", 
        grupoMuscular: "Cardio", 
        link: gif9 },
    { 
        id: 10, 
        nombre: "Flexiones", 
        descripcion: "Coloca las manos al ancho de los hombros en el suelo, baja el cuerpo manteniéndolo recto hasta casi tocar el suelo y luego empuja de vuelta.", 
        grupoMuscular: "Pecho", 
        link: gif10 },
    { 
        id: 11, 
        nombre: "Fondos en paralelas", 
        descripcion: "Sujeta las barras paralelas, baja el cuerpo flexionando los codos hasta formar un ángulo de 90 grados y luego empuja de vuelta.", 
        grupoMuscular: "Tríceps", 
        link: gif11 },
    { 
        id: 12, 
        nombre: "Curl de bíceps", 
        descripcion: "Sujeta una pesa en cada mano con las palmas mirando hacia adelante, flexiona los codos para llevarlas hacia los hombros y luego baja lentamente.", 
        grupoMuscular: "Bíceps", 
        link: gif12 },
    { 
        id: 13, 
        nombre: "Press de banca", 
        descripcion: "Acuéstate en un banco plano, sujeta la barra con las manos al ancho de los hombros, baja hasta el pecho y luego empuja hacia arriba.", 
        grupoMuscular: "Pecho", 
        link: gif13 },
    { 
        id: 14, 
        nombre: "Extensiones de tríceps", 
        descripcion: "Sujeta una pesa con ambas manos, extiende los brazos sobre la cabeza y baja la pesa detrás de la cabeza, luego vuelve a extender.", 
        grupoMuscular: "Tríceps", 
        link: gif14 },
    { 
        id: 15, 
        nombre: "Elevación de pelvis", 
        descripcion: "Acuéstate boca arriba, flexiona las rodillas y apoya los pies en el suelo, eleva la pelvis contrayendo los glúteos y baja lentamente.", 
        grupoMuscular: "Glúteos", 
        link: gif15 },
    { 
        id: 16, 
        nombre: "Press militar", 
        descripcion: "Sujeta una barra con las manos al ancho de los hombros, empuja la barra hacia arriba hasta extender los brazos y luego baja lentamente.", 
        grupoMuscular: "Hombros", 
        link: gif16 },
    { 
        id: 17, 
        nombre: "Plancha", 
        descripcion: "Apoya los antebrazos y los pies en el suelo, mantén el cuerpo recto y contrae el abdomen por el tiempo indicado.", 
        grupoMuscular: "Core", 
        link: gif17 },
    { 
        id: 18, 
        nombre: "Peso muerto", 
        descripcion: "Sujeta una barra con ambas manos, inclina el torso hacia adelante bajando la barra sin arquear la espalda y luego regresa a la posición inicial.", 
        grupoMuscular: "Espalda", 
        link: gif18 },
    { 
        id: 19, 
        nombre: "Abdominales", 
        descripcion: "Acuéstate boca arriba, flexiona las rodillas y coloca las manos detrás de la cabeza, levanta el torso contrayendo el abdomen y baja lentamente.", 
        grupoMuscular: "Core", 
        link: gif19 },
    { 
        id: 20, 
        nombre: "Escaladores", 
        descripcion: "Coloca las manos en el suelo en posición de plancha, lleva las rodillas alternadamente al pecho a gran velocidad sin levantar la cadera.", 
        grupoMuscular: "Cardio", 
        link: gif20 }
];

export default ejercicios;
