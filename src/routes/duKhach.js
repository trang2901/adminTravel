const express=require('express');
const router=express.Router();

const DuKhachController=require('../app/controllers/DuKhachController');

router.get('/', DuKhachController.show);
router.delete('/:id',DuKhachController.delete);

module.exports=router;