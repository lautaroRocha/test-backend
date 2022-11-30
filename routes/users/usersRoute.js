const usersRouter = require('express').Router();
const handleUsers = require("../../controllers/userController")

usersRouter.get('/', handleUsers.getAllUsers);

usersRouter.post('/', handleUsers.addUser);

usersRouter.delete('/:id', handleUsers.deleteOneUser);

usersRouter.post('/login/:email/:pass', handleUsers.logInUser);

module.exports = usersRouter;