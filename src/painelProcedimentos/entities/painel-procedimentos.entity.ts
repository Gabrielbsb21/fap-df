import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PainelProcedimentos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  i_ano_compt: number;

  @Column()
  i_mes_compt: number;

  @Column({ type: 'varchar', length: 255 })
  i_desc_regiao_saude: string;

  @Column({ type: 'varchar', length: 255 })
  i_ra_ses_desc: string;

  @Column()
  i_estab_cnes: number;

  @Column({ type: 'varchar', length: 255 })
  i_sigla_estab_cnes: string;

  @Column({ type: 'varchar', length: 255 })
  i_faixa_etaria: string;

  @Column({ type: 'varchar', length: 10 })
  i_desc_sexo: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  i_ine: string;

  @Column({ type: 'varchar', length: 255 })
  i_cat_prof: string;

  @Column({ type: 'varchar', length: 255 })
  grupo_procedimento: string;

  @Column()
  i_cod_procedimento: number;

  @Column({ type: 'varchar', length: 255 })
  i_desc_procedimento: string;

  @Column()
  i_qtd: number;
}
