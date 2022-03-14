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
        const img = document.createElement('img');
        const totalEstrelas = document.createElement('div')
        const p = document.createElement('p');
        const price = document.createElement('p');
        const buttonShop = document.createElement('button');

        div.id = 'produto'
        img.id = 'imgProduct';
        totalEstrelas.id = 'totalEstrelas'
        p.id = 'productInfo';
        price.id = "preco";
        buttonShop.id = 'botaoComprar';
        img.src = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${object.id}/Image.png`;
        p.innerHTML = object.productName;
        buttonShop.innerHTML = `Comprar`;

        div.appendChild(img);
        div.appendChild(totalEstrelas);

        const estrelasCheias = object.reviews;
        const estrelasVazias = 5 - object.reviews;

        for (let i = 0; i < estrelasCheias; i++) {
            const estrela = document.createElement('div')
            estrela.id = 'estrela-cheia';
            totalEstrelas.appendChild(estrela);
        }

        for (let i = 0; i < estrelasVazias; i++) {
            const estrela = document.createElement('div')
            estrela.id = 'estrela-vazia';
            totalEstrelas.appendChild(estrela);
        }

        div.appendChild(p);

        if (object.promotionStatus === true) {

            const precoOriginal = document.createElement('p');
            precoOriginal.id = 'precoOriginal'
            precoOriginal.innerHTML = `De: R$ ${object.price.productPrice},00`;

            const preco = object.price.productPromotionPrice.toFixed(2).replace(/[.]/g, ',');
            console.log(preco);
            price.innerHTML = `Por: R$${preco}`

            div.appendChild(precoOriginal);
            div.appendChild(price);

        } else {

            price.innerHTML = `R$ ${object.price.productPrice},00`;
            div.appendChild(price);
        }

        div.appendChild(buttonShop);
        areaProdutos.appendChild(div);

        return div;
    }

}




app.requisicao()

function estrelas(object) {


}
