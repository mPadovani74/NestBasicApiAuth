import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fabricante } from './entities/fabricante.entity';
import { CreateFabricanteDto } from './dto/create-fabricante.dto';
import { UpdateFabricanteDto } from './dto/update-fabricante.dto';
import { Vendedor } from 'src/vendedor/entities/vendedor.entity';

@Injectable()
export class FabricanteService {
  constructor(
    @InjectRepository(Fabricante)
    private readonly fabricanteRepository: Repository<Fabricante>,

    @InjectRepository(Vendedor)
    private readonly vendedorRepository: Repository<Vendedor>,
  ) {}

  async create(createFabricanteDto: CreateFabricanteDto): Promise<Fabricante> {
    const vendedor = await this.vendedorRepository.findOne({ where: { id: createFabricanteDto.vendedorId } });
    if (!vendedor) {
      throw new NotFoundException(`Vendedor com id ${createFabricanteDto.vendedorId} não encontrado`);
    }
    const fabricante = this.fabricanteRepository.create({
      nome: createFabricanteDto.nome,
      vendedor,
    });
    return this.fabricanteRepository.save(fabricante);
  }

  async findAll(): Promise<Fabricante[]> {
    return this.fabricanteRepository.find({
      relations: ['vendedor'],
    });
  }

  async findOne(id: string): Promise<Fabricante> {
    const fabricante = await this.fabricanteRepository.findOne({ 
      where: { id },
      relations: ['vendedor'],
    });
    if (!fabricante) {
      throw new NotFoundException(`Fabricante com id ${id} não encontrado`);
    }
    return fabricante;
  }

  async update(id: string, updateFabricanteDto: UpdateFabricanteDto): Promise<Fabricante> {
    const fabricante = await this.findOne(id);
    
    if (updateFabricanteDto.vendedorId) {
      const vendedor = await this.vendedorRepository.findOne({ where: { id: updateFabricanteDto.vendedorId } });
      if (!vendedor) {
        throw new NotFoundException(`Vendedor com id ${updateFabricanteDto.vendedorId} não encontrado`);
      }
      fabricante.vendedor = vendedor;
    }
    
    fabricante.nome = updateFabricanteDto.nome ?? fabricante.nome;
    
    return this.fabricanteRepository.save(fabricante);
  }

  async remove(id: string): Promise<void> {
    const result = await this.fabricanteRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Fabricante com id ${id} não encontrado`);
    }
  }
}
