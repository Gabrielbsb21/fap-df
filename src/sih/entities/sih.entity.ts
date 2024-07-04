import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sih {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  i_ano_compt: number;

  @Column({ type: 'varchar', length: 255 })
  i_cid_principal: string;

  @Column({ type: 'varchar', length: 255 })
  i_cirurgias: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_car_int_atend: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_cid_principal: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_complex_proc: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_espec_leito: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_grupo: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_munic_res: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_obito: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_proc_realizado: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_radf_res: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_regiao_saude: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_sexo: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_sigla_estab_cnes: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_tipo_financ: string;

  @Column({ type: 'varchar', length: 255 })
  i_desc_uf_res: string;

  @Column()
  i_estab_cnes: number;

  @Column({ type: 'varchar', length: 255 })
  i_faixa_etaria: string;

  @Column()
  i_mes_compt: number;

  @Column({ type: 'varchar', length: 255 })
  i_partos: string;

  @Column()
  i_proc_realizado: number;

  @Column()
  i_qtd_aih: number;

  @Column()
  i_qtd_diaria_pac: number;

  @Column()
  i_qtd_diaria_uti: number;

  @Column({ nullable: true })
  i_valor_aih: number;
}
