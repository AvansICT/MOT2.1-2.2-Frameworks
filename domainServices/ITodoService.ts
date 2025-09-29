import Todo from '../domain/todo';

interface ITodoService {
  GetAll(): Todo[];

  GetById(id: number | string): Todo | null;

  Create(todo: Todo): Todo;

  Update(todo: Todo): Todo;

  Delete(id: number | string): void;
}

export default ITodoService;
