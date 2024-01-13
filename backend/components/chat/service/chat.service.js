let Chat = require('../model/chat.model');

let List = () => {
    return new Promise((resolve, reject) => {
        Chat.find({})
            .populate('user admin')
            .exec((err, chats) => {
                if (err) {
                    reject(err);
                }
                resolve(chats);
            });
    });
}

let ListById = (id) => {
    return new Promise((resolve, reject) => {
        Chat.findById(id)
            .populate('admin user')
            .exec((err, data) => {
                if (err) reject(err);
                resolve(data);
            })
    })
}

let ListByAdmin = (admin) => {
    let id = {
        admin: admin
    }

    
    return new Promise((resolve, reject) => {
        Chat.find(id)
            .populate('user admin')
            .exec((err, data) => {
                if (err) reject(err);
                resolve(data);
            })
    })
}

let ListByUser = (user) => {
    let id = {
        user: user
    }
    return new Promise((resolve, reject) => {
        Chat.find(id)
            .populate('user admin')
            .exec((err, data) => {
                if (err) reject(err);
                resolve(data);
            })
    })
}
let Save = (chat) => {
    let newChat = new Chat({
        admin: chat.admin,
        user: chat.user,
        lastMessage: '',
        timeStamp: new Date()
    })
    return new Promise((resolve, reject)=>{
        newChat.save(newChat, (err, data)=>{
            if(err) reject(err)
            resolve(data)
        })
    })
}

let UpdateLastMessage = (message, chat) => {
    let id = chat
    let lastMessage = {
        lastMessage: message,
        timeStamp: new Date()
    }
    return new Promise((resolve, reject) => {
        Chat.findByIdAndUpdate(id, lastMessage)
            .exec((err, data) => {
                if (err) reject(err)
                resolve(data)
            })
    })
}

module.exports = {
    List: List,
    ListById: ListById,
    Create: Save,
    UpdateLastMessage: UpdateLastMessage,
    ListByAdmin: ListByAdmin,
    ListByUser: ListByUser,
}