import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './user.module';

@Module({
  imports: [
  MongooseModule.forRoot('mongodb+srv://ajin:Ty10AOJ3J9AoJcQx@cluster0.clmlfah.mongodb.net/?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{name:'user',schema:UserSchema}])

],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
