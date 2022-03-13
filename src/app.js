const areaProdutos = document.getElementById('produtos');

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

        const div = document.createElement('div');
        div.id = 'produto'
        
        const img = document.createElement('img');
        const p = document.createElement('p');
        const price = document.createElement('p');
        const buttonShop = document.createElement('button');

        img.id = 'imgProduct';
        p.id = 'productInfo';
        price.id = "preco";
        buttonShop.id = 'botaoComprar';
        img.style = `background-image: url(https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${object.id}/Image.png)`;
        p.innerHTML = object.productName;
        price.innerHTML = `R$ ${object.price.productPrice},00`;
        buttonShop.innerHTML = `Comprar`;

        div.appendChild(img);
        div.appendChild(p);
        div.appendChild(price);
        div.appendChild(buttonShop);

        areaProdutos.appendChild(div);

        return div;
    }

}

app.requisicao()

