let Message = require('../model/message.model');



let ListByChat = (idChat) => {
    let id = {
        chat : idChat
    }
    return new Promise((resolve, reject) => {
        Message.find(id)
            .populate('user chat')
            .exec((err,data)=>{
                if(err) reject(err)
                resolve(data)
            })
    })
}

let save = (message) => {
    let newMessage = new Message({
        name : message.name,
        sendBy : message.sendBy,
        chat : message.chat,
        timeStamp: new Date(),
    })

    return new Promise((resolve, reject)=>{
        newMessage.save(newMessage, (err, data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

module.exports = {
    ListByChat: ListByChat,
    Save: save
}