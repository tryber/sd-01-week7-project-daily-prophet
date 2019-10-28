let owlImage = document.querySelector("[class*='owl']");
var animationOwl;

var animarCoruja = function (event) {
    if ( window.screen.width >= 760 ) {
        clearTimeout(animationOwl);
        animationOwl = setTimeout(function() {
        owlImage.className="owl animation-appears";
        }, 3000);
    }
    else {
        clearTimeout(animationOwl);
        owlImage.className="owl halt-animation";
    }    


};

window.addEventListener("load", animarCoruja);
window.addEventListener("resize", animarCoruja);
    

let broom = document.querySelector('.broom');
broom.addEventListener("click", function() {
    this.style = "animation: broom 5s forwards ease-in;";
});

let sections = document.getElementsByTagName("section");
for (section of sections) {
   section.addEventListener("click", function() {
        this.style = "animation: section-effect 6s normal ease;";
    });
}