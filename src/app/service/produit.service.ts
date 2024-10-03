import { Injectable } from '@angular/core';
import { Produit } from '../model/produit.model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  produits: Produit[]; // Un tableau de produits
  produit! : Produit;

  constructor() {  
    this.produits = [
      { idProduit: 1, nomProduit: "PC Asus", prixProduit: 3000.60, dateCreation: new Date("01/14/2011") },
      { idProduit: 2, nomProduit: "Imprimante Epson", prixProduit: 450, dateCreation: new Date("12/17/2010") },
      { idProduit: 3, nomProduit: "Tablette Samsung", prixProduit: 900.12, dateCreation: new Date("02/20/2020") }
    ];
  }

  // Récupérer la liste des produits
  listeProduits(): Produit[] {
    return this.produits;
  }

  // Ajouter un produit
  ajouterProduit(prod: Produit): void {
    this.produits.push(prod);
    this.trierProduits();  // Trie les produits après l'ajout
  }

  // Supprimer un produit
  supprimerProduit(prod: Produit): void {
    const index = this.produits.indexOf(prod);
    if (index > -1) {
      this.produits.splice(index, 1); // Supprime le produit du tableau
    }
  }

  // Consulter un produit par ID
  consulterProduit(id: number): Produit {
    this.produit = this.produits.find(p => p.idProduit == id)!;
    return this.produit;
  }

  // Mettre à jour un produit
  updateProduit(p: Produit): void {
    this.supprimerProduit(p);
    this.ajouterProduit(p);
    this.trierProduits();
  }

  // Trier les produits
  trierProduits(): void {
    this.produits = this.produits.sort((n1, n2) => {
      if (n1.idProduit! > n2.idProduit!) {
        return 1;
      }
      if (n1.idProduit! < n2.idProduit!) {
        return -1;
      }
      return 0;
    });
  }

}
