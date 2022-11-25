const express=require('express');
const router=express.Router();

const AdminController=require('../app/controllers/AdminController');

router.get('/',AdminController.show);
router.get('/notifications',AdminController.notifications);
router.get('/connections',AdminController.connections);
// router.get('/:id',AdminController.detail);
// router.post('/',AdminController.create);
router.put('/:id',AdminController.update);
// router.delete('/:id',AdminController.delete);

module.exports=router;