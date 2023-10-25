class Header extends HTMLElement {
    constructor() {
        super();
        this.innerHTML = `
        <style>
            .navbar{
                background-color: #FDF0D5;
                position: fixed;
                display: grid;
                grid-template-columns: repeat(auto-fit, 1fr);
                width: 100%;
                text-align: center;
                box-shadow: 0 0 50px grey;
                top: 0;
                z-index: 1;
                transition: 0.5s ease-in-out;
            }
        </style>
        <nav>
            <div class="heleLogo">
                <img id="logo" src="img/logo_1.png" alt="LogoMunchMeter">
                <h1><a href="#" style="color: inherit; text-decoration: none;">MUNCHMETER</a></h1>
                </div>
                <div class="oversikt">
                        <div class="dropdown">                                                  <!--Dropwdown for cafe-->
                            <button class="dropbtn" id="kafe">Kafé</button>
                            <div class="dropdown_innhold">
                                <a href="#">SITO Realfag</a>
                                <a href="#">SITO Hangarn</a>
                                <a href="#">SITO Elektro</a>
                            </div>
                        </div>            
                        <div class="dropdown">                                                  <!--Dropwdown for kantine-->
                            <button class="dropbtn" id="kantine">Kantine</button>
                            <div class="dropdown_innhold">
                                <a href="#">Element</a>
                                <a href="#">Hangarn</a>
                                <a href="#">Kjelhuset</a>
                            </div>
                        </div>
                    <a id="omOss" href="#">Om oss</a>
                    <a id="kontakt" href="#">Kontakt</a>
            </div>
        
        </nav>
        `

    }

    connectedCallBack() {

    }
}

customElements.define('main-header', Header);