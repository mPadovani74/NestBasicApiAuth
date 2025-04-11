import { Injectable } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { Repository } from 'typeorm';
import { Produto } from './entities/produto.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProdutosService {
  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>
  ){
    
  }
  
  create(createProdutoDto: CreateProdutoDto) {
   const produto = this.repository.create(createProdutoDto);
   return this.repository.save(produto);
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: string) {
    return this.repository.findOneBy({ id });
  }

  async update(id: string, updateProdutoDto: UpdateProdutoDto) {
   const produto = await this.repository.findOneBy({ id });
  if(!produto) return null;
   this.repository.merge(produto, updateProdutoDto);
  return this.repository.save(produto);
  }

  async remove(id: string) {
    const produto = await this.repository.findOneBy({ id });
    if(!produto) return null;
    return this.repository.remove(produto);
  }
}
