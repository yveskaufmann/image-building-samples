import { Get, JsonController } from 'routing-controllers';

@JsonController('/probes')
export class ProbesController {
  @Get('/health')
  getHealth() {
    return {
      status: 'OK',
    };
  }

  @Get('/ready')
  getReadyState() {
    return {
      ready: true,
    };
  }
}
