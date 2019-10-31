(function () {
    const selectNimbus = document.querySelector(".nimbus")
    const paragraphToGrow = document.querySelectorAll(".grow-paragraph")
    selectNimbus.addEventListener("click", function(){
        selectNimbus.style.animationPlayState = "running";
    })
    selectNimbus.addEventListener("dblclick", function(){
        selectNimbus.style.animationPlayState = "paused";
    })
    for(let i = 0; i < paragraphToGrow.length; i++) {
        paragraphToGrow[i].addEventListener('click', function(){
            paragraphToGrow[i].style.animationPlayState = "running";
        })
    }
}())
