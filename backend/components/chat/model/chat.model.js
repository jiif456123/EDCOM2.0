var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//name of the chat is adminId-chat-userId
var chat = new Schema({
    admin: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lastMessage: { type:String },
    timeStamp: {type:Date}
}, {
    versionKey: false
});

var model = mongoose.model('Chat', chat);
module.exports = model;