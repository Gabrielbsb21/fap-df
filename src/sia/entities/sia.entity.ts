import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  i_ano_compt: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_cirurgias: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_consultas: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_desc_car_int_atend: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_desc_cbo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_desc_complex_proc: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_desc_grupo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_desc_munic_res: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_desc_proc_realizado: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_desc_regiao_saude: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_desc_sigla_estab_cnes: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_desc_tipo_financ: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_desc_uf_res: string;

  @Column({ nullable: true })
  i_estab_cnes: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  i_exames: string;

  @Column()
  i_mes_compt: number;

  @Column()
  i_proc_realizado: number;

  @Column({ nullable: true })
  i_qtd_aprovada: number;

  @Column({ type: 'float', nullable: true })
  i_val_aprovado: number;
}
