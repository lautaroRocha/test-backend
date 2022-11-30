const usersRouter = require('express').Router();
const {addUser, deleteOneUser, getAllUsers, logInUser} = require("../../controllers/userController")

usersRouter.get('/', getAllUsers);

usersRouter.post('/', addUser);

usersRouter.delete('/:id', deleteOneUser);

usersRouter.post('/login/:email/:pass', logInUser);

module.exports = usersRouter;


