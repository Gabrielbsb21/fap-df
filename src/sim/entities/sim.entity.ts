import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sim {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  i_ano_obito: number;

  @Column({ type: 'varchar', length: 255 })
  i_cid_obito: string;

  @Column({ type: 'varchar', length: 255 })
  i_sexo: string;

  @Column()
  i_cnes: number;

  @Column({ type: 'varchar', length: 255 })
  i_desc_raca_cor: string;

  @Column({ type: 'varchar', length: 255 })
  i_idade: string;

  @Column({ type: 'varchar', length: 255 })
  i_ocupacao: string;

  @Column({ type: 'varchar', length: 255 })
  i_grau_instrucao: string;

  @Column({ type: 'varchar', length: 255 })
  i_est_civil: string;

  @Column({ type: 'varchar', length: 255 })
  i_local_ocorrencia: string;

  @Column({ type: 'varchar', length: 255 })
  i_assist_medica: string;

  @Column({ type: 'varchar', length: 255 })
  i_fonte_declaracao: string;

  @Column({ type: 'varchar', length: 255 })
  i_circunstancia: string;

  @Column({ type: 'varchar', length: 255 })
  i_acid_transito: string;

  @Column({ type: 'varchar', length: 255 })
  i_violencia: string;

  @Column({ type: 'varchar', length: 255 })
  i_local_acidente: string;

  @Column({ type: 'varchar', length: 255 })
  i_tipo_local: string;

  @Column({ type: 'varchar', length: 255 })
  i_origem: string;

  @Column({ type: 'varchar', length: 255 })
  i_investigacao: string;

  @Column({ type: 'varchar', length: 255 })
  i_exame_cadaverico: string;

  @Column({ type: 'varchar', length: 255 })
  i_nexo_causal: string;

  @Column({ type: 'varchar', length: 255 })
  i_comunicacao_obito: string;

  @Column({ type: 'varchar', length: 255 })
  i_causas_associadas: string;

  @Column({ type: 'varchar', length: 255 })
  i_codificacao_cid: string;
}
