// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { ProdutosModule } from './produtos/produtos.module';
import { FabricanteModule } from './fabricante/fabricante.module';
import { VendedorModule } from './vendedor/vendedor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite', 
      database: 'banco.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, 
    }),
    AuthModule,
    ProdutosModule,
    FabricanteModule,
    VendedorModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
