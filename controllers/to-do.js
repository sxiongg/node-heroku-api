const ToDo = require('../models/to-do');

exports.getAll = (req, res) => {
    ToDo.find().exec((err, docs) => {
        res.json(docs);
    })
};

exports.create = (req, res) => {
    let toDo = new ToDo(
        {
            text: req.body.text,
            completed: false,
            details: ''
        }
    );

    toDo.save((err) => {
        if (err) {
            return next(err);
        }
        res.send('To Do item created successfully.')
    })
};

exports.update = (req, res) => {
    // console.log(req.body)
    // console.log(res)
    ToDo.findByIdAndUpdate(req.params._id.$oid, 
        {
        text: req.body.text,
        completed: req.body.completed,
        details: req.body.details
        }, 
        {new: true})
    .then(item => {
        res.send(item)
    })
}

exports.delete = (req, res) => {
    ToDo.findByIdAndRemove(req.params._id.$oid)
    .then(item => {
        if(!item) {
            return res.status(404).send({
                message: "Item not found with id " + req.params._id.$oid
            });
        }
        res.send({message: "Item deleted successfully!"});
    }).catch(err => {
        if(err.kind === 'ObjectId' || err.name === 'NotFound') {
            return res.status(404).send({
                message: "Item not found with id " + req.params._id.$oid
            });                
        }
        return res.status(500).send({
            message: "Could not delete Item with id " + req.params._id.$oid
        });
    });
}