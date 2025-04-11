// src/vendedor/vendedor.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Vendedor } from './entities/vendedor.entity';
import { VendedorService } from './vendedor.service';
import { VendedorController } from './vendedor.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Vendedor])],
  providers: [VendedorService],
  controllers: [VendedorController],
  exports: [VendedorService],
})
export class VendedorModule {}
