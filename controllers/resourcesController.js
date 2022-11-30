const Resource = require("../models/resourceModel");

async function getAllResources(req, res){
    try{
        const allResources = await Resource.find()
        res.status(201).json(allResources)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

async function addResource(req, res){
    const resource = new Resource({
        message : req.body.message
    })  
    try{
        const newRes = await resource.save()
        res.status(201).json({newResource : newRes})
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

async function updateResource(req, res){
    const id = req.params.id;
    const newMessage = req.params.value
    const formattedMessage = newMessage.replaceAll('-', " ")
    try{
        await Resource.updateOne({_id: id}, {message : formattedMessage})
        res.json({ message: 'Producto editado'})
    }catch(err){
        res.json({message : err.message})
    }
}

async function deleteOneResource(req, res) {
    const resourceId = req.params.resourceId;
    try{
        await Resource.remove({ _id: resourceId });
        res.json({ 'message': 'Recurso eliminado' });
    }catch(err){
        res.json({message : err.message})
    }
}



module.exports = {getAllResources, addResource, updateResource, deleteOneResource}