const express=require('express');
const router=express.Router();

const LichTrinhController=require('../app/controllers/LichTrinhController');

router.get('/',LichTrinhController.show);
// router.get('/:id',LichTrinhController.detail);
 router.post('/:tourSlug',LichTrinhController.create);
router.put('/:id',LichTrinhController.update);
router.delete('/:id',LichTrinhController.delete);

module.exports=router;