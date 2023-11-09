class ReviewBox extends HTMLElement {
    constructor() {
        super();

    
        const selectedReviews = getRandomReviews(5);

        this.innerHTML = `
        <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        </head>
        <style>
            .box-review {
                background-color: pink;
                color: white;
                width: 500px;
                height: 400px;
                margin-right: 150px;
                margin-bottom: 20px;
                text-align: center;
                float: right;
                overflow-x: hidden;
                overflow-y: auto;
            }

            @media screen and (max-width: 800px){
                .box-review {
                    width: 300px;
                    height: 400px;
                    margin: 3rem 10rem 0rem 2rem;
                }
                .review_bobler {
                    padding: 4px 3px;
                    text-align: center;
                    border-radius: 20px;
                    width: 235px;
                    margin: 20px 15px;
                }
                
                .name {
                    font-size: 20px;
                    margin-bottom: 5px;
                    margin-top: 3px;
                }
                
                .review_bobler-container {
                    max-height: 100%;
                    overflow-y: auto;
                    margin: 10px 10px;
                }
            
            }
        </style>

        <div class="box-review">
            <h2>
            <i class="fa fa-star-o"></i>
             reviews 
            <i class="fa fa-star-o"></i>
            </h2>
        
            <div class="review_bobler-container">
                ${selectedReviews.map((review) => `
                    <div class="review_bobler">
                        <div class="name">${review.split(":")[0]}</div>
                        <p>${review.split(":")[1]}</p>
                    </div>
                `).join('')}
            </div>
        </div>
        </div>`;
    }
}

function getRandomReviews(count) {
    const shuffledReviews = [...reviews].sort(() => 0.5 - Math.random());
    return shuffledReviews.slice(0, count);
}

let reviews = [
    'Ben:<div class="stars"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><i class="fa fa-star-o"></i></div> Sykt gode kanelboller.',
    'Trine:<div class="stars"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"><span class="fa fa-star checked"></div> Iskaffen til den prisen!!! Elsker det.',
    'Berit:<div class="stars"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"><span class="fa fa-star checked"></div> Perfekt sted å sitte når man venter på neste forlesning! Veldig god te.',
    'Karl:<div class="stars"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div> Litt mye støy, men ellers fint!',
    'Asgeir:<div class="stars"><span class="fa fa-star checked"></span><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i><i class="fa fa-star-o"></i></div> Altfor lang kø for å kjøpe en kopp kaffe, rakk ikke se menyen ved skranken engang før jeg måtte løpe videre'
];

customElements.define('review-box', ReviewBox);