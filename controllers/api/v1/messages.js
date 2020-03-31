var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: String,
    user: String
});
const Message = mongoose.model('Message', messageSchema);


// GET:     /api/v1/messages - geeft messages terug
const getAll = (req, res) => {
    Message.find({}, (err, docs) => {
        if(!err) {
            res.json({
                "status": "success",
                "message": docs
            })
        }else if(err){
            res.json({
                "status": "error",
                "message": "could not save this item"
            })
        }
    })
    
}

// GET:     /api/v1/messages/:id - geeft message met specifiek ID terug
const getOne = (req, res) => {
    Message.find({_id: req.params.id}, (err, docs) => {
        if(!err){
            res.json({
                "status": "success",
                "message": docs
            })
        }else if(err){
            res.json({
                "status": "error",
                "message": "could not get ID"
            })
        }
    }) 
}

// POST:    /api/v1/messages - kan een JSON-object ontvangen en bewaren en geeft het nieuwe document terug
const postAll =  (req, res) => {
    let message = new Message()
    message.text = "nodejs isn’t hard, or is it?"
    message.user = "Pikachu"
    message.save( (err, doc) => {
        if(!err) {
            res.json({
                "status": "success",
                "message": doc
            })
        }else if(err){
            res.json({
                "status": "error",
                "message": "could not save this item"
            })
        }
    } )

    
}

// PUT:     /api/v1/messages/:id - kan een JSON-object ontvangen en een specifiek bericht updaten en geeft die nieuwe bericht terug
const update = (req, res) => {
    let update = "updated message"
    Message.findByIdAndUpdate({_id: req.params.id}, {text: update}, (err, docs) => {
        if(!err) {
            res.json({
                "status": "success",
                "message": update
            })
        }else if(err){
            res.json({
                "status": "error",
                "message": "could not update this item"
            })
        }
    })
}

// DELETE:  /api/v1/messages/:id - kan een message met id verwijderen en geeft een response terug
const remove = (req, res) => {
    Message.findByIdAndDelete({_id: req.params.id}, (err, docs) => {
        if(!err){
            res.json({
                "status": "success",
                "message": "REMOVING message with id " + req.params.id
            })
        }else if(err){
            res.json({
                "status": "error",
                "message": "could not remove this item"
            })
        }
    })
}

//GET:     /api/v1/messages?user=username - kan berichten teruggeven voor een bepaalde username

const getAllUser = (req, res) => {
    Message.find({user: req.params.user}, (err, docs) => {
        if(!err){
            res.json({
                "status": "success",
                "message": docs
            })
        }else if(err){
            res.json({
                "status": "error",
                "message": "could not get this user"
            })
        }
    })
}

module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.postAll = postAll;
module.exports.update = update;
module.exports.remove = remove;
module.exports.getAllUser = getAllUser;






// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// const messageSchema = new Schema({
//     text: String,
//     user: String
// });
// const Message = mongoose.model('Message', messageSchema);


// // GET:     /api/v1/messages - geeft messages terug
// const getAll = (req, res) => {
//     // Message.find({}, (err, docs) => {
//     //     if(!err) {
//             res.json({
//                 "status": "success",
//                 "message": "sss"
//             })
//         // }
//     // })
    
// }

// // GET:     /api/v1/messages/:id - geeft message met specifiek ID terug
// const getOne = (req, res) => {
//     // Message.find({_id: req.params.id}, (err, docs) => {
//         res.json({
//             "status": "success",
//             "message": "sss"
//         })
//     // }) 
// }

// // POST:    /api/v1/messages - kan een JSON-object ontvangen en bewaren en geeft het nieuwe document terug
// const postAll =  (req, res) => {
//     // let message = new Message()
//     // message.text = "nodejs isn’t hard, or is it?"
//     // message.user = "Pikachu"
//     // message.save( (err, doc) => {
//     //     if(!err) {
//             res.json({
//                 "status": "success",
//                 "message": "sss"
//             })
//         }
//     // } )

    


// // PUT:     /api/v1/messages/:id - kan een JSON-object ontvangen en een specifiek bericht updaten en geeft die nieuwe bericht terug
// const update = (req, res) => {
//     // let update = "updated message"
//     // Message.findByIdAndUpdate({_id: req.params.id}, {text: update}, (err, docs) => {
//     //     if(!err) {
//             res.json({
//                 "status": "success",
//                 "message": "getting messages"
//             })
//         // }
//     // })
// }

// // DELETE:  /api/v1/messages/:id - kan een message met id verwijderen en geeft een response terug
// const remove = (req, res) => {
//     // Message.findByIdAndDelete({_id: req.params.id}, (err, docs) => {
//         res.json({
//             "status": "success",
//             "message": "REMOVING message with id " + req.params.id
//         })
//     // })
// }

// //GET:     /api/v1/messages?user=username - kan berichten teruggeven voor een bepaalde username

// const getAllUser = (req, res) => {
//     // Message.find({user: req.params.user}, (err, docs) => {
//         res.json({
//             "status": "success",
//             "message": "getting messages from user"
//         })
//     // })
// }



// module.exports.getAll = getAll;
// module.exports.getOne = getOne;
// module.exports.postAll = postAll;
// module.exports.update = update;
// module.exports.remove = remove;
// module.exports.getAllUser = getAllUser;
