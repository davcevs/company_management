import {
  IsDateString,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { PayType } from '../../enums/paytype.enum';
import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';

export class EmployeeCreateDto {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }) => value.trim())
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  email: string;

  @IsInt()
  @IsNotEmpty()
  @ApiProperty()
  phone: number;

  @IsDateString()
  @ApiProperty()
  hireDate: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  jobTitle: string;

  @IsEnum(PayType)
  @ApiProperty({
    enum: PayType,
    description: 'Choose a pay type',
    required: true,
  })
  payType: PayType;

  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  PayRate: number;

  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  DepartmentId: number;

  // check if employee is active with boolean value
  @IsInt()
  @IsNotEmpty()
  @Transform(({ value }) => parseInt(value))
  @ApiProperty()
  isActive: boolean;
}
