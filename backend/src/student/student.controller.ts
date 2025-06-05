import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  findAll(): Promise<Student[]> {
    return this.studentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Student> {
    return this.studentService.findOne(+id);
  }

  @Post()
  create(@Body() student: Student): Promise<Student> {
    return this.studentService.create(student);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() student: Student): Promise<void> {
    return this.studentService.update(+id, student);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.studentService.remove(+id);
  }
}