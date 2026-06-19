import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { FinanceAccountsService } from './financeAccounts.service';
import { FinanceAccountController } from './financeAccount.controller';

@Module({
  imports: [PrismaModule],
  providers: [FinanceAccountsService],
  controllers: [FinanceAccountController],
})
export class FinanceAccountModule {}
