import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Categorie } from 'src/categorie/entities/categorie.entity'; 

@Entity('produit')
export class Produit {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  nom: string;

  @Column('decimal', { precision: 5, scale: 2 })
  prix: number;

  @Column('int')
  quantite: number;

  @ManyToOne(() => Categorie, (categorie) => categorie.produits)
 @JoinColumn({name:'id_categorie'})
  categorie: Categorie;

  @Column({ type: 'int' })
  id_categorie: number;
}
