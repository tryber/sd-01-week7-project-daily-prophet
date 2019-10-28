function searcElements() {
    var nimbus = document.getElementById("nimbus-img");
    var moon = document.getElementById("moon-img");
    var titles = document.getElementsByClassName("news-title");
    return [nimbus, moon, titles]
}

function addEvent() {
    var element = searcElements();
    var nimbus = element[0];
    nimbus.addEventListener("click", addAnimation);
    var moon = element[1];
    moon.addEventListener("mouseover", mouseOverAnimation);
    moon.addEventListener("mouseout", mouseOutAnimation);
    element[2][0].addEventListener("click", textAnimationI)
    element[2][1].addEventListener("click", textAnimationII)
    element[2][2].addEventListener("click", textAnimationIII)
    element[2][3].addEventListener("click", textAnimationIV)
    element[2][4].addEventListener("click", textAnimationV)
}


function addAnimation() {
    var element = searcElements();
    var nimbus = element[0];
    nimbus.style.position = "relative";
    nimbus.style.animationName = "flying";
    nimbus.style.animationDuration = "20s";
    nimbus.style.animationIterationCount = "infinite";
    nimbus.style.transition = "left 5s"
}

function mouseOverAnimation() {
    var element = searcElements();
    var moon = element[1];
    moon.style.animationPlayState = "paused";
}

function mouseOutAnimation() {
    var element = searcElements();
    var moon = element[1];
    moon.style.animationPlayState = "running";
}

function textAnimationI() {
    var element = searcElements();
    element[2][0].style.animationName = "article-title";
    element[2][0].style.animationDuration = "4s";
}

function textAnimationII() {
    var element = searcElements();
    element[2][1].style.animationName = "article-title";
    element[2][1].style.animationDuration = "4s";

}

function textAnimationIII() {
    var element = searcElements();
    element[2][2].style.animationName = "article-title";
    element[2][2].style.animationDuration = "4s";

}

function textAnimationIV() {
    var element = searcElements();
    element[2][3].style.animationName = "article-title";
    element[2][3].style.animationDuration = "4s";

}

function textAnimationV() {
    var element = searcElements();
    element[2][4].style.animationName = "article-title";
    element[2][4].style.animationDuration = "4s";

}

window.onload = function() {
    searcElements();
    addEvent();
}