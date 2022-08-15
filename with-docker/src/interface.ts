export interface Application {
  start(): Promise<void>;
  requestShutdown(): void;
}
