let owlImage = document.querySelector(".owl");
window.addEventListener("load", function() {
    setTimeout(function() {
      owlImage.className="owl animation-appears";
    }, 3000);
});

let broom = document.querySelector('.broom');
broom.addEventListener("click", function() {
    this.style = "animation: broom 5s ease-in;";
});