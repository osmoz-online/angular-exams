import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PaperRepoService } from '../../model/services/paper-repo.service';
import { PaperProduct } from '../../model/classes/paper-product';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  private _productListSubscription: Subscription;
  private _products: PaperProduct[];
  private _selectedProduct: PaperProduct;
  private _isInEdition: boolean = false;
  private _productToUpdate: PaperProduct;

  @Input()
  set productInEdition(value: boolean) {
    this._isInEdition = value;
  }
  @Input()
  set valueChangedProduct(value: PaperProduct) {
    this._productToUpdate = value;
    this.updateProduct(this._productToUpdate);
  }

  @Output() selectionChanged = new EventEmitter<PaperProduct>();

  constructor(private _activatedRoute: ActivatedRoute, private _router: Router, private _paperRepo: PaperRepoService) { }

  ngOnInit() {
    this._productListSubscription = this._paperRepo.getProducts()
    //.subscribe(products => this._products = products);
    .subscribe(
      {
        next: (products: PaperProduct[]) => {
          this._products = products;
          if (this._activatedRoute.routeConfig.data.selectDefault)
            this.selectProduct(this._products[0]);
        },
        error: (e) => {
        },
        complete: () => {
        }
      });
  }

  ngOnDestroy() {
    this._productListSubscription.unsubscribe();
  }

  selectProduct(p: PaperProduct) {
    if (!this._isInEdition) {
      if (this._activatedRoute.routeConfig.data.navigate) {
        this._router.navigateByUrl(this._activatedRoute.routeConfig.path + '/' + p.id);
      } else {
        this._selectedProduct = p;
        this.selectionChanged.emit(p);
      }
    }
  }

  isSelected(p: PaperProduct) {
    return this._selectedProduct == p;
  }

  updateProduct(p: PaperProduct) {
    this._paperRepo.updateProduct(p);
    this.selectProduct(p);
  }

  modeEditionOn() {
    return this._isInEdition;
  }

}
