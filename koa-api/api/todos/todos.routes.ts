import Router from 'koa-router';
import findTodoById from '../../middleware/findTodoById.ts';
import TodosController from './todos.controller.ts';

const todosRouter = new Router();
const todosController :TodosController = new TodosController();

todosRouter.get('/todos', todosController.GetAllTodos);

todosRouter.post('/todos', todosController.PostTodo);

todosRouter.get("/todos/:id", todosController.GetTodobyId);

todosRouter.put("/todos/:id", todosController.UpdateTodo );

todosRouter.delete("/todos/:id", todosController.DeleteTodo)

export default todosRouter