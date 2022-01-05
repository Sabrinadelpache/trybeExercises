const connection = require('./connection');


const findById = async (id) => {
    if(!ObjectId.isValid(id)) return null;
}

const isValid = async (title, author_id) => {
    if(!title && title.length < 3) return false;
    if(!author_id || typeof author_id === 'nuumber',
        await Author.getAuthorsById(author_id)) return false
}

const serialize = ({ id, title, author_id }) => ({
    id: id,
    title: title,
    authorId: author_id
});

const getAll = async () => {
    return connection()
        .then((db) => db.collection('books').find().toArray())
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


const getBooksById = async (id) => {
    const books = await connection()
        .then((db) => db.collection('books').findOne(new ObjectId(id)))


    if (books.length === 0) return null;

    return serialize(books);
}
module.export = {
    getAll,
}