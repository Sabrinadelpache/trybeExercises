const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByName = (name) => (
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const animalObject = Animals.find((animal) => animal.name === name);
            animalObject ? resolve(animalObject) : reject('Nenhum animal com esse nome!');
          }, 100);
        })
      );
  
  const getAnimal = (name) => {
    return findAnimalByName(name).then(object => object);
  };

module.exports = getAnimal;
