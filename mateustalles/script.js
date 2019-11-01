window.addEventListener("load", animate);
window.addEventListener("resize", animate);

let broom = document.querySelector(".broom");
let articles = document.getElementsByTagName("article");

function putBroomStyle() {
    if ( window.innerWidth >= 760 ) {
        broom.addEventListener("click", putBroomStyleBig )
    }
    else {
        broom.addEventListener("click", putBroomStyleSmall )
    }
}

function putBroomStyleBig() {
    broom.style = "animation: broom 5s forwards ease-in;";
    broom.classList.remove("halt-animation");
};

function putBroomStyleSmall () {
    broom.style = "animation: broom 5s steps(10, end) forwards"
    broom.classList.remove("halt-animation")
}

function animate() {
    putBroomStyle()
    for (let article of articles) {
        article.className = ""
    if ( window.innerWidth >= 760 ) {
        article.addEventListener("click", function(e, size = "big") {
            switch (this.className) {
                case "" :
                    this.className = `article-animation-${size}`
                    break
                case `article-animation-${size}` :
                    this.className = "halt-animation"
                    break
                case "halt-animation" :
                    this.className = `article-animation-${size}`
                    break
                }
            })
        }    
    else if (window.innerWidth < 760) {
        article.addEventListener("click", function(e, size = "small") {
            switch (this.className) {
                case "" :
                    this.className = `article-animation-${size}`
                    break
                case `article-animation-${size}` :
                    this.className = "halt-animation"
                    break
                case "halt-animation" :
                    this.className = `article-animation-${size}`
                    break
                }
            })
        }    
    }
}
