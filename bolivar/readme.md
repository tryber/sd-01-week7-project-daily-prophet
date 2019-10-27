





    
        <h1>The Daily Prophet</h1>
        <div class="block">
            <div class="block_img">
                <img id="symbol-image" src="daily-prophet-symbol.png" alt="The Daily Prophet Symbol">
                <div class="title_img">
                    <img id="title-image" src="daily-prophet-title.svg" alt="The Daily Prophet">
                    <figcaption>WIZARD WORLD'S BEGUILING BROADSHEET OF CHOICE</figcaption>
                </div>
            </div>
        </div>
    </header>
    <section class="first-section">
        <div class="first-section-block">
            <section class="first-section-block-A">
                <img id="moon-icon" src="full_moon.png">
                <article class="block-A">
                    <h2 class="text">Why werewolfs transform at full moon?</h2>
                    <div class="content-block-A">
                        <p>The professor <strong>Reginald J. Munk</strong>, master of Defence Against the Dark Arts, explain it in his book <strong>Moon Fluid</strong>. In this interview, the autor also revel some mysters about other influences that the
                            full moon has in magical's and muggle's world.</p>
                        <a>Read the full interview on Page 6</a>
                    </div>
                </article>
            </section>
            <section class="first-section-block-B">
                <img id="satan-log" src="satan-icon.png">
                <article class="block-B">
                    <h2 class="text-1">Occultism and Magic</h2>
                    <a>Page 3</a>
                </article>
            </section>
            <section class="first-section-block-C">
                <img id="beer-log" src="butterbeer.png">
                <article class="block-C">
                    <h2 class="text-2">Free butterbeers in Hogsmeade</h2>
                    <a>Page 2</a>
                </article>
            </section>
        </div>

    </section>
</body>

<script src="script.js"></script>

</html>


* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-size: 100%;
}

body {
    background-color: #FFF8EE;
}

.title,
.block_img,
.first-section,
.first-section-block,
.first-section-block-A,
.first-section-block-B,
.first-section-block-C,
.block-A {
    display: flex;
}

.title,
.block_img,
.first-section,
.first-section-block,
.first-section-block-A,
.first-section-block-B,
.first-section-block-C {
    justify-content: center;
}

.title,
.title_img,
.first-section,
.first-section-block,
.first-section-block-B,
.first-section-block-C {
    align-items: center;
}

.title,
.block_img,
.first-section {
    width: 100%;
    height: auto;
}

.block,
.first-section-block {
    width: 80%;
    height: auto;
}

.block {
    border-bottom: 5px solid #1c1915;
    border-top: 5px solid #1c1915;
    margin: 30px 0px;
}

.block_img {
    border-bottom: 2px solid #1c1915;
    border-top: 2px solid #1c1915;
    margin: 0.2% 0px;
}

header>h1 {
    display: none;
}

#title-image {
    width: 835px;
    height: 130px;
    position: relative;
    bottom: 25px;
}

#symbol-image {
    display: block;
    width: 155px;
    height: 150px;
    margin-right: 3%;
}

figcaption::after {
    content: "*";
    margin-left: 10px;
}

figcaption::before {
    content: "*";
    margin-right: 10px;
}

figcaption {
    font-weight: bold;
    font-size: 20px;
    text-align: center;
}

#moon-icon,
#satan-log,
#beer-log {
    height: 80%;
}

.first-section-block {
    height: 150px;
    border: 0.5px solid #1c1915;
}

.text {
    width: 80%;
    font-size: 100%;
    height: 90%;
    background-color: #1c1915;
    font-weight: 1000;
    font-family: "headline_onehplhs", "HelveticaNeue-Bold", "HelveticaNeue", "Roboto", Arial, Verdana, "Trebuchet MS", sans-serif;
    color: #FFF8EE;
    margin: 0% 2%;
}

.block-A {
    width: 100%;
    height: 100%;
}

.content-block-A>p {
    margin: 3% 2%;
    text-align: justify;
}

.content-block-A>a {
    margin: 3% 2%;
    text-align: justify;
    color: #fff8ee;
    background-color: #1c1915;
    text-align: right;
    font-family: 'Kreon', serif;
    width: 100%;
    line-height: 10%;
}

.block-B>a {
    margin: 3% 2%;
    text-align: justify;
    color: #fff8ee;
    background-color: #1c1915;
    text-align: right;
    font-family: 'Kreon', serif;
    width: 100%;
    line-height: 10%;
}

.block-C>a {
    margin: 3% 2%;
    text-align: justify;
    color: #fff8ee;
    background-color: #1c1915;
    text-align: right;
    font-family: 'Kreon', serif;
    width: 100%;
    line-height: 10%;
}

.first-section-block-A {
    width: 50%;
    height: 80%;
}

.first-section-block-B,
.first-section-block-C {
    width: 25%;
    height: 80%;
}

.text-1 {
    font-size: 160%;
    width: 80%;
    margin: 10% 10%;
    background-color: #1c1915;
    font-weight: 1000;
    font-family: "headline_onehplhs", "HelveticaNeue-Bold", "HelveticaNeue", "Roboto", Arial, Verdana, "Trebuchet MS", sans-serif;
    color: #FFF8EE;
}

.text-2 {
    font-size: 120%;
    width: 80%;
    margin: 10% 10%;
    background-color: #1c1915;
    font-weight: 1000;
    font-family: "headline_onehplhs", "HelveticaNeue-Bold", "HelveticaNeue", "Roboto", Arial, Verdana, "Trebuchet MS", sans-serif;
    color: #FFF8EE;
}

@media screen and (max-width: 1300px) {
    #title-image {
        width: 100%;
        height: auto;
        bottom: 10px;
    }
    #symbol-image {
        display: none;
    }
    .first-section-block-A {
        display: none;
    }
}

@media screen and (max-width: 780px) {
    figcaption {
        font-size: 15px;
    }
    .first-section-block-B {
        display: none;
    }
}

@media screen and (max-width: 590px) {
    figcaption {
        font-size: 10px;
    }
}

@media screen and (max-width: 400px) {
    #title-image {
        bottom: 8px;
    }
    figcaption {
        font-size: 7px;
    }
}