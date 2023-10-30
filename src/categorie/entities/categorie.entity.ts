import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Produit } from 'src/produit/entities/produit.entity'; 

@Entity('categorie')
export class Categorie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @OneToMany(() => Produit, (produit) => produit.categorie)
  produits: Produit[];
}
