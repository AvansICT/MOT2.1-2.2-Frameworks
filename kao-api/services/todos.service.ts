import { todosWithId } from "../utils/interfaces/todos";
import Todo  from "../models/todo.model";
import { DeleteResult, UpdateResult } from "mongoose";

class TodoService {

    constructor(){
        Todo.insertOne({ id: 1, title: 'Sample Todo', completed: false })
    };

    getAll = async (): Promise<todosWithId[]> => {
        return await Todo.find();
    }

    getTodoById = async ( id: number | string) : Promise<todosWithId | null> => {
        return await Todo.findOne({id: id});
    }

    addTodo = async (todo : todosWithId) : Promise<todosWithId> => {
       return await Todo.insertOne(todo);
    }
    
    updateTodo = async (todo: todosWithId) : Promise<UpdateResult> =>  {
        return await Todo.replaceOne({id: todo.id}, todo);
    }   

    deleteTodo = async (id: number | string) : Promise<DeleteResult> => {
        return await Todo.deleteOne({id: id});
    }
}

export default TodoService;