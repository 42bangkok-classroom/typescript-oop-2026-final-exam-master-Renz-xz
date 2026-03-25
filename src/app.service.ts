import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private app: Data[] = [
    {service: "purchase-api"},
    {version: "1.0.0"}
  ]
  getAppData(): Data[] {
    return this.app;
  }
}
