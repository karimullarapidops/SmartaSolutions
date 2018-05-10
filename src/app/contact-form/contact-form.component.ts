import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
forms:any[];
  constructor(private http: Http) {
    http.get('http://localhost:3000/forms')
    .subscribe(res => {
      this.forms = res.json();
    })
   }

  ngOnInit() {
  }

  industries = [
    {value: 'example1', viewValue: 'example-1'},
    {value: 'example2', viewValue: 'example-2'},
    {value: 'example3', viewValue: 'example-3'}
  ];

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  phoneFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10)
  ]);

  formData={
    firstName:'',
    lastName:'',
    companyName:'',
    jobTitle:'',
    industry:'',
    city:'',
    state:'',
    country:'',
    email:'',
    phoneNumber:'',
    services:{
      oracle:false,
      sap:false,
      workday:false,
      other:false
    },
    bestTime:''
  };


onSubmit(){
  this.http.post('http://localhost:3000/forms',JSON.stringify(this.formData))
  .subscribe(response =>{
    // this.formData['id'] = response.json().id;
    // this.forms.push(this.formData);
  })
}


}