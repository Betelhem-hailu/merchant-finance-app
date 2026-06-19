import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { TransactionsService } from './transaction.service';
import { TransactionController } from './transaction.controller';

@Module({
  imports: [PrismaModule],
  providers: [TransactionsService],
  controllers: [TransactionController],
})
export class TransactionModule {}
