import { Schema, model } from "mongoose";
import { todosWithId } from "../utils/interfaces/todos";

const todoSchema: Schema = new Schema<todosWithId>({
  id: [{ type: Number, required: true }, { type: String, required: true }],
  title: { type: String},
  completed: { type: Boolean },
  //createdAt: { type: Date, default: Date.now },
});

export default model<todosWithId>("Todo", todoSchema);