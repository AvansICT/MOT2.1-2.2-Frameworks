import {Context, Next} from 'koa';
import ToDoService from '../services/todos.service';
import TodoService from '../services/todos.service';

const todoService : ToDoService = new TodoService();

async function findTodoById(ctx: Context, next: Next) {
  if(Number.isInteger(ctx.params.id)){
  const id = Number.parseInt(ctx.params.id);
  const todo = todoService.getTodoById(id);
  
  if(todo )
    {
       ctx.status = 400;
      ctx.body = {
        message: "element not found"
      };
    }else{

      ctx.index = todo;
      next();
    }
  }else{

  }
}

export default findTodoById;