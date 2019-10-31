const selectNimbus = document.querySelector(".nimbus")
const paragraphToGrow = document.querySelectorAll(".grow-paragraph")


(function() {
    selectNimbus.addEventListener("click", function(){
        selectNimbus.style.animationPlayState = "running";
    })
}());

(function() {
    selectNimbus.addEventListener("dblclick", function(){
        selectNimbus.style.animationPlayState = "paused";
    })
}());

(function() {
    for(let i = 0; i < paragraphToGrow.length; i++) {
        paragraphToGrow[i].addEventListener('click', function(){
            paragraphToGrow[i].style.animationPlayState = "running";
        })
    }
}());

