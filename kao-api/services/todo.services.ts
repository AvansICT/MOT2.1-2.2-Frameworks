import  ITodoService  from '../../domainServices/ITodoService';
import Todo from '../../domain/todo';
import ITodoRepository from '../../domainServices/ITodoRepository';
import TodoLocalDBRepository from '../../infrastructure/todosLocalDB.service';


class TodoService implements ITodoService {
    private todoRepository : ITodoRepository ;

    constructor(){
      this.todoRepository = new TodoLocalDBRepository();
    }

    GetAll = () : Todo[] =>{
      return this.todoRepository.getAll();
    }

  GetById = (id: number | string): Todo | null => {
    return this.todoRepository.getTodoById(id);
  };

  Create = (todo: Todo): Todo => {
    return this.todoRepository.addTodo(todo);
  };

  Update = (todo: Todo): Todo => 
  {
    this.todoRepository.updateTodo(todo);
    return todo;
  };

  Delete = (id: number | string) : void => {
    this.todoRepository.deleteTodo(id);
  };

}

export default TodoService;