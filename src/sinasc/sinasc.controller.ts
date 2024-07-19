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
import { SinascService } from './sinasc.service';
import { Sinasc } from './entities/sinasc.entity';
import { ConfigService } from '@nestjs/config';

@ApiTags('SINASC')
@Controller('sinasc')
export class SinascController {
  constructor(
    @Inject(ConfigService) private readonly configService: ConfigService,
    private readonly sinascService: SinascService,
  ) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Obter todas as entradas de SINASC com paginação' })
  @ApiResponse({
    status: 200,
    description: 'Lista de todas as entradas de SINASC.',
  })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'limit', required: false, type: Number, example: 10 })
  @ApiQuery({ name: 'ano', required: false, type: Number, example: 2023 })
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit?: number,
    @Query('ano') ano?: number,
  ): Promise<any> {
    if (page < 1) {
      throw new BadRequestException('O número da página deve ser maior que 0.');
    }

    const maxLimit = this.configService.get<number>('PAGINATION_LIMIT', 10);
    const take = limit ? Math.min(limit, maxLimit) : maxLimit;

    if (!limit || limit < 1) {
      throw new BadRequestException('O limite deve ser um valor positivo.');
    }

    const { data, total } = await this.sinascService.findAll(page, take, ano);
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
  @ApiOperation({ summary: 'Obter uma entrada de SINASC pelo ID' })
  @ApiResponse({ status: 200, description: 'A entrada de SINASC.' })
  @ApiResponse({ status: 404, description: 'Entrada não encontrada.' })
  async findOne(@Param('id') id: string): Promise<Sinasc> {
    const sinasc = await this.sinascService.findOne(parseInt(id, 10));
    if (!sinasc) {
      throw new NotFoundException('Entrada não encontrada.');
    }
    return sinasc;
  }
}
