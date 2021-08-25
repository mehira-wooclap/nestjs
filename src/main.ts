import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { AuthInterceptor } from './auth.interceptor';

const SWAGGER_ENVS = ['local', 'dev', 'staging'];

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalInterceptors(new AuthInterceptor());

  app.useGlobalPipes(new ValidationPipe());

  // Hide Swagger UI on prod env
  if (SWAGGER_ENVS.includes(process.env.APP_ENV)) {
    const options = new DocumentBuilder()
      .setTitle('Wooclap')
      .setVersion('1.0')
      .addBearerAuth(
        { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
        'access-token',
      )
      .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  }

  await app.listen(3000);
}
bootstrap();
