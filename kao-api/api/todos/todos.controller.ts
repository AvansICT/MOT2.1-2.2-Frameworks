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
        ctx.body = this.todoService.getAll() ;
   }

    
   PostTodo = async (ctx: Context) :  Promise<void> => {
        let bodyMessage =  ctx.request.body as todosWithId;
        const createdTodo = this.todoService.addTodo(bodyMessage);
        ctx.body = {created:createdTodo };
    }

    GetTodobyId = async (ctx : Context) : Promise<void> => {
        let foundTodo = this.todoService.getTodoById(ctx.params.id);
        ctx.body = this.todoService.todosList ;
    }


    UpdateTodo = async (ctx : Context) : Promise<void> => {
        let bodyMessage =  ctx.request.body as todosWithId;
        this.todoService.updateTodo(bodyMessage);
    }

    DeleteTodo = async  (ctx: Context) : Promise<void> => {
        this.todoService.deleteTodo(ctx.params.id);
    }
}

export default TodosController;