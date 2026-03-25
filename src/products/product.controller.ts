import { Controller, Get } from '@nestjs/common';

@Controller()
export class ProductController {
  @Get('products')
  getData(): string {
    return this();
  }
}
