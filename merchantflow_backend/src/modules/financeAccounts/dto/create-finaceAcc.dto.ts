import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export enum AccountType {
  Cash = 'CASH',
  Bank = 'BANK',
  Mobile_Money = 'MOBILE_MONEY',
}

export class createFinanceAccountDto {
  @IsString()
  accountName!: string;

  @IsString()
  accountType!: AccountType;

  @IsString()
  accountNumber!: string;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  openingBalance!: number;
}
