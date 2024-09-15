// Se agrega un listener para el evento 'DOMContentLoaded', lo que asegura que el código
// solo se ejecute una vez que todo el HTML del documento ha sido cargado.
addEventListener("DOMContentLoaded", () => {

    // Se selecciona el formulario con el id 'form' y se guarda en la variable 'form'.
    const form = document.querySelector("#form")
    // Se selecciona el botón de envío con el id 'submit' y se guarda en la variable 'submitButton'.
    const submitButton = document.querySelector("#submit")
    // URL del script de Google Apps Script al que se enviará el formulario mediante una petición POST.
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyDxEef8liZh8HOmEDn-hoF4Lt8FUlUwgISNlt5wepkZfZtUBwzNz35B4D47NVJsDHXEA/exec'

    // Se crea la instancia de JustValidate para manejar la validación.
    const validation = new JustValidate('#form');

    // Add validation rules
    validation
        .addField('#name', [
            {
                rule: 'required',
                errorMessage: 'Name is required',
            },
            {
                rule: 'minLength',
                value: 3,
                errorMessage: 'Name must be at least 3 characters',
            },
        ])
        .addField('#correo', [
            {
                rule: 'required',
                errorMessage: 'Email is required',
            },
            {
                rule: 'email',
                errorMessage: 'Please enter a valid email',
            },
        ])
        .addField('#number', [
            {
                rule: 'required',
                errorMessage: 'Phone number is required',
            },
            {
                rule: 'customRegexp',
                value: /^\+?[1-9]\d{1,14}$/, // Example for international phone numbers (E.164 format)
                errorMessage: 'Please enter a valid phone number',
            },
        ])
        .addField('#subject', [
            {
                rule: 'required',
                errorMessage: 'Subject is required',
            },
            {
                rule: 'minLength',
                value: 1,
                errorMessage: 'Subject is required',
            },
        ])

        .onSuccess((event) => {
            // Se previene el comportamiento por defecto del formulario (recargar la página).
            event.preventDefault();

            // Se desactiva el botón de envío para evitar múltiples envíos mientras se procesa la solicitud.
            submitButton.disabled = true;

            // Se crea un objeto FormData con los datos del formulario.
            let requestBody = new FormData(form);

            // Se utiliza 'fetch' para enviar los datos del formulario al 'scriptURL' mediante el método POST.
            fetch(scriptURL, { method: 'POST', body: requestBody })
                // Si la solicitud es exitosa, se muestra una alerta con el mensaje 'Success!' 
                // y se habilita el botón de envío nuevamente.
                .then(response => {
                    alert('Success!');
                    submitButton.disabled = false;
                    form.reset(); // Opcional: Resetea el formulario después de una exitosa submission
                })
                // Si ocurre un error durante la solicitud, se muestra una alerta con el mensaje 'Error!' 
                // y se habilita el botón de envío nuevamente.
                .catch(error => {
                    alert('Error! ' + error.message);
                    submitButton.disabled = false;
                });
        });
});