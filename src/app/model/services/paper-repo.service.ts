import { Injectable } from '@angular/core';
import { PaperProduct } from '../classes/paper-product';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { shareReplay, map, tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaperRepoService {

  // Un Subject est à la fois un observable ET un observateur
  // Un BehaviorSubject est un Subject qui a obligatoirement une valeur par défaut
  // Il sauvegarde la dernière valeur qu'il a émise et l'envoie aux observateurs lors de leur subscribe
  // Dans notre cas, il récupère le GET HTTP et valorise la liste locale avec
  // puis renvoie le contenu du GET HTTP (lors du 1er subscribe)
  // Par la suite, à chaque subscribe, l'Observable auprès duquel on souscrit reste le même (via le switchMap), à savoir le BS
  // Dans la méthode addOrUpdateProduct(), quand la liste locale est mise à jour, il l'envoie à ses observateurs
  private _productsBS: BehaviorSubject<PaperProduct[]>;

  // Permet de stocker localement la liste des produits
  private _allProducts: PaperProduct[];

  private products$: Observable<PaperProduct[]>;

  constructor(private _httpClient: HttpClient) {
    this.products$ = this._httpClient.get<PaperProduct[]>("http://localhost:4200/assets/json/products.json")
      .pipe(
        tap((getHttp) => {
          this._allProducts = getHttp;
          this._productsBS = new BehaviorSubject<PaperProduct[]>([]);
          this._productsBS.next(getHttp);
        }),
        shareReplay(1),
        switchMap(foo => this._productsBS)
      );
  }

  getProducts() {
    return this.products$;
  }

  getProduct(id: number) {
    return this.getProducts()
      .pipe(
        map((allProducts: PaperProduct[]) =>
          allProducts.find(p => {
            return p.id === id;
          })
        )
      );
  }

  public addOrUpdateProduct(p: PaperProduct) {
    if (p) {
      if (this._allProducts.find(product => {
        return p.id === product.id;
      }) !== undefined) {
        this.updateProduct(p);
      } else {
        this.addProduct(p);
      }
      this._productsBS.next(this._allProducts);
    }
  }

  public updateProduct(p: PaperProduct) {
    if (p) {
      var index = this._allProducts.findIndex(product => {
        return product.id === p.id;
      });
      if (index >= 0) {
        this._allProducts[index] = p;
      }
    }
  }

  public addProduct(p: PaperProduct) {
    if (p) {
      p.id = this.getNewId();
      this._allProducts.push(p);
    }
  }

  getNewId() {
    var id = -1;
    this._allProducts.forEach(product => {
      if (product.id > id) id = product.id;
    });
    return id + 1;
  }

}
