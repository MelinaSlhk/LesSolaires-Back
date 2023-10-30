import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('utilisateur')
export class Utilisateur {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @Column({ length: 255 })
  prenom: string;

  @Column({ length: 255 })
  email: string;

  @Column({ length: 60 })
  motdepasse: string;
}
