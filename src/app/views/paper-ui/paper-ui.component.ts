import { Component, OnInit } from '@angular/core';
import { PaperProduct } from '../../model/classes/paper-product';

@Component({
  selector: 'app-paper-ui',
  templateUrl: './paper-ui.component.html',
  styleUrls: ['./paper-ui.component.css']
})
export class PaperUiComponent implements OnInit {
  title = 'Application de gestion des produits';
  mode = '';
  inAdditionMode: boolean = false;
  selectedProduct: PaperProduct;
  lastSelectedProduct: PaperProduct;
  productInEdition: boolean = false;
  valueChangedProduct: PaperProduct;

  constructor() { }

  ngOnInit() { }

  changeSelection(p: PaperProduct) {
    this.selectedProduct = p;
  }

  onProductEdition(b: boolean) {
    if (!this.inAdditionMode) {
      this.productInEdition = b;
      this.mode = b ? 'En modification' : '';
    } else {
      if (!b) {
        this.inAdditionMode = false;
        this.mode = '';
        this.productInEdition = false;
        this.selectedProduct = this.lastSelectedProduct;
      }
    }
  }

  onProductValueChanged(p: PaperProduct) {
    this.valueChangedProduct = p;
    this.productInEdition = false;
    this.inAdditionMode = false;
    this.mode = '';
  }

  additionModeOn() {
    if (!this.productInEdition) {
      this.productInEdition = true;
      this.inAdditionMode = true;
      this.mode = 'En ajout';
      var p = new PaperProduct({
        id: -1,
        nom: '',
        texture: '',
        grammage: '',
        couleur: ''
      })
      this.lastSelectedProduct = this.selectedProduct;
      this.selectedProduct = p;
    }
  }

}
