import { Component, OnInit } from '@angular/core';
import { PaperProduct } from '../../model/classes/paper-product';

@Component({
  selector: 'app-paper-ui',
  templateUrl: './paper-ui.component.html',
  styleUrls: ['./paper-ui.component.css']
})
export class PaperUiComponent implements OnInit {
  title = 'Application de gestion des produits papier';
  selectedProduct: PaperProduct;

  constructor() { }

  ngOnInit() {
  }

}
