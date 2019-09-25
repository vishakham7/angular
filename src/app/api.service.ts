import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

let LoginToken = new HttpHeaders({
  'Content-Type': 'application/json',
    'guest-login-token': 'cbf495bc-44ae-11e9-b210-d663bd873d93'
  });

let ProductToken = new HttpHeaders({
  'Content-Type': 'application/json',
  'guest-product-token':'d06aa4e4-44bb-11e9-b210-d663bd873d93',
});

let cartBody = new HttpParams();

let AuthToken = new HttpHeaders({
  // 'Accept': '*/*',
  'Authorization': 'Token e1a9cbff8b3bd8a995742d80be87934c1c1a5ff2'
  });

  let LoginTokenOptions = {
    headers: LoginToken
  }

  let ProductTokenOptions = {
    headers: ProductToken
  }

  let AuthTokenOptions = {
    headers: AuthToken
  }

  let ProfileOptions = {
    headers: AuthToken
  }

@Injectable({
    providedIn: "root"
})

export class ApiService{
    
    constructor(private httpClient:HttpClient){}
    public getLanguages(){
        return this.httpClient.get("https://staging.snovel.in/api/languages/");
      }

    public getProducts(){
        return this.httpClient.get("https://staging.snovel.in/api/product-list/", ProductTokenOptions);
    }

    public getProductsDetails(id){
      return this.httpClient.get("https://staging.snovel.in/api/product-details/"+id+"/", ProductTokenOptions);
    }

    public getCart(cartBody){
      return this.httpClient.post("https://staging.snovel.in/api/cart/", cartBody, AuthTokenOptions);
    }

    public getProfile(){
      return this.httpClient.get("https://staging.snovel.in/api/my-profile/", AuthTokenOptions);
    }

    public postProfile(data) {
      return this.httpClient.options("https://staging.snovel.in/api/my-profile/");
      return this.httpClient.post("https://staging.snovel.in/api/my-profile/", ProfileOptions);
    }


    public userLogin(){
      return this.httpClient.post("https://staging.snovel.in/api/login/", LoginTokenOptions);
    }

}