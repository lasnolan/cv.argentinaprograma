// Obtener los elementos del párrafo y el título
var parrafo = document.getElementById("parrafo");
var tituloPrincipal = document.getElementById("tituloPrincipal");

// Obtener los elementos de los íconos
var nombre = document.getElementById("nombre");
var mail = document.getElementById("mail");
var fecha = document.getElementById("fecha");
var ubicacion = document.getElementById("ubicacion");
var telefo = document.getElementById("telefo");

// Agregar un evento de mouseover a cada icono
nombre.addEventListener("mouseover", function() {
    parrafo.textContent = "Mi nombre es";
    tituloPrincipal.textContent = "Natalia Lopez";
});

mail.addEventListener("mouseover", function() {
    parrafo.textContent = "Mi correo electrónico es";
    tituloPrincipal.textContent = "natalialopez@gmail.com";
});

fecha.addEventListener("mouseover", function() {
    parrafo.textContent = "Fecha de nacimiento";
    tituloPrincipal.textContent = "1 de enero de 2000";
});

ubicacion.addEventListener("mouseover", function() {
    parrafo.textContent = "Vivo en";
    tituloPrincipal.textContent = "La pampa, Argentina";
});

telefo.addEventListener("mouseover", function() {
    parrafo.textContent = "Mi número de teléfono es";
    tituloPrincipal.textContent = "+54 1155823562";
});