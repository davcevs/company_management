import { EmployeeCreateDto } from './employee-create.dto';
export class EmployeeResponseDto extends EmployeeCreateDto {
  id: number;
  createdAt: Date;
  updatedAt: Date;
}
