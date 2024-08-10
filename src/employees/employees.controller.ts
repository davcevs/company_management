import {
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { EmployeeQueryDto } from './dtos/employee-query.dto';
import { Employee } from './employee.entity';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { EmployeeCreateDto } from './dtos/employee-create.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    transform: true,
  }),
)
@ApiTags('Employees')
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeeService: EmployeesService) {}
  @Get('/')
  @ApiOperation({ summary: 'get all employees' })
  @ApiOkResponse({
    description: 'get all employees',
    type: Employee,
    isArray: true,
  })
  findAll(query: EmployeeQueryDto): Promise<Employee[]> {
    return this.employeeService.findAll(query);
  }
  // create new employee
  @Post('/')
  @ApiOperation({
    summary: 'create new employee',
  })
  @ApiCreatedResponse({ description: 'create new employee', type: Employee })
  @ApiBody({
    type: EmployeeCreateDto,
  })
  createOne(employee: EmployeeCreateDto): Promise<Employee> {
    return this.employeeService.createOne(employee);
  }
  // update existing employee
  @Post('/:id')
  @ApiOperation({
    summary: 'update existing employee',
  })
  @ApiResponse({
    description: 'update existing employee',
    type: Employee,
  })
  @ApiBody({
    type: EmployeeCreateDto,
  })
  updateOne(employee: EmployeeCreateDto): Promise<Employee> {
    return this.employeeService.updateOne(employee);
  }
  // delete existing employee
  @Post('/:id/delete')
  @ApiOperation({
    summary: 'delete existing employee',
  })
  @ApiResponse({
    description: 'delete existing employee',
    type: Employee,
  })
  deleteOne(id: string): Promise<void> {
    return this.employeeService.deleteOne(id);
  }
}
