import 'reflect-metadata';
import { KoaApplication } from './application';
import { Application } from './interface';

async function main(args: string[]): Promise<void> {
  const app: Application = new KoaApplication();
  process.once('SIGTERM', () => {
    app.requestShutdown();
  });
  await app.start();
}

if (require.main === module) {
  main(process.argv).then().catch(console.error);
}
