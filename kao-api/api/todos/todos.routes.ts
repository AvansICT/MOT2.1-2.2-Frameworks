import Router from 'koa-router';
import findTodoById from '../../middleware/findTodoById';
import TodosController from './todos.controller.ts';

const todosRouter = new Router();
const todosController :TodosController = new TodosController();

todosRouter.get('/todos', todosController.GetAllTodos);

todosRouter.post('/todos', todosController.PostTodo);

todosRouter.get("/todos/:id", findTodoById, todosController.GetTodobyId);

todosRouter.put("/todos/:id", findTodoById, todosController.UpdateTodo );

todosRouter.delete("/todos/:id", findTodoById, todosController.DeleteTodo)

export default todosRouter