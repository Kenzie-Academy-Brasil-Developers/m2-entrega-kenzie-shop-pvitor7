import {estrelas} from "./estrelas.js"
import { preco } from "./preco.js";


export class Dom{
    
    static criarElementosHTML(object) {

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

    estrelas.estrelaCheia(estrelasCheias, totalEstrelas)
    estrelas.estrelaVazia(estrelasVazias, totalEstrelas)

    preco.definirPreco(object, precoOriginal, price)

    return areaProdutos;
    }
}


