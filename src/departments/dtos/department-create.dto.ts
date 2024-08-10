import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class DepartmentCreateDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty({
    type: String,
    description: 'Name of the department',
    example: 'IT',
    required: true,
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Description of the department',
    example: 'IT department',
    required: true,
  })
  description: string;
  // check if department is active
  @IsBoolean()
  @IsNotEmpty()
  active: boolean;

  //location
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'Location of the department',
    example: 'London',
    required: true,
  })
  location: string;

  // budget
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    type: Number,
    description: 'Budget of the department',
    example: 100000,
    required: true,
  })
  budget: number;
}
