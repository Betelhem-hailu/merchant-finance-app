import { Body, Controller, Get, Param, Post, Req } from '@nestjs/common';
import { TransactionsService } from './transaction.service';
import { createTransactionDto } from './dto/create-transaction';

@Controller('transactions')
export class TransactionController {
  constructor(private readonly transactionService: TransactionsService) {}

  @Post()
  create(
    @Body() createTransactionDto: createTransactionDto,
    //@Req() req: Request & { user?: { id: string } },
  ) {
    return this.transactionService.create(createTransactionDto);
  }

  @Get()
  findAll(@Req() req: Request & { user?: { id: string } }) {
    const userId = req.user?.id as string;
    return this.transactionService.findAll(userId);
  }

  @Get(':id')
  findOne(
    @Req() req: Request & { user?: { id: string } },
    @Param('id') id: string,
  ) {
    const userId = req.user?.id as string;
    return this.transactionService.findOne(id, userId);
  }
}
