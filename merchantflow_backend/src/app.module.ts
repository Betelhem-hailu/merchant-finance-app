import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthController } from './modules/auth/auth.controller';
import { AuthsModule } from './modules/auth/auth.module';
import { UploadsModule } from './modules/uploads/uploads.module';
import { CategoryModule } from './modules/categories/category.module';
import { CategoryController } from './modules/categories/category.controller';
import { CategoriesService } from './modules/categories/category.service';
import { FinanceAccountModule } from './modules/financeAccounts/financeAccounts.module';
import { FinanceAccountController } from './modules/financeAccounts/financeAccount.controller';
import { FinanceAccountsService } from './modules/financeAccounts/financeAccounts.service';
import { TransactionModule } from './modules/transactions/transaction.module';
import { TransactionController } from './modules/transactions/transaction.controller';
import { TransactionsService } from './modules/transactions/transaction.service';

@Module({
  imports: [
    PrismaModule,
    AuthsModule,
    UploadsModule,
    CategoryModule,
    FinanceAccountModule,
    TransactionModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [
    AppController,
    AuthController,
    CategoryController,
    FinanceAccountController,
    TransactionController,
  ],
  providers: [
    AppService,
    PrismaService,
    CategoriesService,
    FinanceAccountsService,
    TransactionsService,
  ],
})
export class AppModule {}
