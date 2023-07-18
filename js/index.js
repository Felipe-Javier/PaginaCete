const formListener = () => {
    const peticionForm = document.getElementById('peticion-form')
    peticionForm.onsubmit = (e) => {
        e.preventDefault()
        alert('¡Gracias por tus comentarios!')
        peticionForm.reset()
    }
}

window.onload = () => {
    formListener()
}