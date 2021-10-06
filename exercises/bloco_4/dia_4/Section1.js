let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
  };

  // Exercise 1 - Print 'Bem-vinda, Maragarida';
for (i in info) {
    if (info[i] === 'Margarida') {
        console.log('Bem-vinda, Margarida')
    };
};

// Exercise 2 - add the property 'recorrente' and the value 'sim';

info.recorrente = 'Sim';
console.log(info);

// Exercise 3 - Print all the propety names

for (i in info) {
    console.log(i);
};

// Exercise 4 - Print the values

for(i in info) {
    console.log(info[i])
}

// Exercise 5 - Add a new character

info.personagem += ' e Tio Patinhas';
info.origem += ' e Christmas on Bear Mountain, Dell´s Four Color Comics #178';
info.nota += ' O último MacPatinhas';
info.recorrente = 'Ambos recorrentes';

console.log(info)
