// Algoritmo de ordenação Bubble Sort
const oddsAndEvens = [13, 3, 4, 10, 7, 2]
const result = () => {
    for (let i = 1; i < oddsAndEvens.length; i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (oddsAndEvens[i] < oddsAndEvens[j]) {
                let aux = oddsAndEvens[i];
                oddsAndEvens[i] = oddsAndEvens[j]
                oddsAndEvens[j] = aux;
            }
        }
    }
    return oddsAndEvens
}

// Uso do método sort para ordenar o array oddsAndEvens
const result1 = () => {
    return oddsAndEvens.sort((a, b) => a - b)
}
