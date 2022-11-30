const router = require('express').Router();
const usersRouter = require('./users/usersRoute');
const resourcesRouter = require('./resources/resourcesRoute');

router.use('/users', usersRouter)

router.use('/resources', resourcesRouter)

module.exports = router;
