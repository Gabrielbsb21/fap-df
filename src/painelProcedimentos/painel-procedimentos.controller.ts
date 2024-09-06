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
import { PainelProcedimentosService } from './painel-procedimentos.service';
import { PainelProcedimentos } from './entities/painel-procedimentos.entity';
import { ConfigService } from '@nestjs/config';

@ApiTags('Painel Procedimentos')
@Controller('painel-procedimentos')
export class PainelProcedimentosController {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
    private readonly painelProcedimentosService: PainelProcedimentosService,
  ) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Obter todas as entradas do painel de procedimentos com paginação e filtros' })
  @ApiResponse({ status: 200, description: 'Lista de todas as entradas do painel de procedimentos.' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'ano', required: false, type: Number, example: 2023 })
  @ApiQuery({ name: 'mes', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'regiaoSaude', required: false, type: String, example: 'Região Central' })
  @ApiQuery({ name: 'sexo', required: false, type: String, example: 'Feminino' })
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('ano') ano?: number,
    @Query('mes') mes?: number,
    @Query('regiaoSaude') regiaoSaude?: string,
    @Query('sexo') sexo?: string,
  ): Promise<any> {
    if (page < 1) {
      throw new BadRequestException('O número da página deve ser maior que 0.');
    }

    if (limit < 1) {
      throw new BadRequestException('O limite deve ser um valor positivo.');
    }

    const maxLimit = this.configService.get<number>('PAGINATION_LIMIT', 10);
    const take = Math.min(limit, maxLimit);

    const { data, total } = await this.painelProcedimentosService.findAll(page, take, ano, mes, regiaoSaude, sexo);
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
  @ApiOperation({ summary: 'Obter uma entrada do painel de procedimentos pelo ID' })
  @ApiResponse({ status: 200, description: 'A entrada do painel de procedimentos.' })
  @ApiResponse({ status: 404, description: 'Entrada não encontrada.' })
  async findOne(@Param('id') id: string): Promise<PainelProcedimentos> {
    const painelProcedimentos = await this.painelProcedimentosService.findOne(parseInt(id, 10));
    if (!painelProcedimentos) {
      throw new NotFoundException('Entrada não encontrada.');
    }
    return painelProcedimentos;
  }
}
