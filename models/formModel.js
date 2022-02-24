const mongoose = require('mongoose');
const Schema = mongoose.Schema

const formSchema = new Schema({
    worksOrder: {
        type: Number,
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
        type: Number,
    },
    speed: {
        type: String,
    },
    signature: {
        type: String
    }
});

const Form = mongoose.model('Form', formSchema);

module.exports = Form;