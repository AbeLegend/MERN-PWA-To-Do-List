import mongoose from 'mongoose';

const { Schema } = mongoose;
const { ObjectId } = mongoose.Schema;

const todoSchema = Schema({
  userId: {
    type: ObjectId,
    ref: 'User'
  },
  todo: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('Todo', todoSchema);