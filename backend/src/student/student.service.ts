import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

async findOne(id: number): Promise<Student> {
  const student = await this.studentRepository.findOne({ where: { id } });
  if (!student) {
    throw new Error('Student not found');
  }
  return student;
}


  async create(student: Student): Promise<Student> {
    return this.studentRepository.save(student);
  }

  async update(id: number, student: Student): Promise<void> {
    await this.studentRepository.update(id, student);
  }

  async remove(id: number): Promise<void> {
    await this.studentRepository.delete(id);
  }
}