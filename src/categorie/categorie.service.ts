import { Injectable } from '@nestjs/common';
import { CreateCategorieDto } from './dto/create-categorie.dto';
import { UpdateCategorieDto } from './dto/update-categorie.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categorie } from './entities/categorie.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategorieService {
  constructor(
    @InjectRepository(Categorie)
    private categorieRepository: Repository<Categorie>,
  ) {}

  async findAll(): Promise<Categorie[]> {
    return this.categorieRepository.find();
  }
}

  // findOne(id: number) {
  //   return `This action returns a #${id} categorie`;
  // }

//   update(id: number, updateCategorieDto: UpdateCategorieDto) {
//     return `This action updates a #${id} categorie`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} categorie`;
//   }
// }
