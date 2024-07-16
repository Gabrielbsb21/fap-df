import {
  BadRequestException,
  Controller,
  Get,
  HttpCode,
  Inject,
  NotFoundException,
  Param,
  Query,
} from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiQuery } from '@nestjs/swagger';
import { SiaService } from './sia.service';
import { Sia } from './entities/sia.entity';
import { ConfigService } from '@nestjs/config';

@ApiTags('SIA')
@Controller('sia')
export class SiaController {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
    private readonly siaService: SiaService,
  ) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: 'Obter todas as entradas de SIA com paginação e filtros',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de todas as entradas de SIA.',
  })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'ano', required: false, type: Number, example: 2023 })
  @ApiQuery({ name: 'mes', required: false, type: Number, example: 1 })
  @ApiQuery({
    name: 'siglaEstab',
    required: false,
    type: String,
    example: 'HRAN',
  })
  @ApiQuery({
    name: 'regiaoSaude',
    required: false,
    type: String,
    example: 'Região Central',
  })
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit?: number,
    @Query('ano') ano?: number,
    @Query('mes') mes?: number,
    @Query('siglaEstab') siglaEstab?: string,
    @Query('regiaoSaude') regiaoSaude?: string,
  ): Promise<any> {
    const maxLimit = this.configService.get<number>('PAGINATION_LIMIT', 10); // Limite máximo de registros por página (padrão: 10)
    const take = limit ? Math.min(limit, maxLimit) : maxLimit; // Limita o take ao máximo permitido

    if (!page || !limit) {
      return {
        message:
          'A paginação é obrigatória. Use os parâmetros "page" e "limit" para obter os resultados.',
        example: 'GET /sia?page=1&limit=10',
      };
    }

    if (limit > maxLimit) {
      throw new BadRequestException(
        `O limite máximo de registros por página é ${maxLimit}`,
      );
    }

    const filters = {
      ano,
      mes,
      siglaEstab,
      regiaoSaude,
    };

    const { data, total } = await this.siaService.findAll(page, take, filters);
    const totalPages = Math.ceil(total / take);

    return {
      data,
      meta: {
        currentPage: page,
        totalPages,
        totalItems: total,
        hasNextPage: page < totalPages,
        hasPreviousPage: page > 1,
      },
    };
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obter uma entrada de SIA pelo ID' })
  @ApiResponse({ status: 200, description: 'A entrada de SIA.' })
  @ApiResponse({ status: 404, description: 'Entrada não encontrada.' })
  async findOne(@Param('id') id: string): Promise<Sia> {
    const sia = await this.siaService.findOne(parseInt(id, 10));
    if (!sia) {
      throw new NotFoundException('Entrada não encontrada.');
    }
    return sia;
  }
}
