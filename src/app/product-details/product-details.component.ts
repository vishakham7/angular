import { Component, OnInit, NgZone } from '@angular/core';

import {Router} from '@angular/router';

import { ApiService } from '../api.service'
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})



export class ProductDetailsComponent implements OnInit {
  product;
  products;
  constructor(private route: ActivatedRoute, private apiService:ApiService, private router:Router,
    private ngZone:NgZone){}


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(products);
      this.product = +params.get('id');
     
      console.log(this.product);
      this.apiService.getProductsDetails(this.product).subscribe((data)=>{
        this.products = data;
        console.log(this.products);
      });
    });
  }
}