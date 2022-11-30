const User = require("../models/userModel");

async function getAllUsers(req, res){
    try{
        const allUsers = await User.find()
        res.status(201).json(allUsers)
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

async function addUser(req, res){
    const user = new User({
        firstName : req.body.firstName,
        lastName: req.body.lastName,
        email : req.body.email,
        password : req.body.password,
        rol : req.body.rol
    })  
    try{
        const newUser = await user.save()
        res.status(201).json({newUser : newUser})
    }catch(err){
        res.status(400).json({message : err.message})
    }
}

async function deleteOneUser(req, res) {
    const id = req.params.id;
    try{
        await User.remove({ _id: id });
        res.json({ 'message': 'Datos Eliminados' });
    }catch(err){
        res.json({message : err.message})
    }
   
}

async function logInUser(req, res) {
    const email = req.params.email;
    const pass = req.params.pass;
    const selectedUser = await User.findOne({ email: email });
    selectedUser.password == pass ?
    res.status(200).json({ 'message': 'estás logueado'}) : 
    res.status(400).json({ 'message': 'credenciales inválidas'}) ;
    

}


module.exports = {getAllUsers, addUser, deleteOneUser, logInUser};