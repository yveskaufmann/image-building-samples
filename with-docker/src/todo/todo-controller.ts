import { BodyParam, Controller, Get, JsonController, Param, Post } from 'routing-controllers';
import { Todo } from './entity';

@JsonController()
export class TodoController {
  private todos: Todo[] = [];
  private idIncrementer = 0;

  @Get('/todos')
  public async getAll(): Promise<Todo[]> {
    return this.todos;
  }

  @Post('/todos')
  public async createTodo(@BodyParam('description') description: string): Promise<Todo> {
    const todo: Todo = {
      id: this.idIncrementer++,
      description,
      completed: false,
    };

    this.todos.push(todo);
    return todo;
  }

  @Get('/todos/:id')
  getOne(@Param('id') id: number): Todo | undefined {
    return this.todos.find((todo) => todo.id === id);
  }
}
