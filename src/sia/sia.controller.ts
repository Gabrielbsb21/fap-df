import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { SiaService } from './sia.service';
import { Sia } from './entities/sia.entity';

@ApiTags('sia')
@Controller('sia')
export class SiaController {
  constructor(private readonly siaService: SiaService) {}

  @Get()
  @ApiOperation({ summary: 'Obter todas as entradas de SIA' })
  @ApiResponse({ status: 200, description: 'Lista de todas as entradas de SIA.' })
  findAll(): Promise<Sia[]> {
    return this.siaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma entrada de SIA pelo ID' })
  @ApiResponse({ status: 200, description: 'A entrada de SIA.' })
  @ApiResponse({ status: 404, description: 'Entrada não encontrada.' })
  findOne(@Param('id') id: number): Promise<Sia> {
    return this.siaService.findOne(id);
  }
}

