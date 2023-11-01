class ReviewBox extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <style>
            #box-review {
                background-color: pink;
                color: white;
                width: 400px;
                height: 400px;
                margin-right: 150px;
                margin-bottom: 20px;
                text-align: center;
                float: right;
            }
        </style>

        <div id="box-review">
            <h2>reviews</h2>
            <p>Dette er en review</p>
            <div id="review-1">
            </div>
        </div>

    `
    }
    
}

var reviews = [
    "Ben:Sykt gode kanelboller. 4/5",
    "Trine:Iskaffen til den prinsen!!! Elsker det. 5/5",
    "Berit:Perfekt sted å sitte når man venter på neste forlesning! Veldig god te. 5/5",
    "Karl:Litt mye støy, men ellers fint! 3/5",
]

var max = reviews.length;
var id1;
var id2;
var id3;

function shuffle(reviews) {
    reviews.sort(() => Math.random() - 0.5);
}

function randomJS() {
    shuffle(reviews);
    document.getElementById("review-1").innerHTML = reviews[0];
    document.getElementById("review-2").innerHTML = reviews[1];
    document.getElementById("review-3").innerHTML = reviews[2];
}

customElements.define('review-box', ReviewBox);