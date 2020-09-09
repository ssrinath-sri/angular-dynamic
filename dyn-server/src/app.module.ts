import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [StudentsModule, MongooseModule.forRoot('mongodb+srv://admin:7YaPbDRtNPcfBD3P@employees-sru2a.mongodb.net/Employees?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
