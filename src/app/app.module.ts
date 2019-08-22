import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaperUiComponent } from './views/paper-ui/paper-ui.component';
import { ProductListComponent } from './views/product-list/product-list.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaperMenuComponent } from './views/paper-menu/paper-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PaperUiComponent,
    ProductListComponent,
    ProductDetailComponent,
    PaperMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
