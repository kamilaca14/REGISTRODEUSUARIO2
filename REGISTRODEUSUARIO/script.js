// Función que valida el formulario
function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Captura todos los campos del formulario
    const cedula = document.getElementById('cedula').value;
    const apellidos = document.getElementById('apellidos').value;
    const nombres = document.getElementById('nombres').value;
    const direccion = document.getElementById('direccion').value;
    const correo = document.getElementById('correo').value;
    const fechaNacimiento = document.getElementById('fecha_nacimiento').value;
    const ciudad = document.getElementById('ciudad').value;

    // Verifica si todos los campos están llenos
    if (cedula && apellidos && nombres && direccion && correo && fechaNacimiento && ciudad) {
        // Si todo está bien, muestra el mensaje de éxito
        const mensaje = document.getElementById("mensajeExito");
        mensaje.textContent = "Registrado exitosamente";
        mensaje.style.display = "block";

        // Limpiamos los campos del formulario
        document.getElementById('registroForm').reset();
    } else {
        // Si falta algún campo, muestra una alerta
        alert("Por favor, completa todos los campos antes de enviar.");
    }
}
