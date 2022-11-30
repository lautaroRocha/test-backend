const User = require('../models/userModel')

async function validateUserRol(req, res, next) {
    const userId = req.params.userId;
    const requestingUser = await User.findOne({_id : userId})
    if(requestingUser.rol !== "premium"){
        res.status(400).json({message : "no tienes permisos para borrar este recurso"})
    }else{
        next()
    }
}

module.exports = validateUserRol;