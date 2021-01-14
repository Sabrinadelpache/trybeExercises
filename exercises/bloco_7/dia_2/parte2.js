const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};
const shiftModifier = (obj, key, value) => {
  let novaChave = key
  const turn = value
  obj[novaChave] = turn
  console.log(obj)
};
const keyList = obj => Object.keys(obj);
const sizeObject = obj => console.log(Object.keys(obj).length);
const valuesList = obj => console.log(Object.values(obj));
// o primeiro parâmetro é vazio e vai ser atribuido a lessons, no segundo parâmetro eu 'concateno' os objetos(lesson1, lesson2, lesson3)
// e elas como um único objeto são passadas para o objeto vazio que se tornará lessons.
const lessons = Object.assign({}, { lesson1, lesson2, lesson3 });
const amountStudents = obj => {
  let l1 = obj.lesson1.numeroEstudantes;
  let l2 = obj.lesson2.numeroEstudantes;
  let l3 = obj.lesson3.numeroEstudantes;
  let total = l1 + l2 + l3
};
const numberValue = (obj, number) => {
  const value = Object.values(obj)[number];
  console.log(value)
};
const pairKeyValue = (obj, key, value) => {
  if (obj[key] == value) {
    return true
  } else {
    return false
  }
};