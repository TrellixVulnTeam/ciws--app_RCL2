const mongoose = require('mongoose');
const Schema = mongoose.Schema

const formSchema = new Schema({
    worksOrder: {
        type: String,
    },
    headType: {
        type: String,
    },
    customerName: {
        type: String,
    },
    partsRecievedFrom: {
        type: String,
    },
    customerSupply: {
        type: String,
    },
    purchaseOrderNumber: {
        type: String,
    },
    compname:  {
        type: String,
    },
    compname1:  {
        type: String,
    },
    compname2: {
        type: String,
    },
    compname3:  {
        type: String,
    },
    compname4:  {
        type: String,
    },
    compname5:  {
        type: String,
    },
    compname6:  {
        type: String,
    },
    compname7:  {
        type: String
    },
    compname8:  {
        type: String,
    },
    compname9:  {
        type: String,
    },
    compname10:  {
        type: String,
    },
    compname11:  {
        type: String
    },
    norecieved:  {
        type: String,
    },
    norecieved1:  {
        type: String,
    },
    norecieved2: {
        type: String,
    },
    norecieved3:  {
        type: String,
    },
    norecieved4:  {
        type: String,
    },
    norecieved5:  {
        type: String,
    },
    norecieved6:  {
        type: String,
    },
    norecieved7:  {
        type: String
    },
    norecieved8:  {
        type: String,
    },
    norecieved9:  {
        type: String,
    },
    norecieved10:  {
        type: String,
    },
    norecieved11:  {
        type: String
    },
    compsize:  {
        type: String,
    },
    compsize1:  {
        type: String,
    },
    compsize2: {
        type: String,
    },
    compsize3:  {
        type: String,
    },
    compsize4:  {
        type: String,
    },
    compsize5:  {
        type: String,
    },
    compsize6:  {
        type: String,
    },
    compsize7:  {
        type: String
    },
    compsize8:  {
        type: String,
    },
    compsize9:  {
        type: String,
    },
    compsize10:  {
        type: String,
    },
    compsize11:  {
        type: String
    },
    storelocation:  {
        type: String,
    },
    storelocation1:  {
        type: String,
    },
    storelocation2: {
        type: String,
    },
    storelocation3:  {
        type: String,
    },
    storelocation4:  {
        type: String,
    },
    storelocation5:  {
        type: String,
    },
    storelocation6:  {
        type: String,
    },
    storelocation7:  {
        type: String
    },
    storelocation8:  {
        type: String,
    },
    storelocation9:  {
        type: String,
    },
    storelocation10:  {
        type: String,
    },
    storelocation11:  {
        type: String
    },
    damagecheck:  {
        type: String,
    },
    damagecheck1:  {
        type: String,
    },
    damagecheck2: {
        type: String,
    },
    damagecheck3:  {
        type: String,
    },
    damagecheck4:  {
        type: String,
    },
    damagecheck5:  {
        type: String,
    },
    damagecheck6:  {
        type: String,
    },
    damagecheck7:  {
        type: String
    },
    damagecheck8:  {
        type: String,
    },
    damagecheck9:  {
        type: String,
    },
    damagecheck10:  {
        type: String,
    },
    damagecheck11:  {
        type: String
    },
    date: {
        type: String,
    },
    signature: {
        type: String
    }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;

