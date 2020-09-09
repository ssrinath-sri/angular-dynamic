import { StudentsDto } from './student.dto';
import { StudentsService } from './students.service';
import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('students')
export class StudentsController {
    constructor(private readonly  studentsService: StudentsService ) {}
    @Post()
    async createStudents(@Body() studentsDto: StudentsDto): Promise<any> {
        const results = await this.studentsService.createStudents(studentsDto);
        console.log('Finally added employess', results);
        return results;
    }
    @Get()
    async getAllStudents() {
        const results = await this.studentsService.fetchAllStudents();
        console.log('Get the all fetchAllStudents details', results);
        return results;
    }
}
