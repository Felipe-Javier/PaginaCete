function validarFormSide() {
    var nombre, correo;
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;

    if (nombre == "") {
        alert("El campo nombre está vacío");
        return false;
    } else if (correo == "") {
        alert("El campo correo está vacío");
    } else if (nombre.length > 30) {
        alert("El nombre es muy largo");
        return false;
    } else if (correo.length > 100) {
        alert("El correo es muy largo");
        return false;
    }
}