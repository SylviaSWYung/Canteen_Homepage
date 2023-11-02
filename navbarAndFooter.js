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
                height: 100%;
                grid-template-columns: repeat(4, 1fr);
            }
            
            .oversikt a{
                text-decoration: none;
                color: black;
                font-size: 1.2rem;
                margin: auto;
            }
            
            #kafe{
                grid-column: 1;
                width: 100%;
            }
            
            #kantine{
                grid-column: 2;
                width: 100%;
            }
            
            #omOss{
                grid-column: 3;
            }
            
            #kontakt{
                grid-column: 4;
            }

            #omOss, #kontakt{
                height: 100%; 
                display: flex; 
                justify-content: center; 
                align-items: center; 
                width: 100%;
            }

            .dropdown {
                float: right;
                overflow: hidden;
                margin: auto; 
                width: 100%; 
                height: 100%; 
            }
            
            .dropdown .dropbtn {
                border: none;
                color: black;
                background-color: inherit;
                font-family: inherit;
                margin: 0;
                font-size: 1.2rem;
                height: 100%;
            }
            
            .dropdown_innhold {
                display: none;
                position: absolute;
                background-color: #FDF0D5;
                min-width: 160px;
                z-index: 1;
            }
            
            .dropdown_innhold a {
                float: none;
                color: black;
                padding: 12px 16px;
                text-decoration: none;
                display: block;
                text-align: left;
                font-size: 1rem;
                font-family: inherit;
            }
            
            #omOss:hover, #kontakt:hover, .dropdown:hover .dropbtn{
                background-color: #800020;
                color: white;
            }
            
            .dropdown_innhold a:hover {
                background-color: #DEB1B1;
                color: black;
            }
            
            .dropdown:hover .dropdown_innhold {
                display: block;
            }
            
            @media screen and (max-width:700px) {
                .navbar, .dropdown .dropbtn, #omOss, #kontakt{
                    display: block flex;
                    height: 5.1rem;
                    align-items: center;
                    justify-content: center;
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
                        <div class="dropdown">                                                  
                            <button class="dropbtn" id="kafe">Kafé</button>
                            <div class="dropdown_innhold">
                                <a href="sitorealfag.html">SITO Realfag</a>
                                <a href="cafehangarn.html">SITO Hangarn</a>
                                <a href="elbygget.html">SITO Elektro</a>
                            </div>
                        </div>            
                        <div class="dropdown">                                                  
                            <button class="dropbtn" id="kantine">Kantine</button>
                            <div class="dropdown_innhold">
                                <a href="element.html">Element</a>
                                <a href="hangarn.html">Hangarn</a>
                                <a href="kjelhuset.html">Kjelhuset</a>
                            </div>
                        </div>
                    <a id="omOss" href="omoss.html">Om oss</a>
                    <a id="kontakt" href="kontakt.html">Kontakt</a>
            </div>
        </nav>
        `

    }
}

class Foot extends HTMLElement {
    constructor() {
        super(); 
        this.innerHTML = `
        <style>
            footer{
                background-color: #800020;
                color: white;
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                padding: 2rem;
            }
            .omOssFooter a{
                    color: white;
                    background-color: transparent;
                    text-decoration: none;
            }
            .omOssFooter a:hover {
                color: white;
                background-color: transparent;
                text-decoration: underline;
            }
            .sosialeMedier a {
                color: white;
                text-decoration: none; /* Optional: removes the underline from links */
            }
            .sosialeMedier a:hover {
                color: white;
                background-color: transparent;
                text-decoration: underline;
            }
            .kontaktFooter a {
                color: white;
                background-color: transparent;
                text-decoration: none;
            }
            .kontaktFooter a:hover {
                color: white;
                background-color: transparent;
                text-decoration: underline;
            }

        </style>

       
        
<footer>
    <div class="omOssFooter">
        <h4>Om oss</h4>
        <a href="omoss.html">Les mer om oss</a>
    </div>
    <div class="kontaktFooter">
        <h4>Kontakt</h4>
        Telefon: +47 123 456 789<br>
        E-post: kontakt@kafe.no<br>
        <a href="Kontakt.html">Kontakt oss</a>
    </div>
    <div class="sosialeMedier">
        <h4>Følg oss</h4>
        <a href="https://www.facebook.com/profile.php?id=100094552324836">Facebook</a> | <a href="https://www.instagram.com/munch.meter/">Instagram</a> | <a href="https://twitter.com/elonmusk">Twitter</a>
    </div>
    <div class="meldePa">
        <h4>Nyhetsbrev</h4>
        Meld deg på vårt nyhetsbrev for de siste oppdateringene!<br>
        <input type="email" placeholder="E-postadresse">
        <button>Abonner</button>
    </div>
</footer>

        
        `
    }
}

customElements.define('main-footer', Foot);
customElements.define('main-header', Header);