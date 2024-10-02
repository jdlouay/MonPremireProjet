import { Component, OnInit } from '@angular/core';
import { Produit } from '../model/produit.model';  // Import du modèle Produit
import { ProduitService } from '../service/produit.service.spec';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {
  newProduit = new Produit();  // Nouvel objet Produit à ajouter

  // Injection du service ProduitService dans le constructeur
  constructor(private produitService: ProduitService) {}

  ngOnInit(): void {}

  // Méthode pour ajouter un produit
  addProduit(): void {
    // console.log(this.newProduit);
    this.produitService.ajouterProduit(this.newProduit);
    
  }
}
