document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".login-container").style.display = "block";
    }, 2000);
});

function login(rol) {
    alert("Has ingresado como " + rol);
    // Aquí irá la redirección y lógica de inicio de sesión con Firebase
}
