const rutinas = [
    {
        id: 1,
        nombre: "Rutina 1",
        entrenador: "Entrenador 1",
        objetivo: "Ganar masa muscular",
        dificultad: "Principiante",
        dias: [
            { 
                dia: "Día 1: Pierna", 
                ejercicios: [
                    { ejercicioId: 1, reps: "3x12" },
                    { ejercicioId: 2, reps: "3x10" },
                    { ejercicioId: 3, reps: "3x15" }
                ]
            },
            { 
                dia: "Día 2: Espalda", 
                ejercicios: [
                    { ejercicioId: 4, reps: "3x8" },
                    { ejercicioId: 5, reps: "3x10" },
                    { ejercicioId: 6, reps: "3x12" }
                ]
            }
        ]
    },
    {
        id: 2,
        nombre: "Rutina 2",
        entrenador: "Entrenador 2",
        objetivo: "Perder peso",
        dificultad: "Intermedio",
        dias: [
            { 
                dia: "Día 1: Cardio", 
                ejercicios: [
                    { ejercicioId: 7, reps: "20 minutos" },
                    { ejercicioId: 8, reps: "15 minutos" },
                    { ejercicioId: 9, reps: "3x10" }
                ]
            },
            { 
                dia: "Día 2: Brazos", 
                ejercicios: [
                    { ejercicioId: 10, reps: "3x15" },
                    { ejercicioId: 11, reps: "3x12" },
                    { ejercicioId: 12, reps: "3x10" }
                ]
            }
        ]
    },
    {
        id: 3,
        nombre: "Rutina 3",
        entrenador: "Entrenador 1",
        objetivo: "Ganar masa muscular",
        dificultad: "Intermedio",
        dias: [
            { 
                dia: "Día 1: Cardio", 
                ejercicios: [
                    { ejercicioId: 7, reps: "20 minutos" },
                    { ejercicioId: 8, reps: "15 minutos" },
                    { ejercicioId: 9, reps: "3x10" },
                    { ejercicioId: 20, reps: "3x8" }
                ]
            },
            { 
                dia: "Día 2: Brazos", 
                ejercicios: [
                    { ejercicioId: 10, reps: "3x15" },
                    { ejercicioId: 11, reps: "3x12" },
                    { ejercicioId: 12, reps: "3x10" }
                ]
            }
        ]
    },
    
];

export default rutinas;