import { ValidationPipe } from '@nestjs/common'; // do dto *Patricia
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); // Ativa os DTOS com class-validator *Patricia
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
