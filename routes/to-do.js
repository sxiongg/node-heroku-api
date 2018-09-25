const express = require('express');
const router = express.Router();

const todo_controller = require('../controllers/to-do');

router.get('/to-dos', todo_controller.getAll);
router.post('/to-dos', todo_controller.create);
router.put('/to-dos:id', todo_controller.update)

module.exports = router;