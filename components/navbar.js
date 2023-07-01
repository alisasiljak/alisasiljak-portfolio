document.addEventListener("DOMContentLoaded", function () {
    var navbarContainer = document.querySelector("#navbar-container");

    fetch("navbar.html")
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        });
});
