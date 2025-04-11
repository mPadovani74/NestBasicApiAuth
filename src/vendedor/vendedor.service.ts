// src/vendedor/vendedor.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Vendedor } from './entities/vendedor.entity';
import { CreateVendedorDto } from './dto/create-vendedor.dto';
import { UpdateVendedorDto } from './dto/update-vendedor.dto';

@Injectable()
export class VendedorService {
  constructor(
    @InjectRepository(Vendedor)
    private readonly vendedorRepository: Repository<Vendedor>,
  ) {}

  async create(createVendedorDto: CreateVendedorDto): Promise<Vendedor> {
    const vendedor = this.vendedorRepository.create(createVendedorDto);
    return this.vendedorRepository.save(vendedor);
  }

  async findAll(): Promise<Vendedor[]> {
    return this.vendedorRepository.find();
  }

  async findOne(id: string): Promise<Vendedor> {
    const vendedor = await this.vendedorRepository.findOne({ where: { id } });
    if (!vendedor) {
      throw new NotFoundException(`Vendedor com id ${id} não encontrado`);
    }
    return vendedor;
  }

  async update(id: string, updateVendedorDto: UpdateVendedorDto): Promise<Vendedor> {
    const vendedor = await this.findOne(id);
    const updated = Object.assign(vendedor, updateVendedorDto);
    return this.vendedorRepository.save(updated);
  }

  async remove(id: string): Promise<void> {
    const result = await this.vendedorRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Vendedor com id ${id} não encontrado`);
    }
  }
}
