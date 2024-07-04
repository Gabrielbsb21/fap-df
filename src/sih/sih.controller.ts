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
import { SihService } from './sih.service';
import { Sih } from './entities/sih.entity';
import { ConfigService } from '@nestjs/config';

@ApiTags('SIH')
@Controller('sih')
export class SihController {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
    private readonly sihService: SihService,
  ) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: 'Obter todas as entradas de SIH com paginação e filtro por ano',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de todas as entradas de SIH.',
  })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'ano', required: false, type: Number, example: 2023 })
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit?: number,
    @Query('ano') ano?: number,
  ): Promise<any> {
    const maxLimit = this.configService.get<number>('PAGINATION_LIMIT', 10);
    const take = limit ? Math.min(limit, maxLimit) : maxLimit;

    if (!page || !limit) {
      return {
        message:
          'A paginação é obrigatória. Use os parâmetros "page" e "limit" para obter os resultados.',
        example: 'GET /sih?page=1&limit=10',
      };
    }

    if (limit > maxLimit) {
      throw new BadRequestException(
        `O limite máximo de registros por página é ${maxLimit}`,
      );
    }

    const { data, total } = await this.sihService.findAll(page, take, ano);
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
  @ApiOperation({ summary: 'Obter uma entrada de SIH pelo ID' })
  @ApiResponse({ status: 200, description: 'A entrada de SIH.' })
  @ApiResponse({ status: 404, description: 'Entrada não encontrada.' })
  async findOne(@Param('id') id: string): Promise<Sih> {
    const sih = await this.sihService.findOne(parseInt(id, 10));
    if (!sih) {
      throw new NotFoundException('Entrada não encontrada.');
    }
    return sih;
  }
}
