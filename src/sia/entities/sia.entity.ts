import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('')
export class Sia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  i_ano_compt: number;

  @Column({ nullable: true })
  i_mes_compt: number;

  @Column({ nullable: true })
  i_cirurgias: string;

  @Column({ nullable: true })
  i_consultas: string;

  @Column({ nullable: true })
  i_exames: string;

  @Column({ nullable: true })
  i_desc_instrumento_reg: string;

  @Column({ nullable: true })
  i_desc_tipo_financ: string;

  @Column({ nullable: true })
  i_desc_car_int_atend: string;

  @Column({ nullable: true })
  i_desc_cbo: string;

  @Column({ nullable: true })
  i_desc_grupo: string;

  @Column({ nullable: true })
  i_desc_subgrupo: string;

  @Column({ nullable: true })
  i_desc_proc_realizado: string;

  @Column({ nullable: true })
  i_proc_realizado: string;

  @Column({ nullable: true })
  i_desc_complex_proc: string;

  @Column({ nullable: true })
  i_desc_tipo_estab_cnes: string;

  @Column({ nullable: true })
  i_desc_regiao_saude: string;

  @Column({ nullable: true })
  i_desc_sigla_estab_cnes: string;

  @Column({ nullable: true })
  i_desc_munic_res: string;

  @Column({ nullable: true })
  i_desc_uf_res: string;

  @Column('int', { nullable: true })
  i_qtd_aprovada: number;

  @Column('float', { nullable: true })
  i_val_aprovado: number;
}
