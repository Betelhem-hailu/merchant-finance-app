import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CategoriesService } from './category.service';
import { createCategoryDto } from './dto/create-category.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoriesService) {}

  @Post()
  create(
    @Body() createCategoryDto: createCategoryDto,
    @Req() req: Request & { user?: { id: string } },
  ) {
    const userId = req.user?.id as string;
    return this.categoryService.create(createCategoryDto, userId);
  }

  @Get()
  findAll(@Req() req: Request & { user?: { id: string } }) {
    const userId = req.user?.id as string;
    return this.categoryService.findAll(userId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: createCategoryDto,
  ) {
    return this.categoryService.update(id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryService.remove(id);
  }
}
