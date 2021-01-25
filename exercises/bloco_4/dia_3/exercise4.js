/*n = 5

  *
  **
 ****
******
*/

function asterisk(n) {
    if (n > 1) {
        for (let i = 0; i < n - 2; i += 1) {
            let symbol = '';
            for (let k = n - 1; k > 0; k -= 1) {
                if (k === n){
                    symbol += '*'
                }
                symbol += ' ';
            }
           for (let j = 0; j <= i; j += 1) {
               symbol += '*';
            }
            console.log(symbol);
        }
    } else {
        console.log('Valor < 1 ');
    }
}
asterisk(5);