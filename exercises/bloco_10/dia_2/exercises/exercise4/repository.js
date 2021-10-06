const fetch = require('node-fetch');

const url = 'https://api.github.com/orgs/tryber/repos';
const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};
// console.log(getRepos(url).then(list => console.log(list)))
module.exports = getRepos;