function animarVassoura() {
    let vassoura = document.querySelector(".vassoura")
    vassoura.style.animation = "vassourinha 5s infinite "
    vassoura.style.transform = "translateX(50px) scaleY(2) skewY(20deg)"
}
function larguraDaTela() {
    let largura = window.outerWidth
    let cabecalho = document.getElementById("cabecalho")
    let vassoura = document.querySelector(".vassoura")
    if (largura < 760) {
        cabecalho.src = "imagem/dailymobile.png"
    }else {
        cabecalho.src="imagem/profetadiario.png"
    }
    
}  
