import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProduitDto } from './dto/create-produit.dto';
import { UpdateProduitDto } from './dto/update-produit.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Produit } from './entities/produit.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProduitService {
  constructor(
    @InjectRepository(Produit) private produitsRepository: Repository<Produit>,
  ) {}
  async create(createProduitDto: CreateProduitDto) {
    const produit = this.produitsRepository.create(createProduitDto);
    const result = await this.produitsRepository.save(produit);
    return result;
    // return 'This action adds a new produit;
  }

  async findAll() {
    return await this.produitsRepository.find();
    //`This action returns all produit`
  }

  async findOne(id: number) {
    const found = await this.produitsRepository.findOneBy({ id });
    if (!found) {
      throw new NotFoundException(`Produits avec l'id ${id} introuvable`);
    }
    return found;
    // return `This action returns a #${id} produit`;
  }

  async update(id: number, updateProduitDto: UpdateProduitDto) {
    const produit = await this.findOne(id);
    const newProduit = this.produitsRepository.merge(produit, updateProduitDto);
    const result = await this.produitsRepository.save(newProduit);
    return result;
    // return `This action updates a #${id} produit`;
  }

  async remove(id: number) {
    const found = await this.findOne(id);
    await this.produitsRepository.remove(found);
    const reponse = {
      test: `Le produit avec l'identifiant : ${id} a été supprimée`,
    };
    return reponse;
  }
}
