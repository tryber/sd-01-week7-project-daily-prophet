function clickNimbus () {
    let selectNimbus = document.querySelector(".nimbus")
    selectNimbus.addEventListener("click", function(){
        selectNimbus.style.animation = "nimbus 5s infinite";
    })
}
clickNimbus ()
