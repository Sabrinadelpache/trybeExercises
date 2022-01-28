
const connection = require('./connection');

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
}

const create = async (firstName, middleName, lastName) => connection.execute(
  'INSERT INTO model_example.authors (first_name, middle_name, last_name) VALUES (?,?,?)',
  [firstName, middleName, lastName],
);

const getFullNameAuthor = (first_name, middle_name, last_name) => {
  const fullName = [first_name, middle_name, last_name]
    .filter(Boolean)
    .join(' ');

    return fullName;
}

const serialize = ({ id, first_name, middle_name, last_name }) => ({
  id: id,
  firstName: first_name,
  middleName: middle_name,
  lastName: last_name,
  fullName: getFullNameAuthor(first_name, middle_name, last_name),
});

const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name FROM model_example.authors',
  );
  console.log(authors);
  return authors.map(serialize);
};

const getAuthorsById = async (id) => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name FROM model_example.authors WHERE id = ?', [id]
  );
  
  if (authors.length === 0) return null;

  return serialize(authors[0]);
};


module.exports = {
  getAll,
  getAuthorsById,
  isValid,
  create,
};