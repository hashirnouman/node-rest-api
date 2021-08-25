const express = require('express');
const route = express.Router();
const admincontroller = require('./controller/admincontroller');
route.post('/create',admincontroller.create)
route.get('/getall',admincontroller.getall)
route.get('/get/:productId' ,admincontroller.getbyid);
route.delete('/delete/:productId' ,admincontroller.deletebyid)
route.put('/update/:productId',admincontroller.updatebyid)
module.exports = route;