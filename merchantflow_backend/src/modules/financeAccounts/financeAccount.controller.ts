import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { FinanceAccountsService } from './financeAccounts.service';
import { createFinanceAccountDto } from './dto/create-finaceAcc.dto';

@Controller('finance-accounts')
export class FinanceAccountController {
  constructor(private readonly financeAccountService: FinanceAccountsService) {}

  @Post()
  create(
    @Body() createFinanceAccountDto: createFinanceAccountDto,
    @Req() req: Request & { user?: { id: string } },
  ) {
    const userId = req.user?.id as string;
    return this.financeAccountService.create(createFinanceAccountDto, userId);
  }

  @Get()
  findAll(@Req() req: Request & { user?: { id: string } }) {
    const userId = req.user?.id as string;
    return this.financeAccountService.findAll(userId);
  }
}
