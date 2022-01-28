const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const PORT = process.env.PORT || 3000;

const Author = require('./models/Author');
const Book = require('./models/Book');

app.listen(PORT, () => {
  console.log(`Òuvindo a porta ${PORT}`);
})

app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;

  const authors = await Author.getAuthorsById(id);

  if(!authors) return res.status(404).json( { message: 'Not found' })

  res.status(200).json(authors);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  
  const books = await Book.getBooksById(id);

  res.status(200).json(books);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if(!Author.isValid(first_name, middle_name, last_name))
    return res.status(400).json({'message': 'Bad Request'});

  const authors = await Author.create(first_name, middle_name, last_name);

  res.status(200).json(authors);
});

app.post('/books', async (req, res) => {
  const { id, title, author_id } = req.body;

  if(!Book.isValid(id, title, author_id))
    return res.status(400).json({'message': 'Dados inválidos'});

  await Author.create(id, title, author_id);

  res.status(201).json({ message: 'Livro criado com sucesso! '});
});