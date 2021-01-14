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
  const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
  const watchMathClass = (obj) => {
      let contador = 0;
        for (prop in obj) {
          if(obj[prop].materia === 'Matemática') {
              contador += obj[prop].numeroEstudantes
          }
      }
      console.log(`O número de estudantes é: ${contador}`);
  }
  const teacherReport = (obj, teacher) => {
    let studentsNumber = 0;
    let report = new Object();
    for(prop in obj) {
          if(obj[prop].professor === teacher) {
              report. professor = obj[prop].professor;
              report.materia = obj[prop].materia;
              studentsNumber += obj[prop].numeroEstudantes;
          }
      }
      report.student = studentsNumber;
      console.log(report)
  }
  teacherReport(allLessons, 'Maria Clara');