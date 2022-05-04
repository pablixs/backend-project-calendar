let barButton = document.getElementById('bar-btn');
let configButton = document.getElementById('config-btn');

barButton.onclick = function() {
    let menuShow = document.getElementById('menu-show');
    menuShow.classList.toggle("show")
    barButton.classList.toggle("rotate")
};

configButton.onclick = function() {
    configButton.classList.toggle("rotate")
}

