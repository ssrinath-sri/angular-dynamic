import { Module } from '@nestjs/common';
import { StudentsService } from './students.service';
import { StudentsController } from './students.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentsSchema } from './students.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'students', schema: StudentsSchema }])],
  providers: [StudentsService],
  controllers: [StudentsController]
})
export class StudentsModule {}
