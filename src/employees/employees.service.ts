import { EmployeeQueryDto } from './dtos/employee-query.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Repository } from 'typeorm';
import { EmployeeCreateDto } from './dtos/employee-create.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private employeeRepository: Repository<Employee>,
  ) {}
  // get all employees
  async findAll(query: EmployeeQueryDto): Promise<Employee[]> {
    return await this.employeeRepository.find({
      relations: {
        department: true,
      },
    });
  }
  // get employee by id and name and filter by job title,pay type ,is active. Case sensitive
  async findOne(
    id: string,
    name: string,
    query: EmployeeQueryDto,
  ): Promise<Employee> {
    return await this.employeeRepository.findOne({
      relations: {
        department: true,
      },
      where: {
        id: id,
        name: name,
        jobTitle: query.jobTitle,
        payType: query.payType,
        isActive: query.isActive,
      },
    });
  }
  // create employee
  async createOne(employee: EmployeeCreateDto): Promise<Employee> {
    return await this.employeeRepository.save(employee);
  }
  // update employee
  async updateOne(employee: EmployeeCreateDto): Promise<Employee> {
    return await this.employeeRepository.save(employee);
  }
  // delete employee
  async deleteOne(id: string): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
