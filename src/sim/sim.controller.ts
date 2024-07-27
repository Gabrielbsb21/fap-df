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
import { SimService } from './sim.service';
import { Sim } from './entities/sim.entity';
import { ConfigService } from '@nestjs/config';

@ApiTags('SIM')
@Controller('sim')
export class SimController {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
    private readonly simService: SimService,
  ) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({
    summary: 'Obter todas as entradas de SIM com paginação e filtros',
  })
  @ApiResponse({
    status: 200,
    description: 'Lista de todas as entradas de SIM.',
  })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'ano', required: false, type: Number, example: 2023 })
  @ApiQuery({ name: 'cid', required: false, type: String, example: 'A00' })
  @ApiQuery({ name: 'sexo', required: false, type: String, example: 'M' })
  @ApiQuery({ name: 'cnes', required: false, type: Number, example: 12345 })
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('ano') ano?: number,
    @Query('cid') cid?: string,
    @Query('sexo') sexo?: string,
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

    const { data, total } = await this.simService.findAll(
      page,
      take,
      ano,
      cid,
      sexo,
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
  @ApiOperation({ summary: 'Obter uma entrada de SIM pelo ID' })
  @ApiResponse({ status: 200, description: 'A entrada de SIM.' })
  @ApiResponse({ status: 404, description: 'Entrada não encontrada.' })
  async findOne(@Param('id') id: string): Promise<Sim> {
    const sim = await this.simService.findOne(parseInt(id, 10));
    if (!sim) {
      throw new NotFoundException('Entrada não encontrada.');
    }
    return sim;
  }
}
