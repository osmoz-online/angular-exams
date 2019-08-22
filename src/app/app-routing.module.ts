import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { PaperUiComponent } from './views/paper-ui/paper-ui.component';
import { PaperMenuComponent } from './views/paper-menu/paper-menu.component';

const routes: Routes = [
  { path: '', component: PaperMenuComponent, data: { linkLabel: "", show: false } },
  { path: 'global', component: PaperUiComponent, data: { linkLabel: "App globale", show: true } },
  { path: 'produits', component: ProductListComponent, data: { linkLabel: "Liste", show: true } },
  { path: 'produits/:id', component: ProductDetailComponent, data: { linkLabel: "Détail", show: false } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
