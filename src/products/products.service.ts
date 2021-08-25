import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductsService {
  constructor(private readonly configService: ConfigService) {
    // console.log(configService.get<string>('DATABASE_NAME'));
  }
}
