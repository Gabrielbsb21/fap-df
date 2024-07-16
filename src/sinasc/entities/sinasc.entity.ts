import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sinasc {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  i_ano_nasc: number;

  @Column({ type: 'text' })
  i_cid_anomalia: string;

  @Column({ type: 'text' })
  i_desc_cid_anomalia: string;

  @Column({ type: 'text' })
  i_desc_qtd_consultas_pre_natal: string;

  @Column({ type: 'text' })
  i_desc_radf_res_mae: string;

  @Column({ type: 'text' })
  i_desc_regiao_saude_estab: string;

  @Column({ type: 'text' })
  i_desc_sigla_estab_cnes: string;

  @Column({ type: 'text' })
  i_desc_tipo_gravidez: string;

  @Column({ type: 'text' })
  i_desc_tipo_parto: string;

  @Column({ type: 'text' })
  i_desc_uf_res_mae: string;

  @Column({ type: 'text' })
  i_faixa_etaria_mae: string;

  @Column()
  i_idade_mae: number;

  @Column()
  i_mes_nasc: number;

  @Column()
  i_qtd_nasc: number;

  @Column({ type: 'text' })
  i_sexo_rn: string;
}
