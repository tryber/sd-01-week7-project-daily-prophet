let animaçaoVassoura = document.getElementById('nimbus');

animaçaoVassoura.addEventListener('click', function() {
    animaçaoVassoura.className = 'nimbus'
})

let paragrafo = document.getElementsByClassName('configuraçao-de-texto');
for (let recebe of paragrafo) {
    recebe.addEventListener('click', function() {
            recebe.style.animationName = 'article';
    })
}