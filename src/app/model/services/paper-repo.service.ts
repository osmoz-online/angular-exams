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

  getProducts() {
    return this.products;
  }

  setProduct(p: PaperProduct) {
    if (p) {
      if (p.id == -1) {
        this.addProduct(p);
      } else {
        var index = this.products.findIndex(product => {
          return product.id === p.id;
        });
        if (index >= 0) {
          this.products[index] = p;
        }
      }
    }
  }

  addProduct(p: PaperProduct) {
    p.id = this.getNewId();
    p.getAsString();
    this.products.push(p);
  }

  getNewId() {
    var id = -1;
    this.products.forEach(product => {
      if (product.id > id) id = product.id;
    });
    return id + 1;
  }
}
