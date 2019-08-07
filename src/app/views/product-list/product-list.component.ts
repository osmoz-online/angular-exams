import { Component, OnInit } from '@angular/core';
import { PaperRepoService } from '../../model/services/paper-repo.service';
import { PaperProduct } from '../../model/classes/paper-product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: PaperProduct[];
  selectedProduct: PaperProduct;

  constructor(private paperRepo: PaperRepoService) { }

  ngOnInit() {
    this.products = this.paperRepo.getProducts();
    this.selectProduct(this.products[0]);
  }

  public selectProduct(p: PaperProduct) {
    this.selectedProduct = p;
  }

  public isSelected(p: PaperProduct) {
    return this.selectedProduct == p;
  }

}
