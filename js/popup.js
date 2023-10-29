
// Mostrar el popup
document.getElementById("mostrarPopup").addEventListener("click", function() {
    mostrarPopup();
});

// Cerrar el popup
document.getElementById("cerrarPopup").addEventListener("click", function() {
    cerrarPopup();
});

function mostrarPopup() {
    var popupOverlay = document.querySelector(".popup-overlay");
    popupOverlay.style.display = "flex";
}

function cerrarPopup() {
    var popupOverlay = document.querySelector(".popup-overlay");
    popupOverlay.style.display = "none";
}
