import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { FormBuilder } from '@angular/forms';

import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ProfileForm;
  profile_details;
  params: {};
  values :{};
  constructor(private apiService:ApiService,private formBuilder:FormBuilder, private httpClient:HttpClient) {
                this.ProfileForm = this.formBuilder.group({
                  first_name: '',
                  last_name: '',
                  email: ''
        });

    }
  
  onSubmit(){
    const formData = new FormData();
    formData.append('first_name', this.ProfileForm.get('first_name').value);

    this.apiService.postProfile(formData).subscribe(
      (res)=>console.log(res),
      (err)=>console.log(err)
    );
    console.log("--------------------------------->");
    console.log(formData);
    console.log("--------------------------------->");
    
  }


  ngOnInit() {
    this.apiService.getProfile().subscribe((data)=>{
      this.profile_details = data;
    });
    
  }

}
