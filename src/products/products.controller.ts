import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  @Get()
  findAll() {
    console.log('findAll');
  }

  @Get('/:id')
  findOne() {
    console.log('findOne');
  }
}
