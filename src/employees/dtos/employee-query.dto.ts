import { IsBoolean, IsEnum, IsString } from 'class-validator';
import { PayType } from 'src/enums/paytype.enum';

export class EmployeeQueryDto {
  @IsString()
  jobTitle: string;

  @IsEnum(PayType)
  payType: PayType;

  @IsBoolean()
  isActive: boolean;
}
