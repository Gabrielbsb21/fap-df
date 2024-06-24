import { ApiProperty } from '@nestjs/swagger';

export class CreateSiaDto {
  @ApiProperty()
  i_ano_compt: number;

  @ApiProperty()
  i_cirurgias: string;

  @ApiProperty()
  i_consultas: string;

  @ApiProperty()
  i_desc_car_int_atend: string;

  @ApiProperty()
  i_desc_cbo: string;

  @ApiProperty()
  i_desc_complex_proc: string;

  @ApiProperty()
  i_desc_grupo: string;

  @ApiProperty()
  i_desc_munic_res: string;

  @ApiProperty()
  i_desc_proc_realizado: string;

  @ApiProperty()
  i_desc_regiao_saude: string;

  @ApiProperty()
  i_desc_sigla_estab_cnes: string;

  @ApiProperty()
  i_desc_tipo_financ: string;

  @ApiProperty()
  i_desc_uf_res: string;

  @ApiProperty()
  i_estab_cnes: number;

  @ApiProperty()
  i_exames: string;

  @ApiProperty()
  i_mes_compt: number;

  @ApiProperty()
  i_proc_realizado: number;

  @ApiProperty()
  i_qtd_aprovada: number;

  @ApiProperty()
  i_val_aprovado: number;

  @ApiProperty()
  id: number;
}
