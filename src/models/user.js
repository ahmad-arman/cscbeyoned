const {Sequelize,DataTypes} = require('sequelize');

const sequelize = require('../db');


const User = sequelize.define('user',{
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    userName:{
        type:DataTypes.STRING,
        allowNull:true,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    roles:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'user'
    },
    action:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:true
    }
})
const Message = sequelize.define('Message', {
    id:{
        type:DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4,
        allowNull:false,
        primaryKey:true,
    },
    message:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    senderId:{
        type:DataTypes.UUID,
        allowNull:false,
    },
    receiverId:{
        type:DataTypes.UUID,
        allowNull:false,
    }



})

module.exports ={User,Message};