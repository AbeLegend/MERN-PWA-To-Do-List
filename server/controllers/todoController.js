import Todo from '../models/todoModel';

export const addTodo = async (req, res) => {
  try {
    const { todo } = req.body;
    const { _id } = req.user;

    //  validation
    if (!_id) return res.status(400).send('Error. Please login first to create todo');
    if (!todo) return res.status(400).send('Please insert todo first.');
    //  save
    let newTodo = new Todo({ userId: _id, todo });
    newTodo.save((err, result) => {
      if (err) {
        return res.status(400).send('Error. Please try again.');
      }
      return res.json(result);
    });
  } catch (err) {
    return res.status(500).send('Server error. Try again later');
  }
}

export const getTodo = async (req, res) => {
  try {
    const { _id } = req.user;
    const todo = await Todo.find({ userId: _id }).sort({ createdAt: -1 });
    return res.status(200).json({ todo });
  } catch (err) {
    return res.status(500).send('Server error. Try again later');
  }
}

export const completeTodo = async (req, res) => {
  try {
    const completeTodo = await Todo.findByIdAndDelete(req.params.id);
    return res.status(200).json({ status: 'Success', todo: completeTodo.todo });
  } catch (err) {
    return res.status(500).send('Server error. Try again later.');
  }
}