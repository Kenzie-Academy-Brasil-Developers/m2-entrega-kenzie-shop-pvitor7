export class estrelas {

    static estrelaCheia(estrelasCheias, totalEstrelas) {

        for (let i = 0; i < estrelasCheias; i++) {
            const estrela = document.createElement('div')
            estrela.id = 'estrela-cheia';
            totalEstrelas.appendChild(estrela);
        }
        return totalEstrelas;
    }

    static estrelaVazia(estrelasVazias, totalEstrelas) {
        for (let i = 0; i < estrelasVazias; i++) {
            const estrela = document.createElement('div')
            estrela.id = 'estrela-vazia';
            totalEstrelas.appendChild(estrela);
        }
        return totalEstrelas;
    }
}