import Todo from "../domain/todo";
import ITodoRepository from "../domainServices/ITodoRepository";

class TodoMongoDBRepository implements ITodoRepository {
  
  
    getAll = (): Todo[] => {
        return [];
    }

    getTodoIndexById = (id : number | string) : number =>{
        //implement mongoDB logic here
        return -1;
    }

    getTodoById = ( id: number | string) : Todo | null => {
        //implement mongoDB logic here
        return null;
    }

    addTodo = (todo : Todo) : Todo => {
        //implement mongoDB logic here
        return todo;
    }
    
    updateTodo = (todo: Todo) : void =>  {
        //implement mongoDB logic here
        return;
    }   

    deleteTodo = (id: number | string) : void => {
        //implement mongoDB logic here
        return;
    }
  }
export default TodoMongoDBRepository;