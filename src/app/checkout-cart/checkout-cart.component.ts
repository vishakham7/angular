import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-checkout-cart',
  templateUrl: './checkout-cart.component.html',
  styleUrls: ['./checkout-cart.component.css']
})
export class CheckoutCartComponent implements OnInit {
  carts;
  items = [];
  cartbody = {
    "email": "",
    "discount_amount" : "0.00",
    "discount_amount_inr" : "0.00",
    "gift_cart":true,
    "cart_lines" : [
        {
            "variant": 2,
            "quantity": 1,
            "data": {}
        }
    ]
}
  
  constructor(private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getCart(this.cartbody).subscribe((data)=>{
      console.log("------------------------------->")
      console.log(data);
    });
  }

}
