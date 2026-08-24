function mostrarContenido(event, idSeccion) {
    // 1. Evita que la página salte al inicio
    event.preventDefault(); 
    
    // 2. Oculta todas las secciones de contenido
    const secciones = document.querySelectorAll('.main-content');
    secciones.forEach(seccion => {
        seccion.style.display = 'none';
    });
    
    // 3. Muestra solo la sección con el ID seleccionado, manteniendo la cuadrícula intacta
    document.getElementById(idSeccion).style.display = 'grid'; 
}


    function cambiarRegistro(idObjetivo) {
        // Paso 1: Reunir todos los registros de la clase 'registro-activo'
        let todosLosRegistros = document.querySelectorAll('.registro-activo');
        
        // Paso 2: Ocultar todos los registros en las sombras (display = 'none')
        todosLosRegistros.forEach(function(registro) {
            registro.style.display = 'none';
        });

        // Paso 3: Iluminar únicamente el registro que el usuario solicitó
        document.getElementById(idObjetivo).style.display = 'block';
    }