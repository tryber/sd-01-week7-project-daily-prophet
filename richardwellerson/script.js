(function () {
    const selectNimbus = document.querySelector(".nimbus");
    const paragraphToGrow = document.querySelectorAll(".grow-paragraph");
    selectNimbus.addEventListener("click", () => selectNimbus.style.animationPlayState = "running");
    selectNimbus.addEventListener("dblclick", () => selectNimbus.style.animationPlayState = "paused");
    for(let paragraph = 0; paragraph < paragraphToGrow.length; paragraph++) {
        paragraphToGrow[paragraph].addEventListener('click', () => paragraphToGrow[paragraph].style.animationPlayState = "running");
    };
}())
