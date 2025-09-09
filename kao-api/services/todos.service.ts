import { todosWithId } from "../utils/interfaces/todos";


class TodoService {

    todosList : todosWithId[];

    constructor(){
        this.todosList = [
            { id: 1, title: 'Sample Todo', completed: false }
        ]
    };

    getAll = (): todosWithId[] => {
        return this.todosList;
    }

    getTodoIndexById = (id : number | string) : number =>{
        let givenId : number  = Number(id);
        const index = this.todosList.findIndex((body : todosWithId) => {return body.id === givenId as number});
        return index;
    }

    getTodoById = ( id: number | string) : todosWithId | null => {
        const index = this.getTodoIndexById(id);
        if(index < 0 ) return null;

        return this.todosList[index];
    }

    addTodo = (todo : todosWithId) : todosWithId => {
        this.todosList.push(todo);
        return this.todosList[this.todosList.length-1];
    }
    
    updateTodo = (todo: todosWithId) : void =>  {
        const index = this.getTodoIndexById(todo.id);
        this.todosList[index] = todo;
    }   

    deleteTodo = (id: number | string) : void => {
        const index = this.getTodoIndexById(id);
        this.todosList.splice(index, 1);
    }
}

export default TodoService;