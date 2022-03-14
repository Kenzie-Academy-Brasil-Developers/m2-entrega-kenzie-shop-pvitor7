
export function criarElementosHTML(object) {

    const areaProdutos = document.getElementById('produtos');

    const div = document.createElement('div');
    const img = document.createElement('img');
    const totalEstrelas = document.createElement('div')
    const estrelasCheias = object.reviews;
    const estrelasVazias = 5 - object.reviews;
    const p = document.createElement('p');
    const precoOriginal = document.createElement('p');
    const price = document.createElement('p');
    const buttonShop = document.createElement('button');

    div.id = 'produto'
    img.id = 'imgProduct';
    totalEstrelas.id = 'totalEstrelas'
    p.id = 'productInfo';
    price.id = "preco";
    precoOriginal.id = 'precoOriginal'
    buttonShop.id = 'botaoComprar';
    img.src = `https://kenzie-academy-brasil.gitlab.io/fullstack/frontend/modulo2/sprint3/img/consumindo-api-produtos/${object.id}/Image.png`;
    p.innerHTML = object.productName;
    buttonShop.innerHTML = `Comprar`;

    div.appendChild(img);
    div.appendChild(totalEstrelas);
    div.appendChild(p);
    div.appendChild(precoOriginal);
    div.appendChild(price);
    div.appendChild(buttonShop);
    areaProdutos.appendChild(div);

    estrelaCheia(estrelasCheias, totalEstrelas)
    estrelaVazia(estrelasVazias, totalEstrelas)

    definirPreco(object, precoOriginal, price)

    return areaProdutos;
}



function estrelaCheia(estrelasCheias, totalEstrelas) {

    for (let i = 0; i < estrelasCheias; i++) {
        const estrela = document.createElement('div')
        estrela.id = 'estrela-cheia';
        totalEstrelas.appendChild(estrela);
    }
    return totalEstrelas;
}

function estrelaVazia(estrelasVazias, totalEstrelas) {
    for (let i = 0; i < estrelasVazias; i++) {
        const estrela = document.createElement('div')
        estrela.id = 'estrela-vazia';
        totalEstrelas.appendChild(estrela);
    }
    return totalEstrelas;
}


function definirPreco(object, precoOriginal, price) {

    if (object.promotionStatus === true) {
        precoOriginal.innerHTML = `De: R$ ${object.price.productPrice},00`;
        const preco = object.price.productPromotionPrice.toFixed(2).replace(/[.]/g, ',');
        price.innerHTML = `Por: R$${preco}`

    } else {
        precoOriginal.innerHTML = ``;
        price.innerHTML = `R$ ${object.price.productPrice},00`;
    }
}