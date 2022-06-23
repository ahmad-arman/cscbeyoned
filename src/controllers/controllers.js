
const sequelize = require('../db');
const {User}=  require('../models/user');

const registerHandler = async (req, res, next) => {
    try {
        let data = req.body;
        let check =await User.findAll({
            where:{
                email:data.email
            }
        })
        if(check.length ){
            res.json({status: 200,message: 'The Email is exist'})

        }else{

            let user =await User.create(data);
            res.json({status: 200,dataUser:user})
        }

    } catch (error) {
        res.status(403).send(error.message);
    }
}

const loginHandler = async (req, res, next) => {
    try {
        let {email,password} = req.body;
      let user =await  User.findAll({
        where: {
            email:email,
            password:password
        }
      })
      if(user.length){

          res.json({status: 200,dataUser:user})
      }else{

          res.json({status: 200,message:'the email OR password is not correct'})
      }

    } catch (error) {
        res.status(403).send(error.message);
    }
}

const usersHandler = async (req, res, next) => {
    try {
        let users = await User.findAll({
            where: {
                roles:'user'
            }
        })
        res.json({status: 200,numberUser: users.length,users:users});
    } catch (error) {
        res.status(404).send(error.message);
    }
}

const removeUserHandler = async (req, res, next) => {
    try {
        let {id} = req.body;
        let users = await User.destroy({
            where: {
                id:id
            }
        })
        res.json({status: 200,users:users});
    } catch (error) {
        res.status(404).send(error.message);
    }
}

const updateUserHandler = async (req, res, next) => {
    try {
        let {id,name,email,role,action} = req.body;
        
        let users = await User.update(
            {
             userName: name,
             email: email,
             roles: role,
             action: action,
            },
            {  where:{

                id:id
            }
            }
        )
        let newUser = await User.findAll({
            where: {
                id:id
            }
        })
        console.log("🚀 ~ file: controllers.js ~ line 98 ~ updateUserHandler ~ newUser", newUser)
        res.json({status: 200,users:newUser});
    } catch (error) {
        res.status(404).send(error.message);
    }
}

module.exports ={
    registerHandler,loginHandler,usersHandler,removeUserHandler,updateUserHandler
}


