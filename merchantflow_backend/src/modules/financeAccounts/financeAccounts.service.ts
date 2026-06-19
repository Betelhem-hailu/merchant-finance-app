import { Injectable } from '@nestjs/common';
import { createFinanceAccountDto } from './dto/create-finaceAcc.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ApiResponse } from 'src/common/types/common';

@Injectable()
export class FinanceAccountsService {
  // Implement your service methods here
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createFinanceAccountDto: createFinanceAccountDto,
    userId: string,
  ): Promise<ApiResponse> {
    await this.prisma.financeAccount.create({
      data: {
        accountName: createFinanceAccountDto.accountName,
        accountType: createFinanceAccountDto.accountType,
        accountNumber: createFinanceAccountDto.accountNumber,
        openingBalance: createFinanceAccountDto.openingBalance,
        currentBalance: createFinanceAccountDto.openingBalance,
        userId,
      },
    });
    return {
      success: true,
      message: 'Finance account created successfully',
      data: null,
    };
  }

  async findAll(userId: string): Promise<ApiResponse> {
    const result = await this.prisma.financeAccount.findMany({
      where: {
        userId,
      },
    });
    const formattedResult = result.map((item) => ({
      id: item.id,
      accountName: item.accountName,
      accountType: item.accountType,
      accountNumber: item.accountNumber,
      currentBalance: item.currentBalance,
    }));

    return {
      success: true,
      message: 'Finance accounts retrieved successfully',
      data: formattedResult,
    };
  }
}
