let array = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// *** Ordenar em ordem crescente
const ordemCrescente = () => {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] < array[j]) {
                let position = array[j];
                array[j] = array[i];
                array[i] = position;
            }
        }
    }
    return array
}

//*** Ordenar em ordem descrescente
const ordemDecrescente = () => {
    for (let i = 1; i < array.length; i++) {
        for (let j = 0; j < i; j++) {
            if (array[i] > array[j]) {
                let position = array[j];
                array[j] = array[i];
                array[i] = position;
            }
        }
    }
    return array
}

//*** Multiplição por o número seguinte

const mutiply = () => {
    const result = [];
    let index = array.length - 1
    console.log(index)
    for (let i = 0; i < array.length; i += 1) {
        if (i === index) {
            result.push(array[i] * 2);
        } else {
            let number = array[i] * array[i + 1];
            result.push(number);
        }
    }
    return result
}