import id from './id.ts';


interface todos {
    title: string;
    completed: boolean;
}

interface todosWithId extends id, todos {};


export {todos, todosWithId};