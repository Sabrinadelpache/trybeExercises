const express = require('express');
const bodyParser = require('body-parser');
const UserController = require('./exercises/controller/UserController');
const ErroTreatment = require('./exercises/middleware/errorTreatment');

const app = express();

app.use(bodyParser.json());

//app.use(express.json());

app.get("/users", UserController.getAllUsersController);
app.post("/users", UserController.validateBodyData, UserController.createNewUserController);
app.get("/users/:id", UserController.getUserByIdController);
app.put("/users/:id", UserController.validateBodyData, UserController.updateUserById);


app.use(ErroTreatment.errorTreatment);

const PORT = 3000;

app.listen(PORT, () => console.log("Watching 3000 port")); 