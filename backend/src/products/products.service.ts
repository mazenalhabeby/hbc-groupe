import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaService } from 'src/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Prisma } from '@Prisma/client';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    dto: CreateProductDto,
    files: {
      images?: Express.Multer.File[];
    },
  ) {
    const imageFiles = files?.images || [];

    if (imageFiles.length < 1) {
      throw new BadRequestException('At least one product image is required.');
    }

    const imageData = imageFiles.map((file, index) => ({
      url: this.getFileUrl(file),
      position: index,
    }));

    let parsedPackages: Prisma.InputJsonValue;
    try {
      parsedPackages = dto.packages as unknown as Prisma.InputJsonValue;
    } catch {
      throw new BadRequestException('Invalid packages format');
    }

    const product = await this.prisma.product.create({
      data: {
        ...dto,
        price: dto.price !== undefined ? Number(dto.price) : 0,
        weight: dto.weight !== undefined ? Number(dto.weight) : 0,
        stock: dto.stock !== undefined ? Number(dto.stock) : 0,
        weightUnit: dto.weightUnit,
        packages: parsedPackages,
        variantFields: dto.variantFields,
        images: {
          create: imageData,
        },
        variants: dto.variants
          ? {
              create: (
                (typeof dto.variants === 'string'
                  ? JSON.parse(dto.variants)
                  : dto.variants) as Array<{
                  name: string;
                  slug: string;
                  sku: string;
                  price: number | string;
                  stock: number | string;
                  attributes: any;
                }>
              ).map((variant) => ({
                name: variant.name,
                slug: variant.slug,
                sku: variant.sku,
                price: Number(variant.price),
                stock: Number(variant.stock),
                metadata: variant.attributes as Prisma.InputJsonValue,
              })),
            }
          : undefined,
      },
    });

    return product;
  }

  async findAll() {
    return this.prisma.product.findMany({
      include: {
        images: true,
        variants: true,
        Category: true,
      },
    });
  }

  async findOne(id: string) {
    const product = await this.prisma.product.findUnique({
      where: { id },
      include: {
        images: true,
        variants: {
          include: {
            attributes: true,
            ProductImage: true,
          },
        },
        Category: true,
      },
    });

    if (!product) throw new NotFoundException('Product not found');
    return product;
  }

  private getFileUrl(file?: Express.Multer.File): string {
    return file?.path ?? file?.filename ?? '';
  }
}
