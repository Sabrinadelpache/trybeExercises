const { expect, test } = require('@jest/globals');
const { findUserById, getUserName } = require('./users');

describe('Test users functionality', () => {
    test.skip('Find name by id = 4', () => {
        return getUserName(4).then(name => {
            expect(name).toBe('Mark')
        })
    });
    test.skip('Does not find name, because id does not exist', () => {
        return getUserName(10).catch(error => {
            expect(error.error).toBe("User with 10 not found.")
        })
    });
    test.skip('Does not find name, because id does not exist a/a', async () => {
        try {
        await getUserName(10);
        } catch(error) {
            expect(error.error).toBe("User with 10 not found.")
        }
    });
});