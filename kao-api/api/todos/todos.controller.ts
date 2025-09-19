import Koa from 'koa';
import { todosWithId } from '../../utils/interfaces/todos';
import {Context} from 'koa';
import TodoService from '../../services/todos.service';


class TodosController {
    todoService : TodoService;
    
    constructor(){
        this.todoService= new TodoService();
        console.log(this.todoService);
    }
   GetAllTodos = async(ctx : Context) : Promise<void> => {
        ctx.body = await this.todoService.getAll();
   }
   
   PostTodo = async (ctx: Context) :  Promise<void> => {
        let bodyMessage =  ctx.request.body as todosWithId;
        const createdTodo = await this.todoService.addTodo(bodyMessage);
        ctx.body = {created:createdTodo };
    }

    GetTodobyId = async (ctx : Context) : Promise<void> => {
        let foundTodo = await this.todoService.getTodoById(ctx.params.id);
        ctx.body = foundTodo;
    }


    UpdateTodo = async (ctx : Context) : Promise<void> => {
        let bodyMessage =  ctx.request.body as todosWithId;
        const updatedToDo = await this.todoService.updateTodo(bodyMessage);
        ctx.body = {updated: updatedToDo};
    }

    DeleteTodo = async  (ctx: Context) : Promise<void> => {
        const deletedToDo = await this.todoService.deleteTodo(ctx.params.id);
        ctx.body = {deleted: deletedToDo};
    }
}

export default TodosController;