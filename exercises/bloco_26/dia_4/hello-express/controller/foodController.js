const foodService = require('../service/foodService');


const showRecipes = (_req, res) => {
    res.status(200).json(foodService.getRecipes());
};

const showRecipesByQueryParameter = (req, res) => {
    const { name, maxPrice, minPrice } = req.query;
    res.status(200).json(foodService.getRecipesByQueryParameter(name, maxPrice, minPrice));
};

const showRecipesById = (req, res) => {
    const { id } = req.params.id;
    res.status(200).json(foodService.getRecipesById(id));
};

const showAlteredRecipesById = (req, res) => {
    const { id } = req.params.id;
    const { name, price } = req.body;
    res.status(200).json(foodService.alterRecipesById(id, name, price));
};

const showUndeletedItems = () => {
    const { id } = req.params.id;
    res.status(200).json(foodService.deleteRecipesById(id)); 
};

module.exports = {
    showRecipes, showRecipesByQueryParameter,
    showRecipesById, showAlteredRecipesById,
    showUndeletedItems
}