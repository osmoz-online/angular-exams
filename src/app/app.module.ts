import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaperUiComponent } from './views/paper-ui/paper-ui.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaperMenuComponent } from './views/paper-menu/paper-menu.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { ListAndAddComponent } from './views/list-and-add/list-and-add.component';
import { DetailAndReturnComponent } from './views/detail-and-return/detail-and-return.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PaperUiComponent,
    ProductListComponent,
    ProductDetailComponent,
    PaperMenuComponent,
    PageNotFoundComponent,
    ListAndAddComponent,
    DetailAndReturnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
