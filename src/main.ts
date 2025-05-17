import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SocketIoAdapter } from './socket-io.adapter';

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  // For CORS
  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: true,
  });
  
  app.useWebSocketAdapter(new SocketIoAdapter(app));
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
