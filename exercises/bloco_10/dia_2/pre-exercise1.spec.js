const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalsByType = (type) => (
  new Promise((resolve, reject) => {
    setTimeout(() => {
      const arrayAnimals = Animals.filter((animal) => animal.type === type);
      if (arrayAnimals.length !== 0) {
        return resolve(arrayAnimals);
      }

      return reject({ error: 'Não possui esse tipo de animal.' });
    }, 1000);
  })
);

const getListAnimals = (type) => (
  findAnimalsByType(type).then(list => list)
);

describe('Quando o tipo do animal existe', () => {
  test('Retorne a lista de animais', async () => {
     await getListAnimals('Dog').then(listDogs => {
      expect(listDogs[0].name).toEqual('Dorminhoco');
      expect(listDogs[1].name).toEqual('Soneca');
    });

  });
});
test('Catch error', async () => {
  expect(await getListAnimals().catch()).toBe({ error:'Não possui esse tipo de animal.'})
});