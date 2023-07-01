document.addEventListener("DOMContentLoaded", function () {
    const navbarContainer = document.querySelector("#navbar-container");

    fetch("layouts/navbar.html")
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        });
});