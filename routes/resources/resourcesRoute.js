const resourcesRouter = require('express').Router();
const handleResources = require("../../controllers/resourcesController")
const validateUserRol = require('../../middleware/validateUserRol');


resourcesRouter.get('/', handleResources.getAllResources)

resourcesRouter.post('/', handleResources.addResource)

resourcesRouter.patch('/:id/:value', handleResources.updateResource)

resourcesRouter.delete('/:userId/:resourceId', [validateUserRol, handleResources.deleteOneResource])


module.exports = resourcesRouter;