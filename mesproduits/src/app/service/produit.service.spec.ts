import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  produits: Produit[]; // Tableau de produits

  constructor() {
    // Initialisation du tableau avec des valeurs par défaut
    this.produits = [
      { idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.60, dateCreation: new Date("01/14/2011") },
      { idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010") },
      { idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.12, dateCreation: new Date("02/20/2020") }
    ];
  }

  // Méthode pour récupérer la liste des produits
  listeProduits(): Produit[] {
    return this.produits;
  }

  // Méthode pour ajouter un produit à la liste
  ajouterProduit(prod: Produit) {
    this.produits.push(prod);
  }
}
