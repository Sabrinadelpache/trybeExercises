const longestWord = ((phrase) => {
    let arrayWords = phrase.split(' ');
    let longerWord = '';

    for (i in arrayWords) {
        longerWord = arrayWords[0];
        if (longerWord < arrayWords[i]) {
            longerWord = arrayWords[i]
        }
    }
    return longerWord;
})
