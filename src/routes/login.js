const express=require('express');
const router=express.Router();

const loginController=require('../app/controllers/LoginController');

router.get('/login',loginController.showLogin);
// router.get('/:id',loginController.detail);
router.post('/login',loginController.login);
// router.put('/:id',loginController.update);
router.get('/logout',loginController.logout);

module.exports=router;