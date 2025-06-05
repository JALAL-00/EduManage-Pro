import { ValidationPipe } from '@nestjs/common';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS for frontend access
  app.enableCors({
    origin: 'http://localhost:3001', // allow frontend
  });

  await app.listen(3000);
}
bootstrap();
