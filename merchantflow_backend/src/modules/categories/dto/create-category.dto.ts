import { IsString } from 'class-validator';

export enum CategoryType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export class createCategoryDto {
  @IsString()
  name!: string;

  @IsString()
  type!: CategoryType;

  @IsString()
  imageUrl!: string;
}
