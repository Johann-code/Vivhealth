const especialistas = [
    { nombre: "Luis Fernández", colegiatura: "CMP123456", enfoque: "Cognitivo-Conductual", especialidad: "ansiedad, depresión, estilos de crianza, duelo", experiencia: "5 años", estudios: "Maestría en Psicología Clínica", comentarios: "Gran profesional, Me ayudó mucho, Explica con claridad" },
    { nombre: "María Gómez", colegiatura: "CMP234567", enfoque: "Psicoanálisis", especialidad: "ansiedad desde el inconsciente", experiencia: "8 años", estudios: "Doctorado en Psicoterapia", comentarios: "Muy empático, Buen manejo de técnicas" },
    { nombre: "Carlos Pérez", colegiatura: "CMP345678", enfoque: "Humanista", especialidad: "trastornos de personalidad, trauma", experiencia: "10 años", estudios: "Especialización en Terapia Familiar", comentarios: "Altamente recomendado, Terapias efectivas" },
    { nombre: "Elena Ramírez", colegiatura: "CMP678901", enfoque: "Cognitivo-Conductual", especialidad: "violencia intrafamiliar, trastornos alimenticios, manejo del enojo, autocuidado", experiencia: "7 años", estudios: "Especialización en Psicoanálisis", comentarios: "Dedicado y atento, Comprensivo y profesional" },
    { nombre: "Fernando Torres", colegiatura: "CMP789012", enfoque: "Psicoanálisis", especialidad: "terapia infantil, bullying, trastornos del sueño, autoconocimiento", experiencia: "9 años", estudios: "Doctorado en Neurociencias", comentarios: "Escucha activa, Acompañamiento excelente" },
    { nombre: "Sofía Vargas", colegiatura: "CMP890123", enfoque: "Humanista", especialidad: "neurodivergencia, identidad de género, duelo migratorio, inteligencia emocional", experiencia: "11 años", estudios: "Maestría en Terapia Cognitiva", comentarios: "Métodos eficaces, Facilita el proceso terapéutico" },
    { nombre: "Ricardo Hernández", colegiatura: "CMP901234", enfoque: "Gestalt", especialidad: "psicología positiva, procrastinación, dependencia emocional, miedos irracionales", experiencia: "4 años", estudios: "Diplomado en Coaching Psicológico", comentarios: "Resultados positivos, Gran conocimiento" },
    { nombre: "Valeria Castro", colegiatura: "CMP012345", enfoque: "Sistémico", especialidad: "crisis existenciales, insatisfacción laboral, equilibrio emocional, terapia familiar", experiencia: "15 años", estudios: "Especialización en Terapia Sistémica", comentarios: "Buena comunicación, Estrategias útiles" }
];

// Obtener especialidades únicas y ordenarlas alfabéticamente
const especialidadesUnicas = [...new Set(especialistas.map(e => e.especialidad.split(", ")).flat())].sort();

// Llenar el select con especialidades ordenadas
const especialidadSelect = document.getElementById("especialidad");
especialidadesUnicas.forEach(especialidad => {
    const option = document.createElement("option");
    option.value = especialidad;
    option.textContent = especialidad;
    especialidadSelect.appendChild(option);
});

// Mostrar especialistas filtrados
function mostrarEspecialistas(especialistasFiltrados) {
    const lista = document.getElementById("especialistas-list");
    lista.innerHTML = "";

    especialistasFiltrados.forEach(especialista => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-3");
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${especialista.nombre}</h5>
                    <p class="card-text"><strong>Enfoque:</strong> ${especialista.enfoque}</p>
                    <p class="card-text"><strong>Especialidad:</strong> ${especialista.especialidad}</p>
                    <p class="card-text"><strong>Experiencia:</strong> ${especialista.experiencia}</p>
                    <p class="card-text"><strong>Comentarios:</strong> ${especialista.comentarios}</p>
                    <button class="btn btn-primary w-100 btn-agendar" data-especialista="${especialista.nombre}">Agendar Cita</button>
                </div>
            </div>
        `;
        lista.appendChild(card);
    });

    // Agregar evento a los botones de Agendar Cita
    document.querySelectorAll(".btn-agendar").forEach(button => {
        button.addEventListener("click", (event) => {
            const especialistaNombre = event.target.getAttribute("data-especialista");
            document.getElementById("especialistaNombre").value = especialistaNombre;
            const modal = new bootstrap.Modal(document.getElementById("modalAgendarCita"));
            modal.show();
        });
    });
}

// Filtrar especialistas cuando se selecciona una especialidad
especialidadSelect.addEventListener("change", () => {
    const especialidadSeleccionada = especialidadSelect.value.toLowerCase();
    
    if (especialidadSeleccionada) {
        const filtrados = especialistas.filter(e => 
            e.especialidad.toLowerCase().includes(especialidadSeleccionada)
        );
        mostrarEspecialistas(filtrados);
    } else {
        document.getElementById("especialistas-list").innerHTML = "";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const botonModoOscuro = document.getElementById("modoOscuroBtn");
    const body = document.body;

    // Verificar si el usuario ya activó el modo oscuro anteriormente
    if (localStorage.getItem("modoOscuro") === "activado") {
        body.classList.add("modo-oscuro");
    }

    botonModoOscuro.addEventListener("click", () => {
        body.classList.toggle("modo-oscuro");

        // Guardar el estado en localStorage
        if (body.classList.contains("modo-oscuro")) {
            localStorage.setItem("modoOscuro", "activado");
        } else {
            localStorage.setItem("modoOscuro", "desactivado");
        }
    });
});
