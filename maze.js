window.onload = function() {
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;

    }
};

function overBoundary() {
    var boundaries = document.querySelectorAll("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].classList.add("youlose");
    }
}
