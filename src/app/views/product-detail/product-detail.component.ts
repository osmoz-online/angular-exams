import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productForm = new FormGroup({
    id: new FormControl(''),
    nom: new FormControl(''),
    texture: new FormControl(''),
    grammage: new FormControl(''),
    couleur: new FormControl('')
  });

  constructor() { }

  ngOnInit() {
  }

}
