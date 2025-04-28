
// Función para mostrar una sección específica (segun botones del menu)
function showSection(sectionId) {
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none'; // Ocultar todas las secciones
    });

    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block'; // Mostrar la sección seleccionada 
    }
}

// Función para mostrar el Dashboard de pacientes
function showDashboard() {
    // Primero ocultamos todas las secciones
    const sections = document.querySelectorAll('.content');
    sections.forEach(section => {
        section.style.display = 'none'; // Ocultar todas las secciones
    });

    // Luego mostramos solo la sección de Dashboard
    const dashboardSection = document.getElementById('dashboard');
    if (dashboardSection) {
        dashboardSection.style.display = 'block'; // Mostrar solo el Dashboard
    }
}

// Llamar la funcion showSection para mostrar la sección inicial
document.addEventListener('DOMContentLoaded', function() {
    showSection('inicio'); // Mostrar la sección de inicio al cargar la página
});



// Funciones para manejar el formulario de citas
const citaForm = document.getElementById('citaForm');
if (citaForm) {
    generarCodigoCita(); // Generar código de cita automáticamente (para mientras no tenemos Base de datos conectada)

    citaForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto
        if (citaForm.checkValidity()) {
            agregarCitaATabla();
            alert('Cita agendada correctamente.');
            citaForm.reset(); // Reiniciar el formulario
            generarCodigoCita(); // Generar un nuevo código de cita
        } else {
            alert('Por favor, complete todos los campos requeridos.');
        }
    });
}

// Función para generar un código de cita
function generarCodigoCita() {
    const codigo = Math.random().toString(36).substring(2, 15).toUpperCase();
    document.getElementById('codigoCita').value = codigo;
}

// Funciones para manejar el formulario de pacientes
const pacienteForm = document.getElementById('pacienteForm');
if (pacienteForm) {
    generarCodigoPaciente(); // Generar código de paciente automáticamente

    pacienteForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto
        if (pacienteForm.checkValidity()) {
            agregarPacienteATabla();
            alert('Paciente registrado correctamente.');
            pacienteForm.reset(); // Reiniciar el formulario
            generarCodigoPaciente(); // Generar un nuevo código de paciente
        } else {
            alert('Por favor, complete todos los campos requeridos.');
        }
    });
}

// Función para generar un código de paciente
function generarCodigoPaciente() {
    const codigo = Math.random().toString(36).substring(2, 15).toUpperCase();
    document.getElementById('codigoPaciente').value = codigo;
}

// Cargar iconos de servicios en tarjetas
const iconos = [
    '../IMG/C.jpg',
    '../IMG/V.png',
    '../IMG/E.png',
    '../IMG/D.png',
    '../IMG/CC.png',
];

const servicios = [
    {
        nombre: "Control de Crecimiento",
        descripcion: "Programa integral para monitorear el crecimiento y desarrollo de los niños.",
        lista: [
            "Evaluaciones de peso y altura",
            "Análisis de desarrollo motor y cognitivo",
            "Orientación nutricional personalizada",
            "Consejería para padres sobre el desarrollo infantil"
        ]
    },
    {
        nombre: "Vacunación",
        descripcion: "Gestión de un programa de vacunación completo para garantizar la inmunización adecuada.",
        lista: [
            "Vacunas rutinarias según calendario nacional",
            "Registro y seguimiento de vacunas",
            "Charlas informativas para padres",
            "Asesoría sobre vacunas adicionales"
        ]
    },
    {
        nombre: "Manejo de Enfermedades Comunes",
        descripcion: "Atención especializada para el diagnóstico y tratamiento de enfermedades comunes en la infancia.",
        lista: [
            "Tratamiento de infecciones respiratorias",
            "Atención a enfermedades gastrointestinales",
            "Manejo de alergias y asma",
            "Consejería para el cuidado preventivo"
        ]
    },
    {
        nombre: "Diagnósticos por Imágenes",
        descripcion: "Servicios de diagnóstico por imágenes para evaluar la salud de los niños.",
        lista: [
            "Ultrasonidos para evaluación abdominal",
            "Radiografías para lesiones y fracturas",
            "Tomografías computarizadas (TC) según necesidad",
            "Interpretación de estudios por especialistas"
        ]
    },
    {
        nombre: "Consultas Generales",
        descripcion: "Atención médica integral para abordar diversas necesidades de salud en niños.",
        lista: [
            "Revisión de la salud general del niño, incluyendo historia clínica y examen físico.",
            "Consejos sobre nutrición, vacunación y prevención de enfermedades.",
            "Diagnóstico y tratamiento de afecciones frecuentes como resfriados, gripe, alergias y problemas gastrointestinales.",
        ]
    }
];

// Generar tarjetas de servicios
const serviciosContainer = document.getElementById('serviciosContainer');
if (serviciosContainer) {
    servicios.forEach((servicio, index) => {
        const card = document.createElement('div');
        card.className = 'servicio-card';

        const title = document.createElement('h3');
        const icono = document.createElement('img');
        icono.src = iconos[index % iconos.length]; 
        icono.alt = 'Icono del servicio';
        icono.className = 'icono-servicio';

        title.appendChild(icono);
        title.appendChild(document.createTextNode(servicio.nombre));

        const description = document.createElement('p');
        description.textContent = servicio.descripcion;

        const lista = document.createElement('ul');
        servicio.lista.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            lista.appendChild(listItem);
        });

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(lista);
        serviciosContainer.appendChild(card);
    });
} else {
    console.error("Contenedor de servicios no encontrado.");
}

// Aumento de tamaño en los contenedores de misión y visión
const infoMContainer = document.querySelector('.infoM-container');
const infoVContainer = document.querySelector('.infoV-container');
const infoVVContainer = document.querySelector('.infoVV-container');

function scaleUp(container) {
    container.style.transform = 'scale(1.05)';
    container.style.transition = 'transform 0.3s';
}

function scaleDown(container) {
    container.style.transform = 'scale(1)';
}

// Agregar eventos de hover para los contenedores de misión y visión
if (infoMContainer) {
    infoMContainer.addEventListener('mouseover', function() {
        scaleUp(infoMContainer);
    });
    infoMContainer.addEventListener('mouseout', function() {
        scaleDown(infoMContainer);
    });
}

if (infoVContainer) {
    infoVContainer.addEventListener('mouseover', function() {
        scaleUp(infoVContainer);
    });
    infoVContainer.addEventListener('mouseout', function() {
        scaleDown(infoVContainer);
    });
}

if (infoVVContainer) {
    infoVVContainer.addEventListener('mouseover', function() {
        scaleUp(infoVVContainer);
    });
    infoVVContainer.addEventListener('mouseout', function() {
        scaleDown(infoVVContainer);
    });
}

// Ajustar el margen del footer al cargar la página
function ajustarMargenFooter() {
}

