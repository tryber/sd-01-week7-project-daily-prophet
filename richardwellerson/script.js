function clickNimbus () {
    let selectNimbus = document.querySelector(".nimbus")
    selectNimbus.addEventListener("click", function(){
        selectNimbus.style.animation = "nimbus 5s infinite";
        selectNimbus.style.animationPlayState = "running";
    })
}
clickNimbus ()

function pausedNimbus () {
    let selectNimbus = document.querySelector(".nimbus")
    selectNimbus.addEventListener("dblclick", function(){
        selectNimbus.style.animationPlayState = "paused";
    })
}
clickNimbus ()
pausedNimbus ()
