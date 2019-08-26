import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PaperRepoService } from '../../model/services/paper-repo.service';
import { PaperProduct } from '../../model/classes/paper-product';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _paperRepo: PaperRepoService) { }

  ngOnInit() {
    this.products = this._paperRepo.getProducts();
    if (this._activatedRoute.routeConfig.data.selectDefault)
      this.selectProduct(this.products[0]);
  }

  selectProduct(p: PaperProduct) {
    if (!this.isInEdition) {
      if (this._activatedRoute.routeConfig.data.navigate) {
        this._router.navigateByUrl(this._activatedRoute.routeConfig.path + '/' + p.id);
      } else {
        this.selectedProduct = p;
        this.selectionChanged.emit(p);
      }
    }
  }

  isSelected(p: PaperProduct) {
    return this.selectedProduct == p;
  }

  updateProduct(p: PaperProduct) {
    this._paperRepo.updateProduct(p);
    this.selectProduct(p);
  }

  modeEditionOn() {
    return this.isInEdition;
  }

}
