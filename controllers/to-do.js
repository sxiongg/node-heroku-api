const ToDo = require('../models/to-do');

exports.getAll = function (req, res) {
    ToDo.find().exec(function(err, docs) {
        res.json(docs);
    })
};

exports.create = function (req, res) {
    let toDo = new ToDo(
        {
            text: req.body.text,
            completed: false,
            details: ''
        }
    );

    toDo.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('To Do item created successfully.')
    })
};

exports.update = (req, res) => {
    console.log(req.body)
    console.log(res)
    // ToDo.findByIdAndUpdate(req.params._id, {
    //     text: req.body.text,
    //     completed: req.body.completed,
    //     details: req.body.details
    // }, {new: true})
    // .then(note => {
    //     res.send(note)
    // })
}