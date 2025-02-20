const especialistas = [
    { nombre: "Luis Fernández", sexo: "Masculino", colegiatura: "CMP123456", enfoque: "Cognitivo-Conductual", especialidad: "ansiedad, depresión, estilos de crianza, duelo", experiencia: "5 años", estudios: "Maestría en Psicología Clínica", comentarios: "Gran profesional, Me ayudó mucho, Explica con claridad" },
    { nombre: "María Gómez", sexo: "Femenino", colegiatura: "CMP234567", enfoque: "Psicoanálisis", especialidad: "ansiedad desde el inconsciente", experiencia: "8 años", estudios: "Doctorado en Psicoterapia", comentarios: "Muy empático, Buen manejo de técnicas" },
    { nombre: "Carlos Pérez", sexo: "Masculino", colegiatura: "CMP345678", enfoque: "Humanista", especialidad: "trastornos de personalidad, trauma", experiencia: "10 años", estudios: "Especialización en Terapia Familiar", comentarios: "Altamente recomendado, Terapias efectivas" },
    { nombre: "Elena Ramírez", sexo: "Femenino", colegiatura: "CMP678901", enfoque: "Cognitivo-Conductual", especialidad: "violencia intrafamiliar, trastornos alimenticios, manejo del enojo, autocuidado", experiencia: "7 años", estudios: "Especialización en Psicoanálisis", comentarios: "Dedicado y atento, Comprensivo y profesional" },
    { nombre: "Fernando Torres", sexo: "Masculino", colegiatura: "CMP789012", enfoque: "Psicoanálisis", especialidad: "terapia infantil, bullying, trastornos del sueño, autoconocimiento", experiencia: "9 años", estudios: "Doctorado en Neurociencias", comentarios: "Escucha activa, Acompañamiento excelente" },
    { nombre: "Sofía Vargas", sexo: "Femenino", colegiatura: "CMP890123", enfoque: "Humanista", especialidad: "neurodivergencia, identidad de género, duelo migratorio, inteligencia emocional", experiencia: "11 años", estudios: "Maestría en Terapia Cognitiva", comentarios: "Métodos eficaces, Facilita el proceso terapéutico" },
    { nombre: "Ricardo Hernández", sexo: "Masculino", colegiatura: "CMP901234", enfoque: "Gestalt", especialidad: "psicología positiva, procrastinación, dependencia emocional, miedos irracionales", experiencia: "4 años", estudios: "Diplomado en Coaching Psicológico", comentarios: "Resultados positivos, Gran conocimiento" },
    { nombre: "Valeria Castro", sexo: "Femenino", colegiatura: "CMP012345", enfoque: "Sistémico", especialidad: "crisis existenciales, insatisfacción laboral, equilibrio emocional, terapia familiar", experiencia: "15 años", estudios: "Especialización en Terapia Sistémica", comentarios: "Buena comunicación, Estrategias útiles" },
    { nombre: "Anaís Martínez", sexo: "Femenino", colegiatura: "CMP678945", enfoque: "Cognitivo-Conductual", especialidad: "trastornos de ansiedad, manejo del estrés, autoestima", experiencia: "6 años", estudios: "Maestría en Psicología Clínica", comentarios: "Muy profesional, Explica con claridad" },
    { nombre: "Javier López", sexo: "Masculino", colegiatura: "CMP890765", enfoque: "Psicoanálisis", especialidad: "trastornos de personalidad, trauma, duelo", experiencia: "12 años", estudios: "Doctorado en Psicoterapia", comentarios: "Altamente recomendado, Buen manejo de técnicas" },
    { nombre: "Lucio Gutiérrez", sexo: "Masculino", colegiatura: "CMP456789", enfoque: "Humanista", especialidad: "neurodivergencia, identidad de género, autoconocimiento", experiencia: "8 años", estudios: "Maestría en Terapia Cognitiva", comentarios: "Métodos eficaces, Facilita el proceso terapéutico" },
    { nombre: "Miguel Ángel", sexo: "Masculino", colegiatura: "CMP234567", enfoque: "Gestalt", especialidad: "psicología positiva, procrastinación, dependencia emocional", experiencia: "5 años", estudios: "Diplomado en Coaching Psicológico", comentarios: "Resultados positivos, Gran conocimiento" },
    { nombre: "Sandra Rodríguez", sexo: "Femenino", colegiatura: "CMP901234", enfoque: "Sistémico", especialidad: "crisis existenciales, insatisfacción laboral, equilibrio emocional", experiencia: "10 años", estudios: "Especialización en Terapia Sistémica", comentarios: "Buena comunicación, Estrategias útiles" },
    { nombre: "Eduardo García", sexo: "Masculino", colegiatura: "CMP567890", enfoque: "Cognitivo-Conductual", especialidad: "trastornos de ansiedad, manejo del estrés, autoestima", experiencia: "7 años", estudios: "Maestría en Psicología Clínica", comentarios: "Muy profesional, Explica con claridad" },
    { nombre: "Marcela Morales", sexo: "Femenino", colegiatura: "CMP890123", enfoque: "Psicoanálisis", especialidad: "trastornos de personalidad, trauma, duelo", experiencia: "11 años", estudios: "Doctorado en Psicoterapia", comentarios: "Altamente recomendado, Buen manejo de técnicas" },
    { nombre: "Cristina Hernández", sexo: "Femenino", colegiatura: "CMP456789", enfoque: "Humanista", especialidad: "neurodivergencia, identidad de género, autoconocimiento", experiencia: "9 años", estudios: "Maestría en Terapia Cognitiva", comentarios: "Métodos eficaces, Facilita el proceso terapéutico" },
    { nombre: "Alejandro Martínez", sexo: "Masculino", colegiatura: "CMP234567", enfoque: "Gestalt", especialidad: "psicología positiva, procrastinación, dependencia emocional", experiencia: "6 años", estudios: "Diplomado en Coaching Psicológico", comentarios: "Resultados positivos, Gran conocimiento" },
    { nombre: "Daniela Gómez", sexo: "Femenino", colegiatura: "CMP901234", enfoque: "Sistémico", especialidad: "crisis existenciales, insatisfacción laboral, equilibrio emocional", experiencia: "12 años", estudios: "Especialización en Terapia Sistémica", comentarios: "Buena comunicación, Estrategias útiles" },
    { nombre: "Gabriel Rojas", sexo: "Masculino", colegiatura: "CMP345987", enfoque: "Cognitivo-Conductual", especialidad: "manejo del estrés, ansiedad, autoestima", experiencia: "8 años", estudios: "Maestría en Psicología Clínica", comentarios: "Empático y profesional, Excelentes resultados" },
    { nombre: "Paola Mendoza", sexo: "Femenino", colegiatura: "CMP456321", enfoque: "Psicoanálisis", especialidad: "trastornos del sueño, trauma, duelo", experiencia: "10 años", estudios: "Doctorado en Psicoterapia", comentarios: "Muy paciente, Explicaciones detalladas" },
    { nombre: "Hugo Salinas", sexo: "Masculino", colegiatura: "CMP567432", enfoque: "Humanista", especialidad: "autoestima, inteligencia emocional, crisis existenciales", experiencia: "7 años", estudios: "Maestría en Terapia Cognitiva", comentarios: "Gran acompañamiento, Resultados efectivos" },
    { nombre: "Andrea Villanueva", sexo: "Femenino", colegiatura: "CMP678543", enfoque: "Gestalt", especialidad: "miedos irracionales, procrastinación, dependencia emocional", experiencia: "6 años", estudios: "Diplomado en Coaching Psicológico", comentarios: "Terapias dinámicas, Atención personalizada" },
    { nombre: "Esteban Contreras", sexo: "Masculino", colegiatura: "CMP789654", enfoque: "Sistémico", especialidad: "terapia familiar, equilibrio emocional, insatisfacción laboral", experiencia: "9 años", estudios: "Especialización en Terapia Sistémica", comentarios: "Metodologías innovadoras, Buen enfoque" },
    { nombre: "Daniela Fuentes", sexo: "Femenino", colegiatura: "CMP890765", enfoque: "Cognitivo-Conductual", especialidad: "trastornos de ansiedad, autocuidado, autoestima", experiencia: "6 años", estudios: "Maestría en Psicología Clínica", comentarios: "Muy profesional, Paciente y clara" },
    { nombre: "Jorge Espinoza", sexo: "Masculino", colegiatura: "CMP901876", enfoque: "Psicoanálisis", especialidad: "bullying, trauma, ansiedad desde el inconsciente", experiencia: "11 años", estudios: "Doctorado en Psicoterapia", comentarios: "Atento, Propuestas interesantes" },
    { nombre: "Marta León", sexo: "Femenino", colegiatura: "CMP012789", enfoque: "Humanista", especialidad: "identidad de género, neurodivergencia, autoconocimiento", experiencia: "9 años", estudios: "Maestría en Terapia Cognitiva", comentarios: "Terapia muy enriquecedora, Recomendada" },
    { nombre: "Roberto Silva", sexo: "Masculino", colegiatura: "CMP123987", enfoque: "Gestalt", especialidad: "psicología positiva, procrastinación, crisis existenciales", experiencia: "5 años", estudios: "Diplomado en Coaching Psicológico", comentarios: "Buen seguimiento, Técnicas efectivas" },
    { nombre: "Natalia Herrera", sexo: "Femenino", colegiatura: "CMP234876", enfoque: "Sistémico", especialidad: "equilibrio emocional, terapia familiar, insatisfacción laboral", experiencia: "8 años", estudios: "Especialización en Terapia Sistémica", comentarios: "Empatía y profesionalismo" }

];
// Mapeo para agrupar especialidades similares
const especialidadMap = {
    "terapia familiar": "terapia",
    "terapia infantil": "terapia",
    "ansiedad desde el inconsciente": "ansiedad",
    "trastornos de ansiedad": "ansiedad",
    "manejo del estrés": "estrés",
    "trastornos del sueño": "sueño",
    "manejo del enojo": "enojo",
    "dependencia emocional": "relaciones",
    "procrastinación": "hábitos",
    "neurodivergencia": "neurodiversidad",
    "duelo migratorio": "duelo",
};

// Normalizar especialidades en los especialistas
especialistas.forEach(e => {
    e.especialidad = e.especialidad.split(", ").map(especialidad => 
        especialidadMap[especialidad] || especialidad
    ).join(", "); // Convertir de nuevo a string
});

// Obtener especialidades únicas y normalizadas
const especialidadesProcesadas = new Set();
const enfoquesProcesados = new Set();
const sexosProcesados = new Set();

especialistas.forEach(e => {
    e.especialidad.split(", ").forEach(especialidad => {
        especialidadesProcesadas.add(especialidad);
    });
    enfoquesProcesados.add(e.enfoque);
    sexosProcesados.add(e.sexo);
});

// Convertir Sets a Arrays y ordenar alfabéticamente
const especialidadesUnicas = [...especialidadesProcesadas].sort();
const enfoquesUnicos = [...enfoquesProcesados].sort();
const sexosUnicos = [...sexosProcesados].sort(); // Aunque solo hay "Femenino" y "Masculino"

// Llenar el select con especialidades ordenadas
const especialidadSelect = document.getElementById("especialidad");
especialidadSelect.innerHTML = `<option value="">Selecciona una especialidad</option>`;
especialidadesUnicas.forEach(especialidad => {
    const option = document.createElement("option");
    option.value = especialidad;
    option.textContent = especialidad;
    especialidadSelect.appendChild(option);
});

// Llenar el select con enfoques ordenados
const enfoqueSelect = document.getElementById("enfoque");
enfoqueSelect.innerHTML = `<option value="">Selecciona el enfoque</option>`;
enfoquesUnicos.forEach(enfoque => {
    const option = document.createElement("option");
    option.value = enfoque;
    option.textContent = enfoque;
    enfoqueSelect.appendChild(option);
});

// Filtrar especialistas según criterios seleccionados
document.getElementById("filtrar").addEventListener("click", () => {
    const sexoSeleccionado = document.getElementById("sexo").value;
    const enfoqueSeleccionado = document.getElementById("enfoque").value;
    const especialidadSeleccionada = document.getElementById("especialidad").value.toLowerCase();

    const filtrados = especialistas.filter(e => {
        const cumpleSexo = !sexoSeleccionado || e.sexo === sexoSeleccionado;
        const cumpleEnfoque = !enfoqueSeleccionado || e.enfoque === enfoqueSeleccionado;
        const cumpleEspecialidad = !especialidadSeleccionada || e.especialidad.toLowerCase().includes(especialidadSeleccionada);
        return cumpleSexo && cumpleEnfoque && cumpleEspecialidad;
    });

    mostrarEspecialistas(filtrados);
});

// Mostrar especialistas filtrados
function mostrarEspecialistas(especialistasFiltrados) {
    const lista = document.getElementById("especialistas-list");
    lista.innerHTML = "";

    if (especialistasFiltrados.length === 0) {
        lista.innerHTML = `<p class="text-center">No se encontraron especialistas con los criterios seleccionados.</p>`;
        return;
    }

    especialistasFiltrados.forEach(especialista => {
        const card = document.createElement("div");
        card.classList.add("col-md-4", "mb-3");
        card.innerHTML = `
            <div class="card">
                <div class="card-body">
                    <h5 class="card-title">${especialista.nombre}</h5>
                    <p class="card-text"><strong>Sexo:</strong> ${especialista.sexo}</p>
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

document.getElementById("formAgendarCita").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("pacienteNombre").value.trim();
    let apellido = document.getElementById("pacienteApellido").value.trim();
    let correo = document.getElementById("pacienteCorreo").value.trim();
    let telefono = document.getElementById("pacienteTelefono").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let fechaCita = document.getElementById("fechaCita").value;
    let motivo = document.getElementById("motivoConsulta").value.trim();

    let hoy = new Date();
    let fechaMinimaCita = new Date();
    fechaMinimaCita.setDate(hoy.getDate() + 1); // Solo permite agendar desde mañana

    let fechaNacimientoDate = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();

    if (!nombre || !apellido || !correo || !telefono || !fechaNacimiento || !fechaCita || !motivo) {
        mostrarAlerta("❌ Todos los campos son obligatorios. Ejemplo: Nombre: Juan, Apellido: Pérez", "danger");
        return;
    }

    if (!validarCorreo(correo)) {
        mostrarAlerta("❌ Correo electrónico inválido. Ejemplo: usuario@gmail.com", "danger");
        return;
    }

    if (!validarTelefono(telefono)) {
        mostrarAlerta("❌ Número de teléfono inválido. Ejemplo: 987654321", "danger");
        return;
    }

    if (edad < 16) {
        mostrarAlerta("❌ Debe ser mayor de 16 años para registrarse. Ejemplo: Fecha de Nacimiento: 2005-08-15", "danger");
        return;
    }

    if (new Date(fechaCita) < fechaMinimaCita) {
        mostrarAlerta("❌ La cita debe ser desde mañana en adelante. Ejemplo: " + fechaMinimaCita.toISOString().split('T')[0], "danger");
        return;
    }

    // Si todo está bien, mostrar mensaje de éxito
    mostrarAlerta("✅ Su cita ha sido agendada correctamente", "success");
});

// Función para validar email
function validarCorreo(correo) {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(correo);
}

// Función para validar teléfono (solo números y 9-15 dígitos)
function validarTelefono(telefono) {
    let regex = /^[0-9]{9,15}$/;
    return regex.test(telefono);
}

// Función para mostrar la alerta
function mostrarAlerta(mensaje, tipo) {
    let alerta = document.getElementById("alerta");
    let mensajeAlerta = document.getElementById("mensajeAlerta");

    mensajeAlerta.innerHTML = mensaje;
    alerta.className = `alert alert-${tipo} mt-3`;
    alerta.classList.remove("d-none");
}

// Ocultar alerta
function ocultarAlerta() {
    document.getElementById("alerta").classList.add("d-none");
}

