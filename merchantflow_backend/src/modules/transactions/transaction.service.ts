import { BadRequestException, Injectable } from '@nestjs/common';
import { ApiResponse } from 'src/common/types/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { createTransactionDto } from './dto/create-transaction';

@Injectable()
export class TransactionsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createTransactionDto: createTransactionDto,
  ): Promise<ApiResponse> {
    const transactionType = String(createTransactionDto.transactionType);

    if (createTransactionDto.amount <= 0) {
      return {
        success: false,
        message: 'Amount must be greater than zero',
        data: null,
      };
    }

    const TRANSACTION_CONFIG: Record<
      'DEBITS' | 'CREDITS',
      { categoryType: 'EXPENSE' | 'INCOME'; errorMessage: string }
    > = {
      DEBITS: {
        categoryType: 'EXPENSE',
        errorMessage: 'Category type must be EXPENSE for DEBITS transaction',
      },
      CREDITS: {
        categoryType: 'INCOME',
        errorMessage: 'Category type must be INCOME for CREDITS transaction',
      },
    };

    if (!(transactionType in TRANSACTION_CONFIG)) {
      return {
        success: false,
        message: 'Invalid transaction type',
        data: null,
      };
    }

    const config = TRANSACTION_CONFIG[transactionType as 'DEBITS' | 'CREDITS'];

    const category = await this.prisma.category.findUnique({
      where: { id: createTransactionDto.categoryId },
    });
    if (!category) {
      return { success: false, message: 'Category not found', data: null };
    }
    if (category.type !== config.categoryType) {
      return { success: false, message: config.errorMessage, data: null };
    }

    const account = await this.prisma.financeAccount.findUnique({
      where: { id: createTransactionDto.accountId },
    });
    if (!account) {
      return { success: false, message: 'Account not found', data: null };
    }

    if (
      transactionType === 'DEBITS' &&
      account.currentBalance.toNumber() < createTransactionDto.amount
    ) {
      return { success: false, message: 'Insufficient balance', data: null };
    }

    const balanceDelta =
      transactionType === 'DEBITS'
        ? -createTransactionDto.amount
        : +createTransactionDto.amount;

    await this.prisma.$transaction(async (tx) => {
      const freshAccount = await tx.financeAccount.findUnique({
        where: { id: createTransactionDto.accountId },
      });

      if (
        freshAccount &&
        freshAccount.currentBalance.toNumber() < createTransactionDto.amount
      ) {
        throw new BadRequestException('Insufficient balance');
      }
      await tx.financeAccount.update({
        where: { id: createTransactionDto.accountId },
        data: {
          currentBalance: account.currentBalance.toNumber() + balanceDelta,
        },
      });

      await tx.transaction.create({
        data: {
          description: createTransactionDto.description,
          transactionType: createTransactionDto.transactionType,
          amount: createTransactionDto.amount,
          accountId: createTransactionDto.accountId,
          categoryId: createTransactionDto.categoryId,
        },
      });
    });
    return {
      success: true,
      message: 'Transaction created successfully',
    };
  }

  async findAll(userId: string): Promise<ApiResponse> {
    const accounts = await this.prisma.financeAccount.findMany({
      where: {
        userId,
      },
      select: {
        id: true,
        accountName: true,
        accountType: true,
        accountNumber: true,
      },
    });
    const accountIds = accounts.map((account) => account.id);
    const result = await this.prisma.transaction.findMany({
      where: {
        accountId: {
          in: accountIds,
        },
      },
    });

    const formattedResult = result.map((item) => ({
      id: item.id,
      description: item.description,
      transactionType: item.transactionType,
      amount: item.amount,
      accountId: item.accountId,
      accountName: accounts.find((account) => account.id === item.accountId)
        ?.accountName,
      accountType: accounts.find((account) => account.id === item.accountId)
        ?.accountType,
      accountNumber: accounts.find((account) => account.id === item.accountId)
        ?.accountNumber,
    }));

    return {
      success: true,
      message: 'Transactions found successfully',
      data: formattedResult,
    };
  }

  async findOne(id: string, userId: string): Promise<ApiResponse> {
    const result = await this.prisma.transaction.findUnique({
      where: { id },
    });
    if (!result) {
      return {
        success: false,
        message: 'Transaction not found',
        data: null,
      };
    }
    if (result.accountId) {
      const account = await this.prisma.financeAccount.findUnique({
        where: { id: result.accountId },
        select: {
          userId: true,
        },
      });
      if (!account || account.userId !== userId) {
        return {
          success: false,
          message: 'Transaction not found for this user',
          data: null,
        };
      }
    }
    const account = await this.prisma.financeAccount.findUnique({
      where: { id: result.accountId },
      select: {
        accountName: true,
        accountType: true,
        accountNumber: true,
      },
    });
    const formattedResult = {
      id: result.id,
      description: result.description,
      transactionType: result.transactionType,
      amount: result.amount,
      accountId: result.accountId,
      accountName: account?.accountName,
      accountType: account?.accountType,
      accountNumber: account?.accountNumber,
    };
    return {
      success: true,
      message: 'Transaction retrieved successfully',
      data: formattedResult,
    };
  }
}
