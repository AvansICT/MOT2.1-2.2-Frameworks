import Todo from "../domain/todo";
import ITodoRepository from "../domainServices/ITodoRepository";
import TodoResult from "../domain/todoResult";

class TodoLocalDBRepository implements ITodoRepository {

    todosList : Todo[];

    constructor(){
        this.todosList = [
            new Todo('Sample Todo', TodoResult.Incomplete, 1) //
        ]
    };

    getAll = (): Todo[] => {
        return this.todosList;
    }

    getTodoIndexById = (id : number | string) : number =>{
        let givenId : number  = Number(id);
        const index = this.todosList.findIndex((body : Todo) => {return body.id === givenId as number});
        return index;
    }

    getTodoById = ( id: number | string) : Todo | null => {
        const index = this.getTodoIndexById(id);
        if(index < 0 ) return null;

        return this.todosList[index];
    }

    addTodo = (todo : Todo) : Todo => {
        this.todosList.push(todo);
        return this.todosList[this.todosList.length-1];
    }
    
    updateTodo = (todo: Todo) : void =>  {
        const index = this.getTodoIndexById(todo.id);
        this.todosList[index] = todo;
    }   

    deleteTodo = (id: number | string) : void => {
        const index = this.getTodoIndexById(id);
        this.todosList.splice(index, 1);
    }
}

export default TodoLocalDBRepository;