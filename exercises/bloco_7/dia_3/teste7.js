const assert = require('assert');
const wordLengths = (array) => {return array}

const words = ['sun', 'potato', 'roundabout', 'pizza'];
const expected = [3, 6, 10, 5];
const expected = ['sun', 'potato', 'roundabout', 'pizza'];

assert.strictEqual(typeof wordLengths, 'function');
const output = wordLengths(words);
assert.deepStrictEqual(output, expected);

// está contando o número de letras das palavras