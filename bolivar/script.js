window.onload = function() {
    changeWordSize(searchByQuerySelector("#figcaption"), searchByQuerySelector("#header-div-layer-3"), 0.015)
    changeWordSize(searchByQuerySelector(".wicca-text"), searchByQuerySelector("#section-one"), 0.015);
    changeWordSize(searchByQuerySelector("#article1-title"), searchByQuerySelector("#section-one"), 0.03);
    changeWordSize(searchByQuerySelector(".news-title"), searchByQuerySelector("#section-two"), 0.1);
    changeWordSize(searchByQuerySelector(".news-text"), searchByQuerySelector("#section-two"), 0.013);
    changeWordSize(searchByQuerySelector(".aside-title"), searchByQuerySelector("#aside-section"), 0.02);
    changeHeight(searchByQuerySelector("#florest-img"), searchByQuerySelector("#section-two"), 0.15);
    changeHeight(searchByQuerySelector(".star-img"), searchByQuerySelector("#section-one"), 0.03);
    changeHeight(searchByQuerySelector(".wicca-img"), searchByQuerySelector("#section-one"), 0.08);
    changeHeight(searchByQuerySelector("#nimbus-img"), searchByQuerySelector("#aside-section"), 0.08);
    changeHeight(searchByQuerySelector("#facebook-img"), searchByQuerySelector("#aside-section"), 0.05);
    changeHeight(searchByQuerySelector("#insta-img"), searchByQuerySelector("#aside-section"), 0.05);
    changeHeight(searchByQuerySelector("#linkdin-img"), searchByQuerySelector("#aside-section"), 0.05);
    changeHeight(searchByQuerySelector("#moon-img"), searchByQuerySelector("#aside-section"), 0.05);
    addEvent();
}

window.onresize = function() {
    changeWordSize(searchByQuerySelector("#figcaption"), searchByQuerySelector("#header-div-layer-3"), 0.015)
    changeWordSize(searchByQuerySelector(".wicca-text"), searchByQuerySelector("#section-one"), 0.015);
    changeWordSize(searchByQuerySelector("#article1-title"), searchByQuerySelector("#section-one"), 0.03);
    changeWordSize(searchByQuerySelector(".news-title"), searchByQuerySelector("#section-two"), 0.1);
    changeWordSize(searchByQuerySelector(".news-text"), searchByQuerySelector("#section-two"), 0.013);
    changeWordSize(searchByQuerySelector(".aside-title"), searchByQuerySelector("#aside-section"), 0.02);
    changeHeight(searchByQuerySelector("#florest-img"), searchByQuerySelector("#section-two"), 0.15);
    changeHeight(searchByQuerySelector(".star-img"), searchByQuerySelector("#section-one"), 0.03);
    changeHeight(searchByQuerySelector(".wicca-img"), searchByQuerySelector("#section-one"), 0.08);
    changeHeight(searchByQuerySelector("#nimbus-img"), searchByQuerySelector("#aside-section"), 0.08);
    changeHeight(searchByQuerySelector("#facebook-img"), searchByQuerySelector("#aside-section"), 0.05);
    changeHeight(searchByQuerySelector("#insta-img"), searchByQuerySelector("#aside-section"), 0.05);
    changeHeight(searchByQuerySelector("#linkdin-img"), searchByQuerySelector("#aside-section"), 0.05);
    changeHeight(searchByQuerySelector("#moon-img"), searchByQuerySelector("#aside-section"), 0.05);
}



function searchByQuerySelector(element_identifier) {
    return document.querySelectorAll(element_identifier);
}

function changeWordSize(element_identifier, section_identifier, relative_size) {
    for (i = 0; i < element_identifier.length; i++) {
        element_identifier[i].style.fontSize = `${section_identifier[0].clientWidth*relative_size}px`;
    }
}

function changeHeight(element_identifier, section_identifier, relative_size) {
    for (i = 0; i < element_identifier.length; i++) {
        element_identifier[i].style.height = `${section_identifier[0].clientWidth*relative_size}px`;
    }
}

function addEvent() {
    searchByQuerySelector("#nimbus-img")[0].addEventListener("click", flyNimbus)
}

function flyNimbus() {
    searchByQuerySelector("#nimbus-img")[0].style.animationPlayState = "running";
}