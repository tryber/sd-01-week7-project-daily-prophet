function clickAnimationBloom() {   
    const bloomAnimation = document.querySelector("#magic-bloom-flying");
    bloomAnimation.addEventListener("click", () => bloomAnimation.style.animationPlayState = "running");
    bloomAnimation.addEventListener("dblclick", () => bloomAnimation.style.animationPlayState = "paused");
}

function clickAnimationParagraph() {
    const paragraphAnimation = document.querySelectorAll(".paragraph-animation");
    for (let indice = 0; indice < paragraphAnimation.length; indice++) {
        paragraphAnimation[indice].addEventListener('click', () => paragraphAnimation[indice].style.animationPlayState = "running");
    };
}

clickAnimationBloom();
clickAnimationParagraph();
