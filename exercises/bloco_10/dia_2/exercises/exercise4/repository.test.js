const getRepos = require('./repository');

const url = 'https://api.github.com/orgs/tryber/repos';

describe('test repository functionality', () => {
    test.skip('To have "sd-01-week4-5-project-todo-list" and "sd-01-week4-5-project-meme-generator"', () => {
        expect.assertions(2);
        return getRepos(url).then(repos => {
            expect(repos).toContain('sd-01-week4-5-project-todo-list');
            expect(repos).toContain('sd-01-week4-5-project-meme-generator');
        }) 
    });
})