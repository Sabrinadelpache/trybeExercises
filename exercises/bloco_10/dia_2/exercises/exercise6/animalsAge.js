const Animals = [
    { name: 'Dorminhoco', age: 1, type: 'Dog' },
    { name: 'Soneca', age: 2, type: 'Dog' },
    { name: 'Preguiça', age: 5, type: 'Cat' },
  ];
  
  const findAnimalByAge = (age) => (
        new Promise((resolve, reject) => {
          setTimeout(() => {
            const animalObject = Animals.find((animal) => animal.age === age);
            animalObject ? resolve(animalObject) : reject('Nenhum animal com essa idade!');
          }, 100);
        })
      );
  
  const getAnimalByAge = (age) => {
    return findAnimalByAge(age).then(object => object);
  };

module.exports = getAnimalByAge;