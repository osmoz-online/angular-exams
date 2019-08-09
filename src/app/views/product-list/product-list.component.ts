import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
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
  isInEdition: boolean = false;
  productToUpdate: PaperProduct;

  @Input()
  set productInEdition(value: boolean) {
    this.isInEdition = value;
  }
  @Input()
  set valueChangedProduct(value: PaperProduct) {
    this.productToUpdate = value;
    this.updateProduct(this.productToUpdate);
  }

  @Output() selectionChanged = new EventEmitter<PaperProduct>();

  constructor(private paperRepo: PaperRepoService) { }

  ngOnInit() {
    this.products = this.paperRepo.getProducts();
    this.selectProduct(this.products[0]);
  }

  selectProduct(p: PaperProduct) {
    if (!this.isInEdition) {
      this.selectedProduct = p;
      this.selectionChanged.emit(p);
    }
  }

  isSelected(p: PaperProduct) {
    return this.selectedProduct == p;
  }

  updateProduct(p: PaperProduct) {
    this.paperRepo.setProduct(p);
    this.selectProduct(p);
  }

  modeEditionOn() {
    return this.isInEdition;
  }

}
