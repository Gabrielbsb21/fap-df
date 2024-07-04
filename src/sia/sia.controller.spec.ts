import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { SiaController } from './sia.controller';
import { SiaService } from './sia.service';

describe('SiaController', () => {
  let controller: SiaController;
  let service: SiaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      controllers: [SiaController],
      providers: [
        SiaService,
        ConfigService,
        {
          provide: SiaService,
          useValue: {
            findAll: jest.fn().mockResolvedValue({
              data: [
                {
                  id: 1,
                  i_ano_compt: 2023,
                  i_cirurgias: '',
                  i_consultas: '',
                  i_desc_car_int_atend: '',
                  i_desc_cbo: '',
                  i_desc_complex_proc: '',
                  i_desc_grupo: '',
                  i_desc_munic_res: '',
                  i_desc_proc_realizado: '',
                  i_desc_regiao_saude: '',
                  i_desc_sigla_estab_cnes: '',
                  i_desc_tipo_financ: '',
                  i_desc_uf_res: '',
                  i_estab_cnes: 0,
                  i_exames: '',
                  i_mes_compt: 1,
                  i_proc_realizado: 0,
                  i_qtd_aprovada: 0,
                  i_val_aprovado: 0,
                },
              ],
              meta: {
                currentPage: 1,
                hasNextPage: false,
                hasPreviousPage: false,
                totalItems: 1,
                totalPages: 1,
              },
            }),
            findOne: jest.fn().mockResolvedValue({
              id: 1,
              i_ano_compt: 2023,
              i_cirurgias: '',
              i_consultas: '',
              i_desc_car_int_atend: '',
              i_desc_cbo: '',
              i_desc_complex_proc: '',
              i_desc_grupo: '',
              i_desc_munic_res: '',
              i_desc_proc_realizado: '',
              i_desc_regiao_saude: '',
              i_desc_sigla_estab_cnes: '',
              i_desc_tipo_financ: '',
              i_desc_uf_res: '',
              i_estab_cnes: 0,
              i_exames: '',
              i_mes_compt: 1,
              i_proc_realizado: 0,
              i_qtd_aprovada: 0,
              i_val_aprovado: 0,
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<SiaController>(SiaController);
    service = module.get<SiaService>(SiaService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of Sia', async () => {
    const result = {
      data: [
        {
          id: 1,
          i_ano_compt: 2023,
          i_cirurgias: '',
          i_consultas: '',
          i_desc_car_int_atend: '',
          i_desc_cbo: '',
          i_desc_complex_proc: '',
          i_desc_grupo: '',
          i_desc_munic_res: '',
          i_desc_proc_realizado: '',
          i_desc_regiao_saude: '',
          i_desc_sigla_estab_cnes: '',
          i_desc_tipo_financ: '',
          i_desc_uf_res: '',
          i_estab_cnes: 0,
          i_exames: '',
          i_mes_compt: 1,
          i_proc_realizado: 0,
          i_qtd_aprovada: 0,
          i_val_aprovado: 0,
        },
      ],
      meta: {
        currentPage: 1,
        hasNextPage: false,
        hasPreviousPage: false,
        totalItems: 1,
        totalPages: 1,
      },
    };
    jest.spyOn(service, 'findAll').mockResolvedValue(result);

    expect(
      await controller.findAll(
        1,
        10,
        undefined,
        undefined,
        undefined,
        undefined,
      ),
    ).toEqual(result);
  });

  it('should return a single Sia', async () => {
    const result = {
      id: 1,
      i_ano_compt: 2023,
      i_cirurgias: '',
      i_consultas: '',
      i_desc_car_int_atend: '',
      i_desc_cbo: '',
      i_desc_complex_proc: '',
      i_desc_grupo: '',
      i_desc_munic_res: '',
      i_desc_proc_realizado: '',
      i_desc_regiao_saude: '',
      i_desc_sigla_estab_cnes: '',
      i_desc_tipo_financ: '',
      i_desc_uf_res: '',
      i_estab_cnes: 0,
      i_exames: '',
      i_mes_compt: 1,
      i_proc_realizado: 0,
      i_qtd_aprovada: 0,
      i_val_aprovado: 0,
    };
    jest.spyOn(service, 'findOne').mockResolvedValue(result);

    expect(await controller.findOne('1')).toEqual(result);
  });
});
