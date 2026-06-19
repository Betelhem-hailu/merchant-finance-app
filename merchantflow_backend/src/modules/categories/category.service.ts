import { Injectable } from '@nestjs/common';
import { createCategoryDto } from './dto/create-category.dto';
import { ApiResponse } from 'src/common/types/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createCategoryDto: createCategoryDto,
    userId: string,
  ): Promise<ApiResponse> {
    const category = await this.prisma.category.create({
      data: {
        name: createCategoryDto.name,
        type: createCategoryDto.type,
        image: createCategoryDto.imageUrl,
        userId,
      },
    });

    return {
      success: true,
      message: 'Category created successfully',
      data: category,
    };
  }

  async findAll(userId: string): Promise<ApiResponse> {
    const result = await this.prisma.category.findMany({
      where: {
        userId,
      },
    });
    const formattedResult = result.map((item) => ({
      id: item.id,
      name: item.name,
      type: item.type,
      imageUrl: item.image,
    }));

    const Categories = {
      expense: formattedResult.filter((item) => item.type === 'EXPENSE'),
      income: formattedResult.filter((item) => item.type === 'INCOME'),
    };

    return {
      success: true,
      message: 'Categories retrieved successfully',
      data: Categories,
    };
  }

  async findOne(id: string): Promise<ApiResponse> {
    const result = await this.prisma.category.findUnique({
      where: { id },
    });
    if (!result) {
      return {
        success: false,
        message: 'Category not found',
        data: null,
      };
    }
    const formattedResult = {
      id: result.id,
      name: result.name,
      type: result.type,
      imageUrl: result.image,
    };
    return {
      success: true,
      message: 'Category retrieved successfully',
      data: formattedResult,
    };
  }

  async update(
    id: string,
    updateCategoryDto: createCategoryDto,
  ): Promise<ApiResponse> {
    const result = await this.prisma.category.update({
      where: { id },
      data: {
        name: updateCategoryDto.name,
        type: updateCategoryDto.type,
        image: updateCategoryDto.imageUrl,
      },
    });
    const formattedResult = {
      id: result.id,
      name: result.name,
      type: result.type,
      imageUrl: result.image,
    };
    return {
      success: true,
      message: 'Category updated successfully',
      data: formattedResult,
    };
  }

  async remove(id: string): Promise<ApiResponse> {
    await this.prisma.category.delete({
      where: { id },
    });
    return {
      success: true,
      message: 'Category deleted successfully',
      data: null,
    };
  }
}
