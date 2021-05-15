const API_URL = 'https://icanhazdadjoke.com/';

// Função que adiciona o retorno da api, no docuemento HTML
const appendJoke = (apiReturn) => {
  const createdTag = document.createElement('label');
  const parentTag = document.querySelector('#jokeContainer');
  createdTag.innerText = apiReturn;
  parentTag.appendChild(createdTag);
}

// Parametro para a função que executará o fetch. Formatará o resultado da api para uma string.
const parameter = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
}

// Promise que executará o fetch
const getJoke = () => {
  return new Promise((resolve, reject) => {
    if (API_URL === 'https://icanhazdadjoke.com/') {
      return fetch(API_URL, parameter)
        .then(response => response.json())
        .then((data) => {
          resolve(appendJoke(data.joke));
          resolve();
        })
    }
    reject(new Error('Not found'))
  });
}

const fetchJoke = () => {
  getJoke();
}

fetchJoke();
