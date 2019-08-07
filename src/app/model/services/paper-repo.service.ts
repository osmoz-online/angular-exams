import { Injectable } from '@angular/core';
import { PaperProduct } from '../classes/paper-product';

@Injectable({
  providedIn: 'root'
})
export class PaperRepoService {

  private products = [
    new PaperProduct({
      id: 1,
      nom: 'Canson Figueras - Huile & acrylique',
      texture: 'Toilée',
      grammage: '290g/m2',
      couleur: 'Blanc'
    }),
    new PaperProduct({
      id: 2,
      nom: 'Canson Montval - Aquarelle',
      texture: 'Micro-perforée',
      grammage: '270g/m2',
      couleur: 'Blanc'
    }),
    new PaperProduct({
      id: 3,
      nom: 'Clairefontaine PastelMat',
      texture: 'Veloutée',
      grammage: '360g/m2',
      couleur: 'Blanc'
    }),
    new PaperProduct({
      id: 4,
      nom: 'Clairefontaine Paint\'on',
      texture: 'Bouffante',
      grammage: '250g/m2',
      couleur: 'Blanc'
    }),
    new PaperProduct({
      id: 5,
      nom: 'Dalbe dessin couleur',
      texture: 'Grain léger',
      grammage: '170g/m2',
      couleur: 'Lavande'
    })
  ];

  constructor() { }

  public getProducts() {
    return this.products;
  }
}
