import { ApiProperty } from '@nestjs/swagger';
import { Department } from 'src/departments/departments.entity';
import { PayType } from 'src/enums/paytype.enum';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    type: 'integer',
    description: 'Employee ID',
    example: 1,
  })
  id: string;

  @ApiProperty({
    type: 'string',
    description: 'Employee Name',
    example: 'John',
  })
  name: string;

  @ApiProperty({
    type: 'string',
    description: 'Employee Email',
    example: 'john.doe',
  })
  email: string;

  @ApiProperty({
    type: 'number',
    description: 'Employee Phone',
    example: 1234567890,
  })
  phone: number;

  // hire date
  @ApiProperty({
    type: 'date',
    description: 'Employee Hire Date',
    example: '2020-01-01',
  })
  hireDate: Date;
  // job title
  @ApiProperty({
    type: 'string',
    description: 'Employee Job Title',
    example: 'Developer',
  })
  jobTitle: string;
  // department

  @ApiProperty({
    type: 'string',
    description: 'Employee Pay Type',
    example: PayType.Hourly,
  })
  payType: PayType;
  @ApiProperty({
    type: 'number',
    description: 'Employee Salary',
    example: 1000,
  })
  PayRate: number;
  // department
  @ManyToOne(() => Department, (department) => department.employees)
  department: Department;
  // check if employee is active
  @ApiProperty({
    type: 'boolean',
    description: 'Employee Is Active',
    example: true,
  })
  isActive: boolean;
}
