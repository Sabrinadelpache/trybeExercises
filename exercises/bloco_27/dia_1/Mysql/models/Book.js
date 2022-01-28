const connection = require('./connection');

const Author = require('./Author');

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
    const [books] = await connection.execute(
        'SELECT*FROM model_example.books',
    );

    return books;
}

const getBooksById = async (id) => {
    const [books] = await connection.execute(
        `SELECT*FROM model_example.books WHERE id = ?`, [id]
    );

    if (books.length === 0) return null;

    return serialize(books[0]);
}

module.exports = {
    getAll,
    getBooksById,
    isValid,
}