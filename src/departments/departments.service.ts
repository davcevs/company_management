import { Injectable } from '@nestjs/common';
import { Department } from './departments.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DepartmentCreateDto } from './dtos/department-create.dto';

@Injectable()
export class DepartmentsService {
  constructor(
    @InjectRepository(Department)
    private departmentRepository: Repository<Department>,
  ) {}
  async findAll(): Promise<Department[]> {
    return await this.departmentRepository.find({
      relations: ['employees'],
    });
  }
  // get all departments without employees
  async findAllWithoutEmployees(): Promise<Department[]> {
    return await this.departmentRepository.find();
  }
  // create a new department
  async create(department: DepartmentCreateDto): Promise<Department> {
    const newDepartment = this.departmentRepository.create(department);
    return this.departmentRepository.save(newDepartment);
  }
  // update a department
  async update(
    id: string,
    department: DepartmentCreateDto,
  ): Promise<Department> {
    const updatedDepartment = await this.departmentRepository.preload({
      id,
      ...department,
    });
    return this.departmentRepository.save(updatedDepartment);
  }
  //  delete a department
  async delete(id: string): Promise<void> {
    await this.departmentRepository.delete(id);
  }
}
