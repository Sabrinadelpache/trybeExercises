const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res) => {
    res.send('Teste teste testes')
})

app.listen(3000, () => 'Rodando na porta 3000')