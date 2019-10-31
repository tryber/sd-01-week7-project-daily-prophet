let selectNimbus = document.querySelector(".nimbus")

function clickNimbus () {
    selectNimbus.addEventListener("click", function(){
        selectNimbus.style.animationPlayState = "running";
    })
}

function pausedNimbus () {
    selectNimbus.addEventListener("dblclick", function(){
        selectNimbus.style.animationPlayState = "paused";
    })
}

clickNimbus ()
pausedNimbus ()
