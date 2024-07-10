const express = require('express');
const router=express.Router();
const {LogIn,SignUp,VerifyUser}=require("../Controllers/AuthController");
router.post('/LogIn',LogIn);
router.post('/SignUp',SignUp);
router.get('/VerifyUser/:id',VerifyUser);
module.exports = router;