const express=require('express');
const router=express.Router();

const ThanhToanController=require('../app/controllers/ThanhToanController');

router.get('/',ThanhToanController.show);
router.get('/:id',ThanhToanController.detail);
// router.post('/',ThanhToanController.create);
// router.put('/:id',ThanhToanController.update);
router.delete('/:id',ThanhToanController.delete);

module.exports=router;