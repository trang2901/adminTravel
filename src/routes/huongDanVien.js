const express=require('express');
const router=express.Router();

const HuongDanVienController=require('../app/controllers/HuongDanVienController');

router.get('/',HuongDanVienController.show);
// router.get('/:id',HuongDanVienController.detail);
router.post('/',HuongDanVienController.create);
// router.put('/:id',HuongDanVienController.update);
router.delete('/:id',HuongDanVienController.delete);

module.exports=router;