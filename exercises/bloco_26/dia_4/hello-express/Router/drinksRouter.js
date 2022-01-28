const router = require('express').Router();
const validatePrice = require('../Middleware/validatePrice');

  const drinks = [
    { id: 1, name: 'Refrigerante Lata', price: 5.0 },
    { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
    { id: 3, name: 'Suco 300ml', price: 4.0 },
    { id: 4, name: 'Suco 1l', price: 10.0 },
    { id: 5, name: 'Cerveja Lata', price: 4.5 },
    { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
  ];

  router.get('/:id', (req, res) => {
    const idDrink = req.params.id;
    const drinkById = drinks.find(drink => drink.id === parseInt(idDrink));
    if(!drinkById) res.status(404).json({message: 'Drink not found'})
    res.json(drinkById);
  });
  
  router.use(validatePrice);
  
  router.post('/', (req, res) => {
    const {id, name, price} = req.body;
    drinks.push({id, name, price});
    const checkNumber = drinks.filter(drink => drink.id === parseInt(id))
    if(!checkNumber[0].id) res.status(404).json({message: "Could not update"});
    res.status(201).json({message: 'New drink added.'})
  
  })
  
  router.get('/', (_req,res) => {
    res.json(drinks);
  });

  module.exports = router;