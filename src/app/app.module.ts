import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { UniversalModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { LanguageComponent } from './language/language.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutCartComponent } from './checkout-cart/checkout-cart.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    // UniversalModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products', component: ProductListComponent },
      { path: 'product-details/:id', component: ProductDetailsComponent },
      { path: 'checkout', component: CheckoutCartComponent },
      { path: 'lang', component: LanguageComponent },
      { path: '', component: ProfileComponent },
      { path: 'login', component: LoginComponent },
    ])
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    LanguageComponent,
    ProductDetailsComponent,
    CheckoutCartComponent,
    ProfileComponent,
    LoginComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }



/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/