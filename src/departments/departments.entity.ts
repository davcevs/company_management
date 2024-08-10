import { ApiProperty } from '@nestjs/swagger';
import { Employee } from 'src/employees/employee.entity';
import { Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Department {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty({
    type: String,
    description: 'Department ID',
    example: '123e4567-e89b-12d3-a456-426655440000',
  })
  id: string;

  @ApiProperty({
    type: String,
    description: 'Department Name',
    example: 'IT',
  })
  name: string;
  // check if department is active
  @ApiProperty({
    type: Boolean,
    description: 'Is Department Active',
    example: true,
  })
  isActive: boolean;
  // employees in the department
  @OneToMany(() => Employee, (employee) => employee.department)
  employees: Employee[];

  // office location
  @ApiProperty({
    type: String,
    description: 'Office Location',
    example: 'New York',
  })
  officeLocation: string;

  // budget
  @ApiProperty({
    type: Number,
    description: 'Department Budget',
    example: 100000,
  })
  budget: number;
}
