const rutinas = [
    {
        id: 1,
        nombre: "Rutina 1",
        entrenador: "Entrenador 1",
        objetivo: "Ganar masa muscular",
        dificultad: "Principiante",
        dias: [
            { dia: "Día 1: Pierna", ejercicios: ["Sentadillas", "Prensa", "Zancadas"] },
            { dia: "Día 2: Espalda", ejercicios: ["Dominadas", "Remo con barra", "Jalón al pecho"] }
        ]
    },
    {
        id: 2,
        nombre: "Rutina 2",
        entrenador: "Entrenador 2",
        objetivo: "Perder peso",
        dificultad: "Intermedio",
        dias: [
            { dia: "Día 1: Cardio", ejercicios: ["Correr", "Saltar la cuerda", "Burpees"] },
            { dia: "Día 2: Brazos", ejercicios: ["Flexiones", "Fondos en paralelas", "Curl de bíceps"] }
        ]
    }
];

export default rutinas;