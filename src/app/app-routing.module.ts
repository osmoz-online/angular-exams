import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaperUiComponent } from './views/paper-ui/paper-ui.component';
import { PaperMenuComponent } from './views/paper-menu/paper-menu.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ListAndAddComponent } from './views/list-and-add/list-and-add.component';
import { DetailAndReturnComponent } from './views/detail-and-return/detail-and-return.component';

const routes: Routes = [
  { path: 'global', component: PaperUiComponent, data: { show: true, linkLabel: "App globale", selectDefault: true } },
  { path: 'produits', component: ListAndAddComponent, data: { show: true, linkLabel: "Liste", navigate: true } },
  { path: 'produits/:id', component: DetailAndReturnComponent, data: { show: false } },
  { path: '', component: PaperMenuComponent, data: { show: false } },
  { path: '**', component: PageNotFoundComponent, data: { show: false } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
