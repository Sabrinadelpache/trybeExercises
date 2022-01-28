const recipes = [
    { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
    { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
    { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const getRecipes = () => {
    return recipes;
};

const getRecipesByQueryParameter = (name, maxPrice, minPrice) => {
    return recipes.filter(e => e.name.includes(name) && e.price < maxPrice && e.price > minPrice);
};

const getRecipesById = (id) => {
    return recipes.filter(e => e.id === parseInt(id));
};

const alterRecipesById = (id, name, price) => {
    const recipeIndex = recipes.findIndex(e => e.d === parseInt(id));
    recipes[recipeIndex] = {id, name, price};
    return recipes;
};

const deleteRecipesById = (id) => {
    const recipeIndex = recipes.findIndex(e => e.id === parseInt(id));
    recipes.splice(recipeIndex, 1);
    return recipes;
};

module.exports = { getRecipes, getRecipesByQueryParameter,
    getRecipesById, alterRecipesById, deleteRecipesById };