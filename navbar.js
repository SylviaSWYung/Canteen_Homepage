class Header extends HTMLElement {
    constructor () {
        super();
    }

    connectedCallBack () {
        this.innerHTML = `
        <nav>
            
        </nav>
        `
    }
}