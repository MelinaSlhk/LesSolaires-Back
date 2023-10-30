import { IsInt, IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";

export class CreateProduitDto {
//   @IsNotEmpty()
//   @IsString()
  nom: string;

//   @IsNotEmpty()
//   @IsNumber()
  prix: number;

//   @IsNotEmpty()
//   @IsPositive()
  quantite: number;

//   @IsNotEmpty()
//   @IsNumber()
  id_categorie: number;
}
