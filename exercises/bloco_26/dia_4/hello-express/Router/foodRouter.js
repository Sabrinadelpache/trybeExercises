const router = require('express').Router();
const foodController = require('../controller/foodController');

router.get('/search', foodController.showRecipesByQueryParameter);
  
router.put('/:id', foodController.showAlteredRecipesById)

router.delete('/:id', foodController.showUndeletedItems)

router.get('/', foodController.showRecipes);

router.get('/:id', foodController.showRecipesById);

module.exports = router;