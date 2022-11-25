const express=require('express');
const router=express.Router();

const KyThanhToanController=require('../app/controllers/KyThanhToanController');

router.get('/',KyThanhToanController.show);
// router.get('/:id',KyThanhToanController.detail);
// router.post('/',KyThanhToanController.create);
// router.put('/:id',KyThanhToanController.update);
router.delete('/:id',KyThanhToanController.delete);

module.exports=router;