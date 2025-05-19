import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { ChatGateway } from './chat.gateway';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

// @Module({
//   imports: [AuthModule],
//   controllers: [AppController],
//   providers: [AppService, ChatGateway],
// })

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://loickcherimont:test123@cluster0.rktks.mongodb.net/chat?retryWrites=true&w=majority&appName=Cluster0'),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    AuthModule
  ]
})
export class AppModule {}
