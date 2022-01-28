const express = require('express');
const app = express();
const routerFood = require('./Router/foodRouter');
const routerDrinks = require('./Router/drinksRouter');
app.use(express.json())

app.listen(3000, () => {
  console.log('Listening on port 3000.')
});

app.use('/drinks', routerDrinks);

app.use('/recipes', routerFood);

app.all('*', (req, res) => {
  res.status(404).json({message: "A rota não foi encontrada"})
});