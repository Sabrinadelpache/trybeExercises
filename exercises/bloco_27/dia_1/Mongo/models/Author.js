const connection = require('./connection');

const isValid = (firstName, middleName, lastName) => {
    if (!firstName || typeof firstName !== 'string') return false;
    if (!lastName || typeof lastName !== 'string') return false;
    if (middleName && typeof middleName !== 'string') return false;
  
    return true;
  }

  const serialize = ({ id, title, author_id }) => ({
    id: id,
    title: title,
    authorId: author_id
});

const getAll = async () => {
    return connection()
        .then((db) => db.collection('authors').find().toArray())
            .then((authors) =>
                authors.map(({ _id, firstName, middleName, lastName }) =>
                getNewAuthor({
                    id: _id,
                    firstName,
                    middleName,
                    lastName,
                })
            )
        );
}

const getAuthorsById = async (id) => {
const author = await connection()
    .then((db) => db.collection('authors').findOne(new ObjectId(id)));

    if(!author) return null;

    return serialize(author);
};

const create = async (firstName, middleName, lastName) => {
    console.log('creating')
    const author = await connection()
        .then((db) => db.colletion('authors').insertOne({firstName, middleName, lastName}));
    return serialize(author)
};

module.export = {
    getAll,
    getAuthorsById,
    isValid
}