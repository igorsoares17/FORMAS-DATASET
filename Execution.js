class Execution {

    constructor() {

        this.panel = document.getElementById("panel");
        this.images = document.querySelectorAll("figure");
        this.clicksListener();
    }

    clicksListener() {

        Array.from(this.images).forEach((item, index) => {

            item.addEventListener('click', event => {

                this.panel.innerHTML = ""
                this.panel.innerHTML +=  "CLIQUE NA FIGURA PARA SABER SEUS DADOS" + "<br>" + "Nome: " + event.currentTarget.dataset.form + "<br>";
                this.panel.innerHTML += "Lados: " + event.currentTarget.dataset.sides + "<br>";
                this.panel.innerHTML += "Cor: " + event.currentTarget.dataset.color + "<br>";
            })
        })
    }
}

let execution = new Execution();