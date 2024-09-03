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
import { ObitosResidentesDFService } from './obitos-residentes-df.service';
import { ObitosResidentesDF } from './entities/obitos-residentes-df.entity';
import { ConfigService } from '@nestjs/config';

@ApiTags('Obitos Residentes DF')
@Controller('obitos-residentes-df')
export class ObitosResidentesDFController {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
    private readonly obitosResidentesDFService: ObitosResidentesDFService,
  ) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary:
      'Obter todas as entradas de óbitos de residentes no DF com paginação e filtros',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de todas as entradas de óbitos de residentes no DF.',
  })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'ano', required: false, type: Number, example: 2023 })
  @ApiQuery({
    name: 'sexo',
    required: false,
    type: String,
    example: 'Feminino',
  })
  @ApiQuery({ name: 'cid', required: false, type: String, example: 'I251' })
  @ApiQuery({ name: 'cnes', required: false, type: Number, example: 12345 })
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('ano') ano?: number,
    @Query('sexo') sexo?: string,
    @Query('cid') cid?: string,
    @Query('cnes') cnes?: number,
  ): Promise<any> {
    if (page < 1) {
      throw new BadRequestException('O número da página deve ser maior que 0.');
    }

    if (limit < 1) {
      throw new BadRequestException('O limite deve ser um valor positivo.');
    }

    const maxLimit = this.configService.get<number>('PAGINATION_LIMIT', 10);
    const take = Math.min(limit, maxLimit);

    const { data, total } = await this.obitosResidentesDFService.findAll(
      page,
      take,
      ano,
      sexo,
      cid,
      cnes,
    );
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
  @ApiOperation({
    summary: 'Obter uma entrada de óbitos de residentes no DF pelo ID',
  })
  @ApiResponse({
    status: 200,
    description: 'A entrada de óbitos de residentes no DF.',
  })
  @ApiResponse({ status: 404, description: 'Entrada não encontrada.' })
  async findOne(@Param('id') id: string): Promise<ObitosResidentesDF> {
    const obitosResidentesDF = await this.obitosResidentesDFService.findOne(
      parseInt(id, 10),
    );
    if (!obitosResidentesDF) {
      throw new NotFoundException('Entrada não encontrada.');
    }
    return obitosResidentesDF;
  }
}
