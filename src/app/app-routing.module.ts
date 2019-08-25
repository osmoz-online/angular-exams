import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { PaperUiComponent } from './views/paper-ui/paper-ui.component';
import { PaperMenuComponent } from './views/paper-menu/paper-menu.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'global', component: PaperUiComponent, data: { show: true, linkLabel: "App globale", selectDefault: true } },
  { path: 'produits', component: ProductListComponent, data: { show: true, linkLabel: "Liste", navigate: true } },
  { path: 'produits/:id', component: ProductDetailComponent, data: { show: false } },
  { path: '', component: PaperMenuComponent, data: { show: false } },
  { path: '**', component: PageNotFoundComponent, data: { show: false } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
