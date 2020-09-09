import { StudentsDto } from './student.dto';
import { StudentsInterface } from './students.schema';
import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentsService {
    constructor(@InjectModel('students') private readonly studentsInterface: Model<StudentsInterface>) { }

    async createStudents(studentsDto: StudentsDto) {
        const addNewStudents = await this.studentsInterface(studentsDto);
        return addNewStudents.save();
    }

    async fetchAllStudents(): Promise<StudentsInterface[]> {
        const getAlladdNewStudents = await this.studentsInterface.find().exec();
        return getAlladdNewStudents;
    }
}
