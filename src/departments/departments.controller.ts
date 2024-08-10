import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DepartmentsService } from './departments.service';
import {
  ApiBody,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { Department } from './departments.entity';
import { DepartmentCreateDto } from './dtos/department-create.dto';

@UsePipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }),
)
@ApiTags('Departments')
@Controller('departments')
export class DepartmentsController {
  constructor(private readonly departmentService: DepartmentsService) {}
  @Get()
  @ApiOperation({
    summary: 'Get all departments',
  })
  @ApiOkResponse({
    description: 'Returns all departments with employees',
    type: Department,
    isArray: true,
  })
  findAll(): Promise<Department[]> {
    return this.departmentService.findAll();
  }
  @Get()
  @ApiOperation({
    summary: 'Get all departments without employees',
  })
  @ApiOkResponse({
    description: 'Returns all departments without employees',
    type: Department,
    isArray: true,
  })
  findAllWithoutEmployees(): Promise<Department[]> {
    return this.departmentService.findAllWithoutEmployees();
  }
  // create a new department
  @Post()
  @ApiOperation({
    summary: 'Create a new department',
  })
  @ApiOkResponse({
    description: 'Returns the newly created department',
    type: Department,
  })
  @ApiBody({
    type: DepartmentCreateDto,
  })
  create(@Body() department: DepartmentCreateDto): Promise<Department> {
    return this.departmentService.create(department);
  }
  // update an existing department
  @Put('/:id')
  @ApiOperation({
    summary: 'Update an existing department',
  })
  @ApiOkResponse({
    description: 'updated department',
    type: Department,
  })
  @ApiParam({
    name: 'id',
    type: String,
  })
  update(
    @Param('id') id: string,
    @Body() department: DepartmentCreateDto,
  ): Promise<Department> {
    return this.departmentService.update(id, department);
  }
  // delete an existing department
  @Delete('/:id')
  @ApiOperation({
    summary: 'Delete an existing department',
  })
  @ApiOkResponse({
    description: 'deleted department',
    type: Department,
  })
  @ApiParam({
    name: 'id',
    type: String,
  })
  delete(@Param('id') id: string): Promise<void> {
    return this.departmentService.delete(id);
  }
}
