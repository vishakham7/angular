import { Component, OnInit } from '@angular/core';

import { products } from '../products';

import { ApiService } from '../api.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})



export class ProductListComponent implements OnInit {
  
  products;
  
  constructor(private apiService:ApiService){}

  ngOnInit(){
    this.apiService.getProducts().subscribe((data)=>{
      this.products = data;
    });
  }


  share() {
    window.alert('The product has been shared!');
  }
}
