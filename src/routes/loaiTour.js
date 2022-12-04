const express=require('express');
const router=express.Router();

const LoaiTourController=require('../app/controllers/LoaiTourController');

router.get('/', LoaiTourController.show);
router.delete('/:id',LoaiTourController.delete);
router.post('/',LoaiTourController.create);

module.exports=router;