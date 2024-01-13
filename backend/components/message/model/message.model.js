var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var message = new Schema({
    name: { type: String },
    sendBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    chat: {
        type: Schema.Types.ObjectId,
        ref: 'Chat'
    },
    timeStamp: { type: Date }
}, {
    versionKey: false
});

var model = mongoose.model('Message', message);
module.exports = model;