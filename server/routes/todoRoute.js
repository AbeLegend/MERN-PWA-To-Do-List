import express from 'express';

const router = express.Router();

// controllers
import { addTodo, getTodo, completeTodo } from '../controllers/todoController';
// middlewares
import { requireLogin } from '../middlewares';

router.post('/add-todo', requireLogin, addTodo);
router.get('/todo', requireLogin, getTodo);
router.delete('/complete-todo/:id', requireLogin, completeTodo);

module.exports = router;