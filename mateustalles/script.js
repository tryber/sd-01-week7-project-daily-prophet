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

//let sections = document.getElementsByTagName("section");
//for (section of sections) {
  //  section.addEventListener("click", function() {
    //    this.style = "animation: section-effect 6s ease;";
    //});
//}