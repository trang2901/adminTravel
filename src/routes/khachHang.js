const express=require('express');
const router=express.Router();

const KhachHangController=require('../app/controllers/KhachHangController');

router.get('/',KhachHangController.show);
// router.get('/:id',KhachHangController.detail);
// router.post('/',KhachHangController.create);
// router.put('/:id',KhachHangController.update);
router.delete('/:id',KhachHangController.delete);

module.exports=router;