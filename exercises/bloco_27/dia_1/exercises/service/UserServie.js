const UserModel = require('../model/UserModel');

const getAllUsers = async() => {
    const response = await UserModel.getAll();

    if(!response) return next({status: 200, message: []});
};

const create = async(firstName, lastName, email, password) => {
    
    if(!UserModel.isValid(firstName, lastName, email, password))
        return ({ status: 400, message: "Invalid Data" });

    const response = await UserModel.create(firstName, lastName, email, password );
    
    return response;
};

const getUserById = async(id) => {
    const response = await UserModel.getUserById(id);

    if(!response) return ({ status: 404, message: "Usuário não encontrado" });
    
    return response;
}

const updateUserById = async( id, firstName, lastName, email, password ) => {
    const response = await UserModel.updateUserById(id, firstName, lastName, email, password);
    
    if(!response) return ({ status: 400, message: "Usuário não encontrado. Não foi possível atualizar" });

    return response;
}

module.exports = {
    getAllUsers,
    create,
    getUserById,
    updateUserById,
}