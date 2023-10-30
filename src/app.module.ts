import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UtilisateurModule } from './utilisateur/utilisateur.module';
import { ProduitModule } from './produit/produit.module';
import { CategorieModule } from './categorie/categorie.module';
import { Produit } from './produit/entities/produit.entity';
import { Categorie } from './categorie/entities/categorie.entity';
import { Utilisateur } from './utilisateur/entities/utilisateur.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`.env`] }),
    UtilisateurModule,
    TypeOrmModule.forRoot({
      // TypeOrm et sa config pour se connecter à la BDD
      type: 'postgres',
      host: 'localhost',
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Utilisateur, Produit, Categorie],
      synchronize: false,

      dropSchema: false,

      logging: true,
      // Permet d'afficher les requetes SQL de TypeOrm dans la console
    }),
    UtilisateurModule,
    AuthModule,
    ProduitModule,
    CategorieModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
