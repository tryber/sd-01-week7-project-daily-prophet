window.addEventListener("load", animate);
window.addEventListener("resize", animate);

let broom = document.querySelector('.broom');
let articles = document.getElementsByTagName("article");

function putBroomStyle() {
    this.style = "animation: broom 5s forwards ease-in;";
    this.classList.remove("halt-animation");
};

function putArticleStyle() {
    if ( this.classList.contains("article-animation") ) {
        this.classList.add("halt-animation");
    }
    else {
        this.classList.remove("halt-animation");
        this.classList.add("article-animation");
    }
};

function animate() {
    if ( window.innerWidth >= 760 ) {
            broom.addEventListener("click", putBroomStyle);
            for (article of articles) {
                article.addEventListener("click", putArticleStyle);
        }
    }
    else if ( window.innerWidth < 760) {
        broom.removeEventListener("click", putBroomStyle);
        broom.className = "broom halt-animation";
        for (article of articles) {
            article.removeEventListener("click", putArticleStyle);
            article.className = "halt-animation";
        }
    }    
};