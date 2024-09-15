addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("#form")
    const submitButton = document.querySelector("#submit")
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyDxEef8liZh8HOmEDn-hoF4Lt8FUlUwgISNlt5wepkZfZtUBwzNz35B4D47NVJsDHXEA/exec'

    form.addEventListener('submit', e => {
        submitButton.disabled = true
        e.preventDefault()
        let requestBody = new FormData(form)
        fetch(scriptURL, { method: 'POST', body: requestBody })
            .then(response => {
                alert('Success!', response)
                submitButton.disabled = false
            })
            .catch(error => {
                alert('Error!', error.message)
                submitButton.disabled = false

            }
            )
    })
});