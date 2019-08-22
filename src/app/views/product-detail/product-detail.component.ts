import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaperProduct } from 'src/app/model/classes/paper-product';
import { ActivatedRoute } from '@angular/router';
import { PaperRepoService } from 'src/app/model/services/paper-repo.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private productToDisplay: PaperProduct;
  private isFromUser: boolean = true;

  @Input()
  set product(value: PaperProduct) {
    this.productToDisplay = value;
    this.setProduct(this.productToDisplay);
  }

  @Output() productInEdition = new EventEmitter<boolean>();
  @Output() productValueChanged = new EventEmitter<PaperProduct>();

  productForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl('', Validators.required),
    texture: new FormControl('', Validators.required),
    grammage: new FormControl('', Validators.required),
    couleur: new FormControl('', Validators.required)
  });

  constructor(private _activatedRoute: ActivatedRoute, private productsRepo: PaperRepoService) { }

  ngOnInit() {
    const id = + this._activatedRoute.snapshot.paramMap.get('id');
    this.productToDisplay = this.productsRepo.getProduct(id);
    this.setProduct(this.productToDisplay);
    this.productForm.valueChanges.subscribe((formValue) => {
      if (this.isFromUser)
        this.productInEdition.emit(true);
    });
  }

  setProduct(p: PaperProduct) {
    this.isFromUser = false;
    this.productForm.setValue(p);
    this.isFromUser = true;
  }

  cancel() {
    this.setProduct(this.productToDisplay);
    this.productInEdition.emit(false);
  }

  submit() {
    var p = new PaperProduct();
    p.setProductData(this.productForm.value);
    if (!p.equals(this.productToDisplay)) {
      this.productValueChanged.emit(p);
      this.productToDisplay = p;
    }
  }

}
