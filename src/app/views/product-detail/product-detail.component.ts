import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PaperProduct } from 'src/app/model/classes/paper-product';
import { ActivatedRoute } from '@angular/router';
import { PaperRepoService } from 'src/app/model/services/paper-repo.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  private _formValueChangesSubscription: Subscription;
  private _productSubscription: Subscription;
  private _productToDisplay: PaperProduct;
  private _isFromUser: boolean = true;

  @Input()
  set product(value: PaperProduct) {
    if (value) {
      this._productToDisplay = value;
      this.setProduct(this._productToDisplay);
    }
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

  constructor(private _activatedRoute: ActivatedRoute, private _paperRepo: PaperRepoService) { }

  ngOnInit() {
    const id = + this._activatedRoute.snapshot.paramMap.get('id');
    if (id == 0) {
      this._productSubscription = this._paperRepo.getProduct(1).subscribe(product => this._productToDisplay = product);
    } else if (id > 0) {
      this._productSubscription = this._paperRepo.getProduct(id).subscribe(product => this._productToDisplay = product);
    } else {
      this._productToDisplay = new PaperProduct({
        id: -1,
        nom: '',
        texture: '',
        grammage: '',
        couleur: ''
      });
    }
    this.setProduct(this._productToDisplay);
    this._formValueChangesSubscription = this.productForm.valueChanges.subscribe((formValue) => {
      if (this._isFromUser)
        this.productInEdition.emit(true);
    });
  }

  ngOnDestroy() {
    this._formValueChangesSubscription.unsubscribe();
    if (this._productSubscription != undefined)
      this._productSubscription.unsubscribe();
  }

  setProduct(p: PaperProduct) {
    if (p) {
      this._isFromUser = false;
      this.productForm.setValue(p);
      this._isFromUser = true;
    }
  }

  cancel() {
    this.setProduct(this._productToDisplay);
    this.productInEdition.emit(false);
  }

  submit() {
    var p = new PaperProduct(this.productForm.value);
    if (!p.equals(this._productToDisplay)) {
      this._paperRepo.addOrUpdateProduct(p);
      this.productValueChanged.emit(p);
      this._productToDisplay = p;
    }
  }

}
