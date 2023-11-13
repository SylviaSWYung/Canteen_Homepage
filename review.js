class Review extends HTMLElement {
    constructor() {
        super();
   
        this.innerHTML = `
        <head>
        <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
        </head>
        <style>
            .container{
                position: relative;
                width: 32rem;
                background: pink;
                align-items: center;
                justify-content: center;
                margin: auto 5.5rem 0rem 3rem;
            }
            
            .container .etter
            {
                display: none;
            }
            
            .container .takk {
                font-size: 25px;
            }
            
            .container .edit {
                font-size: 16px;
                position: absolute;
                right: 10px;
                top: 5px;
                cursor: pointer;
            }
            
            .container .edit:hover {
                color: gray;
            }
            
            .container .star-widget input{
                display: none;
            }
            
            .star-widget label {
                font-size: 40px;
                color: white;
                padding: 10px;
                float: right;
                transition: all 0.2s ease;
                width: 50px;
                
            }
            
            input:not(:checked) ~ label:hover,
            input:not(:checked) ~ label:hover ~ label {
                color: #fd4;
            }
            
            input:checked ~ label {
                color: #fd4;
            }
            
            input#rate5:checked ~ label {
                color: #fe7;
                text-shadow: 0 0 20px #952;
            }
            
            form .kommentar {
                height: 300px;
                width: 100%;
                overflow: hidden;
            }
            
            form .kommentar textarea {
                height: 100%;
                width: 100%;
                outline: none;
                border: 1px solid #333;
                padding: 10px;
                font-size: 17px;
                resize: both;
                margin-top: 30px;
                background: beige;
            }
            
            form .sendbtn {
                height: 33px;
                width: 100px;
                margin: 15px 0;
            }
            
            form .sendbtn button {
                height: 100%;
                width: 100%;
                border: 1px solid darkred;
                cursor: pointer;
                background-color: darkred;
                color: white;
            }
            
            form .sendbtn button:hover {
                background: rgb(95, 3, 3);
            }
            
            .navn {
                position: absolute;
                left: 30px;
                top: 10px;
            }
            
            .navn textarea {
                background: beige;
            }
            
            @media screen and (max-width: 1200px){
                .container{
                    width: 19rem;
                    height: 28rem;
                    margin: auto 3.5rem 0rem 2rem;
                }

                .star-widget label{
                    font-size: 30px;
                    width: 35px;
                    margin-top: 30px;
                    
                }

                form .kommentar {
                    height: 180px;
                }

                form .kommentar textarea {
                    margin-top: 10px;
                }

                .navn {
                    margin-bottom: 10px;
                }

            }
           
        </style>
        <div class="container">
            <div class="etter">
                <div class="takk">Takk for din tilbakemelding!</div>
                <div class="edit">Endre anmeldelse</div>
            </div>

        <div class="navn">
            <div>
                <textarea cols="20" placeholder="Navn"></textarea>
            </div>
            <div>
                <textarea cols="20" placeholder="Tittel"></textarea>
            </div>
        </div>
            <div class="star-widget">
                <input type="radio" name="rate" id="rate5">
                <label for="rate5" class="bx bxs-star"></label>
                <input type="radio" name="rate" id="rate4">
                <label for="rate4" class="bx bxs-star"></label>
                <input type="radio" name="rate" id="rate3">
                <label for="rate3" class="bx bxs-star"></label>
                <input type="radio" name="rate" id="rate2">
                <label for="rate2" class="bx bxs-star"></label>
                <input type="radio" name="rate" id="rate1">
                <label for="rate1" class="bx bxs-star"></label>
                <form action="#/">
                    <div class="kommentar">
                        <textarea cols="60" placeholder="Anmeldelse..."></textarea>
                    </div> 
                    <div class="sendbtn">
                        <button type="submit">Send inn</button>
                    </div>
                </form>

            </div>
        </div>
        `

        
const sendbtn = document.querySelector("button");
const etter = document.querySelector(".etter");
const widget = document.querySelector(".star-widget");
const editBtn = document.querySelector(".edit");
const navnTittel = document.querySelector(".navn");
sendbtn.onclick = ()=>{
    widget.style.display = "none";
    navnTittel.style.display = "none";
    etter.style.display = "block";
    editBtn.onclick = ()=>{
        widget.style.display = "block";
        navnTittel.style.display = "block";
        etter.style.display = "none";
        return false;
    }
}
           
        
        

    }
}

customElements.define('style-review', Review);