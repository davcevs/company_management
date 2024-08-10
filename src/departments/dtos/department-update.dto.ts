import { IsBoolean, IsInt, IsString, Min } from 'class-validator';

export class DepartmentUpdateDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
  // update if department is active true or false
  @IsBoolean()
  active: boolean;
  // update employees of the department
  @IsString({ each: true })
  employees: string[];

  @IsString()
  location: string;

  @IsInt()
  @Min(1)
  budget: number;
}
