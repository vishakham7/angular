import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  languages;
  products;
  constructor(private apiService:ApiService) { }

  ngOnInit() {
    this.apiService.getLanguages().subscribe((data)=>{
      this.languages = data;
      console.log(this.languages);
    });

    this.apiService.getProducts().subscribe((data)=>{
      this.products = data;
      console.log(this.products);
    });
  }

}
