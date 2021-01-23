function asterisk(n) {
    if (n > 1) {
        for (let i = 0; i < n; i += 1) {
            let symbol = '';
            for(let k = n; k <= n; k -= 1) {
                symbol += ' ';
            }
            for (let j = 0; j <= i; j += 1) {
                symbol += '*';
            }
            console.log(symbol);
        }
    }   else {
        console.log('Valor < 1 ');
        }
}
asterisk(5);