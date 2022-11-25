const express=require('express');
const router=express.Router();

const DashBoardController=require('../app/controllers/DashBoardController');

router.get('/',DashBoardController.show);
// router.get('/:username',TaiKhoanController.detail);
// router.post('/',TaiKhoanController.create);
// router.put('/:id',TaiKhoanController.update);
// router.delete('/:id',TaiKhoanController.delete);

module.exports=router;