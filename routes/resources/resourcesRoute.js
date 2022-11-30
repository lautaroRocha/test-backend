const resourcesRouter = require('express').Router();
const {getAllResources, addResource, updateResource, deleteOneResource} = require("../../controllers/resourcesController")
const validateUserRol = require('../../middleware/validateUserRol');


resourcesRouter.get('/', getAllResources)

resourcesRouter.post('/', addResource)

resourcesRouter.patch('/:id/:value', updateResource)

resourcesRouter.delete('/:userId/:resourceId', [validateUserRol, deleteOneResource])


module.exports = resourcesRouter;