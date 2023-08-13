const express=require('express')
const  {bookController, getbookController, singlebookcontroller, updatebookController, deletebookController}  = require('../controllers/bookController');
const router=express.Router()

router.post('/add',bookController)
router.get('/getbooks',getbookController)
router.get('/getbooks/:id',singlebookcontroller)
router.put('/updatebook/:id',updatebookController)
router.delete('/deletebook/:id',deletebookController)

module.exports=router;

