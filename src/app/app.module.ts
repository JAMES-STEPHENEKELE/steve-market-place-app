import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { SearchBarComponent } from './container/search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodySectionComponent } from './container/body-section/body-section.component';
import { ProductListComponent } from './container/product-list/product-list.component';
import { PfilterComponent } from './container/product-list/pfilter/pfilter.component';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from './container/product-list/product/product.component';
import { PromenuBarComponent } from './container/promenu-bar/promenu-bar.component';
FormsModule

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    SearchBarComponent,
    BodySectionComponent,
    ProductListComponent,
    PfilterComponent,
    ProductComponent,
    PromenuBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
