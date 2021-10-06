const uppercase = require('./upperCase');

test.skip('upper ', (done) =>{
    uppercase('casa', (strg) => {
        expect(strg).toBe('CASA')
    })
    done();
});