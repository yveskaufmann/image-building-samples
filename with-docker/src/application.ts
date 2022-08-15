import type { Server } from 'http';
import { createKoaServer } from 'routing-controllers';
import { Application } from './interface';
import { TodoController } from './todo/todo-controller';

export class KoaApplication implements Application {
  private server!: Server;
  private port = 8080;

  constructor() {}

  public async start(): Promise<void> {
    this.server = createKoaServer({
      controllers: [TodoController],
    });

    this.server.listen(this.port, () => {
      console.log(`Server listening at http://localhost:${this.port}`);
    });
  }

  public requestShutdown(): void {
    this.server.close();
  }
}
