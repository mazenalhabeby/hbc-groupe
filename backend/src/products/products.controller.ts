import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { FileFieldsInterceptor } from '@nestjs/platform-express';
import { localUploadInterceptor } from 'src/common/interceptors/local-upload.interceptor';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @UseInterceptors(
    FileFieldsInterceptor(
      [{ name: 'images', maxCount: 10 }],
      localUploadInterceptor('products'),
    ),
  )
  create(
    @UploadedFiles()
    files: {
      images?: Express.Multer.File[];
    },
    @Body() dto: CreateProductDto,
  ) {
    console.log('Files:', files);
    console.log('Incoming DTO raw:', dto);
    return this.productsService.create(dto, files);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(id);
  }
}
