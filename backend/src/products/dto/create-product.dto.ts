import {
  IsEnum,
  IsOptional,
  IsString,
  IsNumber,
  IsArray,
  ValidateNested,
} from 'class-validator';
import { Transform, Type } from 'class-transformer';
import { WeightUnit } from '@Prisma/client';

class PackageDto {
  @Transform(({ value }) => parseFloat(String(value)))
  @IsNumber()
  length: number;

  @Transform(({ value }) => parseFloat(String(value)))
  @IsNumber()
  breadth: number;

  @Transform(({ value }) => parseFloat(String(value)))
  @IsNumber()
  width: number;

  @IsString()
  unit: 'cm' | 'in' | 'mm' | 'm';
}

class VariantDto {
  @IsOptional() @IsString() id?: string;
  @IsString() slug: string;
  @IsString() name: string;
  @IsString() sku: string;

  @Transform(({ value }) => parseFloat(String(value)))
  @IsNumber()
  price: number;

  @Transform(({ value }) => parseInt(String(value), 10))
  @IsNumber()
  stock: number;

  @Transform(({ value }) => {
    try {
      return typeof value === 'string'
        ? (JSON.parse(value) as Record<string, string>)
        : (value as Record<string, string>);
    } catch {
      return {};
    }
  })
  attributes: Record<string, string>;
}

export class CreateProductDto {
  @IsString() name: string;
  @IsString() slug: string;
  @IsString() description: string;

  @IsOptional() @IsString() seoTitle?: string;
  @IsOptional() @IsString() seoDesc?: string;

  @IsString() categoryId: string;
  @IsString() currency: string;
  @IsString() sku: string;

  @Transform(({ value }) => parseFloat(String(value)))
  @IsNumber()
  price: number;

  @Transform(({ value }) => parseInt(String(value), 10))
  @IsNumber()
  stock: number;

  @Transform(({ value }) => parseFloat(String(value)))
  @IsNumber()
  weight: number;

  @IsEnum(WeightUnit)
  weightUnit: WeightUnit;

  @Transform(({ value }) => {
    try {
      return typeof value === 'string'
        ? (JSON.parse(value) as string[])
        : (value as string[]);
    } catch {
      return [];
    }
  })
  @ValidateNested({ each: true })
  @Type(() => PackageDto)
  packages: PackageDto[];

  @Transform(({ value }) => {
    try {
      return typeof value === 'string'
        ? (JSON.parse(value) as string[])
        : (value as string[]);
    } catch {
      return [];
    }
  })
  @IsArray()
  @IsString({ each: true })
  variantFields: string[];

  @IsOptional()
  @Transform(({ value }) => {
    try {
      return typeof value === 'string'
        ? (JSON.parse(value) as VariantDto[])
        : (value as VariantDto[]);
    } catch {
      return [];
    }
  })
  @ValidateNested({ each: true })
  @Type(() => VariantDto)
  variants?: VariantDto[];
}
