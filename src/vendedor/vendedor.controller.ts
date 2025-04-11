// src/vendedor/vendedor.controller.ts
import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { VendedorService } from './vendedor.service';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Controller('vendedor')
export class VendedorController {
  constructor(private readonly vendedorService: VendedorService) {}

  @Post()
  async create(@Body() createVendedorDto: CreateVendedorDto) {
    return this.vendedorService.create(createVendedorDto);
  }

  @Get()
  async findAll() {
    return this.vendedorService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.vendedorService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateVendedorDto: UpdateVendedorDto,
  ) {
    return this.vendedorService.update(id, updateVendedorDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.vendedorService.remove(id);
  }
}
