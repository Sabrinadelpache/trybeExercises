const linhas = 5;

for(let i = 0; i <= linhas*2; i++)
    if(i % 2 != 0)
        console.log((' ', (linhas*2 - i) /2 ) + new string('*', i));