let animaçaoVassoura = document.getElementById('nimbus');

animaçaoVassoura.addEventListener('click', function() {
    animaçaoVassoura.className = 'nimbus'
})

let artigo = document.getElementsByTagName('article')[0];
artigo.addEventListener('click', function() {
    if (artigo.classList.contains('artigo')) {
        artigo.classList.remove('artigo');
    }
    else {
    artigo.className = "artigo"
    }
})