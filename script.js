// Se agrega un listener para el evento 'DOMContentLoaded', lo que asegura que el código
// solo se ejecute una vez que todo el HTML del documento ha sido cargado.
addEventListener("DOMContentLoaded", () => {

    // Se selecciona el formulario con el id 'form' y se guarda en la variable 'form'.
    const form = document.querySelector("#form")
    // Se selecciona el botón de envío con el id 'submit' y se guarda en la variable 'submitButton'.
    const submitButton = document.querySelector("#submit")
    // URL del script de Google Apps Script al que se enviará el formulario mediante una petición POST.
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyDxEef8liZh8HOmEDn-hoF4Lt8FUlUwgISNlt5wepkZfZtUBwzNz35B4D47NVJsDHXEA/exec'
    // Se añade un listener para el evento 'submit' del formulario.
    form.addEventListener('submit', e => {
        // Se desactiva el botón de envío para evitar múltiples envíos mientras se procesa la solicitud.
        submitButton.disabled = true
        // Se previene el comportamiento por defecto del formulario (recargar la página).
        e.preventDefault()
        // Se crea un objeto FormData con los datos del formulario.
        let requestBody = new FormData(form)
        // Se utiliza 'fetch' para enviar los datos del formulario al 'scriptURL' mediante el método POST.
        fetch(scriptURL, { method: 'POST', body: requestBody })
            // Si la solicitud es exitosa, se muestra una alerta con el mensaje 'Success!' 
            // y se habilita el botón de envío nuevamente.
            .then(response => {
                alert('Success!', response)
                submitButton.disabled = false
            })
            // Si ocurre un error durante la solicitud, se muestra una alerta con el mensaje 'Error!' 
            // y se habilita el botón de envío nuevamente.
            .catch(error => {
                alert('Error!', error.message)
                submitButton.disabled = false

            }
            )
    })
});