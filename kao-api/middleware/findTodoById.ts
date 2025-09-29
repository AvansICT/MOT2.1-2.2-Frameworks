import {Context, Next} from 'koa';
import TodoService from '../services/todo.services';

const todoService : TodoService = new TodoService();

async function findTodoById(ctx: Context, next: Next) {
  if(Number.isInteger(ctx.params.id)){
  const id = Number.parseInt(ctx.params.id);
  const todo = todoService.GetById(id);
  
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