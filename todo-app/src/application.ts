import type { Server } from 'http';
import { createKoaServer } from 'routing-controllers';
import { Application } from './interface';
import { ProbesController } from './probes/health-controller';
import { TodoController } from './todo/todo-controller';

export class KoaApplication implements Application {
  private server!: Server;
  private port = parseInt(process.env.HTTP_PORT as any, 10) || 8080;

  constructor() {}

  public async start(): Promise<void> {
    this.server = createKoaServer({
      controllers: [TodoController, ProbesController],
    });

    this.server.listen(this.port, () => {
      console.log(`Server listening at http://localhost:${this.port}`);
    });
  }

  public requestShutdown(): void {
    this.server.close();
  }
}
