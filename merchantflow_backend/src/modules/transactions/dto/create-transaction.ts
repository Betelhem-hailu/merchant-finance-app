import { Type } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export enum TransactionType {
  Credits = 'CREDITS',
  Debits = 'DEBITS',
}

export class createTransactionDto {
  @IsString()
  description!: string;

  @IsString()
  transactionType!: TransactionType;

  @Type(() => Number)
  @IsNumber({ maxDecimalPlaces: 2 })
  amount!: number;

  @IsString()
  accountId!: string;

  @IsString()
  categoryId!: string;
}
