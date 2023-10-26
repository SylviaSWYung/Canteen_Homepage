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
                height: 5.1rem;
                text-align: center;
                box-shadow: 0 0 50px grey;
                top: 0;
                z-index: 1;
                transition: 0.5s ease-in-out;
            }

            .heleLogo{
                grid-column: 1;
                display: grid;
                grid-template-columns: 5rem auto;
                column-gap: 0;
                margin: 0;
            }
            
            #logo{
                max-width: 3.8rem;
                margin: 0.5rem auto auto 0.5rem;
                display: inline;
                grid-column: 1;
            }

            .heleLogo h1{
                display: inline;
                color: #800020;
                grid-column: 2;
                text-align: left;
                font-size: 1.7rem;
            }

            .oversikt{
                grid-column: 3;
                display: grid;
                margin: auto 1rem;
            }
            
            .oversikt a{
                text-decoration: none;
                color: black;
                font-size: 1.2rem;
                margin: auto;
            }
            
            #kafe{
                grid-column: 1;
            }
            
            #kantine{
                grid-column: 2;
            }
            
            #omOss{
                grid-column: 3;
            }
            
            #kontakt{
                grid-column: 4;
            }

            @media screen and (max-width:700px) {
                .navbar, .dropdown .dropbtn{
                    display: block;
                    height: 5.1rem;
                    align-items: center;
                }
                .heleLogo{
                    float: right;
                    display: none;
                }
            }
        </style>
        <nav class="navbar">
            <div class="heleLogo">
                <img id="logo" src="img/logo_1.png" alt="LogoMunchMeter">
                <h1><a href="homepage.html" style="color: inherit; text-decoration: none;">MUNCHMETER</a></h1>
                </div>
                <div class="oversikt">
                        <div class="dropdown">                                                  <!--Dropwdown for cafe-->
                            <button class="dropbtn" id="kafe">Kafé</button>
                            <div class="dropdown_innhold">
                                <a href="sitorealfag.html">SITO Realfag</a>
                                <a href="#">SITO Hangarn</a>
                                <a href="elbygget.html">SITO Elektro</a>
                            </div>
                        </div>            
                        <div class="dropdown">                                                  <!--Dropwdown for kantine-->
                            <button class="dropbtn" id="kantine">Kantine</button>
                            <div class="dropdown_innhold">
                                <a href="element.html">Element</a>
                                <a href="hangarn.html">Hangarn</a>
                                <a href="kjelhuset.html">Kjelhuset</a>
                            </div>
                        </div>
                    <a id="omOss" href="#">Om oss</a>
                    <a id="kontakt" href="#">Kontakt</a>
            </div>
        
        </nav>
        `

    }
}

customElements.define('main-header', Header);