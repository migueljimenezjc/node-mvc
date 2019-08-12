var User = require('../models/user');


exports.init = function(req,res){
     return res.status(200).send({
         message: "Hola mundo"
     })
}

exports.getAll = function(req, res){
    return User.find().then((articles) => res.json({ articles: articles }))
}

exports.insertUser = function(req,res,next){
    var usuario = new User(req.body);
    return usuario.save().then(()=> res.json({message: 'exito'}) ).catch(next);
}

exports.getUser = function(req,res){

    var userId = req.params.id;
    User.findById(userId, (err,user) => {
        if(err) return res.status(500).send({ message: 'Error en la petición' });
        if(!user) return res.status(404).send({ message:'El usuario no existe' });

        followThisUser(req.user.sub, userId).then((value) => {
            user.password = undefined;

            return res.status(200).send({
                user,
                following: value.following,
                followed: value.followed
            });
        });
    });
}