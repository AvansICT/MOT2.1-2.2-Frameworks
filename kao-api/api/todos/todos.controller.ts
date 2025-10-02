import Koa from 'koa';
import Todo from '../../../domain/todo';
import Title from '../../../domain/title';
import {Context} from 'koa';
import TodoService from '../../services/todo.services';
import ITodoService from '../../../domainServices/ITodoService';
import TodoResult from '../../../domain/todoResult';
import * as z from "zod"; 

const TodoPostSchema = z.object({
  title: z.string().min(1, "Title is required").max(20, "Title is too long" ),
});
class TodosController {
    todoService : ITodoService = new TodoService();
    
    constructor(){
        this.todoService= new TodoService();

    }
   GetAllTodos = async(ctx : Context) : Promise<void> => {
        ctx.body = this.todoService.GetAll() ;
   }
    
   PostTodo = async (ctx: Context) :  Promise<void> => {
        try{
            let bodyMessage =  ctx.request.body as Title;
            TodoPostSchema.parse(bodyMessage);
            const newTodo: Todo = new Todo(bodyMessage.title, TodoResult.Incomplete, Date.now());
            
            const createdTodo = this.todoService.Create(newTodo);
            ctx.body = {created:createdTodo };
        }catch(error){
            if(error instanceof z.ZodError){
                ctx.status = 400;
                const errors =
                 ctx.body = {error:error.issues.map((err) => err.message)};
            }
        }
    }

    GetTodobyId = async (ctx : Context) : Promise<void> => {
        let foundTodo = this.todoService.GetById(ctx.params.id);
        ctx.body = foundTodo ;
    }


    UpdateTodo = async (ctx : Context) : Promise<void> => {
        let bodyMessage =  ctx.request.body as Todo;
        this.todoService.Update(bodyMessage);
    }

    DeleteTodo = async  (ctx: Context) : Promise<void> => {
        this.todoService.Delete(ctx.params.id);
    }
}

export default TodosController;