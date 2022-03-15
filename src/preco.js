export class preco {


    static definirPreco(object, precoOriginal, price) {

        if (object.promotionStatus === true) {
            precoOriginal.innerHTML = `De: R$ ${object.price.productPrice},00`;
            const preco = object.price.productPromotionPrice.toFixed(2).replace(/[.]/g, ',');
            price.innerHTML = `Por: R$${preco}`

        } else {
            precoOriginal.innerHTML = ``;
            price.innerHTML = `R$ ${object.price.productPrice},00`;
        }
    }

}