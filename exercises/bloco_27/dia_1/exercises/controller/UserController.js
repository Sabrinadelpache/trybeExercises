const UserService = require('../service/UserServie');
const joi = require('joi');

const joiSchema = joi.object({
    firstName: joi.string().not().empty().required().messages({'any.required': `O campo "firstName" é obrigatório`}),
    lastName: joi.string().not().empty().required().messages({'any.required': `O campo "lastName" é obrigatório`}),
    email: joi.string().not().empty().required().messages({'any.required': `O campo "emaiç" é obrigatório`}),
    password: joi.string().not().empty().required().min(6).messages({
        'any.required': `O campo "password" é obrigatório`,
        'string.min': `"password" should have a minimum length of {#limit}`
    }),
})
    .messages({
        'any.required': `O campo "" é obrigatório`,       
        'string.min': `O campo "" deve ter, pelo menos, 6 caracteres`,
        'string.email': `Informe um email válido no campo ""`,
    });


const validateBodyData = async(req, res, next) => {
    console.log("getiing here")
    // validate request body against schema
    const { error } = joiSchema.validate(req.body);
    
    if (error) return next(error);

    return next();

};

const getAllUsersController = async (_req, res, next) => {
    const responseData = await UserService.getAllUsers();

    if(responseData.status) return next(response);

    return res.status(200).json(response);
}

const createNewUserController = async(req, res, next) => {
    const { firstName, lastName, email, password } = req.body

    const responseData = await UserService.create(firstName, lastName, email, password);

    if(responseData.status) return next(responseData);

    res.status(203).json(responseData);

};

const getUserByIdController = async(req, res, next) => {
    const { id } = req.params;

    const responseData = await UserService.getUserById(id);

    if(responseData.status) return next(responseData);

    res.status(200).json(responseData);


};

const updateUserById = async(req, res, next) => {
    const { id } = req.params;
    const { firstName, lastName, email, password } = req.body;

    const responseData = await UserService.updateUserById(id, firstName, lastName, email, password);
        
    if(responseData.status) return next(responseData);

    res.status(204).json(responseData)
}

module.exports = {
    getAllUsersController,
    createNewUserController,
    validateBodyData,
    getUserByIdController,
    updateUserById,
}
