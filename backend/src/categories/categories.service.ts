import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { handlePrismaError } from 'src/common/utils/handle-prisma-error';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async create(dto: CreateCategoryDto, imageUrl?: string) {
    try {
      const category = await this.prisma.category.create({
        data: { ...dto, imageUrl },
      });
      return category;
    } catch (error: any) {
      throw handlePrismaError(error, 'category');
    }
  }

  findAll() {
    return this.prisma.category.findMany();
  }

  async findOne(id: string) {
    const category = await this.prisma.category.findUnique({ where: { id } });
    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async update(id: string, dto: UpdateCategoryDto) {
    const exists = await this.prisma.category.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Category not found');

    return this.prisma.category.update({ where: { id }, data: dto });
  }

  async remove(id: string) {
    const exists = await this.prisma.category.findUnique({ where: { id } });
    if (!exists) throw new NotFoundException('Category not found');

    return this.prisma.category.delete({ where: { id } });
  }
}
