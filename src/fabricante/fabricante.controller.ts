import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { FabricanteService } from './fabricante.service';
import { CreateFabricanteDto } from './dto/create-fabricante.dto';
import { UpdateFabricanteDto } from './dto/update-fabricante.dto';

@Controller('fabricante')
export class FabricanteController {
  constructor(private readonly fabricanteService: FabricanteService) {}

  @Post()
  async create(@Body() createFabricanteDto: CreateFabricanteDto) {
    return this.fabricanteService.create(createFabricanteDto);
  }

  @Get()
  async findAll() {
    return this.fabricanteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.fabricanteService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFabricanteDto: UpdateFabricanteDto,
  ) {
    return this.fabricanteService.update(id, updateFabricanteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.fabricanteService.remove(id);
  }
}
