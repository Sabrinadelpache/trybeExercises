const professionalBoard = [
    {
      id: '8579-6',
      firstName: 'Ana',
      lastName: 'Gates',
      specialities: ['UX', 'Design'],
    },
    {
      id: '5569-4',
      firstName: 'George',
      lastName: 'Jobs',
      specialities: ['Frontend', 'Redux', 'React', 'CSS'],
    },
    {
      id: '4456-4',
      firstName: 'Leila',
      lastName: 'Zuckerberg',
      specialities: ['Context API', 'RTL', 'Bootstrap'],
    },
    {
      id: '1256-4',
      firstName: 'Linda',
      lastName: 'Bezos',
      specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
    },
    {
      id: '9852-2-2',
      firstName: 'Jeff',
      lastName: 'Cook',
      specialities: ['Ruby', 'SQL'],
    },
    {
      id: '4678-2',
      firstName: 'Paul',
      lastName: 'Informação indisponível',
      specialities: ['Backend'],
    },
  ];
  
  const searchEmployee = (id, detail) => {
    const retrievedInfo = professionalBoard.find((person) => {
        return person.id === id
    });
    const readyInfo = () => {
      retrievedInfo[detail] === '' ? retrievedInfo[detail] = "Informação indisponível" : detail;
      return retrievedInfo;
    } 
    return retrievedInfo 
      ? readyInfo()
      : "ID não identificada"

  };

console.log(searchEmployee('8679-6', 'lastName'))
module.exports = searchEmployee;