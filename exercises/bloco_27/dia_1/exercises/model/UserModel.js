const connection = require('./connection');
const { ObjectId } = require('mongodb');

const serialize = ({ firstName, lastName, email, password }) => (
    {
        firstName,
        lastName,
        email,
        password
    }
)

const isValid = (firstName, lastName, email, password) => {
    const PASSWORD_REGEX = /[a-z0-9]{6,}/ig;
    const fields = [firstName, lastName, email, password];
    
    if(fields.includes(null)
        || fields.includes(undefined)
        || fields.includes('')) return false;

    return PASSWORD_REGEX.test(password);
}

const getAll = async () => {
    const databaseData = await connection()
       .then((db) => db.collection('teste').find().toArray())
       .then((users) => users.map((user) => serialize(user)));

    return databaseData;
};

const create = async( firstName, lastName, email, password ) => {
    const databaseData = await connection()
        .then((db) => db.collection('users').insertOne({ firstName, lastName, email, password }));
        const returnData = {id: databaseData.insertedId, firstName: firstName, lastName: lastName, email: email}
    return returnData;
};

const getUserById = async(id) => {
    if(!ObjectId.isValid(id)) return null;

    const databaseData = await connection()
        .then((db) => db.collection('users')
            .findOne(new ObjectId(id)));
    
    if(!databaseData) return null;

    return serialize(databaseData);
}

const updateUserById = async(id, firstName, lastName, email, password) => {
    if(!ObjectId.isValid(id)) return null;

    const query = new ObjectId(id); 
    const newData = { firstName, lastName, email, password };

    const responseData = await connection()
        .then((db) => db.collection('users').findOneAndUpdate(query, { $set: newData })
        .then((result) => result.value));
    
    if(!responseData) return null;

    return serialize(responseData);
};

module.exports = {
    getAll,
    create,
    getUserById,
    updateUserById,
    isValid,
}