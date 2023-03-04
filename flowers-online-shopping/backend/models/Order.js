const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    oID: { type: String, required: true },
    status: { type: String, required: true, enum: ["PLACED", "CANCLED", "CANCELED_BY_STORE", "READY", "SENT", "RECEIVED"] }, 
    cust_ID: { type: String, required: true },
    flowers: { type: String, required: true },
    bouquets: { type: String, required: true },
    other_items: { type: String, required: true },
    total: { type: String, required: true }
    //can add more
});

//Export this as an object so we can use it somewhere else.
module.exports = mongoose.model('Order', orderSchema);