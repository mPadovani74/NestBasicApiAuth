import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FabricanteService } from './fabricante.service';
import { FabricanteController } from './fabricante.controller';
import { Fabricante } from './entities/fabricante.entity';
import { Vendedor } from 'src/vendedor/entities/vendedor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fabricante, Vendedor])],
  controllers: [FabricanteController],
  providers: [FabricanteService],
})
export class FabricanteModule {}
