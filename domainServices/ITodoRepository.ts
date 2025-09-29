import Todo from "../domain/todo";

interface ITodoRepository {
  getAll(): Todo[];

  getTodoIndexById(id: number | string): number;

  getTodoById(id: number | string): Todo | null;

  addTodo(todo: Todo): Todo;

  updateTodo(todo: Todo): void;

  deleteTodo(id: number | string): void;
}

export default ITodoRepository;