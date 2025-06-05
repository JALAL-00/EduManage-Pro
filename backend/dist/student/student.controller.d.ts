import { StudentService } from './student.service';
import { Student } from './student.entity';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findAll(): Promise<Student[]>;
    findOne(id: string): Promise<Student>;
    create(student: Student): Promise<Student>;
    update(id: string, student: Student): Promise<void>;
    remove(id: string): Promise<void>;
}
