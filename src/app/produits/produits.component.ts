import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';
import { ProduitService } from '../service/produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  produits?: Produit[] = [];

  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {
    this.produits = this.produitService.listeProduits();
  }

  supprimerProduit(p: Produit) {
    // Afficher un message de confirmation
    let conf = confirm("Êtes-vous sûr de vouloir supprimer ce produit ?");
    
    // Si l'utilisateur confirme la suppression
    if (conf) {
      this.produitService.supprimerProduit(p); // Appelle la méthode du service pour supprimer le produit
    }
  }
  
}
