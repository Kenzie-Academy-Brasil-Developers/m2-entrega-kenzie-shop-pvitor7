import {Dom} from "./template.js"

class app {

    static async requisicao() {

        await fetch('https://m2-kenzie-shop.herokuapp.com/products')
            .then(response => response.json())
            .then((data) => {
                for (let i = 0; i < data.products.length; i++) {
                    this.template(data.products[i]);
                }
            })
    }

    static template(object) {

        Dom.criarElementosHTML(object);
    }
}

app.requisicao()
