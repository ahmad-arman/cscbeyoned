const express =require('express');
const router = express.Router();


const {
    registerHandler ,
    loginHandler ,
    usersHandler,
    updateUserHandler,
    removeUserHandler
}= require('../controllers/controllers');

router.get('/test',(req,res,next)=>{
    return "The Server Working "
})
router.post('/register',registerHandler);
router.post('/login',loginHandler);
router.get('/users',usersHandler);
router.put('/user',updateUserHandler);
router.delete('/user',removeUserHandler);

module.exports = router;