import Id from './id.ts';
import TodoResult from './todoResult.ts';
import timestamp from './timestamp.ts';

class Todo implements timestamp {
    title: string;
    completed: TodoResult;
    id: Id;
    createdAt: Date = new Date();
    updatedAt: Date = new Date();

    constructor(title: string, completed: TodoResult, id: Id) {
        this.title = title;
        this.completed = completed;
        this.id = id;
    }
}

export default Todo;