window.onload = function() {
    changeWordSize(searchByQuerySelector("#figcaption"), searchByQuerySelector("#header-div-layer-3"), 0.015)
    changeWordSize(searchByQuerySelector(".wicca-text"), searchByQuerySelector("#section-one"), 0.015);
    changeWordSize(searchByQuerySelector("#article1-title"), searchByQuerySelector("#section-one"), 0.03);
    changeWordSize(searchByQuerySelector(".news-title"), searchByQuerySelector("#section-two"), 0.1);
    changeWordSize(searchByQuerySelector(".news-text"), searchByQuerySelector("#section-two"), 0.013);
    changeHeight(searchByQuerySelector("#florest-img"), searchByQuerySelector("#section-two"), 0.15);
    changeHeight(searchByQuerySelector("#tree-img"), searchByQuerySelector("#section-two"), 0.1);
    changeHeight(searchByQuerySelector(".star-img"), searchByQuerySelector("#section-one"), 0.2);
    changeHeight(searchByQuerySelector(".wicca-img"), searchByQuerySelector("#section-one"), 0.7);
}

window.onresize = function() {
    changeWordSize(searchByQuerySelector("#figcaption"), searchByQuerySelector("#header-div-layer-3"), 0.015)
    changeWordSize(searchByQuerySelector(".wicca-text"), searchByQuerySelector("#section-one"), 0.015);
    changeWordSize(searchByQuerySelector("#article1-title"), searchByQuerySelector("#section-one"), 0.03);
    changeWordSize(searchByQuerySelector(".news-title"), searchByQuerySelector("#section-two"), 0.1);
    changeWordSize(searchByQuerySelector(".news-text"), searchByQuerySelector("#section-two"), 0.013);
    changeHeight(searchByQuerySelector("#florest-img"), searchByQuerySelector("#section-two"), 0.15);
    changeHeight(searchByQuerySelector("#tree-img"), searchByQuerySelector("#section-two"), 0.1);
    changeHeight(searchByQuerySelector(".star-img"), searchByQuerySelector("#section-one"), 0.2);
    changeHeight(searchByQuerySelector(".wicca-img"), searchByQuerySelector("#section-one"), 0.7);
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
        element_identifier[i].style.height = `${section_identifier[0].clientHeight*relative_size}px`;
    }
}