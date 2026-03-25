import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ProductInterface } from './product.interface';


@Module({
    controllers: [ProductController],
    providers: [ProductService],
})
export class UsersModule { }